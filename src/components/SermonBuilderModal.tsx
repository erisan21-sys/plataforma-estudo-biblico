import React, { useState } from 'react';
import type { HomileticStructure } from '../types/bible';
import { X, Mic2, Copy, Check } from 'lucide-react';

interface SermonBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHomiletics?: HomileticStructure;
  reference?: string;
}

export const SermonBuilderModal: React.FC<SermonBuilderModalProps> = ({
  isOpen,
  onClose,
  initialHomiletics,
  reference = 'João 1:1–5'
}) => {
  const [title, setTitle] = useState(initialHomiletics?.sermonTitle || 'O Verbo Eterno e a Luz na Escuridão');
  const [proposition, setProposition] = useState(initialHomiletics?.thematicProposition || 'Jesus Cristo é o Deus eterno que Se revelou para nos conceder vida plena.');
  const [introduction, setIntroduction] = useState(initialHomiletics?.exordium || 'Desde o início dos tempos, o ser humano busca a razão de sua existência.');
  const [pointsText, setPointsText] = useState(
    initialHomiletics?.mainPoints.map(p => `Ponto ${p.pointNumber}: ${p.title}\n- Explicação: ${p.biblicalExplanation}\n- Ilustração: ${p.illustrativeAnalogy}\n- Aplicação: ${p.practicalApplication}`).join('\n\n') || ''
  );
  const [conclusion, setConclusion] = useState(initialHomiletics?.conclusion || 'A luz de Cristo dissipa todo medo.');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySermon = () => {
    const text = `ESBOÇO DE SERMÃO EXPOSITIVO
Texto Base: ${reference}
Título: "${title}"
Tese Homilética: ${proposition}

I. INTRODUÇÃO:
${introduction}

II. CORPO DA MENSAGEM:
${pointsText}

III. CONCLUSÃO:
${conclusion}
`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Mic2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Laboratório Homilético & Preparador de Sermões</h3>
              <p className="text-xs text-slate-400">Esboço expositivo estruturado a partir de {reference}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySermon}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>
            <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">Título do Sermão:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Proposição / Tese Homilética:</label>
            <input
              type="text"
              value={proposition}
              onChange={(e) => setProposition(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Introdução & Gancho Inicial:</label>
            <textarea
              rows={3}
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Corpo da Mensagem (Pontos, Subpontos e Ilustrações):</label>
            <textarea
              rows={8}
              value={pointsText}
              onChange={(e) => setPointsText(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Conclusão & Apelo Pastoral:</label>
            <textarea
              rows={3}
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300">
            ⚠️ <em>Lembrete Teológico: Este esboço é um roteiro auxiliar para pregação expositiva. A autoridade procede unicamente do Espírito Santo e do texto bíblico fielmente proclamado.</em>
          </div>
        </div>
      </div>
    </div>
  );
};
