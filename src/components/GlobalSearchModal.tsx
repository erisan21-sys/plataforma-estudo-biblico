import React, { useState } from 'react';
import { Search, X, BookOpen, Sparkles, MapPin, FileText, ChevronRight } from 'lucide-react';
import { BIBLE_BOOKS } from '../data/bibleBooks';
import { ARTIFACTS_DATABASE } from '../data/archaeologyAndMaps';
import { StorageService } from '../services/storageService';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPassage: (bookId: string, chapter: number, verse?: number) => void;
}

interface SearchResultItem {
  type: string;
  title: string;
  subtitle: string;
  action: () => void;
  icon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPassage
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const notes = StorageService.getNotes();

  // Search Results
  const results: SearchResultItem[] = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    // 1. Search in Books & Themes
    BIBLE_BOOKS.forEach(b => {
      if (b.name.toLowerCase().includes(q) || b.keyTheme.toLowerCase().includes(q) || b.abbr.toLowerCase().includes(q)) {
        results.push({
          type: 'LIVRO',
          title: `${b.name} (${b.abbr})`,
          subtitle: `${b.genre} • Tema: ${b.keyTheme}`,
          action: () => onSelectPassage(b.id, 1),
          icon: BookOpen,
          badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-800'
        });
      }
    });

    // 2. Pre-seeded famous passages match
    const famousVerses = [
      { ref: 'João 1:1', text: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', bookId: 'JHN', ch: 1, v: 1 },
      { ref: 'João 1:14', text: 'E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade.', bookId: 'JHN', ch: 1, v: 14 },
      { ref: 'Romanos 8:1', text: 'Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus.', bookId: 'ROM', ch: 8, v: 1 },
      { ref: 'Romanos 8:28', text: 'Todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.', bookId: 'ROM', ch: 8, v: 28 },
      { ref: 'Gênesis 1:1', text: 'No princípio, criou Deus os céus e a terra.', bookId: 'GEN', ch: 1, v: 1 },
      { ref: 'Salmo 23:1', text: 'O Senhor é o meu pastor; nada me faltará.', bookId: 'PSA', ch: 23, v: 1 },
      { ref: 'Isaías 53:5', text: 'Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades.', bookId: 'ISA', ch: 53, v: 5 },
      { ref: 'Efésios 2:8', text: 'Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.', bookId: 'EPH', ch: 2, v: 8 },
      { ref: 'Filipenses 2:5', text: 'De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus.', bookId: 'PHP', ch: 2, v: 5 },
      { ref: 'Atos 16:31', text: 'Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.', bookId: 'ACT', ch: 16, v: 31 }
    ];

    famousVerses.forEach(fv => {
      if (fv.text.toLowerCase().includes(q) || fv.ref.toLowerCase().includes(q)) {
        results.push({
          type: 'VERSÍCULO',
          title: fv.ref,
          subtitle: fv.text,
          action: () => onSelectPassage(fv.bookId, fv.ch, fv.v),
          icon: Sparkles,
          badgeColor: 'bg-amber-950 text-amber-300 border-amber-800'
        });
      }
    });

    // 3. Search in Archaeology
    ARTIFACTS_DATABASE.forEach(art => {
      if (art.name.toLowerCase().includes(q) || art.biblicalRelevance.toLowerCase().includes(q) || art.locationFound.toLowerCase().includes(q)) {
        results.push({
          type: 'ARQUEOLOGIA',
          title: art.name,
          subtitle: `${art.period} • ${art.biblicalRelevance}`,
          action: () => {},
          icon: MapPin,
          badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800'
        });
      }
    });

    // 4. Search in User Notes
    notes.forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q) || n.tags.some(t => t.toLowerCase().includes(q))) {
        results.push({
          type: 'MINHA NOTA',
          title: `${n.title} (${n.reference})`,
          subtitle: n.content,
          action: () => onSelectPassage(n.bookId, n.chapter, n.verse),
          icon: FileText,
          badgeColor: 'bg-purple-950 text-purple-300 border-purple-800'
        });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400" />
          <input
            type="text"
            autoFocus
            placeholder="Pesquise por palavras, versículos, temas teológicos, personagens ou notas (ex: 'Logos', 'aliança', 'graça', 'João 1:1')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-slate-100 placeholder:text-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs text-slate-400 hover:text-white">
              Limpar
            </button>
          )}
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
          {query.trim().length <= 1 ? (
            <div className="py-12 text-center text-slate-500 text-sm space-y-2">
              <Search className="w-8 h-8 text-slate-600 mx-auto" />
              <p>Digite pelo menos 2 caracteres para pesquisar em toda a base bíblica, teológica e notas.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Logos', 'Aliança', 'Graça', 'Justificação', 'Romanos 8', 'Papiro P52', 'Ketef Hinnom'].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(s)}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-indigo-300 hover:bg-slate-800"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              Nenhum resultado encontrado para "{query}".
            </div>
          ) : (
            results.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    res.action();
                    onClose();
                  }}
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-100 group-hover:text-white">
                          {res.title}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${res.badgeColor}`}>
                          {res.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                        {res.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-2" />
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
