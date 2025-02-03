/**
 * Shared constants for bracket components
 */
export const BRACKET_CONSTANTS = {
  ROUNDS: {
    REGIONAL: ['round1', 'round2', 'round3', 'round4'] as const,
    FINALS: ['semifinals', 'finals'] as const,
  },
  
  ROUND_NAMES: {
    REGIONAL: ['Round 1', 'Round 2', 'Round 3', 'Round 4'],
    FINALS: ['Semifinals', 'Championship'],
  },
  
  SHARE: {
    TITLE: 'My Goose Bracket',
    TEXT: 'Check out my Goose Jam Bracket!',
  },
} as const;
