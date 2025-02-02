'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BracketData, Region, Song } from '../types/bracket';
import { INITIAL_BRACKET_DATA } from '../utils/bracketUtils';
import { BracketManager } from '../domain/bracket';
import { BracketStorage, LocalStorageService } from '../services/storage';

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
}

const BracketContext = createContext<BracketContextType | undefined>(undefined);

export const BracketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bracketManager, setBracketManager] = useState(() => new BracketManager(INITIAL_BRACKET_DATA));
  const [isClient, setIsClient] = useState(false);
  
  const storage = new BracketStorage(new LocalStorageService());

  useEffect(() => {
    setIsClient(true);
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
    setBracketManager(prevManager => {
      const newManager = new BracketManager(prevManager.getData());
      newManager.selectSong(round, region, matchIndex, songIndex, song);
      return newManager;
    });
  };

  const resetBracket = () => {
    setBracketManager(new BracketManager(INITIAL_BRACKET_DATA));
  };

  return (
    <BracketContext.Provider 
      value={{ 
        bracket: bracketManager.getData(), 
        handleSongSelect, 
        resetBracket 
      }}
    >
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
