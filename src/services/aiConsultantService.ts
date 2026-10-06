import { ComprehensiveStudyDossier, ConsultantMessage, EpistemicConfidence } from '../types/bible';

export interface PromptTemplate {
  id: string;
  label: string;
  promptText: string;
  category: 'exegese' | 'historia' | 'teologia' | 'homiletica' | 'perguntas';
}

export const SUGGESTED_CONSULTANT_PROMPTS: PromptTemplate[] = [
  {
    id: 'p1',
    label: 'Por que o autor usou esta expressão?',
    promptText: 'Analise o vocabulário original e a sintaxe: Por que o autor bíblico escolheu precisamente estas palavras neste trecho e qual a força teológica de sua escolha?',
    category: 'exegese'
  },
  {
    id: 'p2',
    label: 'Como era entendido no século I?',
    promptText: 'Explique a recepção histórica deste texto: Como os leitores originais do mundo greco-romano e judaico do século I entenderam esta mensagem no seu contexto cultural e político?',
    category: 'historia'
  },
  {
    id: 'p3',
    label: 'Conexão com o Antigo Testamento',
    promptText: 'Mostre as alusões, citações, ecos verbais e conexões tipológicas que este trecho estabelece com a teologia e as profecias do Antigo Testamento.',
    category: 'teologia'
  },
  {
    id: 'p4',
    label: 'Apresente as correntes teológicas divergentes',
    promptText: 'Apresente de forma equilibrada as principais correntes interpretativas divergentes sobre este texto (Posição A vs Posição B), os argumentos bíblicos de cada uma e os pontos de consenso acadêmico.',
    category: 'teologia'
  },
  {
    id: 'p5',
    label: 'Esboço de Aula para Escola Dominical',
    promptText: 'Prepare um plano de aula pedagógico e interativo para Escola Bíblica Dominical baseado neste trecho, contendo objetivo geral, quebra-gelo, 3 tópicos com perguntas e aplicação.',
    category: 'homiletica'
  },
  {
    id: 'p6',
    label: 'Preparar Sermão Expositivo Completo',
    promptText: 'Gere uma estrutura completa de sermão expositivo com Título atraente, Proposição Homilética, Introdução, 3 Pontos com ilustrações, e Conclusão com apelo transformador.',
    category: 'homiletica'
  }
];

