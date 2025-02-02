'use client';

import React, { useState } from 'react';
import { DialogButton } from './ui/dialog-button';
import { useBracket } from '../context/BracketContext';

export const ShareButton: React.FC = () => {
  const { generateShareableUrl } = useBracket();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = generateShareableUrl();
    
    try {
      if (navigator.share) {
        // Use native share if available
        await navigator.share({
          title: 'My Goose Bracket',
          text: 'Check out my Goose Jam Bracket!',
          url,
        });
      } else {
        // Fall back to clipboard
        await copyToClipboard(url);
      }
    } catch (error) {
      // If clipboard or share fails, show the URL in an alert
      window.alert(`Copy this URL to share your bracket:\n${url}`);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      // Try using the modern clipboard API
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // If clipboard API fails, try the legacy approach
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        textArea.remove();
        throw error;
      }
    }
  };

  return (
    <DialogButton onClick={handleShare}>
      {copied ? 'Copied!' : 'Share'}
    </DialogButton>
  );
};
