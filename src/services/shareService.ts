import { BracketData } from '../types/bracket';

export class ShareService {
  // Compress and encode state to URL-safe string
  static encodeState(state: BracketData): string {
    // Remove null values to minimize size
    const cleanState = this.removeNulls(state);
    // Convert to JSON and compress
    const jsonString = JSON.stringify(cleanState);
    // Convert to base64 and make URL safe
    return btoa(jsonString)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  // Decode URL parameter back to state
  static decodeState(encoded: string): BracketData | null {
    try {
      // Restore base64 characters
      const base64 = encoded
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      // Decode base64 to JSON string
      const jsonString = atob(base64);
      // Parse JSON to state object
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Failed to decode state:', error);
      return null;
    }
  }

  // Remove null values to minimize encoded size
  private static removeNulls(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.removeNulls(item));
    }
    if (obj && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj)
          .filter(([_, v]) => v != null)
          .map(([k, v]) => [k, this.removeNulls(v)])
      );
    }
    return obj;
  }
}
