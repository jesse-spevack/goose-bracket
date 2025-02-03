'use client';

import React, { useState } from 'react';
import { Share } from 'lucide-react';
import { Button } from './ui/button';
import { useBracket } from '../context/BracketContext';
import { ShareDialog } from './dialogs/ShareDialog';
import { useIsMobile } from '../hooks/useIsMobile';

export const ShareButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { generateShareableUrl } = useBracket();
  const isMobile = useIsMobile();

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      window.alert(`Copy this URL to share your bracket:\n${url}`);
    }
  };

  const handleShare = async () => {
    const url = generateShareableUrl();
    
    if (isMobile) {
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'My Goose Bracket',
            text: 'Check out my Goose Jam Bracket!',
            url,
          });
        } else {
          await copyToClipboard(url);
        }
      } catch (error) {
        console.error('Failed to share:', error);
        await copyToClipboard(url);
      }
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        className="text-orange-400 hover:text-orange-300 hover:bg-gray-800/80 gap-2"
        onClick={handleShare}
      >
        <Share className="h-4 w-4" />
        {isMobile && copied ? 'Copied!' : 'Share'}
      </Button>
      
      {!isMobile && (
        <ShareDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          url={generateShareableUrl()}
        />
      )}
    </>
  );
};
