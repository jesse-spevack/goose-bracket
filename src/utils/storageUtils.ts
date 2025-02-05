import { BracketData } from '../types/bracket';
import { INITIAL_BRACKET_DATA } from '../config/constants';
import { BRACKET_CONSTANTS } from '../config/constants';

const DOCS_VISIBILITY_KEY = 'goose-bracket-docs-visibility';

export const loadBracketData = (): BracketData => {
  // Only load from localStorage on the client side
  if (typeof window === 'undefined') {
    return INITIAL_BRACKET_DATA;
  }
  
  try {
    const saved = localStorage.getItem(BRACKET_CONSTANTS.STORAGE.BRACKET_KEY);
    return saved ? JSON.parse(saved) : INITIAL_BRACKET_DATA;
  } catch (e) {
    console.error('Failed to load bracket:', e);
    return INITIAL_BRACKET_DATA;
  }
};

export const saveBracketData = (bracket: BracketData): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(BRACKET_CONSTANTS.STORAGE.BRACKET_KEY, JSON.stringify(bracket));
  } catch (e) {
    console.error('Failed to save bracket:', e);
  }
};

export const loadDocsVisibility = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  try {
    const saved = localStorage.getItem(DOCS_VISIBILITY_KEY);
    return saved === null ? true : JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load docs visibility:', e);
    return true;
  }
};

export const saveDocsVisibility = (isVisible: boolean): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(DOCS_VISIBILITY_KEY, JSON.stringify(isVisible));
  } catch (e) {
    console.error('Failed to save docs visibility:', e);
  }
};