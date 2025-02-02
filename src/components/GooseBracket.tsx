'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { REGIONS } from '../types/bracket';
import { RegionBracket } from './RegionBracket';
import { Finals } from './Finals';
import { BracketProvider, useBracket } from '../context/BracketContext';
import { BracketHeader } from './BracketHeader';
import { ResetDialog } from './dialogs/ResetDialog';
import { InstructionsDialog } from './dialogs/InstructionsDialog';
import { AboutDialog } from './dialogs/AboutDialog';

const BracketContent: React.FC = () => {
  const { bracket, handleSongSelect, resetBracket } = useBracket();
  const [showResetDialog, setShowResetDialog] = React.useState(false);
  const [showInstructionsDialog, setShowInstructionsDialog] = React.useState(false);
  const [showAboutDialog, setShowAboutDialog] = React.useState(false);

  const handleResetClick = () => {
    setShowResetDialog(true);
  };

  const handleConfirmReset = () => {
    resetBracket();
    setShowResetDialog(false);
  };

  const handleInstructionsClick = () => {
    setShowInstructionsDialog(true);
  };

  const handleAboutClick = () => {
    setShowAboutDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-[1800px] mx-auto">
        <Card className="bg-gray-800/50">
          <BracketHeader
            onInstructionsClick={handleInstructionsClick}
            onResetClick={handleResetClick}
            onAboutClick={handleAboutClick}
          />
          <CardContent className="pt-8 px-6 pb-6 space-y-6">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
              {REGIONS.map((region) => (
                <RegionBracket
                  key={region}
                  name={region.toUpperCase()}
                  region={region}
                  bracket={bracket}
                  onSelect={handleSongSelect}
                />
              ))}
            </div>

            <Finals
              bracket={bracket}
              onSelect={handleSongSelect}
            />
          </CardContent>
        </Card>
      </div>

      <ResetDialog
        open={showResetDialog}
        onOpenChange={setShowResetDialog}
        onConfirm={handleConfirmReset}
      />

      <InstructionsDialog
        open={showInstructionsDialog}
        onOpenChange={setShowInstructionsDialog}
      />

      <AboutDialog
        open={showAboutDialog}
        onOpenChange={setShowAboutDialog}
      />
    </div>
  );
};

const GooseBracket: React.FC = () => {
  return (
    <BracketProvider>
      <BracketContent />
    </BracketProvider>
  );
};

export default GooseBracket;