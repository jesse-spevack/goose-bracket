export type Song = string | null;
export type Match = [Song, Song];
export type Round = Match[];

export const REGIONS = ['leo', 'apollo', 'chiron', 'manu'] as const;
export type Region = typeof REGIONS[number];

export type RoundKey = 'round1' | 'round2' | 'round3' | 'round4';
export type FinalRoundKey = 'semifinals' | 'finals';

export interface RegionalRounds {
  round1: Record<Region, Round>;
  round2: Record<Region, Round>;
  round3: Record<Region, Round>;
  round4: Record<Region, Round>;
}

export interface FinalRounds {
  semifinals: Round;
  finals: Round;
}

export type BracketData = RegionalRounds & FinalRounds;

export interface MatchProps {
  songs: Match;
  onSelect: (song: Song, index: number) => void;
}

export interface RegionBracketProps {
  name: string;
  region: Region;
  bracket: BracketData;
  onSelect: (round: RoundKey | FinalRoundKey, region: Region | 'finals', matchIndex: number, songIndex: number, song: Song) => void;
}