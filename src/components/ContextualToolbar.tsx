import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  SplitSquareVertical, 
  X,
  Palette
} from 'lucide-react';

interface ContextualToolbarProps {
  selectedReference: string;
  selectedVersesCount: number;
  isAllChapterSelected: boolean;
  onOpenStudyTab: (tabId: string) => void;
  onOpenConsultant: () => void;
  onAddNote: () => void;
  onHighlight: (color: 'yellow' | 'green' | 'blue' | 'purple' | 'rose' | 'amber') => void;
  onSelectAllChapter: () => void;
  onClearSelection: () => void;
  onCompareVersions: () => void;
  onShare: () => void;
}

export const ContextualToolbar: React.FC<ContextualToolbarProps> = ({
  selectedReference,
  selectedVersesCount,
  isAllChapterSelected,
  onOpenStudyTab,
  onOpenConsultant,
  onAddNote,
  onHighlight,
  onSelectAllChapter,
  onClearSelection,
  onCompareVersions,
  onShare
}) => {
  const [showColorPalette, setShowColorPalette] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/50 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-indigo-950/60 ring-1 ring-white/10 text-slate-100 flex flex-col gap-2">
        
        {/* Top bar inside toolbar: Reference Badge + Selection info + Action triggers */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 px-1">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>{selectedReference}</span>
            </span>

            <span className="text-xs text-slate-300 hidden sm:inline">
              ({selectedVersesCount} {selectedVersesCount === 1 ? 'versículo selecionado' : 'versículos selecionados'})
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Select Whole Chapter Toggle */}
            <button
              onClick={onSelectAllChapter}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAllChapterSelected
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              <span>{isAllChapterSelected ? 'Capítulo Selecionado' : 'Selecionar Capítulo Todo'}</span>
            </button>

            {/* Clear Selection */}
            <button
              onClick={onClearSelection}
              title="Limpar seleção"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
          
          {/* 1. Estudar (Principal) */}
          <button
            onClick={() => onOpenStudyTab('overview')}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition-all hover:scale-105"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>📖 Estudar</span>
          </button>

          {/* 2. Exegese */}
          <button
            onClick={() => onOpenStudyTab('exegesis')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900/80 text-amber-200 border border-amber-600/50 font-semibold text-xs transition-all"
          >
            <span>🔎 Exegese</span>
          </button>

          {/* 3. Hermenêutica */}
          <button
            onClick={() => onOpenStudyTab('hermeneutics')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900/80 text-purple-200 border border-purple-600/50 font-semibold text-xs transition-all"
          >
            <span>🧠 Hermenêutica</span>
          </button>

          {/* 4. História & Arqueologia */}
          <button
            onClick={() => onOpenStudyTab('history')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-600/50 font-semibold text-xs transition-all"
          >
            <span>🏛 História</span>
          </button>

          {/* 5. Teologia */}
          <button
            onClick={() => onOpenStudyTab('theology')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-violet-950/80 hover:bg-violet-900/80 text-violet-200 border border-violet-600/50 font-semibold text-xs transition-all"
          >
            <span>📚 Teologia</span>
          </button>

          {/* 6. Idiomas Originais */}
          <button
            onClick={() => onOpenStudyTab('languages')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-200 border border-cyan-600/50 font-semibold text-xs transition-all"
          >
            <span>🔤 Idiomas</span>
          </button>

          {/* 7. Referências Cruzadas */}
          <button
            onClick={() => onOpenStudyTab('crossrefs')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-blue-950/80 hover:bg-blue-900/80 text-blue-200 border border-blue-600/50 font-semibold text-xs transition-all"
          >
            <span>🔗 Referências</span>
          </button>

          {/* 8. Aplicação */}
          <button
            onClick={() => onOpenStudyTab('application')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-teal-950/80 hover:bg-teal-900/80 text-teal-200 border border-teal-600/50 font-semibold text-xs transition-all"
          >
            <span>💡 Aplicação</span>
          </button>

          {/* 9. Pregação / Sermão */}
          <button
            onClick={() => onOpenStudyTab('homiletics')}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-950/80 hover:bg-rose-900/80 text-rose-200 border border-rose-600/50 font-semibold text-xs transition-all"
          >
            <span>🎤 Pregação</span>
          </button>

          {/* 10. Consultor IA */}
          <button
            onClick={onOpenConsultant}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
          >
            <span>🤖 Consultor IA</span>
          </button>

          {/* 11. Comparar Versões */}
          <button
            onClick={onCompareVersions}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
          >
            <SplitSquareVertical className="w-3.5 h-3.5 text-sky-400" />
            <span>⚖️ Comparar</span>
          </button>

          {/* 12. Anotar */}
          <button
            onClick={onAddNote}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>📝 Anotar</span>
          </button>

          {/* 13. Destacar (Cores) */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowColorPalette(!showColorPalette)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>🖍 Destacar</span>
            </button>

            {showColorPalette && (
              <div className="absolute bottom-full left-0 mb-2 p-2 bg-slate-900 border border-slate-700 rounded-xl shadow-xl flex items-center gap-2">
                <button onClick={() => { onHighlight('yellow'); setShowColorPalette(false); }} className="w-6 h-6 rounded-full bg-yellow-400 hover:scale-110 transition-transform" title="Amarelo" />
                <button onClick={() => { onHighlight('green'); setShowColorPalette(false); }} className="w-6 h-6 rounded-full bg-emerald-400 hover:scale-110 transition-transform" title="Verde" />
                <button onClick={() => { onHighlight('blue'); setShowColorPalette(false); }} className="w-6 h-6 rounded-full bg-sky-400 hover:scale-110 transition-transform" title="Azul" />
                <button onClick={() => { onHighlight('purple'); setShowColorPalette(false); }} className="w-6 h-6 rounded-full bg-purple-400 hover:scale-110 transition-transform" title="Roxo" />
                <button onClick={() => { onHighlight('rose'); setShowColorPalette(false); }} className="w-6 h-6 rounded-full bg-rose-400 hover:scale-110 transition-transform" title="Rosa" />
              </div>
            )}
          </div>

          {/* 14. Compartilhar */}
          <button
            onClick={onShare}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
          >
            <span>Compartilhar</span>
          </button>

        </div>

      </div>
    </div>
  );
};
