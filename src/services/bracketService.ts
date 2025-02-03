import { BracketData, Region, Song } from '../types/bracket';
import { BRACKET_CONSTANTS } from '../config/constants';

/**
 * Service for managing bracket operations
 */
export class BracketService {
  /**
   * Get the selected song for a regional match by checking the next round
   */
  static getRegionalSelectedSong(
    bracket: BracketData,
    region: Region,
    roundIndex: number,
    matchIndex: number
  ): Song {
    if (roundIndex >= BRACKET_CONSTANTS.ROUNDS.REGIONAL.length - 1) return null;
    const nextRound = BRACKET_CONSTANTS.ROUNDS.REGIONAL[roundIndex + 1];
    const nextMatchIndex = Math.floor(matchIndex / 2);
    return bracket[nextRound][region][nextMatchIndex][matchIndex % 2];
  }

  /**
   * Get the selected song for a finals match by checking the championship
   */
  static getFinalsSelectedSong(bracket: BracketData, matchIndex: number): Song {
    return bracket.finals[Math.floor(matchIndex / 2)][matchIndex % 2];
  }

  /**
   * Reset the bracket to its initial state
   */
  static resetBracket(initialBracket: BracketData): BracketData {
    return JSON.parse(JSON.stringify(initialBracket));
  }

  /**
   * Update bracket with a selected song
   */
  static updateBracketWithSelection(
    bracket: BracketData,
    round: string,
    region: Region | 'finals',
    matchIndex: number,
    songIndex: number,
    song: Song
  ): BracketData {
    const newBracket = JSON.parse(JSON.stringify(bracket));
    
    if (region === 'finals') {
      if (round === 'semifinals') {
        newBracket.finals[Math.floor(matchIndex / 2)][matchIndex % 2] = song;
      } else {
        newBracket.finals[matchIndex][songIndex] = song;
      }
    } else {
      const nextRound = BRACKET_CONSTANTS.ROUNDS.REGIONAL[
        BRACKET_CONSTANTS.ROUNDS.REGIONAL.indexOf(round as keyof typeof BRACKET_CONSTANTS.ROUNDS.REGIONAL) + 1
      ];
      if (nextRound) {
        newBracket[nextRound][region][Math.floor(matchIndex / 2)][matchIndex % 2] = song;
      }
    }
    
    return newBracket;
  }
}
