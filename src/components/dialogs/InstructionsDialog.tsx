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
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-orange-400">Instructions</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm text-gray-300">Click on a song in each matchup to advance it to the next round</li>
            <li className="text-sm text-gray-300">Your progress is automatically saved in your browser</li>
            <li className="text-sm text-gray-300">Click the Share button to get a URL that you can share with others or to open your current bracket on a new device</li>
            <li className="text-sm text-gray-300">Use Reset to start over with a fresh bracket</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-orange-400">Rules</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm text-gray-300">Vote for your favorite version of each song</li>
            <li className="text-sm text-gray-300">Have fun and enjoy reliving these amazing moments!</li>
          </ul>
        </div>
      </div>
      <DialogFooter className="flex flex-row justify-end space-x-2">
        <DialogButton onClick={() => onOpenChange(false)}>
          Close
        </DialogButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
