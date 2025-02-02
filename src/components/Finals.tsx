'use client';

import React from 'react';
import { BracketData, Song } from '../types/bracket';
import { Match } from './Match';

interface FinalsProps {
  bracket: BracketData;
  onSelect: (round: string, region: 'finals', matchIndex: number, songIndex: number, song: Song) => void;
}

export const Finals: React.FC<FinalsProps> = ({ bracket, onSelect }) => (
  <div className="flex flex-col bg-gray-800/50 p-4 rounded-lg">
    <h3 className="text-2xl font-bold mb-6 text-orange-400 text-center border-b border-orange-200/20 pb-2">
      CHAMPIONSHIP ROUNDS
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h4 className="text-lg font-semibold text-orange-400 text-center border-b border-orange-200/20 pb-2">
          Semifinals
        </h4>
        <div className="space-y-6">
          {bracket.semifinals.map((match, idx) => (
            <div key={`sf-${idx}`} className="space-y-2">
              <div className="text-sm text-orange-300/80 pl-2">Match {idx + 1}</div>
              <Match
                songs={match}
                onSelect={(song, songIndex) => onSelect('semifinals', 'finals', idx, songIndex, song)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-lg font-semibold text-orange-400 text-center border-b border-orange-200/20 pb-2">
          Championship
        </h4>
        <div className="space-y-2">
          <div className="text-sm text-orange-300/80 pl-2">Final Match</div>
          <Match
            songs={bracket.finals[0]}
            onSelect={(song, songIndex) => onSelect('finals', 'finals', 0, songIndex, song)}
          />
        </div>
      </div>
    </div>
  </div>
);
