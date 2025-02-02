'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BracketData, Region, Song } from '../types/bracket';
import { INITIAL_BRACKET_DATA } from '../utils/bracketUtils';
import { BracketManager } from '../domain/bracket';
import { BracketStorage, LocalStorageService } from '../services/storage';
import { ShareService } from '../services/shareService';

/**
 * Interface defining the shape of the bracket context.
 * Contains methods for managing bracket state and user interactions.
 */
interface BracketContextType {
  bracket: BracketData;
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

const BracketContext = createContext<BracketContextType | undefined>(undefined);

/**
 * Provider component for managing bracket state and operations.
 * Handles state persistence, URL sharing, and bracket interactions.
 */
export const BracketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bracketManager, setBracketManager] = useState(() => new BracketManager(INITIAL_BRACKET_DATA));
  const [isClient, setIsClient] = useState(false);
  
  const storage = new BracketStorage(new LocalStorageService());

  // Initialize bracket state from URL or local storage
  useEffect(() => {
    setIsClient(true);
    try {
      // Check URL for shared state first
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get('state');
      
      if (encoded) {
        const decodedState = ShareService.decodeState(encoded);
        if (decodedState) {
          setBracketManager(new BracketManager(decodedState));
          return;
        }
      }
      
      // Fall back to local storage if no shared state
      const savedData = storage.loadBracket(INITIAL_BRACKET_DATA);
      setBracketManager(new BracketManager(savedData));
    } catch (error) {
      console.error('Failed to initialize bracket state:', error);
      setBracketManager(new BracketManager(INITIAL_BRACKET_DATA));
    }
  }, []);

  // Save bracket state to local storage when it changes
  useEffect(() => {
    if (isClient) {
      try {
        storage.saveBracket(bracketManager.getData());
      } catch (error) {
        console.error('Failed to save bracket state:', error);
      }
    }
  }, [isClient, bracketManager]);

  const handleSongSelect = (
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ) => {
    try {
      const updatedManager = new BracketManager(bracketManager.getData());
      updatedManager.selectSong(round, region, matchIndex, songIndex, song);
      setBracketManager(updatedManager);
    } catch (error) {
      console.error('Failed to update song selection:', error);
    }
  };

  const resetBracket = () => {
    try {
      setBracketManager(new BracketManager(INITIAL_BRACKET_DATA));
      window.history.replaceState({}, '', window.location.pathname);
    } catch (error) {
      console.error('Failed to reset bracket:', error);
    }
  };

  const generateShareableUrl = (): string => {
    try {
      const state = bracketManager.getData();
      const encoded = ShareService.encodeState(state);
      const baseUrl = window.location.href.split('?')[0];
      return `${baseUrl}?state=${encoded}`;
    } catch (error) {
      console.error('Failed to generate shareable URL:', error);
      return window.location.href;
    }
  };

  const value = {
    bracket: bracketManager.getData(),
    handleSongSelect,
    resetBracket,
    generateShareableUrl,
  };

  return <BracketContext.Provider value={value}>{children}</BracketContext.Provider>;
};

/**
 * Custom hook for accessing the bracket context.
 * @throws Error if used outside of BracketProvider
 */
export const useBracket = (): BracketContextType => {
  const context = useContext(BracketContext);
  if (context === undefined) {
    throw new Error('useBracket must be used within a BracketProvider');
  }
  return context;
};
