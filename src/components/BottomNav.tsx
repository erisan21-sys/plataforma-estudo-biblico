import React from 'react';
import { BookOpen, Search, Sparkles, MapPin, Bookmark } from 'lucide-react';

interface BottomNavProps {
  onOpenBiblePicker: () => void;
  onOpenSearch: () => void;
  onOpenConsultant: () => void;
  onOpenMapsTimeline: () => void;
  onOpenNotes: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  onOpenBiblePicker,
  onOpenSearch,
  onOpenConsultant,
  onOpenMapsTimeline,
  onOpenNotes
}) => {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 flex items-center justify-around">
      <button
        onClick={onOpenBiblePicker}
        className="flex flex-col items-center gap-0.5 p-1.5 text-slate-400 hover:text-amber-400 focus:text-amber-400 transition-colors"
      >
        <BookOpen className="w-4 h-4" />
        <span className="text-[10px] font-semibold">Bíblia</span>
      </button>

      <button
        onClick={onOpenSearch}
        className="flex flex-col items-center gap-0.5 p-1.5 text-slate-400 hover:text-indigo-400 focus:text-indigo-400 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span className="text-[10px] font-semibold">Busca</span>
      </button>

      <button
        onClick={onOpenConsultant}
        className="flex flex-col items-center gap-0.5 p-1.5 text-purple-400 hover:text-purple-300 transition-colors font-bold"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-900/40">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>
        <span className="text-[9px] font-bold">Consultor IA</span>
      </button>

      <button
        onClick={onOpenMapsTimeline}
        className="flex flex-col items-center gap-0.5 p-1.5 text-slate-400 hover:text-emerald-400 focus:text-emerald-400 transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-[10px] font-semibold">História</span>
      </button>

      <button
        onClick={onOpenNotes}
        className="flex flex-col items-center gap-0.5 p-1.5 text-slate-400 hover:text-amber-400 focus:text-amber-400 transition-colors"
      >
        <Bookmark className="w-4 h-4" />
        <span className="text-[10px] font-semibold">Notas</span>
      </button>
    </nav>
  );
};
