import React from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Bookmark, 
  MapPin, 
  Mic2, 
  Sun, 
  Moon, 
  BookMarked,
  Layers,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react';
import { BibleBook, BibleVersion, StudyMode } from '../types/bible';

interface HeaderProps {
  currentBook: BibleBook;
  currentChapter: number;
  activeVersion: BibleVersion;
  activeMode: StudyMode;
  theme: 'dark' | 'light' | 'sepia';
  onOpenBookPicker: () => void;
  onSelectVersion: (version: BibleVersion) => void;
  onSelectMode: (mode: StudyMode) => void;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onOpenNotes: () => void;
  onOpenSavedStudies: () => void;
  onOpenConsultant: () => void;
  onOpenMapsTimeline: () => void;
  onOpenSermonBuilder: () => void;
  onOpenSettings: () => void;
}

export const STUDY_MODES_CONFIG: { mode: StudyMode; label: string; icon: string; color: string }[] = [
  { mode: 'reading', label: 'Leitura Limpa', icon: '📖', color: 'from-blue-600 to-indigo-600' },
  { mode: 'study', label: 'Estudo Geral', icon: '📚', color: 'from-indigo-600 to-purple-600' },
  { mode: 'exegesis', label: 'Exegese', icon: '🔎', color: 'from-amber-600 to-orange-600' },
  { mode: 'hermeneutics', label: 'Hermenêutica', icon: '🧠', color: 'from-purple-600 to-pink-600' },
  { mode: 'history', label: 'História & Arqueologia', icon: '🏛', color: 'from-emerald-600 to-teal-600' },
  { mode: 'languages', label: 'Idiomas Originais', icon: '🔤', color: 'from-cyan-600 to-blue-600' },
  { mode: 'theology', label: 'Teologia Sistemática', icon: '🏛️', color: 'from-violet-600 to-indigo-600' },
  { mode: 'homiletics', label: 'Pregação & Sermão', icon: '🎤', color: 'from-rose-600 to-red-600' },
  { mode: 'devotional', label: 'Devocional', icon: '🕊', color: 'from-teal-600 to-emerald-600' },
  { mode: 'academic', label: 'Acadêmico', icon: '🎓', color: 'from-slate-600 to-slate-800' }
];

export const Header: React.FC<HeaderProps> = ({
  currentBook,
  currentChapter,
  activeVersion,
  activeMode,
  theme,
  onOpenBookPicker,
  onSelectVersion,
  onSelectMode,
  onToggleTheme,
  onOpenSearch,
  onOpenNotes,
  onOpenSavedStudies,
  onOpenConsultant,
  onOpenMapsTimeline,
  onOpenSermonBuilder,
  onOpenSettings
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 shadow-lg shadow-indigo-500/20 text-white font-bold text-lg ring-1 ring-white/20">
              <BookOpen className="w-5 h-5 text-amber-200" />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white bg-gradient-to-r from-white via-indigo-100 to-amber-200 bg-clip-text text-transparent">
                  Bíblia & Teologia
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  IA & Exegese
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Plataforma Hermenêutica de Estudo Bíblico Profundo</p>
            </div>
          </div>

          {/* Center: Book/Chapter & Version Navigator */}
          <div className="flex items-center gap-2">
            {/* Book & Chapter Button */}
            <button
              onClick={onOpenBookPicker}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-white border border-slate-700/70 shadow-inner hover:border-indigo-500/50 transition-all font-semibold text-sm group"
            >
              <span className="text-amber-400 font-bold group-hover:scale-105 transition-transform">{currentBook.abbr}</span>
              <span className="text-slate-100">{currentBook.name} {currentChapter}</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </button>

            {/* Bible Version Picker */}
            <div className="relative">
              <select
                value={activeVersion}
                aria-label="Selecionar Versão Bíblica"
                onChange={(e) => onSelectVersion(e.target.value as BibleVersion)}
                className="appearance-none px-3 py-1.5 pr-7 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/70 text-xs font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ARC">ARC (Revista e Corrigida)</option>
                <option value="AA">AA (Almeida Atualizada)</option>
                <option value="KJV">KJV (King James Bible)</option>
                <option value="ORIGINAL">Interlinear (Grego/Hebraico)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Study Mode Selector Dropdown */}
            <div className="hidden md:flex relative items-center">
              <select
                value={activeMode}
                aria-label="Selecionar Modo de Estudo"
                onChange={(e) => onSelectMode(e.target.value as StudyMode)}
                className="appearance-none px-3 py-1.5 pr-8 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-500/40 text-xs font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {STUDY_MODES_CONFIG.map(m => (
                  <option key={m.mode} value={m.mode}>
                    {m.icon} Modo {m.label}
                  </option>
                ))}
              </select>
              <Layers className="w-3.5 h-3.5 text-indigo-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              title="Pesquisar Palavras, Versículos e Temas (Ctrl+K)"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* AI Consultant */}
            <button
              onClick={onOpenConsultant}
              title="Consultor Teológico IA"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-900/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span className="hidden lg:inline">Consultor IA</span>
            </button>

            {/* Maps & Timeline */}
            <button
              onClick={onOpenMapsTimeline}
              title="Mapas Bíblicos e Arqueologia"
              className="hidden lg:flex p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
            </button>

            {/* Sermon Builder */}
            <button
              onClick={onOpenSermonBuilder}
              title="Preparador de Sermões e Esboços"
              className="hidden lg:flex p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <Mic2 className="w-4 h-4 text-rose-400" />
            </button>

            {/* Notes & Bookmarks */}
            <button
              onClick={onOpenNotes}
              title="Minhas Anotações e Destaques"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors relative"
            >
              <Bookmark className="w-4 h-4 text-amber-400" />
            </button>

            {/* Saved Studies */}
            <button
              onClick={onOpenSavedStudies}
              title="Estudos Salvos"
              className="hidden sm:flex p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <BookMarked className="w-4 h-4 text-cyan-400" />
            </button>

            {/* Settings & Display */}
            <button
              onClick={onOpenSettings}
              title="Ajustar Tipografia e Visualização"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title="Alternar Tema Claro / Escuro / Sépia"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-300" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
