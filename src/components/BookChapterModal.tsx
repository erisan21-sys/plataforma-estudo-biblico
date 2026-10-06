import React, { useState } from 'react';
import { BibleBook } from '../types/bible';
import { BIBLE_BOOKS, GENRES_LIST } from '../data/bibleBooks';
import { X, Search, Sparkles, BookOpen } from 'lucide-react';

interface BookChapterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBook: BibleBook;
  currentChapter: number;
  onSelectBookAndChapter: (book: BibleBook, chapter: number) => void;
}

export const BookChapterModal: React.FC<BookChapterModalProps> = ({
  isOpen,
  onClose,
  currentBook,
  currentChapter,
  onSelectBookAndChapter
}) => {
  const [selectedBook, setSelectedBook] = useState<BibleBook>(currentBook);
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'OT' | 'NT'>('ALL');
  const [genreFilter, setGenreFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isOpen) return null;

  const filteredBooks = BIBLE_BOOKS.filter(book => {
    if (testamentFilter !== 'ALL' && book.testament !== testamentFilter) return false;
    if (genreFilter !== 'ALL' && book.genre !== genreFilter) return false;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      return (
        book.name.toLowerCase().includes(term) ||
        book.abbr.toLowerCase().includes(term) ||
        book.keyTheme.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const handleBookClick = (book: BibleBook) => {
    setSelectedBook(book);
  };

  const handleChapterClick = (chapterNum: number) => {
    onSelectBookAndChapter(selectedBook, chapterNum);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Navegador Canônico das Escrituras
              </h2>
              <p className="text-xs text-slate-400">Selecione o livro e o capítulo para leitura e estudo exegético</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/60 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar livro por nome, abreviação ou tema (ex: Romanos, Jo, Aliança)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-700/70 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Testament & Genre Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800">
              <button
                onClick={() => setTestamentFilter('ALL')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  testamentFilter === 'ALL' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Todos (66)
              </button>
              <button
                onClick={() => setTestamentFilter('OT')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  testamentFilter === 'OT' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Antigo Testamento (39)
              </button>
              <button
                onClick={() => setTestamentFilter('NT')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  testamentFilter === 'NT' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Novo Testamento (27)
              </button>
            </div>

            {/* Quick Genre Dropdown */}
            <select
              value={genreFilter}
              aria-label="Filtrar por Gênero Literário"
              onChange={(e) => setGenreFilter(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="ALL">Todos os Gêneros Literários</option>
              {GENRES_LIST.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Body: Left = Books List, Right = Chapters Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[350px]">
          
          {/* Books List (col-7 on md) */}
          <div className="md:col-span-7 overflow-y-auto p-3 sm:p-4 border-r border-slate-800/80 max-h-[50vh] md:max-h-none space-y-1">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2 flex items-center justify-between">
              <span>Livros Bíblicos ({filteredBooks.length})</span>
              <span className="text-[10px] text-slate-500">Toque para ver os capítulos</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {filteredBooks.map(book => {
                const isSelected = selectedBook.id === book.id;
                const isOT = book.testament === 'OT';

                return (
                  <button
                    key={book.id}
                    onClick={() => handleBookClick(book)}
                    className={`flex items-start gap-2 p-2.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-indigo-900/60 border-indigo-400 text-white shadow-md ring-1 ring-indigo-400'
                        : 'bg-slate-950/40 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                      isOT ? 'bg-amber-950/80 text-amber-300 border border-amber-800/50' : 'bg-purple-950/80 text-purple-300 border border-purple-800/50'
                    }`}>
                      {book.abbr}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs truncate">{book.name}</div>
                      <div className="text-[10px] text-slate-400 truncate">{book.genre}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-10 text-slate-500 text-sm">
                Nenhum livro encontrado com os filtros atuais.
              </div>
            )}
          </div>

          {/* Chapters Grid (col-5 on md) */}
          <div className="md:col-span-5 bg-slate-950/50 p-4 sm:p-5 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Selected Book Header Card */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-4 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-extrabold text-lg">{selectedBook.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {selectedBook.testament === 'OT' ? 'Antigo Testamento' : 'Novo Testamento'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedBook.chaptersCount} Capítulos
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  <strong className="text-slate-200">Tema Central:</strong> {selectedBook.keyTheme}
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-400">
                  <span><strong>Autor:</strong> {selectedBook.author}</span>
                  <span><strong>Data:</strong> {selectedBook.approxDate}</span>
                </div>
              </div>

              {/* Chapters Grid */}
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Selecione o Capítulo:
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                {Array.from({ length: selectedBook.chaptersCount }, (_, i) => i + 1).map(num => {
                  const isCurrent = selectedBook.id === currentBook.id && num === currentChapter;

                  return (
                    <button
                      key={num}
                      onClick={() => handleChapterClick(num)}
                      className={`h-11 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                          : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-200 border border-slate-800'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Hint */}
            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Dica: Ao selecionar qualquer versículo no texto, a bancada exegética abrirá automaticamente.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
