import { BracketData } from '../types/bracket';

export interface StorageService {
  loadItem<T>(key: string): T | null;
  saveItem<T>(key: string, value: T): void;
}

export class LocalStorageService implements StorageService {
  loadItem<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error(`Failed to load item ${key}:`, e);
      return null;
    }
  }

  saveItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to save item ${key}:`, e);
    }
  }
}

export class BracketStorage {
  private static readonly BRACKET_KEY = 'goose-bracket-2024';
  private static readonly DOCS_KEY = 'goose-bracket-docs-visibility';
  private storage: StorageService;

  constructor(storage: StorageService) {
    this.storage = storage;
  }

  loadBracket(defaultData: BracketData): BracketData {
    return this.storage.loadItem<BracketData>(BracketStorage.BRACKET_KEY) ?? defaultData;
  }

  saveBracket(data: BracketData): void {
    this.storage.saveItem(BracketStorage.BRACKET_KEY, data);
  }

  loadDocsVisibility(): boolean {
    return this.storage.loadItem<boolean>(BracketStorage.DOCS_KEY) ?? true;
  }

  saveDocsVisibility(isVisible: boolean): void {
    this.storage.saveItem(BracketStorage.DOCS_KEY, isVisible);
  }
}
