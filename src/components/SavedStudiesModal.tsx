import React, { useState } from 'react';
import type { SavedFullStudy } from '../types/bible';
import { StorageService } from '../services/storageService';
import { X, BookMarked, Trash2, Download, ExternalLink, Calendar } from 'lucide-react';

interface SavedStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStudy: (study: SavedFullStudy) => void;
}

export const SavedStudiesModal: React.FC<SavedStudiesModalProps> = ({
  isOpen,
  onClose,
  onOpenStudy
}) => {
  const [studies, setStudies] = useState<SavedFullStudy[]>(StorageService.getSavedStudies());

  if (!isOpen) return null;

  const handleDelete = (id: string) => {
    StorageService.deleteStudy(id);
    setStudies(StorageService.getSavedStudies());
  };

  const handleExportMarkdown = (study: SavedFullStudy) => {
    const mdContent = `# DOSSIÊ DE ESTUDO BÍBLICO: ${study.reference}
Data de Realização: ${study.createdAt}

## Síntese Teológica
${study.dossier.summary}

## Texto Bíblico (ARC)
${study.dossier.biblicalText.ARC}

## Hermenêutica
- **Gênero Literário:** ${study.dossier.hermeneutics.literaryGenre}
- **Intenção Autoral:** ${study.dossier.hermeneutics.authorialIntent}

## História & Arqueologia
- **Período:** ${study.dossier.history.historicalPeriod}
- **Império:** ${study.dossier.history.rulingEmpire}

## Teologia Sistemática
- **Cristologia:** ${study.dossier.theology.systematic.cristologia || 'N/A'}
- **Soteriologia:** ${study.dossier.theology.systematic.soteriologia || 'N/A'}

## Esboço Homilético: "${study.dossier.homiletics.sermonTitle}"
**Proposição:** ${study.dossier.homiletics.thematicProposition}
${study.dossier.homiletics.mainPoints.map(p => `### Ponto ${p.pointNumber}: ${p.title}\n${p.biblicalExplanation}\n- *Ilustração:* ${p.illustrativeAnalogy}`).join('\n\n')}

## Minhas Anotações
${study.notes || 'Sem anotações complementares.'}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Estudo_${study.reference.replace(/[:– ]/g, '_')}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Biblioteca de Estudos Salvos</h3>
              <p className="text-xs text-slate-400">Dossiês exegéticos e teológicos completos gravados</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {studies.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm space-y-2">
              <BookMarked className="w-10 h-10 text-slate-600 mx-auto" />
              <p>Você ainda não possui estudos completos salvos.</p>
              <p className="text-xs text-slate-500">Ao abrir qualquer passagem na bancada de estudo, clique em "Salvar Estudo".</p>
            </div>
          ) : (
            studies.map(study => (
              <div
                key={study.id}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold text-xs">
                      {study.reference}
                    </span>
                    <h4 className="font-bold text-white text-sm">{study.title}</h4>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleExportMarkdown(study)}
                      title="Exportar Markdown"
                      className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(study.id)}
                      title="Excluir"
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2">
                  {study.dossier.summary}
                </p>

                {study.notes && (
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-slate-300 italic">
                    <strong>Minhas notas:</strong> {study.notes}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {study.createdAt}
                  </span>

                  <button
                    onClick={() => {
                      onOpenStudy(study);
                      onClose();
                    }}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold"
                  >
                    <span>Abrir Dossiê Completo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
