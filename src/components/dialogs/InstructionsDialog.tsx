'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogButton } from '@/components/ui/dialog-button';

interface InstructionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InstructionsDialog: React.FC<InstructionsDialogProps> = ({
  open,
  onOpenChange,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-orange-400">How to Play</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2">Instructions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li className="text-sm">Click on a song in each matchup to advance it to the next round</li>
            <li className="text-sm">Songs will automatically advance when both songs in a matchup are selected</li>
            <li className="text-sm">Your progress is automatically saved</li>
            <li className="text-sm">Use the Reset button to start over</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2">Rules</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li className="text-sm">Vote for your favorite version of each song</li>
            <li className="text-sm">Have fun and enjoy reliving these amazing moments!</li>
          </ul>
        </div>
      </div>
      <DialogFooter className="sm:justify-end">
        <DialogButton onClick={() => onOpenChange(false)}>
          Close
        </DialogButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
