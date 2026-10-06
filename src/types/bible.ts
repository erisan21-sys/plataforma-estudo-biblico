export type Testament = 'OT' | 'NT';

export type BookGenre = 
  | 'Pentateuco' 
  | 'Histórico' 
  | 'Poético e Sabedoria' 
  | 'Profetas Maiores' 
  | 'Profetas Menores' 
  | 'Evangelhos' 
  | 'Histórico NT' 
  | 'Epístolas Paulinas' 
  | 'Epístolas Gerais' 
  | 'Profecia e Apocalipse';

export interface BibleBook {
  id: string; // e.g. "JHN", "ROM", "GEN"
  name: string; // e.g. "João", "Romanos"
  abbr: string; // e.g. "Jo", "Rm"
  testament: Testament;
  genre: BookGenre;
  chaptersCount: number;
  order: number;
  author: string;
  approxDate: string;
  keyTheme: string;
}

export type BibleVersion = 'ARC' | 'AA' | 'KJV' | 'ORIGINAL';

export interface InterlinearWord {
  hebrewOrGreek: string;
  transliteration: string;
  strong: string;
  morphology: string;
  portuguese: string;
  meaning: string;
}

export interface BibleVerse {
  bookId: string;
  chapter: number;
  verse: number;
  text: string; // Default or active translation
  versions?: {
    ARC?: string;
    AA?: string;
    KJV?: string;
  };
  interlinear?: InterlinearWord[];
}

export type EpistemicConfidence = 'high' | 'academic_debate' | 'hypothesis';

export interface ConfidenceItem<T = string> {
  level: EpistemicConfidence;
  content: T;
  label?: string;
  evidenceOrNote?: string;
}

export interface ExegesisItem {
  verseNumber: number;
  originalText: string;
  transliteration: string;
  grammaticalAnalysis: string;
  syntaxAndStructure: string;
  keyTerms: {
    term: string;
    strong: string;
    semanticRange: string;
    theologicalSignificance: string;
  }[];
  textualVariants?: {
    manuscripts: string;
    reading: string;
    evaluation: string;
    confidence: EpistemicConfidence;
  }[];
  confidence: EpistemicConfidence;
}

export interface HermeneuticsSection {
  literaryGenre: string;
  authorialIntent: string;
  immediateContext: string;
  broadContext: string;
  communicativeGoal: string;
  interpretativePrinciples: string[];
  canonicalTrajectory: string;
}

export interface HistoricalArchaeologicalData {
  historicalPeriod: string;
  rulingEmpire: string;
  keyRulersAndFigures: string[];
  culturalAndSocialContext: string;
  religiousEnvironment: string;
  geography: {
    location: string;
    coordinates?: [number, number];
    significance: string;
    ancientMapReference: string;
  };
  archaeologicalFindings: {
    name: string;
    date: string;
    locationFound: string;
    significanceToText: string;
    confidence: EpistemicConfidence;
  }[];
  timeline: {
    date: string;
    event: string;
    biblicalSync: string;
  }[];
  consensusVsHypothesis: {
    factOrConsensus: string[];
    scholarlyDebate: string[];
    reconstructionHypothesis: string[];
  };
}

export interface SystematicTheologyLoci {
  bibliologia?: string;
  teologiaPropria?: string;
  cristologia?: string;
  pneumatologia?: string;
  antropologia?: string;
  hamartiologia?: string;
  soteriologia?: string;
  eclesiologia?: string;
  escatologia?: string;
  angelologia?: string;
}

export interface BiblicalTheologyProgression {
  inThisBook: string;
  inAuthorCorpus: string;
  inTestament: string;
  canonicalUnfolding: string;
  covenantRelationship: string;
}

export interface LanguageAnalysisItem {
  termOriginal: string;
  language: 'Hebraico' | 'Aramaico' | 'Grego Koiné';
  transliteration: string;
  strongId: string;
  root: string;
  morphology: string;
  literalMeaning: string;
  semanticDomain: string[];
  biblicalOccurrences: number;
  possibleTranslations: string[];
  theologicalContext: string;
  academicApparatus?: string;
}

