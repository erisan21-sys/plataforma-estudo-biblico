import React, { useState } from 'react';
import { ComprehensiveStudyDossier, EpistemicConfidence } from '../types/bible';
import { ConfidenceBadge } from './ConfidenceBadge';
import { generateAiConsultantResponse, SUGGESTED_CONSULTANT_PROMPTS } from '../services/aiConsultantService';
import { 
  X, 
  BookOpen, 
  Sparkles, 
  Bookmark, 
  Send, 
  CheckCircle2, 
  AlertTriangle,
  Printer
} from 'lucide-react';

interface StudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  dossier: ComprehensiveStudyDossier;
  initialTab?: string;
  onSaveStudy: (dossier: ComprehensiveStudyDossier, customNotes: string) => void;
}

export const StudyDrawer: React.FC<StudyDrawerProps> = ({
  isOpen,
  onClose,
  dossier,
  initialTab = 'overview',
  onSaveStudy
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [customStudyNotes, setCustomStudyNotes] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isDeepAcademicLanguageMode, setIsDeepAcademicLanguageMode] = useState<boolean>(false);

  // AI Consultant state
  const [consultantMessages, setConsultantMessages] = useState<Array<{
    id: string;
    sender: 'user' | 'consultant';
    timestamp: string;
    content: string;
    confidence?: EpistemicConfidence;
  }>>([
    {
      id: 'init_1',
      sender: 'consultant',
      timestamp: 'Agora',
      content: `Olá! Sou seu **Consultor Teológico Estruturado** (Base Local Offline).\nO contexto ativo está ancorado em **${dossier.reference}** (${dossier.hermeneutics.literaryGenre}).\n\n*Nota de Transparência: Este módulo offline opera com dados heurísticos e exegéticos estruturados locais. Pode ser conectado a APIs de LLM externas (OpenAI / Anthropic / Groq / Ollama local) para geração aberta.*`,
      confidence: 'high'
    }
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [isConsultantTyping, setIsConsultantTyping] = useState<boolean>(false);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    const userMsg = {
      id: `u_${Date.now()}`,
      sender: 'user' as const,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      content: text
    };

    setConsultantMessages(prev => [...prev, userMsg]);
    if (!textToSend) setUserInput('');
    setIsConsultantTyping(true);

    setTimeout(() => {
      const resp = generateAiConsultantResponse(text, dossier);
      setConsultantMessages(prev => [...prev, resp]);
      setIsConsultantTyping(false);
    }, 400);
  };

  const handleSaveThisStudy = () => {
    onSaveStudy(dossier, customStudyNotes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const tabsConfig = [
    { id: 'overview', label: 'Visão Geral', icon: '📖', color: 'text-amber-400' },
    { id: 'exegesis', label: 'Exegese', icon: '🔎', color: 'text-amber-400' },
    { id: 'hermeneutics', label: 'Hermenêutica', icon: '🧠', color: 'text-purple-400' },
    { id: 'history', label: 'História & Arqueologia', icon: '🏛', color: 'text-emerald-400' },
    { id: 'theology', label: 'Teologia', icon: '📚', color: 'text-violet-400' },
    { id: 'languages', label: 'Idiomas Bíblicos', icon: '🔤', color: 'text-cyan-400' },
    { id: 'crossrefs', label: 'Referências Cruzadas', icon: '🔗', color: 'text-blue-400' },
    { id: 'differing', label: 'Debates & Visões', icon: '⚖️', color: 'text-orange-400' },
    { id: 'application', label: 'Aplicação & Estudo', icon: '💡', color: 'text-teal-400' },
    { id: 'homiletics', label: 'Homilética & Sermão', icon: '🎤', color: 'text-rose-400' },
    { id: 'consultant', label: 'Consultor IA', icon: '🤖', color: 'text-purple-300' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-5xl h-full bg-slate-900 border-l border-slate-700/80 shadow-2xl flex flex-col text-slate-100 overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  {dossier.reference}
                </h2>
                <ConfidenceBadge level="high" label="Texto Canônico" />
              </div>
              <p className="text-xs text-slate-400">
                {dossier.hermeneutics.literaryGenre} &bull; {dossier.history.historicalPeriod}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Save Study Button */}
            <button
              onClick={handleSaveThisStudy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isSaved
                  ? 'bg-emerald-600 text-white border-emerald-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              <span>{isSaved ? 'Estudo Salvo!' : 'Salvar Estudo'}</span>
            </button>

            {/* Print / Export */}
            <button
              onClick={() => window.print()}
              title="Imprimir / Salvar como PDF via Diálogo do Navegador (Ctrl+P)"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Scrollbar */}
        <div className="border-b border-slate-800/80 bg-slate-950/70 px-4 flex items-center gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
          {tabsConfig.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold border-b-2 transition-all ${
                  isActive
                    ? 'border-indigo-400 text-white bg-slate-800/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: VISÃO GERAL */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Summary Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/30">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Síntese Teológica & Dossiê Executivo</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {dossier.summary}
                </p>
              </div>

              {/* Biblical Text Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Texto Bíblico Selecionado (Almeida Revista e Corrigida)
                </h3>
                <p className="text-base sm:text-lg font-serif text-amber-100/90 leading-relaxed italic">
                  {dossier.biblicalText.ARC}
                </p>
                {dossier.biblicalText.originalPreview && (
                  <p className="text-xs font-serif text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                    <strong>Texto Original:</strong> {dossier.biblicalText.originalPreview}
                  </p>
                )}
              </div>

              {/* Quick Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div 
                  onClick={() => setActiveTab('exegesis')}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all"
                >
                  <div className="text-xs font-bold text-amber-400 mb-1">🔎 Exegese Gramatical</div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {dossier.exegesis[0]?.grammaticalAnalysis || 'Análise de verbos, sintaxe e termos-chave.'}
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('hermeneutics')}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition-all"
                >
                  <div className="text-xs font-bold text-purple-400 mb-1">🧠 Intenção do Autor</div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {dossier.hermeneutics.authorialIntent}
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('history')}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 cursor-pointer transition-all"
                >
                  <div className="text-xs font-bold text-emerald-400 mb-1">🏛 Época & Arqueologia</div>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {dossier.history.historicalPeriod} &bull; {dossier.history.rulingEmpire}
                  </p>
                </div>
              </div>

              {/* Personal Notes on This Study */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Suas Anotações e Conclusões Pessoais sobre este Estudo:</span>
                  <span className="text-[10px] text-slate-500">Salvo junto ao dossiê</span>
                </label>
                <textarea
                  rows={3}
                  value={customStudyNotes}
                  onChange={(e) => setCustomStudyNotes(e.target.value)}
                  placeholder="Escreva suas reflexões, insights exegéticos ou aplicações para sua mensagem..."
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>
          )}

          {/* TAB 2: EXEGESE */}
          {activeTab === 'exegesis' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                    <span>🔎 Análise Exegética e Gramatical Verso por Verso</span>
                  </h3>
                  <p className="text-xs text-slate-400">Sintaxe, variantes textuais, estrutura literária e termos fundamentais</p>
                </div>
                <ConfidenceBadge level="high" label="Consenso Manuscrito Sólido" />
              </div>

              {dossier.exegesis.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  {/* Verse Header */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
                      Versículo {item.verseNumber}
                    </span>
                    <ConfidenceBadge level={item.confidence} />
                  </div>

                  {/* Original Text & Transliteration */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-base sm:text-lg font-bold text-amber-400 font-serif mb-1">
                      {item.originalText}
                    </div>
                    <div className="text-xs text-slate-400 italic">
                      {item.transliteration}
                    </div>
                  </div>

                  {/* Grammatical Analysis */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Estrutura Gramatical & Morfologia:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.grammaticalAnalysis}
                    </p>
                  </div>

                  {/* Syntax & Structure */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Sintaxe & Dinâmica Literária:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.syntaxAndStructure}
                    </p>
                  </div>

                  {/* Key Terms */}
                  {item.keyTerms && item.keyTerms.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Termos Exegéticos Cruciais:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {item.keyTerms.map((t, tIdx) => (
                          <div key={tIdx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-indigo-300">{t.term}</span>
                              <span className="text-[10px] font-mono text-amber-400">{t.strong}</span>
                            </div>
                            <p className="text-slate-400 mb-1"><strong className="text-slate-300">Campo:</strong> {t.semanticRange}</p>
                            <p className="text-slate-300"><strong className="text-slate-200">Relevância:</strong> {t.theologicalSignificance}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Textual Variants */}
                  {item.textualVariants && item.textualVariants.length > 0 && (
                    <div className="pt-3 border-t border-slate-800/80">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        <span>Crítica Textual & Testemunho dos Manuscritos:</span>
                      </h4>
                      {item.textualVariants.map((v, vIdx) => (
                        <div key={vIdx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">Manuscritos: {v.manuscripts}</span>
                            <ConfidenceBadge level={v.confidence} />
                          </div>
                          <p className="text-slate-400"><strong className="text-slate-300">Leitura:</strong> {v.reading}</p>
                          <p className="text-slate-300"><strong className="text-slate-200">Avaliação do Crítico:</strong> {v.evaluation}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: HERMENÊUTICA */}
          {activeTab === 'hermeneutics' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-purple-400">
                    🧠 Princípios Hermenêuticos e Contexto Canônico
                  </h3>
                  <p className="text-xs text-slate-400">Gênero literário, intenção autoral e relação com o restante das Escrituras</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gênero Literário */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    Gênero Literário
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    {dossier.hermeneutics.literaryGenre}
                  </p>
                </div>

                {/* Intenção Comunicativa */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    Intenção Autoral Original
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    {dossier.hermeneutics.authorialIntent}
                  </p>
                </div>

                {/* Contexto Imediato */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    Contexto Imediato (Perícope)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    {dossier.hermeneutics.immediateContext}
                  </p>
                </div>

                {/* Contexto Amplo */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    Contexto Amplo do Livro
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    {dossier.hermeneutics.broadContext}
                  </p>
                </div>
              </div>

              {/* Trajetória Canônica */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Trajetória Canônica & Alianças (Covenant History)
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {dossier.hermeneutics.canonicalTrajectory}
                </p>
              </div>

              {/* Princípios de Interpretação */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Regras de Interpretação Aplicadas ao Trecho:
                </span>
                <ul className="space-y-2">
                  {dossier.hermeneutics.interpretativePrinciples.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: HISTÓRIA & ARQUEOLOGIA */}
          {activeTab === 'history' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-emerald-400">
                    🏛 Contexto Histórico, Geográfico e Descobertas Arqueológicas
                  </h3>
                  <p className="text-xs text-slate-400">Impérios, reis, cidades, costumes e evidências materiais</p>
                </div>
              </div>

              {/* Matriz de Fatos vs Hipóteses */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Classificação Epistemológica dos Dados Históricos:</span>
                </h4>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Fato / Consenso */}
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 space-y-1">
                    <div className="flex items-center gap-2">
                      <ConfidenceBadge level="high" label="Fato / Consenso Histórico" />
                    </div>
                    {dossier.history.consensusVsHypothesis.factOrConsensus.map((f, i) => (
                      <p key={i} className="text-emerald-200/90">• {f}</p>
                    ))}
                  </div>

                  {/* Debate Acadêmico */}
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 space-y-1">
                    <div className="flex items-center gap-2">
                      <ConfidenceBadge level="academic_debate" label="Debate Acadêmico" />
                    </div>
                    {dossier.history.consensusVsHypothesis.scholarlyDebate.map((d, i) => (
                      <p key={i} className="text-amber-200/90">• {d}</p>
                    ))}
                  </div>

                  {/* Hipótese */}
                  {dossier.history.consensusVsHypothesis.reconstructionHypothesis.length > 0 && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/50 space-y-1">
                      <div className="flex items-center gap-2">
                        <ConfidenceBadge level="hypothesis" label="Hipótese de Reconstrução" />
                      </div>
                      {dossier.history.consensusVsHypothesis.reconstructionHypothesis.map((h, i) => (
                        <p key={i} className="text-rose-200/90">• {h}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Historical Context Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm space-y-2">
                  <span className="font-bold text-emerald-400 uppercase text-xs">Império Hegemônico & Governantes</span>
                  <p className="text-slate-200"><strong>Império:</strong> {dossier.history.rulingEmpire}</p>
                  <p className="text-slate-300"><strong>Figuras-Chave:</strong> {dossier.history.keyRulersAndFigures.join(', ')}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm space-y-2">
                  <span className="font-bold text-emerald-400 uppercase text-xs">Geografia Bíblica</span>
                  <p className="text-slate-200"><strong>Localização:</strong> {dossier.history.geography.location}</p>
                  <p className="text-slate-300">{dossier.history.geography.significance}</p>
                </div>
              </div>

              {/* Archaeological Findings */}
              {dossier.history.archaeologicalFindings.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Descobertas Arqueológicas e Inscrições Antigas Relacionadas:
                  </h4>
                  <div className="space-y-3">
                    {dossier.history.archaeologicalFindings.map((art, aIdx) => (
                      <div key={aIdx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{art.name} ({art.date})</span>
                          <ConfidenceBadge level={art.confidence} />
                        </div>
                        <p className="text-slate-400 text-xs"><strong>Local Encontrado:</strong> {art.locationFound}</p>
                        <p className="text-slate-200">{art.significanceToText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: TEOLOGIA */}
          {activeTab === 'theology' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-violet-400">
                  📚 Teologia Bíblica e Sistemática (Loci Dogmáticos)
                </h3>
                <p className="text-xs text-slate-400">A relação com as 10 grandes doutrinas e a história da revelação progressiva</p>
              </div>

              {/* Teologia Sistemática - Doutrinas Ativas */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Loci da Teologia Sistemática Vinculados a este Texto:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {dossier.theology.systematic.cristologia && (
                    <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-indigo-400 uppercase">Cristologia (Doutrina de Cristo)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.cristologia}</p>
                    </div>
                  )}

                  {dossier.theology.systematic.teologiaPropria && (
                    <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-purple-400 uppercase">Teologia Própria (Doutrina de Deus & Trindade)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.teologiaPropria}</p>
                    </div>
                  )}

                  {dossier.theology.systematic.pneumatologia && (
                    <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-cyan-400 uppercase">Pneumatologia (Doutrina do Espírito Santo)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.pneumatologia}</p>
                    </div>
                  )}

                  {dossier.theology.systematic.soteriologia && (
                    <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-teal-400 uppercase">Soteriologia (Doutrina da Salvação & Graça)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.soteriologia}</p>
                    </div>
                  )}

                  {dossier.theology.systematic.antropologia && (
                    <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-amber-400 uppercase">Antropologia Bíblica (Natureza Humana)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.antropologia}</p>
                    </div>
                  )}

                  {dossier.theology.systematic.bibliologia && (
                    <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 space-y-1.5">
                      <span className="text-xs font-bold text-blue-400 uppercase">Bibliologia (Revelação & Escritura)</span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.theology.systematic.bibliologia}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Teologia Bíblica - Progressão */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Trajetória da Teologia Bíblica e História da Redenção:
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <p className="text-slate-300"><strong>No Livro:</strong> {dossier.theology.biblicalProgression.inThisBook}</p>
                  <p className="text-slate-300"><strong>No Autor:</strong> {dossier.theology.biblicalProgression.inAuthorCorpus}</p>
                  <p className="text-slate-300"><strong>No Testamento:</strong> {dossier.theology.biblicalProgression.inTestament}</p>
                  <p className="text-slate-300"><strong>Desdobramento Canônico:</strong> {dossier.theology.biblicalProgression.canonicalUnfolding}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: IDIOMAS BÍBLICOS */}
          {activeTab === 'languages' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-cyan-400">
                    🔤 Análise Linguística dos Idiomas Originais (Grego / Hebraico)
                  </h3>
                  <p className="text-xs text-slate-400">Transliteração, Strong, campos semânticos e aparato acadêmico</p>
                </div>

                {/* Mode Toggle: Didático vs Acadêmico */}
                <button
                  onClick={() => setIsDeepAcademicLanguageMode(!isDeepAcademicLanguageMode)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    isDeepAcademicLanguageMode
                      ? 'bg-cyan-600 text-white border-cyan-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  {isDeepAcademicLanguageMode ? 'Modo Acadêmico Avançado' : 'Modo Didático Simples'}
                </button>
              </div>

              <div className="space-y-4">
                {dossier.languages.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-slate-400 text-xs sm:text-sm space-y-1">
                    <p className="font-semibold text-slate-300">Vocabulário original e lemas léxicos não incluídos para esta perícope no pacote básico local.</p>
                    <p className="text-slate-500">Para ver a análise morfológica completa com grego/hebraico e códigos Strong, consulte os capítulos modelo como <strong>João 1</strong>, <strong>Romanos 8</strong>, <strong>Gênesis 1</strong> ou <strong>Salmo 23</strong>.</p>
                  </div>
                ) : (
                  dossier.languages.map((lang, lIdx) => (
                    <div key={lIdx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl sm:text-2xl font-bold text-cyan-300 font-serif">{lang.termOriginal}</span>
                          <span className="text-xs text-slate-400 italic">({lang.transliteration})</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 font-mono text-xs text-amber-400 font-bold">
                          {lang.strongId}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                        <p className="text-slate-300"><strong>Idioma:</strong> {lang.language}</p>
                        <p className="text-slate-300"><strong>Morfologia:</strong> {lang.morphology}</p>
                        <p className="text-slate-300"><strong>Significado Literal:</strong> {lang.literalMeaning}</p>
                        <p className="text-slate-300"><strong>Ocorrências Bíblicas:</strong> {lang.biblicalOccurrences} vezes</p>
                      </div>

                      <div>
                        <strong className="text-xs text-slate-400 uppercase">Campo Semântico / Acecepções:</strong>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {lang.semanticDomain.map((sd, sIdx) => (
                            <span key={sIdx} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-cyan-200">
                              {sd}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                        <strong className="text-indigo-300 block mb-1">Contexto & Peso Teológico:</strong>
                        <p className="text-slate-200 leading-relaxed">{lang.theologicalContext}</p>
                      </div>

                      {/* Academic Apparatus when active */}
                      {isDeepAcademicLanguageMode && lang.academicApparatus && (
                        <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400">
                          <strong>Aparato Léxico:</strong> {lang.academicApparatus}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 7: REFERÊNCIAS CRUZADAS */}
          {activeTab === 'crossrefs' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-blue-400">
                  🔗 Referências Cruzadas, Ecos e Paralelos Bíblicos
                </h3>
                <p className="text-xs text-slate-400">Citações diretas, alusões verbais e cumprimento profético fundamentado</p>
              </div>

              <div className="space-y-3.5">
                {dossier.crossReferences.map((cr, cIdx) => (
                  <div key={cIdx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-white text-sm sm:text-base">{cr.reference}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/60">
                        {cr.relationshipType}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      "{cr.textSnippet}"
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">Por que está relacionado:</strong> {cr.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: DEBATES & INTERPRETAÇÕES DIVERGENTES */}
          {activeTab === 'differing' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-orange-400">
                    ⚖️ Panorama de Debates Hermenêuticos e Correntes Teológicas
                  </h3>
                  <p className="text-xs text-slate-400">Apresentação transparente de argumentos, proponentes e pontos de consenso</p>
                </div>
                <ConfidenceBadge level="academic_debate" />
              </div>

              {dossier.differingInterpretations && dossier.differingInterpretations.length > 0 ? (
                dossier.differingInterpretations.map((diff, dIdx) => (
                  <div key={dIdx} className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <h4 className="font-bold text-white text-sm sm:text-base mb-2">
                        {diff.topic}
                      </h4>

                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 mb-4">
                        <strong className="text-xs text-emerald-400 uppercase block mb-1">Pontos de Consenso Acadêmico:</strong>
                        {diff.consensusPoints.map((cp, cpi) => (
                          <p key={cpi} className="text-xs sm:text-sm text-emerald-200/90">• {cp}</p>
                        ))}
                      </div>

                      {/* Positions Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Position A */}
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300">Posição A</span>
                          <h5 className="font-bold text-slate-100 text-sm">{diff.positionA.name}</h5>
                          <p className="text-xs text-slate-400"><strong>Defensores:</strong> {diff.positionA.adherents}</p>
                          <p className="text-xs sm:text-sm text-slate-300"><strong>Argumento:</strong> {diff.positionA.coreArgument}</p>
                          <div className="text-xs text-slate-400 space-y-0.5 pt-1">
                            {diff.positionA.evidence.map((ev, evi) => (
                              <div key={evi}>&bull; {ev}</div>
                            ))}
                          </div>
                        </div>

                        {/* Position B */}
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-purple-500/20 text-purple-300">Posição B</span>
                          <h5 className="font-bold text-slate-100 text-sm">{diff.positionB.name}</h5>
                          <p className="text-xs text-slate-400"><strong>Defensores:</strong> {diff.positionB.adherents}</p>
                          <p className="text-xs sm:text-sm text-slate-300"><strong>Argumento:</strong> {diff.positionB.coreArgument}</p>
                          <div className="text-xs text-slate-400 space-y-0.5 pt-1">
                            {diff.positionB.evidence.map((ev, evi) => (
                              <div key={evi}>&bull; {ev}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Synthesis */}
                      <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                        <strong className="text-indigo-400 block mb-1">Síntese Hermenêutica Recomendada:</strong>
                        <p className="text-slate-300 leading-relaxed">{diff.synthesisOrAdvice}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-slate-400 text-sm">
                  Este trecho bíblico possui consenso exegético e histórico consolidado nas tradições cristãs ortodoxas históricas.
                </div>
              )}
            </div>
          )}

          {/* TAB 9: APLICAÇÃO & GRUPO */}
          {activeTab === 'application' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-teal-400">
                  💡 Aplicação Prática, Reflexão Pessoal e Guia para Pequenos Grupos
                </h3>
                <p className="text-xs text-slate-400">Transformando o conhecimento teológico em vida diária e discipulado</p>
              </div>

              {/* Personal Transformation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Aplicações para a Vida Pessoal:
                </h4>
                <ul className="space-y-2.5">
                  {dossier.applications.personalTransformation.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {aIdx + 1}
                      </span>
                      <span className="leading-relaxed">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reflection Questions */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Perguntas para Reflexão Devocional Individual:
                </h4>
                <div className="space-y-2">
                  {dossier.applications.reflectionQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
                      💬 {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Group Discussion Guide */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Guia para Estudo em Pequeno Grupo / Célula / EBD:
                </h4>

                {dossier.applications.smallGroupDiscussionGuide.icebreaker && (
                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs sm:text-sm">
                    <strong className="text-indigo-300 block mb-0.5">Quebra-Gelo:</strong>
                    <p className="text-slate-200">{dossier.applications.smallGroupDiscussionGuide.icebreaker}</p>
                  </div>
                )}

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-400 uppercase text-xs block mb-1">Perguntas de Observação (O que o texto diz?):</strong>
                    {dossier.applications.smallGroupDiscussionGuide.observationQuestions.map((oq, i) => (
                      <p key={i} className="text-slate-300 mb-1">• {oq}</p>
                    ))}
                  </div>

                  <div>
                    <strong className="text-slate-400 uppercase text-xs block mb-1">Perguntas de Interpretação (O que o texto significa?):</strong>
                    {dossier.applications.smallGroupDiscussionGuide.interpretationQuestions.map((iq, i) => (
                      <p key={i} className="text-slate-300 mb-1">• {iq}</p>
                    ))}
                  </div>

                  <div>
                    <strong className="text-slate-400 uppercase text-xs block mb-1">Perguntas de Aplicação Prática (O que faremos esta semana?):</strong>
                    {dossier.applications.smallGroupDiscussionGuide.practicalActionQuestions.map((aq, i) => (
                      <p key={i} className="text-slate-300 mb-1">• {aq}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: HOMILÉTICA & SERMÃO */}
          {activeTab === 'homiletics' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-rose-400">
                    🎤 Estrutura Homilética & Esboço de Sermão Expositivo
                  </h3>
                  <p className="text-xs text-slate-400">Proposição bíblica, introdução, pontos principais, ilustrações e apelo</p>
                </div>
              </div>

              {/* Sermon Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-500/40 space-y-2">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">Título Sugerido do Sermão</span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white">
                  "{dossier.homiletics.sermonTitle}"
                </h4>
                <p className="text-xs text-slate-300">
                  <strong className="text-amber-300">Tese Homilética (Proposição):</strong> {dossier.homiletics.thematicProposition}
                </p>
              </div>

              {/* Introduction & Exordium */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  I. Introdução Contextual & Gancho (Exórdio)
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {dossier.homiletics.exordium}
                </p>
                <p className="text-xs text-slate-400 italic pt-1">
                  <strong>Ponte Contextual:</strong> {dossier.homiletics.contextualBridge}
                </p>
              </div>

              {/* Main Points */}
              <div className="space-y-3.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  II. Corpo da Mensagem (Pontos Expositivos)
                </span>

                {dossier.homiletics.mainPoints.map((point, pIdx) => (
                  <div key={pIdx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-rose-600 text-white font-bold text-xs">
                        Ponto {point.pointNumber}
                      </span>
                      <h5 className="font-bold text-white text-sm sm:text-base">{point.title}</h5>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">Fundamento Exegético:</strong> {point.biblicalExplanation}
                    </p>

                    <div className="space-y-1 text-xs text-slate-400">
                      {point.subpoints.map((sp, spi) => (
                        <div key={spi}>&bull; {sp}</div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm">
                      <strong className="text-amber-400 block mb-0.5">💡 Ilustração / Analogia Didática:</strong>
                      <p className="text-slate-300">{point.illustrativeAnalogy}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm">
                      <strong className="text-emerald-400 block mb-0.5">👉 Aplicação Direta ao Ouvinte:</strong>
                      <p className="text-slate-300">{point.practicalApplication}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion & Call to Action */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  III. Conclusão & Chamada Solene à Ação
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dossier.homiletics.conclusion}</p>
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/40 text-xs sm:text-sm">
                  <strong className="text-rose-300 block mb-0.5">Chamada Solene / Apelo:</strong>
                  <p className="text-slate-200 font-semibold">{dossier.homiletics.callToAction}</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300/80">
                ⚠️ {dossier.homiletics.homileticalDisclaimer}
              </div>
            </div>
          )}

          {/* TAB 11: CONSULTOR IA BÍBLICO */}
          {activeTab === 'consultant' && (
            <div className="flex flex-col h-full min-h-[500px] space-y-4 animate-in fade-in duration-200">
              {/* Context Banner */}
              <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-slate-200">
                    <strong>Contexto Ancorado:</strong> {dossier.reference} ({dossier.hermeneutics.literaryGenre})
                  </span>
                </div>
                <span className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">Modo Consultor</span>
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_CONSULTANT_PROMPTS.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSendMessage(p.promptText)}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] transition-all"
                  >
                    💬 {p.label}
                  </button>
                ))}
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 min-h-[300px]">
                {consultantMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-1 px-1">
                      <span>{msg.sender === 'user' ? 'Você' : 'Consultor Teológico IA'}</span>
                      <span>&bull;</span>
                      <span>{msg.timestamp}</span>
                      {msg.confidence && (
                        <ConfidenceBadge level={msg.confidence} className="ml-1 scale-90" />
                      )}
                    </div>

                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl max-w-[90%] text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isConsultantTyping && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                    <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                    <span>Consultor consultando fontes teológicas e textos originais...</span>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Pergunte ao Consultor sobre o texto (ex: 'Como esse texto era entendido no século I?')..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!userInput.trim() || isConsultantTyping}
                  className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
