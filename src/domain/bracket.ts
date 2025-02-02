import { BracketData, Match, Region, Round, Song } from '../types/bracket';

export class BracketManager {
  private data: BracketData;

  constructor(initialData: BracketData) {
    this.data = initialData;
  }

  public getData(): BracketData {
    return this.data;
  }

  public selectSong(round: string, region: Region | 'finals', matchIndex: number, songIndex: number, song: Song): void {
    if (!song) return;

    // Update the selected position
    if (round === 'semifinals' || round === 'finals') {
      this.data[round][matchIndex][songIndex] = song;
    } else {
      this.data[round as keyof Omit<BracketData, 'semifinals' | 'finals'>][region as Region][matchIndex][songIndex] = song;
    }

    // Get the current match
    const currentMatch = this.getCurrentMatch(round, region, matchIndex);
    if (!this.isMatchComplete(currentMatch)) return;

    // Advance the winner
    this.advanceWinner(round, region, matchIndex, song);
  }

  private getCurrentMatch(round: string, region: Region | 'finals', matchIndex: number): Match {
    if (round === 'semifinals' || round === 'finals') {
      return this.data[round][matchIndex];
    }
    return this.data[round as keyof Omit<BracketData, 'semifinals' | 'finals'>][region as Region][matchIndex];
  }

  private isMatchComplete(match: Match): boolean {
    return match[0] !== null && match[1] !== null;
  }

  private advanceWinner(round: string, region: Region | 'finals', matchIndex: number, winner: Song): void {
    const nextRoundMatchIndex = Math.floor(matchIndex / 2);
    const nextRoundSongIndex = matchIndex % 2;

    switch (round) {
      case 'round1':
        this.data.round2[region as Region][nextRoundMatchIndex][nextRoundSongIndex] = winner;
        break;
      case 'round2':
        this.data.round3[region as Region][nextRoundMatchIndex][nextRoundSongIndex] = winner;
        break;
      case 'round3':
        this.data.round4[region as Region][nextRoundMatchIndex][nextRoundSongIndex] = winner;
        break;
      case 'round4': {
        const semifinalIndex = ['leo', 'apollo', 'chiron', 'manu'].indexOf(region as Region) % 2;
        const semifinalSongIndex = Math.floor(['leo', 'apollo', 'chiron', 'manu'].indexOf(region as Region) / 2);
        this.data.semifinals[semifinalIndex][semifinalSongIndex] = winner;
        break;
      }
      case 'semifinals':
        this.data.finals[0][matchIndex] = winner;
        break;
    }
  }
}
