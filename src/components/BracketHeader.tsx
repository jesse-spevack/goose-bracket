'use client';

import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { DialogButton } from '@/components/ui/dialog-button';

interface BracketHeaderProps {
  onInstructionsClick: () => void;
  onResetClick: () => void;
  onAboutClick: () => void;
}

export const BracketHeader: React.FC<BracketHeaderProps> = ({
  onInstructionsClick,
  onResetClick,
  onAboutClick,
}) => (
  <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-orange-200/20 pb-4">
    <CardTitle className="text-2xl font-bold text-orange-400">
      GOOSE JAM BRACKET 2024
    </CardTitle>
    <div className="flex gap-2">
      <DialogButton onClick={onInstructionsClick}>
        Instructions
      </DialogButton>
      <DialogButton onClick={onAboutClick}>
        About
      </DialogButton>
      <DialogButton onClick={onResetClick}>
        Reset Bracket
      </DialogButton>
    </div>
  </CardHeader>
);
