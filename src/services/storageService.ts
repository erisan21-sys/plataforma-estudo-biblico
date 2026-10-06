import type { UserHighlight, UserNote, UserBookmark, SavedFullStudy } from '../types/bible';

const STORAGE_KEYS = {
  HIGHLIGHTS: 'bible_app_highlights_v1',
  NOTES: 'bible_app_notes_v1',
  BOOKMARKS: 'bible_app_bookmarks_v1',
  SAVED_STUDIES: 'bible_app_saved_studies_v1',
  LAST_READ: 'bible_app_last_read_v1',
  PREFERENCES: 'bible_app_preferences_v1'
};

export interface UserPreferences {
  activeVersion: 'ARC' | 'AA' | 'KJV' | 'ORIGINAL';
  theme: 'dark' | 'light' | 'sepia';
  fontSize: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  fontFamily: 'serif' | 'sans';
  autoOpenStudy: boolean;
}

const DEFAULT_PREFERENCES: UserPreferences = {
  activeVersion: 'ARC',
  theme: 'dark',
  fontSize: 'lg',
  fontFamily: 'serif',
  autoOpenStudy: false
};

export const StorageService = {
  // Highlights
  getHighlights(): UserHighlight[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HIGHLIGHTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveHighlight(highlight: UserHighlight): void {
    const list = this.getHighlights().filter(h => h.id !== highlight.id && h.reference !== highlight.reference);
    list.push(highlight);
    localStorage.setItem(STORAGE_KEYS.HIGHLIGHTS, JSON.stringify(list));
  },

  removeHighlight(reference: string): void {
    const list = this.getHighlights().filter(h => h.reference !== reference);
    localStorage.setItem(STORAGE_KEYS.HIGHLIGHTS, JSON.stringify(list));
  },

  // Notes - Starts empty without fake mock data
  getNotes(): UserNote[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveNotes(notes: UserNote[]): void {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  },

  addOrUpdateNote(note: UserNote): void {
    const notes = this.getNotes().filter(n => n.id !== note.id);
    notes.unshift(note);
    this.saveNotes(notes);
  },

  deleteNote(id: string): void {
    const notes = this.getNotes().filter(n => n.id !== id);
    this.saveNotes(notes);
  },

  // Bookmarks - Starts empty without fake mock data
  getBookmarks(): UserBookmark[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(bookmark: Omit<UserBookmark, 'id' | 'createdAt'>): boolean {
    const list = this.getBookmarks();
    const existingIndex = list.findIndex(b => b.bookId === bookmark.bookId && b.chapter === bookmark.chapter && b.verse === bookmark.verse);
    
    if (existingIndex >= 0) {
      list.splice(existingIndex, 1);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(list));
      return false; // removed
    } else {
      list.unshift({
        ...bookmark,
        id: `bm_${Date.now()}`,
        createdAt: new Date().toLocaleDateString('pt-BR')
      });
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(list));
      return true; // added
    }
  },

  // Saved Studies
  getSavedStudies(): SavedFullStudy[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_STUDIES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveFullStudy(study: SavedFullStudy): void {
    const studies = this.getSavedStudies().filter(s => s.id !== study.id);
    studies.unshift(study);
    localStorage.setItem(STORAGE_KEYS.SAVED_STUDIES, JSON.stringify(studies));
  },

  deleteStudy(id: string): void {
    const studies = this.getSavedStudies().filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SAVED_STUDIES, JSON.stringify(studies));
  },

  // Last read state
  getLastRead(): { bookId: string; chapter: number } {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LAST_READ);
      return data ? JSON.parse(data) : { bookId: 'JHN', chapter: 1 };
    } catch {
      return { bookId: 'JHN', chapter: 1 };
    }
  },

  setLastRead(bookId: string, chapter: number): void {
    localStorage.setItem(STORAGE_KEYS.LAST_READ, JSON.stringify({ bookId, chapter }));
  },

  // Preferences
  getPreferences(): UserPreferences {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      return data ? { ...DEFAULT_PREFERENCES, ...JSON.parse(data) } : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  },

  savePreferences(prefs: UserPreferences): void {
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs));
  }
};
