'use client';

import React from 'react';
import { BracketData, Song } from '../types/bracket';
import { Match } from './Match';
import { styles } from './ui/styles';
import { BRACKET_CONSTANTS } from './constants';
import { cn } from '@/lib/utils';

interface FinalsProps {
  bracket: BracketData;
  onSelect: (round: string, region: 'finals', matchIndex: number, songIndex: number, song: Song) => void;
}

export const Finals: React.FC<FinalsProps> = ({ bracket, onSelect }) => {
  // Get the selected song for a semifinals match by checking the finals
  const getSelectedSong = (matchIndex: number): Song => {
    return bracket.finals[Math.floor(matchIndex / 2)][matchIndex % 2];
  };

  return (
    <div className={styles.container.bracket}>
      <h3 className={cn(styles.heading.primary, styles.border.separator, styles.layout.header)}>
        FINALS
      </h3>
      <div className={styles.container.section}>
        {/* Semifinals */}
        <div>
          <h4 className={cn(styles.heading.secondary, styles.border.separator, styles.layout.header)}>
            {BRACKET_CONSTANTS.ROUND_NAMES.FINALS[0]}
          </h4>
          <div className={styles.layout.content}>
            {bracket.semifinals.map((match, idx) => (
              <Match
                key={`semifinals-${idx}`}
                songs={match}
                onSelect={(song, songIndex) => onSelect('semifinals', 'finals', idx, songIndex, song)}
                selectedSong={getSelectedSong(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* Finals */}
        <div className="lg:max-w-[33%] lg:mx-auto">
          <h4 className={cn(styles.heading.secondary, styles.border.separator, styles.layout.header)}>
            {BRACKET_CONSTANTS.ROUND_NAMES.FINALS[1]}
          </h4>
          <div className={styles.layout.content}>
            {bracket.finals.map((match, idx) => (
              <Match
                key={`finals-${idx}`}
                songs={match}
                onSelect={(song, songIndex) => onSelect('finals', 'finals', idx, songIndex, song)}
                selectedSong={null} // No next round for finals
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
