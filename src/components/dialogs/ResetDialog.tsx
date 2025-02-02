'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogButton } from '@/components/ui/dialog-button';

interface ResetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const ResetDialog: React.FC<ResetDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-orange-400">Reset Bracket</DialogTitle>
        <DialogDescription className="space-y-2 pt-2">
          <p className="text-sm text-gray-300">
            Are you sure you want to reset your bracket? This action cannot be undone.
          </p>
          <p className="text-lg font-semibold text-orange-400">
            Resetting will:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li className="text-sm">Clear all your song selections</li>
            <li className="text-sm">Return all regions to their initial state</li>
            <li className="text-sm">Remove any songs from the finals</li>
            <li className="text-sm">Allow you to start fresh with a new bracket</li>
          </ul>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-end">
        <DialogButton
          variant="ghost"
          onClick={() => onOpenChange(false)}
        >
          Cancel
        </DialogButton>
        <DialogButton
          onClick={onConfirm}
        >
          Reset
        </DialogButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
