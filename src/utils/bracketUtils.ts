import { Round, Region, BracketData } from '../types/bracket';

export const STORAGE_KEY = 'goose-bracket-2024';
export const REGIONS: Region[] = ['leo', 'apollo', 'chiron', 'manu'];

// Create empty matches array helper
export const createEmptyMatches = (count: number): Round => {
  return Array(count).fill(null).map(() => [null, null]);
};

export const INITIAL_BRACKET_DATA: BracketData = {
  round1: {
    leo: [
      ["6/28 Tumble", "9/11 Wysteria"],
      ["9/14 Drive", "6/4 Empress"],
      ["11/10 Red Bird", "9/22 Creatures"],
      ["9/1 Madhuvan", "11/8 Modern!"],
      ["12/13 Hungersite", "9/15 E or A?"],
      ["6/18 Pancakes", "5/22 Red Bird"],
      ["5/11 Inside Out", "9/1 Modern!"],
      ["9/12 Western", "5/22 Arrow"]
    ],
    apollo: [
      ["5/8 Madhuvan", "11/9 Meter Maid"],
      ["10/24 Myst", "9/22 Arrow"],
      ["11/8 Thatch", "6/7 Wysteria"],
      ["5/26 EMG", "4/10 Tumble"],
      ["5/23 Echo", "12/31 I2I"],
      ["9/7 Drive", "6/5 Red Bird"],
      ["9/13 Dripfield", "10/29 Borne"],
      ["11/8 Pancakes", "6/26 Wysteria"]
    ],
    chiron: [
      ["4/7 Drive", "11/1 Tumble"],
      ["9/8 Arrow", "6/18 A Dogs"],
      ["12/14 B&D +14", "6/11 Hungersite"],
      ["6/4 Borne", "11/8 Arrow"],
      ["6/7 Jive Lee", "9/17 SALT"],
      ["4/9 Red Bird", "12/14 Creatures"],
      ["9/24 Pancakes", "11/13 Modern!"],
      ["6/25 Drive", "6/30 Half Step"]
    ],
    manu: [
      ["5/30 Rockdale", "6/16 Arrow"],
      ["9/7 Hungersite", "9/25 Madhuvan"],
      ["6/8 Drive", "9/21 Red Bird"],
      ["4/7 Pancakes", "9/12 Thatch"],
      ["6/28 In Your Eyes", "4/8 Rosewood"],
      ["9/27 Dripfield", "10/29 Pancakes"],
      ["5/14 Jive Lee", "6/22 Tumble"],
      ["9/21 Borne", "4/8 Myst"]
    ]
  },
  round2: {
    leo: createEmptyMatches(4),
    apollo: createEmptyMatches(4),
    chiron: createEmptyMatches(4),
    manu: createEmptyMatches(4)
  },
  round3: {
    leo: createEmptyMatches(2),
    apollo: createEmptyMatches(2),
    chiron: createEmptyMatches(2),
    manu: createEmptyMatches(2)
  },
  round4: {
    leo: createEmptyMatches(1),
    apollo: createEmptyMatches(1),
    chiron: createEmptyMatches(1),
    manu: createEmptyMatches(1)
  },
  semifinals: createEmptyMatches(2),
  finals: createEmptyMatches(1)
};