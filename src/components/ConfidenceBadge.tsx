import React, { useState } from 'react';
import { EpistemicConfidence } from '../types/bible';
import { CheckCircle2, AlertTriangle, HelpCircle, Info } from 'lucide-react';

interface ConfidenceBadgeProps {
  level: EpistemicConfidence;
  label?: string;
  className?: string;
  showExplanation?: boolean;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  level,
  label,
  className = '',
  showExplanation = false
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const config = {
    high: {
      color: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/60',
      icon: CheckCircle2,
      defaultLabel: 'Alta Confiança',
      description: 'Fato textual sólido, consenso histórico-gramatical e evidência manuscrita forte.'
    },
    academic_debate: {
      color: 'bg-amber-950/80 text-amber-300 border-amber-500/40 hover:bg-amber-900/60',
      icon: AlertTriangle,
      defaultLabel: 'Debate Acadêmico',
      description: 'Pluralidade de interpretações hermenêuticas e posições teológicas legítimas.'
    },
    hypothesis: {
      color: 'bg-rose-950/80 text-rose-300 border-rose-500/40 hover:bg-rose-900/60',
      icon: HelpCircle,
      defaultLabel: 'Hipótese / Reconstrução',
      description: 'Proposta com evidência empírica ou textual indireta; interpretação não consensual.'
    }
  }[level];

  const Icon = config.icon;

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-200 cursor-pointer ${config.color} ${className}`}
      >
        <Icon className="w-3.5 h-3.5" />
        <span>{label || config.defaultLabel}</span>
        <Info className="w-3 h-3 opacity-60 ml-0.5" />
      </button>

      {/* Tooltip / Explanation popover */}
      {(showTooltip || showExplanation) && (
        <div className="absolute z-50 bottom-full left-0 mb-2 w-64 p-3 bg-slate-900/95 text-slate-200 text-xs rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-md pointer-events-none animate-in fade-in duration-200">
          <div className="font-semibold text-slate-100 flex items-center gap-1.5 mb-1">
            <Icon className="w-4 h-4 text-emerald-400" />
            <span>Critério Epistêmico: {label || config.defaultLabel}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{config.description}</p>
        </div>
      )}
    </div>
  );
};
