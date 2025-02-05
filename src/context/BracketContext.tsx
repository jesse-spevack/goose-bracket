'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BracketData, Region, Song } from '../types/bracket';
import { StorageService } from '../services/storage';
import { BracketService } from '../services/bracketService';
import { ShareService } from '../services/shareService';
import { INITIAL_BRACKET_DATA } from '../config/constants';

interface BracketContextType {
  bracket: BracketData;
  isLoading: boolean;
  error: Error | null;
  handleSongSelect: (
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ) => void;
  resetBracket: () => void;
  generateShareableUrl: () => string;
}

const BracketContext = createContext<BracketContextType | null>(null);

export const useBracket = () => {
  const context = useContext(BracketContext);
  if (!context) {
    throw new Error('useBracket must be used within a BracketProvider');
  }
  return context;
};

interface BracketProviderProps {
  children: React.ReactNode;
}

export const BracketProvider: React.FC<BracketProviderProps> = ({ children }) => {
  const [bracket, setBracket] = useState<BracketData>(INITIAL_BRACKET_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBracket = () => {
      try {
        setIsLoading(true);
        const savedBracket = StorageService.loadBracket();
        if (savedBracket) {
          setBracket(savedBracket);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load bracket'));
        console.error('Failed to load bracket:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBracket();
  }, []);

  useEffect(() => {
    if (!isLoading && !error) {
      try {
        StorageService.saveBracket(bracket);
      } catch (err) {
        console.error('Failed to save bracket:', err);
      }
    }
  }, [bracket, isLoading, error]);

  const handleSelect = (
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ) => {
    try {
      const updatedBracket = BracketService.updateBracketWithSelection(
        bracket,
        round,
        region,
        matchIndex,
        songIndex,
        song
      );
      setBracket(updatedBracket);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update bracket'));
      console.error('Failed to update bracket:', err);
    }
  };

  const resetBracket = () => {
    try {
      const resetData = BracketService.resetBracket(INITIAL_BRACKET_DATA);
      setBracket(resetData);
      StorageService.clearBracket();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to reset bracket'));
      console.error('Failed to reset bracket:', err);
    }
  };

  const generateShareableUrl = () => {
    try {
      return ShareService.generateShareableUrl(bracket);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to generate shareable URL'));
      console.error('Failed to generate shareable URL:', err);
      return '';
    }
  };

  return (
    <BracketContext.Provider
      value={{
        bracket,
        isLoading,
        error,
        handleSongSelect: handleSelect,
        resetBracket,
        generateShareableUrl,
      }}
    >
      {children}
    </BracketContext.Provider>
  );
};
