import { BracketData } from '../types/bracket';

/**
 * Service for handling the encoding and decoding of bracket state for URL sharing.
 * Uses base64 encoding with URL-safe character replacements.
 */
export class ShareService {
  private static readonly BASE64_REPLACEMENTS = {
    '+': '-',
    '/': '_',
    '=': ''
  } as const;

  private static readonly URL_REPLACEMENTS = {
    '-': '+',
    '_': '/'
  } as const;

  /**
   * Encodes the bracket state into a URL-safe string.
   * @param state - The bracket state to encode
   * @returns URL-safe base64 encoded string
   * @throws Error if state cannot be stringified
   */
  static encodeState(state: BracketData): string {
    try {
      const cleanState = this.removeNulls(state);
      const jsonString = JSON.stringify(cleanState);
      const base64 = btoa(jsonString);
      
      return Object.entries(this.BASE64_REPLACEMENTS).reduce(
        (str, [from, to]) => str.replace(new RegExp('\\' + from, 'g'), to),
        base64
      );
    } catch (error) {
      console.error('Failed to encode state:', error);
      throw new Error('Failed to encode bracket state');
    }
  }

  /**
   * Decodes a URL-safe string back into bracket state.
   * @param encoded - The encoded string to decode
   * @returns Decoded bracket state or null if invalid
   */
  static decodeState(encoded: string): BracketData | null {
    try {
      const base64 = Object.entries(this.URL_REPLACEMENTS).reduce(
        (str, [from, to]) => str.replace(new RegExp(from, 'g'), to),
        encoded
      );
      
      const jsonString = atob(base64);
      return JSON.parse(jsonString) as BracketData;
    } catch (error) {
      console.error('Failed to decode state:', error);
      return null;
    }
  }

  /**
   * Recursively removes null values from an object to minimize encoded size.
   * @param obj - The object to clean
   * @returns Cleaned object with null values removed
   */
  private static removeNulls<T>(obj: T): T {
    if (Array.isArray(obj)) {
      return obj.map(item => this.removeNulls(item)) as T;
    }
    
    if (obj && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj)
          .filter(([_, value]) => value !== null)
          .map(([key, value]) => [key, this.removeNulls(value)])
      ) as T;
    }
    
    return obj;
  }
}
