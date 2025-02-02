'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BracketData, Region, Song } from '../types/bracket';
import { INITIAL_BRACKET_DATA } from '../utils/bracketUtils';
import { BracketManager } from '../domain/bracket';
import { BracketStorage, LocalStorageService } from '../services/storage';
import { ShareService } from '../services/shareService';

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

export const BracketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bracketManager, setBracketManager] = useState(() => new BracketManager(INITIAL_BRACKET_DATA));
  const [isClient, setIsClient] = useState(false);
  
  const storage = new BracketStorage(new LocalStorageService());

  useEffect(() => {
    setIsClient(true);
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
  }, []);

  useEffect(() => {
    if (isClient) {
      storage.saveBracket(bracketManager.getData());
    }
  }, [bracketManager, isClient]);

  const handleSongSelect = (
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ) => {
    setBracketManager(prev => {
      const newManager = new BracketManager(prev.getData());
      newManager.selectSong(round, region, matchIndex, songIndex, song);
      return newManager;
    });
  };

  const resetBracket = () => {
    setBracketManager(new BracketManager(INITIAL_BRACKET_DATA));
    // Clear URL state when resetting
    window.history.replaceState({}, '', window.location.pathname);
  };

  const generateShareableUrl = () => {
    const state = bracketManager.getData();
    const encoded = ShareService.encodeState(state);
    // Get the base URL without query parameters
    const baseUrl = window.location.href.split('?')[0];
    return `${baseUrl}?state=${encoded}`;
  };

  const value = {
    bracket: bracketManager.getData(),
    handleSongSelect,
    resetBracket,
    generateShareableUrl,
  };

  return (
    <BracketContext.Provider value={value}>
      {children}
    </BracketContext.Provider>
  );
};

export const useBracket = () => {
  const context = useContext(BracketContext);
  if (context === undefined) {
    throw new Error('useBracket must be used within a BracketProvider');
  }
  return context;
};
