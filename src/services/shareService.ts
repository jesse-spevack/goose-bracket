import { BracketData } from '../types/bracket';
import { BRACKET_CONSTANTS } from '../config/constants';

/**
 * Service for handling the encoding and decoding of bracket state for URL sharing.
 * Uses base64 encoding with URL-safe character replacements.
 */
export class ShareError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = 'ShareError';
  }
}

interface ShareOptions {
  title?: string;
  text?: string;
  url: string;
}

/**
 * Service for managing share functionality
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
   * @throws ShareError if state cannot be stringified
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
      throw new ShareError('Failed to encode state', error);
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
      throw new ShareError('Failed to decode state', error);
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

  /**
   * Generates a shareable URL for the current bracket state
   * @param bracket - The current bracket state to share
   * @returns A shareable URL containing the encoded bracket state
   */
  public static generateShareableUrl(bracket: BracketData): string {
    try {
      const encoded = this.encodeState(bracket);
      const url = new URL(window.location.href);
      url.searchParams.set('b', encoded);
      return url.toString();
    } catch (error) {
      throw new ShareError('Failed to generate shareable URL', error);
    }
  }

  /**
   * Share bracket using the native share API if available
   */
  static async shareNative(options: ShareOptions): Promise<void> {
    try {
      if (!navigator.share) {
        throw new ShareError('Native share not supported');
      }
      
      await navigator.share({
        title: options.title || BRACKET_CONSTANTS.SHARE.TITLE,
        text: options.text || BRACKET_CONSTANTS.SHARE.TEXT,
        url: options.url,
      });
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        // User cancelled share, not an error
        return;
      }
      throw new ShareError('Failed to share bracket', error);
    }
  }

  /**
   * Copy share URL to clipboard
   */
  static async copyToClipboard(url: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      throw new ShareError('Failed to copy URL to clipboard', error);
    }
  }

  /**
   * Create a shareable URL for the bracket
   */
  static createShareUrl(bracket: BracketData): string {
    try {
      const bracketParam = encodeURIComponent(JSON.stringify(bracket));
      return `${window.location.origin}?bracket=${bracketParam}`;
    } catch (error) {
      throw new ShareError('Failed to create share URL', error);
    }
  }

  /**
   * Parse a bracket from a share URL
   */
  static parseBracketFromUrl(url: string): BracketData | null {
    try {
      const params = new URLSearchParams(new URL(url).search);
      const bracketParam = params.get('bracket');
      return bracketParam ? JSON.parse(decodeURIComponent(bracketParam)) : null;
    } catch (error) {
      throw new ShareError('Failed to parse bracket from URL', error);
    }
  }
}
