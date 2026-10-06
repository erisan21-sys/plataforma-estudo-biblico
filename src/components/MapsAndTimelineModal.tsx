import React, { useState } from 'react';
import { ARTIFACTS_DATABASE, BIBLICAL_MAPS, TIMELINE_DATA } from '../data/archaeologyAndMaps';
import { ConfidenceBadge } from './ConfidenceBadge';
import { X, MapPin, Landmark, Clock, ShieldCheck } from 'lucide-react';

interface MapsAndTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapsAndTimelineModal: React.FC<MapsAndTimelineModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'maps' | 'artifacts' | 'timeline'>('artifacts');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Arqueologia, Geografia e Linha do Tempo Bíblica</h3>
              <p className="text-xs text-slate-400">Evidências materiais, mapas do mundo antigo e cronologia da redenção</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-5 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('artifacts')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'artifacts' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Descobertas Arqueológicas ({ARTIFACTS_DATABASE.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('maps')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'maps' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Mapas Bíblicos ({BIBLICAL_MAPS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'timeline' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Linha do Tempo da Redenção</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* TAB 1: ARTIFACTS */}
          {activeTab === 'artifacts' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Todas as peças possuem documentação epigráfica e datação estratigráfica confirmada.</span>
                </div>
                <ConfidenceBadge level="high" label="Evidência Material Sólida" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ARTIFACTS_DATABASE.map(art => (
                  <div key={art.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 hover:border-emerald-500/40 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-white text-sm">{art.name}</h4>
                      <ConfidenceBadge level={art.confidence} />
                    </div>

                    <div className="text-xs text-slate-400 space-y-0.5">
                      <p><strong>Datação:</strong> {art.period} ({art.discoveryDate})</p>
                      <p><strong>Descoberto em:</strong> {art.locationFound}</p>
                      <p><strong>Custódia Atual:</strong> {art.currentMuseum}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <strong className="text-emerald-400 block mb-0.5">Relevância Bíblica:</strong>
                      {art.biblicalRelevance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: MAPS */}
          {activeTab === 'maps' && (
            <div className="space-y-4">
              {BIBLICAL_MAPS.map(mapItem => (
                <div key={mapItem.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-2">
                    <h4 className="font-bold text-white text-base text-indigo-300">{mapItem.title}</h4>
                    <p className="text-xs text-slate-400">{mapItem.period}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {mapItem.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Locais Principais e Eventos:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {mapItem.keyLocations.map((loc, lIdx) => (
                        <div key={lIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <strong className="text-amber-400 font-bold block">{loc.name}</strong>
                          <p className="text-slate-300">{loc.description}</p>
                          <div className="text-slate-500 text-[11px] pt-1">
                            {loc.biblicalEvents.join(' • ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 relative border-l-2 border-amber-500/40 ml-4 pl-4 sm:pl-6">
              {TIMELINE_DATA.map((evt, eIdx) => (
                <div key={eIdx} className="relative space-y-1.5 pb-6 last:pb-0">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 ring-4 ring-slate-900" />
                  
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 text-xs font-bold">
                      {evt.year}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{evt.period}</span>
                  </div>

                  <h4 className="font-bold text-white text-sm sm:text-base">{evt.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{evt.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
                    <span><strong>Escrituras:</strong> {evt.scriptureReferences.join(', ')}</span>
                    <span><strong>Figuras:</strong> {evt.keyFigures.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
