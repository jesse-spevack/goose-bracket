'use client';

import React, { useState } from 'react';
import { Share } from 'lucide-react';
import { Button } from './ui/button';
import { useBracket } from '../context/BracketContext';
import { ShareDialog } from './dialogs/ShareDialog';

export const ShareButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { generateShareableUrl } = useBracket();

  const handleShareClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Button
        variant="secondary"
        className="text-orange-400 hover:text-orange-300 hover:bg-gray-800/80 gap-2"
        onClick={handleShareClick}
      >
        <Share className="h-4 w-4" />
        Share
      </Button>
      
      <ShareDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        url={generateShareableUrl()}
      />
    </>
  );
};
