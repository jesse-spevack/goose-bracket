'use client';

import React from 'react';
import { Song } from '../types/bracket';

interface MatchProps {
  songs: [Song, Song];
  onSelect: (song: Song, index: number) => void;
}

export const Match: React.FC<MatchProps> = ({ songs, onSelect }) => (
  <div className="flex flex-col gap-2">
    {songs.map((song, idx) => {
      const displayText = song || '___';
      return (
        <button
          key={idx}
          onClick={() => onSelect(song, idx)}
          className={`
            px-3 py-2 text-sm font-medium rounded-md transition-colors w-full sm:w-48
            ${song 
              ? 'bg-gray-800 hover:bg-gray-700 text-orange-400 border border-orange-400/50 hover:border-orange-400' 
              : 'bg-gray-700/50 text-gray-500 border border-gray-600 cursor-not-allowed'}
          `}
          disabled={!song}
        >
          {displayText}
        </button>
      );
    })}
  </div>
);
