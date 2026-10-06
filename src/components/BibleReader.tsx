import React from 'react';
import type { 
  BibleBook, 
  BibleVerse, 
  BibleVersion, 
  UserHighlight, 
  UserNote, 
  UserBookmark,
  StudyMode 
} from '../types/bible';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark as BookmarkIcon, 
  FileText, 
  CheckCircle2, 
  SplitSquareVertical,
  AlertCircle,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface BibleReaderProps {
  currentBook: BibleBook;
  currentChapter: number;
  verses: BibleVerse[];
  activeVersion: BibleVersion;
  activeMode: StudyMode;
  selectedVerses: number[];
  highlights: UserHighlight[];
  notes: UserNote[];
  bookmarks: UserBookmark[];
  fontSize: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  fontFamily: 'serif' | 'sans';
  theme: 'dark' | 'light' | 'sepia';
  onToggleVerseSelection: (verseNum: number) => void;
  onSelectAllChapter: () => void;
  onPrevChapter: () => void;
  onNextChapter: () => void;
  onOpenVerseStudy: (verseNum: number) => void;
  onToggleBookmark: (verseNum: number) => void;
  onOpenNoteForVerse: (verseNum: number) => void;
  onSelectVersion: (version: BibleVersion) => void;
  onNavigateToCuratedChapter: (bookId: string, chapter: number) => void;
}

