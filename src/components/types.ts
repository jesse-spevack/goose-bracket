import { BracketData, Region, Song } from '../types/bracket';

/**
 * Common types for dialog components
 */
export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Props for components that handle song selection
 */
export interface SongSelectionProps {
  onSelect: (
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ) => void;
}

/**
 * Props for bracket section components
 */
export interface BracketSectionProps extends SongSelectionProps {
  bracket: BracketData;
}
