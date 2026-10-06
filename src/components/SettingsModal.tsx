import React from 'react';
import type { UserPreferences } from '../services/storageService';
import { X, SlidersHorizontal, Moon, Sun, Smartphone } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: UserPreferences) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreferences
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <h3 className="font-bold text-white text-base">Preferências de Leitura</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Theme */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Tema Visual:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onUpdatePreferences({ ...preferences, theme: 'dark' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  preferences.theme === 'dark' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Escuro</span>
              </button>

              <button
                onClick={() => onUpdatePreferences({ ...preferences, theme: 'sepia' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  preferences.theme === 'sepia' ? 'bg-amber-700 border-amber-500 text-amber-100' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <span>📜 Sépia</span>
              </button>

              <button
                onClick={() => onUpdatePreferences({ ...preferences, theme: 'light' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  preferences.theme === 'light' ? 'bg-slate-200 border-white text-slate-900' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Claro</span>
              </button>
            </div>
          </div>

          {/* Font Family */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Tipografia Bíblica:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onUpdatePreferences({ ...preferences, fontFamily: 'serif' })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-serif font-bold transition-all ${
                  preferences.fontFamily === 'serif' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Serifada Clássica (Garamond/Merriweather)
              </button>

              <button
                onClick={() => onUpdatePreferences({ ...preferences, fontFamily: 'sans' })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-sans font-bold transition-all ${
                  preferences.fontFamily === 'sans' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Moderna Sans (Inter/System)
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Tamanho do Texto:</label>
            <div className="grid grid-cols-5 gap-1.5">
              {(['sm', 'base', 'lg', 'xl', '2xl'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => onUpdatePreferences({ ...preferences, fontSize: size })}
                  className={`py-2 rounded-xl border text-xs font-bold uppercase transition-all ${
                    preferences.fontSize === size ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PWA & Offline Status */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Smartphone className="w-4 h-4" />
              <span>Suporte a PWA & Funcionamento Offline</span>
            </div>
            <p className="text-slate-400">
              O texto bíblico, anotações, marcadores e análises exegéticas ficam salvos no dispositivo via IndexedDB/LocalStorage para uso sem internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
