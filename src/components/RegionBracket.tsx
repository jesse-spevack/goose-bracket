'use client';

import React from 'react';
import { Region, BracketData, Song } from '../types/bracket';
import { Match } from './Match';
import { styles } from './ui/styles';
import { BRACKET_CONSTANTS } from './constants';
import { cn } from '@/lib/utils';

interface RegionBracketProps {
  name: string;
  region: Region;
  bracket: BracketData;
  onSelect: (round: string, region: Region, matchIndex: number, songIndex: number, song: Song) => void;
}

export const RegionBracket: React.FC<RegionBracketProps> = ({ name, region, bracket, onSelect }) => {
  // Get the selected song for a match by checking the next round
  const getSelectedSong = (roundIndex: number, matchIndex: number): Song => {
    if (roundIndex >= BRACKET_CONSTANTS.ROUNDS.REGIONAL.length - 1) return null;
    const nextRound = BRACKET_CONSTANTS.ROUNDS.REGIONAL[roundIndex + 1];
    const nextMatchIndex = Math.floor(matchIndex / 2);
    return bracket[nextRound][region][nextMatchIndex][matchIndex % 2];
  };
  
  return (
    <div className={styles.container.bracket}>
      <h3 className={cn(styles.heading.primary, styles.border.separator, styles.layout.header)}>
        {name} REGION
      </h3>
      <div className={styles.container.section}>
        {/* Rounds 1-3 container */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {BRACKET_CONSTANTS.ROUNDS.REGIONAL.slice(0, 3).map((round, roundIndex) => (
            <div key={round} className="flex-1">
              <h4 className={cn(styles.heading.secondary, styles.border.separator, styles.layout.header)}>
                {BRACKET_CONSTANTS.ROUND_NAMES.REGIONAL[roundIndex]}
              </h4>
              <div className={styles.layout.content}>
                {bracket[round][region].map((match, idx) => (
                  <Match
                    key={`${round}-${idx}`}
                    songs={match}
                    onSelect={(song, songIndex) => onSelect(round, region, idx, songIndex, song)}
                    selectedSong={getSelectedSong(roundIndex, idx)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Round 4 container */}
        <div className="flex-1 lg:max-w-[33%] lg:mx-auto">
          <h4 className={cn(styles.heading.secondary, styles.border.separator, styles.layout.header)}>
            {BRACKET_CONSTANTS.ROUND_NAMES.REGIONAL[3]}
          </h4>
          <div className={styles.layout.content}>
            {bracket.round4[region].map((match, idx) => (
              <Match
                key={`round4-${idx}`}
                songs={match}
                onSelect={(song, songIndex) => onSelect('round4', region, idx, songIndex, song)}
                selectedSong={getSelectedSong(3, idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
