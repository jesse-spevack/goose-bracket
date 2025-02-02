'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Documentation: React.FC = () => (
  <Card className="bg-gray-800/80 border-orange-200/20">
    <CardContent className="p-6 space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2">How to Play</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          <li>Click on a song in each matchup to advance it to the next round</li>
          <li>Songs will automatically advance when both songs in a matchup are selected</li>
          <li>Your progress is automatically saved</li>
          <li>Use the Reset button to start over</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2">Rules</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          <li>Vote for your favorite version of each song</li>
          <li>Have fun and enjoy reliving these amazing moments!</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);
