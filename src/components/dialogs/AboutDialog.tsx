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

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutDialog: React.FC<AboutDialogProps> = ({
  open,
  onOpenChange,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-orange-400">About</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-300">
            The Goose Bracket is an open source project that lets fans complete Goose Jam of the Year brackets based on Ryan Storm's Goose Jam of the Year project. 
          </p>
          <p className="text-sm text-gray-300">
            This tool was built by Jesse Spevack. 
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-orange-400">Links</h3>
          <p className="text-sm text-gray-300">
            Read about Ryan's project on{" "}
            <a 
              href="https://substack.com/home/post/p-153334990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              substack
            </a>.
          </p>
          <p className="text-sm text-gray-300">
            Subscribe to Jesse's writing on{" "}
            <a 
              href="https://verynormal.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              verynormal.info
            </a>.
          </p>
          <p className="text-sm text-gray-300">
            View the source code on{" "}
            <a 
              href="https://github.com/jesse-spevack/goose-bracket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              github
            </a>.
          </p>
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