export interface CrossReferenceItem {
  reference: string;
  textSnippet: string;
  relationshipType: 'Citação Direta' | 'Alusão Verbal' | 'Paralelo Temático' | 'Cumprimento Profético' | 'Contraste Tipológico';
  explanation: string;
}

export interface ApplicationSection {
  personalTransformation: string[];
  reflectionQuestions: string[];
  smallGroupDiscussionGuide: {
    icebreaker?: string;
    observationQuestions: string[];
    interpretationQuestions: string[];
    practicalActionQuestions: string[];
  };
  ethicalAndContemporaryRelevance: string;
}

export interface HomileticStructure {
  sermonTitle: string;
  thematicProposition: string; // Tese Homilética
  biblicalBaseText: string;
  exordium: string; // Introdução contextual & gancho
  contextualBridge: string;
  mainPoints: {
    pointNumber: number;
    title: string;
    biblicalExplanation: string;
    subpoints: string[];
    illustrativeAnalogy: string;
    practicalApplication: string;
  }[];
  conclusion: string;
  callToAction: string; // Chamada solene
  homileticalDisclaimer: string;
}

export interface DifferingInterpretations {
  topic: string;
  consensusPoints: string[];
  positionA: {
    name: string;
    adherents: string;
    coreArgument: string;
    evidence: string[];
  };
  positionB: {
    name: string;
    adherents: string;
    coreArgument: string;
    evidence: string[];
  };
  positionC?: {
    name: string;
    adherents: string;
    coreArgument: string;
    evidence: string[];
  };
  synthesisOrAdvice: string;
}

export interface ComprehensiveStudyDossier {
  reference: string; // e.g. "João 1:1-5"
  bookId: string;
  startChapter: number;
  endChapter: number;
  startVerse: number;
  endVerse: number;
  isFullChapter?: boolean;
  
  biblicalText: {
    ARC: string;
    AA: string;
    KJV: string;
    originalPreview?: string;
  };

  summary: string;
  exegesis: ExegesisItem[];
  hermeneutics: HermeneuticsSection;
  history: HistoricalArchaeologicalData;
  theology: {
    systematic: SystematicTheologyLoci;
    biblicalProgression: BiblicalTheologyProgression;
  };
  languages: LanguageAnalysisItem[];
  crossReferences: CrossReferenceItem[];
  differingInterpretations?: DifferingInterpretations[];
  applications: ApplicationSection;
  homiletics: HomileticStructure;
  suggestedFurtherReading: string[];
}

export interface ConsultantMessage {
  id: string;
  sender: 'user' | 'consultant';
  timestamp: string;
  content: string;
  confidence?: EpistemicConfidence;
  biblicalGrounding?: string;
  methodologyNote?: string;
}

export type StudyMode = 
  | 'reading' 
  | 'study' 
  | 'exegesis' 
  | 'hermeneutics' 
  | 'history' 
  | 'languages' 
  | 'theology' 
  | 'homiletics' 
  | 'devotional' 
  | 'academic';

export interface UserHighlight {
  id: string;
  reference: string; // e.g. "JHN 1:1"
  bookId: string;
  chapter: number;
  verse: number;
  color: 'yellow' | 'green' | 'blue' | 'purple' | 'rose' | 'amber';
  createdAt: string;
}

export interface UserNote {
  id: string;
  reference: string;
  bookId: string;
  chapter: number;
  verse: number;
  title: string;
  content: string;
  tags: string[];
  updatedAt: string;
}

export interface UserBookmark {
  id: string;
  reference: string;
  bookId: string;
  chapter: number;
  verse: number;
  label?: string;
  createdAt: string;
}

export interface SavedFullStudy {
  id: string;
  title: string;
  reference: string;
  bookId: string;
  chapter: number;
  versesRange: string;
  createdAt: string;
  notes: string;
  dossier: ComprehensiveStudyDossier;
}
