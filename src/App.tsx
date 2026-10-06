import React, { useState, useEffect } from 'react';
import type { 
  BibleBook, 
  BibleVerse, 
  BibleVersion, 
  StudyMode, 
  ComprehensiveStudyDossier,
  UserHighlight,
  UserBookmark,
  SavedFullStudy
} from './types/bible';
import { BIBLE_BOOKS } from './data/bibleBooks';
import { getChapterVerses } from './data/bibleVerses';
import { generateTheologicalDossier } from './data/theologicalEngine';
import { StorageService, type UserPreferences } from './services/storageService';

// Components
import { Header } from './components/Header';
import { BibleReader } from './components/BibleReader';
import { ContextualToolbar } from './components/ContextualToolbar';
import { StudyDrawer } from './components/StudyDrawer';
import { BookChapterModal } from './components/BookChapterModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { NotesModal } from './components/NotesModal';
import { SavedStudiesModal } from './components/SavedStudiesModal';
import { MapsAndTimelineModal } from './components/MapsAndTimelineModal';
import { SermonBuilderModal } from './components/SermonBuilderModal';
import { SettingsModal } from './components/SettingsModal';
import { BottomNav } from './components/BottomNav';

export const App: React.FC = () => {
  // Navigation State
  const initialLastRead = StorageService.getLastRead();
  const [currentBook, setCurrentBook] = useState<BibleBook>(() => {
    return BIBLE_BOOKS.find(b => b.id === initialLastRead.bookId) || BIBLE_BOOKS.find(b => b.id === 'JHN') || BIBLE_BOOKS[0];
  });
  const [currentChapter, setCurrentChapter] = useState<number>(initialLastRead.chapter || 1);
  const [verses, setVerses] = useState<BibleVerse[]>([]);

  // Preferences & Visual Mode
  const [preferences, setPreferences] = useState<UserPreferences>(() => StorageService.getPreferences());
  const [activeMode, setActiveMode] = useState<StudyMode>('study');

  // Selection State
  const [selectedVerses, setSelectedVerses] = useState<number[]>([1, 2, 3, 4, 5]);
  const [isAllChapterSelected, setIsAllChapterSelected] = useState<boolean>(false);

  // User Data State
  const [highlights, setHighlights] = useState<UserHighlight[]>(() => StorageService.getHighlights());
  const notes = StorageService.getNotes();
  const [bookmarks, setBookmarks] = useState<UserBookmark[]>(() => StorageService.getBookmarks());

  // Modals Visibility
  const [isBookPickerOpen, setIsBookPickerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isSavedStudiesOpen, setIsSavedStudiesOpen] = useState(false);
  const [isMapsTimelineOpen, setIsMapsTimelineOpen] = useState(false);
  const [isSermonBuilderOpen, setIsSermonBuilderOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Study Drawer State
  const [isStudyDrawerOpen, setIsStudyDrawerOpen] = useState(false);
  const [studyDrawerInitialTab, setStudyDrawerInitialTab] = useState('overview');
  const [activeDossier, setActiveDossier] = useState<ComprehensiveStudyDossier | null>(null);

  // Load verses whenever book or chapter changes
  useEffect(() => {
    const loadedVerses = getChapterVerses(currentBook.id, currentChapter);
    setVerses(loadedVerses);
    StorageService.setLastRead(currentBook.id, currentChapter);
  }, [currentBook, currentChapter]);

  // Update dossier when selection changes
  useEffect(() => {
    if (selectedVerses.length > 0) {
      const minV = Math.min(...selectedVerses);
      const maxV = Math.max(...selectedVerses);
      const dossier = generateTheologicalDossier(currentBook.id, minV, maxV, currentChapter);
      setActiveDossier(dossier);
    } else {
      // Default to chapter dossier
      const dossier = generateTheologicalDossier(currentBook.id, 1, Math.min(10, verses.length || 10), currentChapter);
      setActiveDossier(dossier);
    }
  }, [selectedVerses, currentBook, currentChapter, verses]);

  // Keyboard Shortcuts (Ctrl+K = Search, Esc = Close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsBookPickerOpen(false);
        setIsSearchOpen(false);
        setIsNotesOpen(false);
        setIsSavedStudiesOpen(false);
        setIsMapsTimelineOpen(false);
        setIsSermonBuilderOpen(false);
        setIsSettingsOpen(false);
        setIsStudyDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Selection handlers
  const handleToggleVerseSelection = (verseNum: number) => {
    setIsAllChapterSelected(false);
    setSelectedVerses(prev => {
      if (prev.includes(verseNum)) {
        return prev.filter(v => v !== verseNum);
      } else {
        return [...prev, verseNum].sort((a, b) => a - b);
      }
    });
  };

  const handleSelectAllChapter = () => {
    if (isAllChapterSelected) {
      setSelectedVerses([]);
      setIsAllChapterSelected(false);
    } else {
      const allNums = verses.map(v => v.verse);
      setSelectedVerses(allNums);
      setIsAllChapterSelected(true);
    }
  };

  const handleClearSelection = () => {
    setSelectedVerses([]);
    setIsAllChapterSelected(false);
  };

  // Chapter Navigation
  const handlePrevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(prev => prev - 1);
      setSelectedVerses([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < currentBook.chaptersCount) {
      setCurrentChapter(prev => prev + 1);
      setSelectedVerses([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectBookAndChapter = (book: BibleBook, chapterNum: number) => {
    setCurrentBook(book);
    setCurrentChapter(chapterNum);
    setSelectedVerses([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Study Drawer Tab
  const handleOpenStudyTab = (tabId: string) => {
    setStudyDrawerInitialTab(tabId);
    setIsStudyDrawerOpen(true);
  };

  // Highlight action
  const handleHighlight = (color: 'yellow' | 'green' | 'blue' | 'purple' | 'rose' | 'amber') => {
    if (selectedVerses.length === 0) return;
    selectedVerses.forEach(vNum => {
      const ref = `${currentBook.id}_${currentChapter}_${vNum}`;
      const hl: UserHighlight = {
        id: `hl_${Date.now()}_${vNum}`,
        reference: ref,
        bookId: currentBook.id,
        chapter: currentChapter,
        verse: vNum,
        color,
        createdAt: new Date().toLocaleDateString('pt-BR')
      };
      StorageService.saveHighlight(hl);
    });
    setHighlights(StorageService.getHighlights());
  };

  // Bookmark action
  const handleToggleBookmark = (verseNum: number) => {
    StorageService.toggleBookmark({
      reference: `${currentBook.name} ${currentChapter}:${verseNum}`,
      bookId: currentBook.id,
      chapter: currentChapter,
      verse: verseNum,
      label: `Versículo Marcado em ${currentBook.name}`
    });
    setBookmarks(StorageService.getBookmarks());
  };

  // Save full study
  const handleSaveFullStudy = (dossierToSave: ComprehensiveStudyDossier, customNotes: string) => {
    const study: SavedFullStudy = {
      id: `study_${Date.now()}`,
      title: `Estudo Teológico — ${dossierToSave.reference}`,
      reference: dossierToSave.reference,
      bookId: dossierToSave.bookId,
      chapter: dossierToSave.startChapter,
      versesRange: `${dossierToSave.startVerse}-${dossierToSave.endVerse}`,
      createdAt: new Date().toLocaleDateString('pt-BR'),
      notes: customNotes,
      dossier: dossierToSave
    };
    StorageService.saveFullStudy(study);
  };

  // Share action
  const handleShare = () => {
    if (navigator.share && activeDossier) {
      navigator.share({
        title: `Estudo Bíblico: ${activeDossier.reference}`,
        text: `${activeDossier.reference} — ${activeDossier.biblicalText.ARC}\n\n${activeDossier.summary}`
      }).catch(() => {});
    } else if (activeDossier) {
      navigator.clipboard.writeText(`${activeDossier.reference}\n${activeDossier.biblicalText.ARC}`);
      alert('Texto bíblico copiado para a área de transferência!');
    }
  };

  // Selected Reference string
  const selectedRefString = selectedVerses.length > 0
    ? `${currentBook.name} ${currentChapter}:${selectedVerses[0]}${selectedVerses.length > 1 ? `–${selectedVerses[selectedVerses.length - 1]}` : ''}`
    : `${currentBook.name} ${currentChapter}`;

  // Theme styling wrapper
  const themeClass = preferences.theme === 'sepia' 
    ? 'bg-[#181512] text-[#e8decb]' 
    : preferences.theme === 'light'
    ? 'bg-slate-100 text-slate-900'
    : 'bg-slate-950 text-slate-100';

  return (
    <div className={`min-h-screen flex flex-col ${themeClass} selection:bg-indigo-500 selection:text-white transition-colors duration-300 pb-20 sm:pb-8`}>
      
      {/* Top Header Navbar */}
      <Header
        currentBook={currentBook}
        currentChapter={currentChapter}
        activeVersion={preferences.activeVersion}
        activeMode={activeMode}
        theme={preferences.theme}
        onOpenBookPicker={() => setIsBookPickerOpen(true)}
        onSelectVersion={(v) => {
          const updated = { ...preferences, activeVersion: v };
          setPreferences(updated);
          StorageService.savePreferences(updated);
        }}
        onSelectMode={(m) => {
          setActiveMode(m);
          if (m !== 'reading') {
            const tabMap: Record<string, string> = {
              study: 'overview',
              exegesis: 'exegesis',
              hermeneutics: 'hermeneutics',
              history: 'history',
              languages: 'languages',
              theology: 'theology',
              homiletics: 'homiletics',
              devotional: 'application',
              academic: 'exegesis'
            };
            handleOpenStudyTab(tabMap[m] || 'overview');
          }
        }}
        onToggleTheme={() => {
          const nextTheme: 'dark' | 'sepia' | 'light' = preferences.theme === 'dark' ? 'sepia' : preferences.theme === 'sepia' ? 'light' : 'dark';
          const updated = { ...preferences, theme: nextTheme };
          setPreferences(updated);
          StorageService.savePreferences(updated);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenSavedStudies={() => setIsSavedStudiesOpen(true)}
        onOpenConsultant={() => handleOpenStudyTab('consultant')}
        onOpenMapsTimeline={() => setIsMapsTimelineOpen(true)}
        onOpenSermonBuilder={() => setIsSermonBuilderOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Bible Reading Body */}
      <main className="flex-1 w-full">
        <BibleReader
          currentBook={currentBook}
          currentChapter={currentChapter}
          verses={verses}
          activeVersion={preferences.activeVersion}
          activeMode={activeMode}
          selectedVerses={selectedVerses}
          highlights={highlights}
          notes={notes}
          bookmarks={bookmarks}
          fontSize={preferences.fontSize}
          fontFamily={preferences.fontFamily}
          theme={preferences.theme}
          onToggleVerseSelection={handleToggleVerseSelection}
          onSelectAllChapter={handleSelectAllChapter}
          onPrevChapter={handlePrevChapter}
          onNextChapter={handleNextChapter}
          onOpenVerseStudy={(vNum) => {
            setSelectedVerses([vNum]);
            handleOpenStudyTab('overview');
          }}
          onToggleBookmark={handleToggleBookmark}
          onOpenNoteForVerse={(vNum) => {
            setSelectedVerses([vNum]);
            setIsNotesOpen(true);
          }}
          onSelectVersion={(v) => {
            const updated = { ...preferences, activeVersion: v };
            setPreferences(updated);
            StorageService.savePreferences(updated);
          }}
          onNavigateToCuratedChapter={(bId, ch) => {
            const found = BIBLE_BOOKS.find(b => b.id === bId);
            if (found) {
              setCurrentBook(found);
              setCurrentChapter(ch);
              setSelectedVerses([1]);
            }
          }}
        />
      </main>

      {/* Contextual Toolbar when 1 or more verses are selected */}
      {selectedVerses.length > 0 && (
        <ContextualToolbar
          selectedReference={selectedRefString}
          selectedVersesCount={selectedVerses.length}
          isAllChapterSelected={isAllChapterSelected}
          onOpenStudyTab={handleOpenStudyTab}
          onOpenConsultant={() => handleOpenStudyTab('consultant')}
          onAddNote={() => setIsNotesOpen(true)}
          onHighlight={handleHighlight}
          onSelectAllChapter={handleSelectAllChapter}
          onClearSelection={handleClearSelection}
          onCompareVersions={() => handleOpenStudyTab('overview')}
          onShare={handleShare}
        />
      )}

      {/* Full Study Workspace Drawer */}
      {activeDossier && (
        <StudyDrawer
          isOpen={isStudyDrawerOpen}
          onClose={() => setIsStudyDrawerOpen(false)}
          dossier={activeDossier}
          initialTab={studyDrawerInitialTab}
          onSaveStudy={handleSaveFullStudy}
        />
      )}

      {/* Navigation & Feature Modals */}
      <BookChapterModal
        isOpen={isBookPickerOpen}
        onClose={() => setIsBookPickerOpen(false)}
        currentBook={currentBook}
        currentChapter={currentChapter}
        onSelectBookAndChapter={handleSelectBookAndChapter}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPassage={(bookId, ch, v) => {
          const foundBook = BIBLE_BOOKS.find(b => b.id === bookId);
          if (foundBook) {
            setCurrentBook(foundBook);
            setCurrentChapter(ch);
            if (v) {
              setSelectedVerses([v]);
            }
          }
        }}
      />

      <NotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        activeReference={selectedRefString}
        onNavigateToVerse={(bId, ch, v) => {
          const found = BIBLE_BOOKS.find(b => b.id === bId);
          if (found) {
            setCurrentBook(found);
            setCurrentChapter(ch);
            setSelectedVerses([v]);
          }
        }}
      />

      <SavedStudiesModal
        isOpen={isSavedStudiesOpen}
        onClose={() => setIsSavedStudiesOpen(false)}
        onOpenStudy={(study) => {
          const found = BIBLE_BOOKS.find(b => b.id === study.bookId);
          if (found) {
            setCurrentBook(found);
            setCurrentChapter(study.chapter);
          }
          setActiveDossier(study.dossier);
          setIsStudyDrawerOpen(true);
        }}
      />

      <MapsAndTimelineModal
        isOpen={isMapsTimelineOpen}
        onClose={() => setIsMapsTimelineOpen(false)}
      />

      <SermonBuilderModal
        isOpen={isSermonBuilderOpen}
        onClose={() => setIsSermonBuilderOpen(false)}
        initialHomiletics={activeDossier?.homiletics}
        reference={selectedRefString}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        preferences={preferences}
        onUpdatePreferences={(p) => {
          setPreferences(p);
          StorageService.savePreferences(p);
        }}
      />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        onOpenBiblePicker={() => setIsBookPickerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultant={() => handleOpenStudyTab('consultant')}
        onOpenMapsTimeline={() => setIsMapsTimelineOpen(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
      />

    </div>
  );
};

export default App;
