import { Region } from '../types/bracket';

export const REGIONS: Region[] = ['leo', 'apollo', 'chiron', 'manu'];

export const ROUND_NAMES = {
  round1: 'Round 1',
  round2: 'Round 2',
  round3: 'Round 3',
  round4: 'Round 4',
  semifinals: 'Semifinals',
  finals: 'Championship'
} as const;

export const STORAGE_KEYS = {
  BRACKET: 'goose-bracket-2024',
  DOCS_VISIBILITY: 'goose-bracket-docs-visibility'
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
