'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface ShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  open,
  onOpenChange,
  url,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Your Bracket</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">
            Copy this URL to share your bracket with others:
          </p>
          <div className="p-2 bg-gray-100 rounded-md">
            <p className="text-sm break-all select-all">{url}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