export const BibleReader: React.FC<BibleReaderProps> = ({
  currentBook,
  currentChapter,
  verses,
  activeVersion,
  selectedVerses,
  highlights,
  notes,
  bookmarks,
  fontSize,
  fontFamily,
  onToggleVerseSelection,
  onSelectAllChapter,
  onPrevChapter,
  onNextChapter,
  onOpenVerseStudy,
  onToggleBookmark,
  onOpenNoteForVerse,
  onNavigateToCuratedChapter
}) => {
  const [isParallelView, setIsParallelView] = React.useState(false);

  // Font size classes
  const fontSizeClass = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
    xl: 'text-xl sm:text-2xl leading-relaxed',
    '2xl': 'text-2xl sm:text-3xl leading-relaxed'
  }[fontSize];

  const fontFamilyClass = fontFamily === 'serif' 
    ? 'font-serif' 
    : 'font-sans';

  // Highlight color helper
  const getHighlightClass = (verseNum: number) => {
    const hl = highlights.find(h => h.bookId === currentBook.id && h.chapter === currentChapter && h.verse === verseNum);
    if (!hl) return '';
    switch (hl.color) {
      case 'yellow': return 'bg-yellow-500/25 border-b-2 border-yellow-400';
      case 'green': return 'bg-emerald-500/25 border-b-2 border-emerald-400';
      case 'blue': return 'bg-sky-500/25 border-b-2 border-sky-400';
      case 'purple': return 'bg-purple-500/25 border-b-2 border-purple-400';
      case 'rose': return 'bg-rose-500/25 border-b-2 border-rose-400';
      case 'amber': return 'bg-amber-500/25 border-b-2 border-amber-400';
      default: return 'bg-yellow-500/25';
    }
  };

  const isVerseBookmarked = (verseNum: number) => {
    return bookmarks.some(b => b.bookId === currentBook.id && b.chapter === currentChapter && b.verse === verseNum);
  };

  const getVerseNotes = (verseNum: number) => {
    return notes.filter(n => n.bookId === currentBook.id && n.chapter === currentChapter && n.verse === verseNum);
  };

  const curatedChaptersList = [
    { label: 'João 1 (Prólogo & Logos)', bookId: 'JHN', ch: 1 },
    { label: 'Romanos 8 (Livre de Condenação)', bookId: 'ROM', ch: 8 },
    { label: 'Gênesis 1 (Criação & Origens)', bookId: 'GEN', ch: 1 },
    { label: 'Salmo 23 (O Bom Pastor)', bookId: 'PSA', ch: 23 },
    { label: 'Isaías 53 (O Servo Sofredor)', bookId: 'ISA', ch: 53 },
    { label: 'Efésios 2 (Pela Graça por meio da Fé)', bookId: 'EPH', ch: 2 },
    { label: 'Filipenses 2 (Hino da Kénosis)', bookId: 'PHP', ch: 2 },
    { label: 'Atos 16 (Paulo e Silas)', bookId: 'ACT', ch: 16 },
  ];

  return (
    <div className={`w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 transition-colors ${fontFamilyClass}`}>
      
      {/* Chapter Banner & Quick Controls */}
      <div className="mb-8 pb-5 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {currentBook.genre}
            </span>
            <span className="text-xs text-slate-400">
              {currentBook.testament === 'OT' ? 'Antigo Testamento' : 'Novo Testamento'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>{currentBook.name}</span>
            <span className="text-amber-400 font-serif">Capítulo {currentChapter}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            {currentBook.keyTheme} &bull; <span className="italic">{currentBook.author} ({currentBook.approxDate})</span>
          </p>
        </div>

        {/* View Switches & Whole Chapter Selector (shown when verses exist) */}
        {verses.length > 0 && (
          <div className="flex items-center gap-2 font-sans">
            <button
              onClick={() => setIsParallelView(!isParallelView)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isParallelView
                  ? 'bg-sky-600 text-white border-sky-400 shadow-md'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700/80'
              }`}
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>{isParallelView ? 'Modo Normal' : 'Comparar Versões'}</span>
            </button>

            <button
              onClick={onSelectAllChapter}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Estudar Capítulo Todo</span>
            </button>
          </div>
        )}
      </div>

      {/* When Chapter text is not loaded in local offline seed */}
      {verses.length === 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 font-sans space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base sm:text-lg">
                Texto bíblico deste capítulo não está incluído no pacote básico local
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Para manter a integridade acadêmica e respeitar direitos autorais, este aplicativo <strong>não inventa versículos fictícios</strong>. 
                Os 66 livros da Bíblia possuem navegação canônica completa e metadados históricos; o texto integral de cada capítulo pode ser importado via banco SQLite / arquivos de domínio público ou integrado a APIs autorizadas de traduções bíblicas.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Capítulos com Texto Integral e Dossiês Exegéticos no Pacote Demonstrativo:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {curatedChaptersList.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigateToCuratedChapter(ch.bookId, ch.ch)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-left text-xs text-slate-200 font-medium transition-all group"
                >
                  <span className="group-hover:text-amber-300">{ch.label}</span>
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400 group-hover:text-amber-400 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scripture Text Container */}
      {verses.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          {verses.map((verseItem) => {
            const isSelected = selectedVerses.includes(verseItem.verse);
            const highlightCls = getHighlightClass(verseItem.verse);
            const isBm = isVerseBookmarked(verseItem.verse);
            const verseNotes = getVerseNotes(verseItem.verse);

            // Get active text based on selected translation
            const verseText = activeVersion === 'KJV' 
              ? (verseItem.versions?.KJV || verseItem.text)
              : activeVersion === 'AA'
              ? (verseItem.versions?.AA || verseItem.text)
              : (verseItem.versions?.ARC || verseItem.text);

            return (
              <div
                key={verseItem.verse}
                id={`verse-${verseItem.verse}`}
                onClick={() => onToggleVerseSelection(verseItem.verse)}
                className={`group relative p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950/80 border-indigo-500/80 shadow-lg shadow-indigo-950/50 ring-2 ring-indigo-500/40'
                    : 'hover:bg-slate-900/60 border-transparent hover:border-slate-800/80'
                }`}
              >
                {/* Verse Number & Top Quick Actions */}
                <div className="flex items-start gap-3">
                  
                  {/* Verse Badge */}
                  <div className="flex-shrink-0 pt-0.5 font-sans">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-extrabold transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow-md scale-110'
                        : 'bg-slate-800/80 text-amber-400 group-hover:bg-slate-700'
                    }`}>
                      {verseItem.verse}
                    </span>
                  </div>

                  {/* Verse Text Content */}
                  <div className="flex-1">
                    
                    {/* Standard Text Rendering */}
                    {!isParallelView && activeVersion !== 'ORIGINAL' && (
                      <p className={`${fontSizeClass} ${highlightCls} text-slate-100 transition-all leading-relaxed`}>
                        {verseText}
                      </p>
                    )}

                    {/* Interlinear Greek/Hebrew Rendering */}
                    {activeVersion === 'ORIGINAL' && (
                      <div className="space-y-3 font-sans">
                        <p className="text-sm font-serif italic text-amber-300 border-b border-slate-800 pb-2">
                          {verseText}
                        </p>
                        {verseItem.interlinear && verseItem.interlinear.length > 0 ? (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {verseItem.interlinear.map((word, wIdx) => (
                              <div 
                                key={wIdx} 
                                className="flex flex-col p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs min-w-[70px] hover:border-indigo-500/50 transition-colors"
                              >
                                <span className="font-bold text-amber-400 text-sm">{word.hebrewOrGreek}</span>
                                <span className="text-[11px] text-slate-400 italic">{word.transliteration}</span>
                                <span className="text-[10px] text-indigo-300 font-mono">{word.strong}</span>
                                <span className="text-[10px] text-slate-300 font-semibold mt-1 border-t border-slate-800/60 pt-0.5">{word.portuguese}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
                            Dados interlineares (morfologia e lemas gregos/hebraicos) não disponíveis para este versículo no pacote inicial.
                          </div>
                        )}
                      </div>
                    )}

                    {/* Parallel Versions Comparative Columns */}
                    {isParallelView && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2 font-sans">
                        {/* ARC */}
                        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <div className="font-bold text-indigo-400 mb-1 flex items-center justify-between">
                            <span>ARC (Revista e Corrigida)</span>
                          </div>
                          <p className="text-slate-200 leading-relaxed font-serif">
                            {verseItem.versions?.ARC || verseItem.text}
                          </p>
                        </div>

                        {/* AA */}
                        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <div className="font-bold text-purple-400 mb-1 flex items-center justify-between">
                            <span>AA (Almeida Atualizada)</span>
                          </div>
                          <p className="text-slate-200 leading-relaxed font-serif">
                            {verseItem.versions?.AA || verseItem.text}
                          </p>
                        </div>

                        {/* KJV */}
                        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                          <div className="font-bold text-amber-400 mb-1 flex items-center justify-between">
                            <span>KJV (King James)</span>
                          </div>
                          <p className="text-slate-200 leading-relaxed font-serif">
                            {verseItem.versions?.KJV || verseItem.text}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Notes & Bookmark Badges */}
                    {(isBm || verseNotes.length > 0) && (
                      <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-slate-800/60 font-sans">
                        {isBm && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-md">
                            <BookmarkIcon className="w-3 h-3 fill-amber-400" />
                            <span>Marcador</span>
                          </span>
                        )}

                        {verseNotes.map(n => (
                          <button
                            key={n.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenNoteForVerse(verseItem.verse);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded-md hover:bg-indigo-900/60"
                          >
                            <FileText className="w-3 h-3 text-indigo-400" />
                            <span>Nota: {n.title}</span>
                          </button>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Hover Action Shortcuts (Bookmark & Direct Study) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-sans">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(verseItem.verse);
                      }}
                      title="Favoritar / Marcar versículo"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                    >
                      <BookmarkIcon className={`w-3.5 h-3.5 ${isBm ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVerseStudy(verseItem.verse);
                      }}
                      title="Abrir Estudo Teológico Direto"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Chapter Pagination Navigation */}
      <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between gap-4 font-sans">
        <button
          onClick={onPrevChapter}
          disabled={currentChapter <= 1}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Capítulo Anterior</span>
        </button>

        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
          {currentBook.name} &bull; {currentChapter} de {currentBook.chaptersCount}
        </span>

        <button
          onClick={onNextChapter}
          disabled={currentChapter >= currentBook.chaptersCount}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <span>Próximo Capítulo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
