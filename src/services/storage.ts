import { BracketData } from '../types/bracket';

export class StorageError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = 'StorageError';
  }
}

/**
 * Service for managing local storage operations
 */
export class StorageService {
  private static STORAGE_KEY = BRACKET_CONSTANTS.STORAGE.BRACKET_KEY;

  /**
   * Save bracket data to local storage
   */
  static saveBracket(bracket: BracketData): void {
    try {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(bracket)
      );
    } catch (error) {
      throw new StorageError('Failed to save bracket to storage', error);
    }
  }

  /**
   * Load bracket data from local storage
   */
  static loadBracket(): BracketData | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      throw new StorageError('Failed to load bracket from storage', error);
    }
  }

  /**
   * Clear bracket data from local storage
   */
  static clearBracket(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      throw new StorageError('Failed to clear bracket from storage', error);
    }
  }

  /**
   * Check if bracket data exists in local storage
   */
  static hasBracket(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }
}

export class BracketStorage {
  private static readonly DOCS_KEY = 'goose-bracket-docs-visibility';

  loadDocsVisibility(): boolean {
    try {
      const stored = localStorage.getItem(BracketStorage.DOCS_KEY);
      return stored ? JSON.parse(stored) : true;
    } catch (error) {
      throw new StorageError('Failed to load docs visibility from storage', error);
    }
  }

  saveDocsVisibility(isVisible: boolean): void {
    try {
      localStorage.setItem(BracketStorage.DOCS_KEY, JSON.stringify(isVisible));
    } catch (error) {
      throw new StorageError('Failed to save docs visibility to storage', error);
    }
  }

  loadBracket(defaultData: BracketData): BracketData {
    return StorageService.loadBracket() ?? defaultData;
  }

  saveBracket(data: BracketData): void {
    StorageService.saveBracket(data);
  }
}
