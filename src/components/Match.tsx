'use client';

import React from 'react';
import { Song } from '../types/bracket';
import { styles } from './ui/styles';
import { cn } from '@/lib/utils';

interface MatchProps {
  songs: [Song, Song];
  onSelect: (song: Song, index: number) => void;
  selectedSong?: Song;  // The song that was selected from this match
}

export const Match: React.FC<MatchProps> = ({ songs, onSelect, selectedSong }) => (
  <div className="flex flex-col gap-2">
    {songs.map((song, idx) => {
      const displayText = song || '___';
      const isSelected = song && song === selectedSong;
      return (
        <button
          key={idx}
          onClick={() => onSelect(song, idx)}
          className={cn(
            styles.button.base,
            song
              ? isSelected
                ? styles.button.song.selected
                : styles.button.song.active
              : styles.button.song.disabled
          )}
          disabled={!song}
        >
          {displayText}
        </button>
      );
    })}
  </div>
);