export function generateAiConsultantResponse(
  question: string,
  dossier: ComprehensiveStudyDossier
): ConsultantMessage {
  const qLower = question.toLowerCase();
  let content = '';
  let confidence: EpistemicConfidence = 'high';
  let biblicalGrounding = dossier.reference;
  let methodologyNote = 'Análise Teológica Sistemática e Histórico-Gramatical';

  // 1. Check if user is asking about why the author used a specific expression / Greek / Hebrew
  if (qLower.includes('expressão') || qLower.includes('palavra') || qLower.includes('grego') || qLower.includes('hebraico') || qLower.includes('original') || qLower.includes('sintaxe')) {
    confidence = 'high';
    methodologyNote = 'Exegese Filológica & Análise Semântica do Texto Original';
    const mainLang = dossier.languages[0];
    const exeg = dossier.exegesis[0];

    content = `### 🔎 Análise Exegética e Filológica de ${dossier.reference}

**1. Contexto Linguístico do Vocabulário:**
No texto de **${dossier.reference}**, o autor emprega termos cruciais como **${mainLang?.termOriginal || 'o vocabulário original'}** (*${mainLang?.transliteration || ''}*, Strong ${mainLang?.strongId || ''}). 

**2. Intenção Comunicativa e Semântica:**
- **Significado Literal e Campo Semântico:** ${mainLang?.literalMeaning || 'Sentido específico no corpus bíblico'}. O autor não escolheu termos genéricos da linguagem coloquial desprovidos de intenção, mas vocábulos carregados de peso teológico.
- **Sintaxe e Ênfase Gramatical:** ${exeg?.grammaticalAnalysis || 'A estrutura sintática do trecho destaca a prioridade da ação divina.'}

**3. Distinção Epistemológica:**
- 🟢 **Fato Textual Conhecido:** O manuscrito preservado atesta com alta fidelidade a leitura gramatical.
- 🟡 **Nuance Interpretativa:** Teólogos debatem a ênfase primordial (se mais ligada à tradição sapiencial veterotestamentária ou ao diálogo apologético com a cultura da época).

💡 **Conclusão:** O uso desta expressão visa comunicar com precisão inabalável a natureza divina da revelação e selar o argumento no coração dos ouvintes.`;
  }
  // 2. Check if user is asking about 1st century / historical context
  else if (qLower.includes('século i') || qLower.includes('século 1') || qLower.includes('histór') || qLower.includes('romano') || qLower.includes('cultur') || qLower.includes('arqueolog')) {
    confidence = 'high';
    methodologyNote = 'Historiografia do Cristianismo Primitivo & Arqueologia Bíblica';
    const hist = dossier.history;

    content = `### 🏛 Contexto Histórico, Cultural e Arqueológico de ${dossier.reference}

**1. Ambiente Político e Geográfico:**
- **Período Histórico:** ${hist.historicalPeriod}.
- **Poder Hegemônico:** ${hist.rulingEmpire}.
- **Cenário Social:** ${hist.culturalAndSocialContext}

**2. Como os Leitores Originais Recebiam a Mensagem:**
No primeiro século, os cristãos viviam sob a constante pressão do culto imperial romano e o choque de cosmovisões com o paganismo circundante e o judaísmo rabínico tradicional. Quando o texto de **${dossier.reference}** era lido em voz alta nas reuniões domiciliares (*domus ecclesiae*), soava como uma proclamação revolucionária de soberania e consolo inigualável.

**3. Evidências Arqueológicas Conexas:**
${hist.archaeologicalFindings.map(a => `- 🟢 **${a.name}** (${a.date}): Encontrado em *${a.locationFound}*. ${a.significanceToText}`).join('\n')}

**4. Matriz de Confiabilidade Histórica:**
- 🟢 **Consenso Histórico:** ${hist.consensusVsHypothesis.factOrConsensus[0] || 'Atestação sólida no contexto do século I.'}
- 🟡 **Debate entre Historiadores:** ${hist.consensusVsHypothesis.scholarlyDebate[0] || 'Variações quanto aos destinatários imediatos.'}`;
  }
  // 3. Check if user is asking about Old Testament connections / Typology
  else if (qLower.includes('antigo testamento') || qLower.includes('isaías') || qLower.includes('gênesis') || qLower.includes('profecia') || qLower.includes('paralelo') || qLower.includes('referência')) {
    confidence = 'high';
    methodologyNote = 'Teologia Bíblica & Tipologia Canônica';
    const crossRefs = dossier.crossReferences;

    content = `### 🔗 Conexões Canônicas com o Antigo Testamento em ${dossier.reference}

O texto de **${dossier.reference}** não é uma ilha teológica, mas a culminação orgânica da revelação bíblica progressiva.

**1. Paralelos e Ecos Intertextuais Principais:**
${crossRefs.map(cr => `#### 📖 ${cr.reference} (${cr.relationshipType})
> *"${cr.textSnippet}"*
- **Fundamento Teológico:** ${cr.explanation}`).join('\n\n')}

**2. Trajetória Canônica e Alianças:**
- **Aliança Patriarcal e Davídica:** O Antigo Testamento lançou as sementes da Promessa (Gênesis 3:15; 12:1-3; 2 Samuel 7).
- **Cumprimento Pleno:** Em **${dossier.reference}**, o plano divino atinge sua expressão de maturidade, revelando a fidelidade imutável de Yahweh que nunca quebra Sua aliança eterna.

💡 **Princípio Hermenêutico (Agostinho de Hipona):** *"O Novo Testamento está oculto no Antigo, e o Antigo é revelado no Novo."*`;
  }
  // 4. Check if user is asking about differing theological views
  else if (qLower.includes('corrente') || qLower.includes('diverg') || qLower.includes('posição') || qLower.includes('posições') || qLower.includes('debate') || qLower.includes('calvinis') || qLower.includes('arminian') || qLower.includes('interpreta')) {
    confidence = 'academic_debate';
    methodologyNote = 'Análise Comparativa de Hermenêutica e Tradições Teológicas';
    const diff = dossier.differingInterpretations?.[0];

    if (diff) {
      content = `### ⚖️ Panorama de Debates Teológicos em ${dossier.reference}

**Tema do Debate:** ${diff.topic}

---

#### 🟢 Pontos de Consenso Acadêmico:
${diff.consensusPoints.map(p => `- ${p}`).join('\n')}

---

#### 🟡 Posição A: ${diff.positionA.name}
- **Principais Proponentes:** ${diff.positionA.adherents}
- **Argumento Central:** ${diff.positionA.coreArgument}
- **Evidências Apresentadas:**
${diff.positionA.evidence.map(e => `  • ${e}`).join('\n')}

---

#### 🟡 Posição B: ${diff.positionB.name}
- **Principais Proponentes:** ${diff.positionB.adherents}
- **Argumento Central:** ${diff.positionB.coreArgument}
- **Evidências Apresentadas:**
${diff.positionB.evidence.map(e => `  • ${e}`).join('\n')}

---

### 🛡 Síntese e Diretriz Hermenêutica:
${diff.synthesisOrAdvice}

*Nota Metodológica: O estudante responsável deve examinar o texto bíblico com oração e humildade, discernindo o que é texto explícito e o que é inferência teológica de sistemas confessionais.*`;
    } else {
      content = `### ⚖️ Correntes Hermenêuticas sobre ${dossier.reference}

**1. Consenso Exegético Fundamental:**
O texto bíblico afirma claramente a soberania de Deus, a fidelidade de Sua palavra e a necessidade de confiança obediente por parte do ser humano.

**2. Perspectivas Históricas de Ênfase:**
- **Ênfase Histórico-Gramatical e Confessional:** Concentra-se na intenção original do autor e na preservação da ortodoxia histórica cristã.
- **Ênfase Canônica Contemporânea:** Destaca o impacto e relevância da passagem para os dilemas éticos da sociedade atual.

🟡 **Recomendação:** Priorizar o sentido que melhor se alinha com a totalidade das Escrituras (Analogia da Fé).`;
    }
  }
  // 5. Check if user is asking for sermon outline / homiletics / lesson plan
  else if (qLower.includes('sermão') || qLower.includes('pregação') || qLower.includes('esboço') || qLower.includes('aula') || qLower.includes('ebde') || qLower.includes('homilét')) {
    confidence = 'high';
    methodologyNote = 'Homilética Expositiva & Estrutura Pedagógica';
    const hom = dossier.homiletics;

    content = `### 🎤 Esboço Homilético Expositivo: "${hom.sermonTitle}"

**Texto Base:** ${dossier.reference}
**Tese Homilética (Proposição):** *${hom.thematicProposition}*

---

#### 🎯 I. Introdução (Exórdio):
${hom.exordium}
*Ponte Contextual:* ${hom.contextualBridge}

---

#### 📖 II. Desenvolvimento do Sermão (Pontos Expositivos):
${hom.mainPoints.map(p => `
**Ponto ${p.pointNumber}: ${p.title}**
- **Fundamento Exegético:** ${p.biblicalExplanation}
- **Subpontos:**
${p.subpoints.map(sp => `  • ${sp}`).join('\n')}
- **💡 Ilustração Didática:** ${p.illustrativeAnalogy}
- **👉 Aplicação Direta:** ${p.practicalApplication}
`).join('\n')}

---

#### 🏁 III. Conclusão & Apelo:
- **Resumo:** ${hom.conclusion}
- **Chamada Solene à Ação:** ${hom.callToAction}

---
⚠️ *${hom.homileticalDisclaimer}*`;
  }
  // 6. Generic intelligent contextual answer
  else {
    confidence = 'high';
    methodologyNote = 'Consulta Teológica Contextual & Didática';

    content = `### 📖 Parecer do Consultor Bíblico sobre ${dossier.reference}

**Pergunta:** "${question}"

---

**1. Análise Hermenêutica Contextual:**
Ao analisarmos **${dossier.reference}**, é essencial observar que este trecho pertence ao gênero literário *${dossier.hermeneutics.literaryGenre}*. A intenção comunicativa do autor inspirado é:
> *"${dossier.hermeneutics.authorialIntent}"*

**2. Articulação Teológica e Doutrinária:**
- **Teologia Própria e Cristologia:** ${dossier.theology.systematic.cristologia || dossier.theology.systematic.teologiaPropria || 'Revela o plano redentor soberano de Deus.'}
- **Soteriologia e Vida Prática:** ${dossier.theology.systematic.soteriologia || 'Ensina a transformação integral do ser humano pela graça.'}

**3. Resposta Direta e Aplicação:**
À luz da gramática original e do contexto histórico de ${dossier.history.historicalPeriod}, o texto nos ensina que a verdade bíblica não é apenas para especulação mental, mas para moldar nossas atitudes diárias, fundamentando nossa esperança na fidelidade eterna de Deus.

---
🟢 **Classificação de Confiança:** *Alta Confiança baseada no texto bíblico e evidências contextuais consolidadas.*`;
  }

  return {
    id: `msg_${Date.now()}`,
    sender: 'consultant',
    timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    content,
    confidence,
    biblicalGrounding,
    methodologyNote
  };
}
