'use client';

import React from 'react';
import { Region, BracketData, Song } from '../types/bracket';
import { Match } from './Match';

interface RegionBracketProps {
  name: string;
  region: Region;
  bracket: BracketData;
  onSelect: (round: string, region: Region, matchIndex: number, songIndex: number, song: Song) => void;
}

export const RegionBracket: React.FC<RegionBracketProps> = ({ name, region, bracket, onSelect }) => {
  const rounds = ['round1', 'round2', 'round3', 'round4'] as const;
  const roundNames = ['Round 1', 'Round 2', 'Round 3', 'Round 4'];
  
  return (
    <div className="flex flex-col bg-gray-800/50 p-4 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-orange-400 text-center border-b border-orange-200/20 pb-2">
        {name} REGION
      </h3>
      <div className="flex flex-col space-y-6">
        {/* Rounds 1-3 container */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {rounds.slice(0, 3).map((round, roundIndex) => (
            <div key={round} className="flex-1">
              <h4 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2 mb-4">
                {roundNames[roundIndex]}
              </h4>
              <div className="space-y-4">
                {bracket[round][region].map((match, idx) => (
                  <Match
                    key={`${round}-${idx}`}
                    songs={match}
                    onSelect={(song, songIndex) => onSelect(round, region, idx, songIndex, song)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Round 4 container */}
        <div className="flex-1 lg:max-w-[33%] lg:mx-auto">
          <h4 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2 mb-4">
            {roundNames[3]}
          </h4>
          <div className="space-y-4">
            {bracket.round4[region].map((match, idx) => (
              <Match
                key={`round4-${idx}`}
                songs={match}
                onSelect={(song, songIndex) => onSelect('round4', region, idx, songIndex, song)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
