import type { ComprehensiveStudyDossier } from '../types/bible';
import { BIBLE_BOOKS } from './bibleBooks';

export const CURATED_STUDIES: Record<string, ComprehensiveStudyDossier> = {
  // JOÃO 1:1-5
  'JHN_1_1-5': {
    reference: 'João 1:1–5',
    bookId: 'JHN',
    startChapter: 1,
    endChapter: 1,
    startVerse: 1,
    endVerse: 5,
    summary: 'O Prólogo Joanino estabelece a preexistência eterna, divindade plena e papel criador do Logos (o Verbo), que é a fonte de vida e luz irreprimível em contraste com as trevas do cosmos decaído.',
    biblicalText: {
      ARC: '1 No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. 2 Ele estava no princípio com Deus. 3 Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez. 4 Nele estava a vida, e a vida era a luz dos homens. 5 E a luz resplandece nas trevas, e as trevas não a compreenderam.',
      AA: '1 No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. 2 Ele estava no princípio com Deus. 3 Todas as coisas foram feitas por intermédio dele, e sem ele nada do que foi feito se fez. 4 Nele estava a vida, e a vida era a luz dos homens. 5 A luz resplandece nas trevas, e as trevas não prevaleceram contra ela.',
      KJV: '1 In the beginning was the Word, and the Word was with God, and the Word was God. 2 The same was in the beginning with God. 3 All things were made by him; and without him was not any thing made that was made. 4 In him was life; and the life was the light of men. 5 And the light shineth in darkness; and the darkness comprehended it not.',
      originalPreview: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος...'
    },
    exegesis: [
      {
        verseNumber: 1,
        originalText: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.',
        transliteration: 'En archē ēn ho Logos, kai ho Logos ēn pros ton Theon, kai Theos ēn ho Logos.',
        grammaticalAnalysis: 'Três orações coordenadas com o verbo no imperfeito contínuo "ēn" (indicando existência atemporal antes da criação, em contraste com "egeneto" no v.3 e v.14). A construção pré-verbal "Theos ēn ho Logos" é um predicativo do sujeito anartro (sem artigo), indicando que o Logos compartilha da mesma essência/natureza de Deus sem ser idêntico à pessoa do Pai (Regra de Colwell).',
        syntaxAndStructure: 'Estrutura em escada (clímax sintático): Princípio → com Deus → era Deus. Conexão enfática através da preposição "pros" com acusativo, expressando relacionamento pessoal face a face.',
        keyTerms: [
          { term: 'Λόγος (Logos)', strong: 'G3056', semanticRange: 'Palavra, Verbo, Razão, Princípio ordenador, Revelação divina expressa', theologicalSignificance: 'Alude ao "Dabar Yahweh" do AT (Sl 33:6; Is 55:11) e dialoga com a filosofia helenística, mas redefinida pessoalmente como o Filho eterno.' },
          { term: 'ἦν (ēn)', strong: 'G2258', semanticRange: 'Era, existia continuamente', theologicalSignificance: 'Imperfeito de continuidade ontológica. O Verbo não "passou a existir" (egeneto), Ele já "era" quando o tempo começou.' },
          { term: 'πρὸς τὸν Θεόν (pros ton Theon)', strong: 'G4314 + G2316', semanticRange: 'Com Deus, em direção a Deus, face a face com Deus', theologicalSignificance: 'Indica distinção interpessoal entre o Logos e o Pai na Divindade Trina.' }
        ],
        textualVariants: [
          {
            manuscripts: 'P66, P75, Codex Sinaiticus (א), Codex Vaticanus (B)',
            reading: 'καὶ Θεὸς ἦν ὁ Λόγος (unanimidade nos manuscritos gregos antigos mais confiáveis)',
            evaluation: 'Nenhuma variante substantiva questiona o texto grego preservado.',
            confidence: 'high'
          }
        ],
        confidence: 'high'
      },
      {
        verseNumber: 3,
        originalText: 'πάντα δι’ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν. ὃ γέγονεν.',
        transliteration: 'Panta di’ autou egeneto, kai chōris autou egeneto oude hen. ho gegonen.',
        grammaticalAnalysis: 'Uso de "di\' autou" (genitivo de agência intermediária). Paralelismo antitético absoluto: afirmação positiva ("todas as coisas vieram a ser através dele") seguida de negação absoluta ("sem ele nada do que veio a existir se fez").',
        syntaxAndStructure: 'Mudança gramatical deliberada: o Verbo "era" (ēn - v.1), mas a criação "veio a ser" (egeneto - aoristo).',
        keyTerms: [
          { term: 'ἐγένετο (egeneto)', strong: 'G1096', semanticRange: 'Veio a existir, foi gerado/criado', theologicalSignificance: 'Ato de criação no tempo, marcando a barreira intransponível entre o Criador incriado e a criação.' }
        ],
        confidence: 'high'
      },
      {
        verseNumber: 5,
        originalText: 'καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.',
        transliteration: 'kai to phōs en tē skotia phainei, kai hē skotia auto ou katelaben.',
        grammaticalAnalysis: 'Presente contínuo do indicativo ativo "phainei" (a luz continua brilhando ativamente) contrastado com aoristo indicativo ativo "katelaben" (as trevas não a dominaram/compreenderam).',
        syntaxAndStructure: 'Dualismo moral e cósmico entre luz e trevas, central na teologia joanina.',
        keyTerms: [
          { term: 'κατέλαβεν (katelaben)', strong: 'G2638', semanticRange: '1. Vencer, superar, extinguir; 2. Compreender, assimilar mentalmente', theologicalSignificance: 'Duplo sentido proposital de João: as forças das trevas nem puderam sufocar a luz de Cristo na cruz, nem o mundo decaído compreendeu Sua revelação.' }
        ],
        confidence: 'high'
      }
    ],
    hermeneutics: {
      literaryGenre: 'Prólogo Poético / Hino Cristológico Teológico',
      authorialIntent: 'Apresentar Jesus Cristo não apenas como o Messias judaico esperado, mas como a Palavra Criadora e Eterna de Deus, refutando proto-gnosticismos e correntes que diminuíam a divindade ou a humanidade real de Cristo.',
      immediateContext: 'O prólogo (1:1-18) atua como o pórtico teológico de todo o 4º Evangelho; todos os temas subsequentes (sinais, discursos do "Eu Sou", vida, luz, testemunho de João Batista e glória) são antecipados aqui.',
      broadContext: 'Conexão intencional com o Gênesis 1 ("No princípio"). João reconta a criação à luz da encarnação redentora.',
      communicativeGoal: 'Conduzir os leitores a crerem que Jesus é o Cristo, o Filho de Deus, e que, crendo, tenham vida em Seu nome (cf. Jo 20:31).',
      interpretativePrinciples: [
        'Princípio da Analogia da Fé: a divindade de Cristo no prólogo harmoniza-se com Cl 1:15-17 e Hb 1:1-3.',
        'Princípio Histórico-Gramatical: análise da polissemia de "Logos" no ambiente judaico tardio (Targuns e Sabedoria) e helenístico.'
      ],
      canonicalTrajectory: 'Do "Disse Deus" em Gênesis 1 ao "Verbo se fez carne" em João 1:14 e à vitória final do "Verbo de Deus" em Apocalipse 19:13.'
    },
    history: {
      historicalPeriod: 'Final do Século I d.C. (c. 85-95 d.C.)',
      rulingEmpire: 'Império Romano (Dinastia Flávia - Domiciano)',
      keyRulersAndFigures: ['Imperador Domiciano', 'Apóstolo João (em Éfeso)', 'Comunidades da Ásia Menor'],
      culturalAndSocialContext: 'Éfeso era uma metrópole helenística cosmopolita com forte sincretismo religioso (culto a Ártemis/Diana, culto imperial, escolas filosóficas estoicas e platonistas, e sinagogas judaicas da Diáspora).',
      religiousEnvironment: 'Encontro tenso entre o monoteísmo judaico, o helenismo filosófico e o cristianismo nascente sofrendo pressões imperiais.',
      geography: {
        location: 'Éfeso (Ásia Menor ocidental, moderna Turquia)',
        significance: 'Centro de comércio, filosofia e cristianismo paulino/joanino no mar Egeu.',
        ancientMapReference: 'Província Romana da Ásia'
      },
      archaeologicalFindings: [
        {
          name: 'Papiro P52 (Papiro Rylands 457)',
          date: 'c. 125-135 d.C.',
          locationFound: 'Oxirrinco, Egito',
          significanceToText: 'Fragmento mais antigo do Novo Testamento contendo João 18:31-33, 37-38, provando a circulação precoce do Evangelho de João no Mediterrâneo oriental.',
          confidence: 'high'
        },
        {
          name: 'Papiro P66 e P75 (Papiros Bodmer)',
          date: 'c. 175-225 d.C.',
          locationFound: 'Dishna, Egito',
          significanceToText: 'Manuscritos quase completos do Evangelho de João que preservam com extrema exatidão o texto de João 1:1-5 com a leitura "kai Theos ēn ho Logos".',
          confidence: 'high'
        }
      ],
      timeline: [
        { date: 'c. 30 d.C.', event: 'Morte, Ressurreição e Ascensão de Jesus em Jerusalém', biblicalSync: 'Evangelhos' },
        { date: 'c. 70 d.C.', event: 'Destruição do Templo de Jerusalém pelos romanos', biblicalSync: 'Predito em Mt 24' },
        { date: 'c. 85-95 d.C.', event: 'Redação final do Evangelho de João em Éfeso', biblicalSync: 'João 1-21' }
      ],
      consensusVsHypothesis: {
        factOrConsensus: [
          'O termo Logos tinha raízes profundas tanto na literatura sapiencial judaica quanto na filosofia helenística.',
          'Os manuscritos gregos antigos mais antigos e confiáveis atestam unanimemente a leitura trinitária e a divindade do Logos.',
          'A comunidade original de destinatários enfrentava heresias proto-gnósticas (docetismo e cerintianismo).'
        ],
        scholarlyDebate: [
          'Se o prólogo joanino era originalmente um hino cristológico pré-existente adaptado por João ou composto integralmente pelo evangelista.',
          'Se o conceito de Logos é 90% hebraico (Memra/Dabar) ou se incorpora intencionalmente categorias estóico-platônicas de propósito apologético.'
        ],
        reconstructionHypothesis: [
          'Hipótese de que o prólogo foi escrito como resposta formal direta aos discípulos remanescentes de João Batista que o consideravam o Messias.'
        ]
      }
    },
    theology: {
      systematic: {
        bibliologia: 'A Palavra de Deus não é meramente texto impresso, mas o próprio Filho eterno encarnado que é a Revelação Suprema e Final de Deus.',
        teologiaPropria: 'Monoteísmo trinitário: distinção de pessoas (o Logos estava "com Deus") e perfeita unidade de essência divina ("o Logos era Deus").',
        cristologia: 'Preexistência eterna de Cristo, Divindade ontológica, agência ativa na criação do universo, e encarnação plena sem perda da divindade.',
        pneumatologia: 'A vida (zōē) presente no Logos atua pelo Espírito vivificador que ilumina o coração humano (cf. Jo 3 e 16).',
        antropologia: 'A humanidade caída jaz em trevas espirituais e inaptidão moral para compreender a luz por mérito próprio.',
        hamartiologia: 'O pecado é caracterizado como escuridão hostil à luz da verdade divina.',
        soteriologia: 'A salvação é a concessão da vida eterna e a iluminação espiritual conferida pelo Logos a todo aquele que crê.'
      },
      biblicalProgression: {
        inThisBook: 'Em João, a identidade de Jesus é revelada progressivamente através de 7 Sinais e 7 Declarações "Eu Sou" culminando na confissão de Tomé: "Senhor meu e Deus meu" (Jo 20:28).',
        inAuthorCorpus: 'Em 1 João 1:1-2 e Apocalipse 19:13, João retoma a designação do Filho como "o Verbo da Vida" e "o Verbo de Deus".',
        inTestament: 'No Novo Testamento, Cristo como Criador e Sustentador se repete em Cl 1:16-17 e Hb 1:2-3.',
        canonicalUnfolding: 'Eco direto de Gênesis 1:1. Deus criou o mundo pela Sua Palavra; na redenção, essa mesma Palavra recria a humanidade corrompida.',
        covenantRelationship: 'A Nova Aliança traz a habitação visível de Deus (a Glória do Tabernáculo) no meio do Seu povo através do Verbo encarnado.'
      }
    },
    languages: [
      {
        termOriginal: 'λόγος (logos)',
        language: 'Grego Koiné',
        transliteration: 'logos',
        strongId: 'G3056',
        root: 'λέγω (legō - dizer, falar)',
        morphology: 'Substantivo Masculino Nominativo Singular',
        literalMeaning: 'Palavra, Verbo, Declaração, Princípio Racional',
        semanticDomain: ['Comunicação verbal', 'Discurso argumentativo', 'Entidade divina reveladora (sentido joanino único)'],
        biblicalOccurrences: 330,
        possibleTranslations: ['Verbo', 'Palavra', 'Expressão Divina'],
        theologicalContext: 'Na teologia joanina, Logos transcende a mera linguagem: é a Pessoa eterna do Filho de Deus comunicando a essência do Pai ao cosmos.',
        academicApparatus: 'Liddell-Scott-Jones Greek-English Lexicon p. 1057; BDAG p. 598-601.'
      },
      {
        termOriginal: 'θεός (theos)',
        language: 'Grego Koiné',
        transliteration: 'theos',
        strongId: 'G2316',
        root: 'θεός',
        morphology: 'Substantivo Masculino Nominativo Singular (sem artigo antes do verbo)',
        literalMeaning: 'Deus, Divindade',
        semanticDomain: ['O Deus verdadeiro', 'Natureza divina / essência divina'],
        biblicalOccurrences: 1317,
        possibleTranslations: ['Deus', 'de natureza divina'],
        theologicalContext: 'Em Jo 1:1c, a ausência do artigo antes de Theos indica qualidade/natureza ontológica: o Verbo é da mesma natureza e divindade de Deus Pai.',
        academicApparatus: 'Wallace, Greek Grammar Beyond the Basics, pp. 266-269 (Colwell’s Rule & Qualitative Noun Analysis).'
      },
      {
        termOriginal: 'καταλαμβάνω (katalambanō)',
        language: 'Grego Koiné',
        transliteration: 'katelaben',
        strongId: 'G2638',
        root: 'κατά + λαμβάνω',
        morphology: 'Verbo Aoristo Indicativo Ativo 3ª Pessoa Singular',
        literalMeaning: 'Apreender, capturar, dominar, extinguir / compreender',
        semanticDomain: ['Derrotar em combate', 'Sufocar/extinguir luz', 'Compreender intelectualmente'],
        biblicalOccurrences: 15,
        possibleTranslations: ['compreenderam', 'prevaleceram contra', 'extinguiram'],
        theologicalContext: 'As trevas do pecado não puderam vencer nem extinguir a luz de Cristo, embora o mundo em pecado também não O tenha assimilado.'
      }
    ],
    crossReferences: [
      {
        reference: 'Gênesis 1:1-3',
        textSnippet: 'No princípio, criou Deus os céus e a terra... E disse Deus: Haja luz.',
        relationshipType: 'Paralelo Temático',
        explanation: 'João faz uma alusão verbal explícita ("En archē" = "Bereshit") demonstrando que a mesma agência criadora de Gn 1 é a pessoa de Cristo.'
      },
      {
        reference: 'Colossenses 1:16-17',
        textSnippet: 'Porque nele foram criadas todas as coisas que há nos céus e na terra... Ele é antes de todas as coisas.',
        relationshipType: 'Paralelo Temático',
        explanation: 'Paulo corrobora a teologia de João sobre a preexistência de Cristo e Seu papel como Criador e Sustentador de tudo.'
      },
      {
        reference: 'Hebreus 1:1-3',
        textSnippet: 'Havendo Deus antigamente falado pelos profetas, a nós falou-nos nestes últimos dias pelo Filho... pelo qual fez também o mundo.',
        relationshipType: 'Paralelo Temático',
        explanation: 'Apresenta Cristo como a Palavra definitiva e o Resplendor da glória do Pai.'
      },
      {
        reference: '1 João 1:1-2',
        textSnippet: 'O que era desde o princípio, o que ouvimos, o que vimos com os nossos olhos... da Palavra da vida.',
        relationshipType: 'Alusão Verbal',
        explanation: 'O mesmo apóstolo reafirma a historicidade da encarnação e a preexistência do Logos.'
      }
    ],
    differingInterpretations: [
      {
        topic: 'Interpretação do termo "Logos" no contexto cultural de João',
        consensusPoints: [
          'Todos os eruditos concordam que João utilizou uma linguagem rica e abrangente para comunicar com o mundo mediterrâneo.',
          'Há consenso de que a divindade pessoal de Cristo é a mensagem intencional do texto bíblico.'
        ],
        positionA: {
          name: 'Origem Predominantemente Judaico-Veterotestamentária (Memra/Dabar e Chokmah)',
          adherents: 'F.F. Bruce, D.A. Carson, Craig Keener, Richard Bauckham',
          coreArgument: 'O conceito se apoia na teologia do "Dabar Yahweh" (a Palavra criadora e profética do AT) e na literatura de Sabedoria de Provérbios 8, na qual a Sabedoria personificada coexiste com Deus no princípio.',
          evidence: ['Paralelo inegável com Gênesis 1:1', 'Uso judaico do termo "Memra" nos Targuns aramaicos para substituir antropomorfismos de Deus']
        },
        positionB: {
          name: 'Origem Greco-Helenística e Filosófica (Heráclito, Estoicismo e Fílon de Alexandria)',
          adherents: 'C.H. Dodd, Rudolf Bultmann, teólogos liberais do século XIX-XX',
          coreArgument: 'João adotou o conceito filosófico do Logos como a Razão universal ordenadora do cosmos que liga o Deus transcendente ao mundo material.',
          evidence: ['O Evangelho foi escrito em Éfeso, um centro da filosofia helenística', 'Vocabulário convergente com os tratados de Fílon de Alexandria']
        },
        synthesisOrAdvice: 'A maioria dos comentaristas contemporâneos adota uma síntese: João usou uma palavra de ponte compreensível para o mundo gentílico, mas encheu-a de conteúdo veterotestamentário redentor revelado em Jesus Cristo.'
      }
    ],
    applications: {
      personalTransformation: [
        'Adorar a Jesus Cristo com a reverência devida ao Criador do universo e Deus eterno.',
        'Confiar que a vida e o propósito da nossa existência procedem do Logos e não de circunstâncias terrenas.',
        'Viver como portadores da luz de Cristo em um mundo imerso em trevas morais, com a certeza de que a luz jamais será vencida.'
      ],
      reflectionQuestions: [
        'Como a verdade de que Jesus criou todas as coisas afeta a forma como vejo meus desafios cotidianos?',
        'Em quais áreas da minha vida ainda permito que as trevas do medo ou da incerteza ofusquem a luz do Verbo?',
        'O que significa para mim saber que a salvação não é uma ideia abstrata, mas uma Pessoa eterna?'
      ],
      smallGroupDiscussionGuide: {
        icebreaker: 'Se você tivesse que explicar quem é Jesus em apenas três palavras para alguém que nunca ouviu falar d’Ele, quais escolheria?',
        observationQuestions: [
          'Quantas vezes o verbo "era" (ēn) aparece no versículo 1 e o que ele revela sobre o tempo?',
          'Qual é o contraste entre o versículo 1 (o Verbo era) e o versículo 3 (as coisas foram feitas)?'
        ],
        interpretationQuestions: [
          'Por que João escolheu chamar Jesus de "o Verbo / a Palavra" em vez de começar diretamente pelo Seu nascimento humano?',
          'O que significa a declaração "a luz resplandece nas trevas, e as trevas não a venceram" para a Igreja perseguida?'
        ],
        practicalActionQuestions: [
          'De que maneiras práticas nosso grupo pode ser um canal da luz de Cristo na nossa comunidade esta semana?'
        ]
      },
      ethicalAndContemporaryRelevance: 'Em uma cultura contemporânea marcada pelo relativismo e pela desorientação epistemológica, João 1 afirma a existência de uma Verdade e Razão objetiva e transcendente incarnada: a Pessoa de Jesus Cristo.'
    },
    homiletics: {
      sermonTitle: 'O Verbo Eterno: Luz Inabalável na Escuridão',
      thematicProposition: 'Jesus Cristo é o Deus eterno e Criador soberano que Se revelou para dissipar as trevas da humanidade e nos conceder vida plena.',
      biblicalBaseText: 'João 1:1–5',
      exordium: 'Desde a antiguidade, a humanidade busca compreender a origem do cosmos e o sentido da existência. Filósofos procuraram a "razão suprema", astrônomos perscrutaram as estrelas. O apóstolo João nos conduz além do início do tempo para nos apresentar Aquele que já existia: o Verbo Eterno.',
      contextualBridge: 'No limiar do século I, cercado por filosofias vazias e perseguições imperiais, João escreve para firmar a fé da Igreja em uma Rocha inabalável.',
      mainPoints: [
        {
          pointNumber: 1,
          title: 'A Eternidade e Divindade do Verbo (Jo 1:1-2)',
          biblicalExplanation: 'Antes que o universo fosse formado, o Logos já mantinha comunhão eterna com o Pai. Ele não é criatura; Ele é Deus em essência e majestade.',
          subpoints: [
            'Ele é anterior ao tempo ("No princípio era")',
            'Ele vive em perfeita comunhão trinitária ("estava com Deus")',
            'Ele é plenamente divino ("o Verbo era Deus")'
          ],
          illustrativeAnalogy: 'Assim como o raio de sol é inseparável do sol e compartilha de sua mesma luz e calor, o Filho é a expressão eterna e resplendor da glória do Pai.',
          practicalApplication: 'Nossa fé não repousa em um líder humano falível, mas no Senhor que transcende a história humana.'
        },
        {
          pointNumber: 2,
          title: 'O Poder Criador e Vivificador de Cristo (Jo 1:3-4)',
          biblicalExplanation: 'Toda galáxia, átomo e respiração humana procedem de Cristo. Nele está a vida autêntica que ilumina a consciência moral e espiritual.',
          subpoints: [
            'Nenhuma molécula existe sem a Sua agência soberana',
            'A vida física e espiritual emana exclusivamente d’Ele',
            'Ele é a fonte da verdadeira sabedoria humana'
          ],
          illustrativeAnalogy: 'Um quadro sem assinatura do pintor carece de identidade. O universo carrega a assinatura viva de Cristo em cada detalhe.',
          practicalApplication: 'Entregue o governo de sua vida àquele que sustenta todo o cosmos em Suas mãos.'
        },
        {
          pointNumber: 3,
          title: 'A Vitória Irreversível da Luz sobre as Trevas (Jo 1:5)',
          biblicalExplanation: 'As trevas do pecado, da morte e do diabo tentaram sufocar o Filho de Deus na cruz, mas a ressurreição provou que a Luz jamais pode ser derrotada.',
          subpoints: [
            'A luz brilha continuamente no presente ("phaínei")',
            'As trevas não têm poder ontológico contra a luz',
            'A vitória de Cristo sobre a escuridão é definitiva'
          ],
          illustrativeAnalogy: 'Acenda uma vela em um quarto escuro: a escuridão não apaga a vela; a menor chama dissipa a mais densa escuridão.',
          practicalApplication: 'Não tema as trevas morais da sociedade contemporânea. Permaneça na luz de Cristo e testemunhe de Sua graça.'
        }
      ],
      conclusion: 'O Verbo não permaneceu distante nas alturas eternas; Ele Se aproximou de nós. Ele é a Luz que ilumina nosso caminho e a Vida que vence a nossa morte.',
      callToAction: 'Abra seu coração agora para que a Luz de Cristo dissipe toda a escuridão do medo, da culpa e da incerteza. Receba a vida eterna que somente o Verbo de Deus pode conceder.',
      homileticalDisclaimer: 'Este esboço homilético é uma ferramenta didática e inspirativa para pastores e professores. Ele não substitui o estudo pessoal aprofundado do pregador e a dependência do Espírito Santo em oração.'
    },
    suggestedFurtherReading: [
      'CARSON, D. A. O Comentário de João (Série Cultura Bíblica). Vida Nova, 2007.',
      'KEENER, Craig S. The Gospel of John: A Commentary. Baker Academic, 2003.',
      'BRUCE, F. F. João: Introdução e Comentário. Edições Vida Nova.',
      'BAUCKHAM, Richard. Jesus and the God of Israel: God Crucified and Other Studies on the New Testament’s Christology of Divine Identity. Eerdmans, 2008.',
      'WALLACE, Daniel B. Greek Grammar Beyond the Basics: An Exegetical Syntax of the New Testament. Zondervan, 1996.'
    ]
  },

  // ROMANOS 8:1-4
  'ROM_8_1-4': {
    reference: 'Romanos 8:1–4',
    bookId: 'ROM',
    startChapter: 8,
    endChapter: 8,
    startVerse: 1,
    endVerse: 4,
    summary: 'A gloriosa declaração da libertação definitiva de toda sentença condenatória para os crentes em união com Cristo, operada pelo Espírito Santo contra a tirania da carne e a fraqueza da Lei.',
    biblicalText: {
      ARC: '1 Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito. 2 Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte. 3 Porquanto, o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne, 4 para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.',
      AA: '1 Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus. 2 Porque a lei do Espírito da vida, em Cristo Jesus, te livrou da lei do pecado e da morte. 3 Porquanto o que era impossível à lei, visto que se achava enfraquecida pela carne, Deus enviando o seu próprio Filho em semelhança da carne do pecado e por causa do pecado, na carne condenou o pecado, 4 para que a justa exigência da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.',
      KJV: '1 There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit. 2 For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death. 3 For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh: 4 That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.',
      originalPreview: 'Οὐδὲν ἄρα νῦν κατάκριμα τοῖς ἐν Χριστῷ Ἰησοῦ...'
    },
    exegesis: [
      {
        verseNumber: 1,
        originalText: 'Οὐδὲν ἄρα νῦν κατάκριμα τοῖς ἐν Χριστῷ Ἰησοῦ.',
        transliteration: 'Ouden ara nyn katakrima tois en Christō Iēsou.',
        grammaticalAnalysis: 'Inversão enfática com o pronome negativo "Ouden" encabeçando a oração: "Absolutamente nenhuma condenação". A partícula ilativa "ara" articula o clímax da justificação (capítulos 3-7). O advérbio temporal "nyn" (agora) assinala a nova era escatológica da aliança da graça inaugurada pela ressurreição.',
        syntaxAndStructure: 'Termo chave forense "katakrima" denota o veredito penal e a execução do castigo decorrente da culpa sob a Lei.',
        keyTerms: [
          { term: 'κατάκριma (katakrima)', strong: 'G2631', semanticRange: 'Condenação judicial, veredito de culpa penal', theologicalSignificance: 'Declaração forense do tribunal cósmico de Deus de que não restou pena a ser paga pelo crente.' },
          { term: 'ἐν Χριστῷ (en Christō)', strong: 'G1722 + G5547', semanticRange: 'Em Cristo, incorporado em Cristo', theologicalSignificance: 'A união pactual e espiritual do crente com o Redentor.' }
        ],
        confidence: 'high'
      }
    ],
    hermeneutics: {
      literaryGenre: 'Epístola Teológica / Discurso Argumentativo Apostólico',
      authorialIntent: 'Explicar a certeza inabalável da salvação operada pela justificação pela fé e santificação pelo Espírito Santo, desarmando o desespero gerado pela Lei.',
      immediateContext: 'Resposta direta ao dilema angustiante de Romanos 7:24 ("Miserável homem que eu sou! Quem me livrará do corpo desta morte?").',
      broadContext: 'A grande catedral dogmática de Romanos: da condenação universal da humanidade (1-3) à justificação (4-5), santificação (6-8), soberania divina (9-11) e ética prática (12-16).',
      communicativeGoal: 'Garantir paz de consciência e perseverança jubilosas aos crentes de Roma.',
      interpretativePrinciples: [
        'Análise da soteriologia paulina e seu vocabulário forense.',
        'Distinção teológica entre Justificação (status judicial) e Santificação (transformação progressiva).'
      ],
      canonicalTrajectory: 'A promessa da Nova Aliança de Jeremias 31 e Ezequiel 36 concretizada pelo envio do Espírito Santo que habita no crente.'
    },
    history: {
      historicalPeriod: 'c. 57 d.C.',
      rulingEmpire: 'Império Romano (Início do reinado do Imperador Nero)',
      keyRulersAndFigures: ['Imperador Nero', 'Apóstolo Paulo (escrevendo de Corinto)', 'Febe (diaconisa que levou a carta)'],
      culturalAndSocialContext: 'A igreja de Roma era composta por cristãos de origem gentílica e judaica recém-retornados após o Édito de Cláudio (49 d.C.) que havia expulsado os judeus da capital imperial.',
      religiousEnvironment: 'Tensões entre cristãos judeus observantes da Torá e gentios convertidos sobre circuncisão e dietas cerimoniais.',
      geography: {
        location: 'Roma (Capital do Império)',
        significance: 'O epicentro do poder político e militar mundial.',
        ancientMapReference: 'Itália Romana'
      },
      archaeologicalFindings: [
        {
          name: 'Inscrição de Gálio em Delfos',
          date: 'c. 51-52 d.C.',
          locationFound: 'Delfos, Grécia',
          significanceToText: 'Fornece a âncora cronológica mais segura do ministério paulino, permitindo datar a Carta aos Romanos precisamente no inverno de 57 d.C.',
          confidence: 'high'
        }
      ],
      timeline: [
        { date: '49 d.C.', event: 'Édito do Imperador Cláudio expulsando os judeus de Roma', biblicalSync: 'Atos 18:2' },
        { date: '54 d.C.', event: 'Morte de Cláudio e ascensão de Nero; retorno dos judeus a Roma', biblicalSync: 'Contexto de Rm' },
        { date: '57 d.C.', event: 'Paulo redige a Epístola aos Romanos a partir de Corinto', biblicalSync: 'Romanos 1-16' }
      ],
      consensusVsHypothesis: {
        factOrConsensus: [
          'Romanos 8 é o clímax da exposição teológica paulina sobre a justificação pela fé.',
          'O termo "katakrima" possui caráter estritamente jurídico e forense no grego koiné.'
        ],
        scholarlyDebate: [
          'A cláusula do v.1b ("que não andam segundo a carne...") não consta nos melhores manuscritos antigos (P46, Sinaiticus, Vaticanus), sendo uma provável interpolação do v.4 feita por copistas piedosos.'
        ],
        reconstructionHypothesis: [
          'Debate se o capítulo 7 descreve a experiência do Paulo pré-cristão ou a luta contínua do crente regenerado com o pecado remanescente.'
        ]
      }
    },
    theology: {
      systematic: {
        soteriologia: 'Justificação definitiva e irrevogável pela graça; imputação da justiça perfeita de Cristo.',
        pneumatologia: 'O Espírito Santo como o Agente Vivificador, Selo da salvação, Libertador da tirania do pecado e Intercessor.',
        cristologia: 'Cristo enviado "em semelhança da carne do pecado" para ser a oferta expiatória vicária definitiva.',
        antropologia: 'A incapacidade da natureza humana carnal ("sarx") de cumprir a santa Lei de Deus sem a regeneração.'
      },
      biblicalProgression: {
        inThisBook: 'De Romanos 1:18 (a ira de Deus revelada contra toda impiedade) a Romanos 8:1 (nenhuma condenação) e 8:39 (nenhuma separação do amor de Deus).',
        inAuthorCorpus: 'Harmonia perfeita com Gálatas 5 (liberdade no Espírito) e 2 Coríntios 5:17-21.',
        inTestament: 'O cumprimento do sacerdócio levítico no sacrifício único da cruz.',
        canonicalUnfolding: 'A justiça que a Lei exigia mas não podia produzir é outorgada e operada no crente pelo Espírito de Deus.',
        covenantRelationship: 'A Nova Aliança sela a filiação divina: somos filhos e coerdeiros com Cristo (Rm 8:15-17).'
      }
    },
    languages: [
      {
        termOriginal: 'κατάκριμα (katakrima)',
        language: 'Grego Koiné',
        transliteration: 'katakrima',
        strongId: 'G2631',
        root: 'κατά + κρίνω',
        morphology: 'Substantivo Neutro Nominativo Singular',
        literalMeaning: 'Condenação, sentença punitiva resultante de julgamento',
        semanticDomain: ['Veredito de culpabilidade penal', 'Execução da sentença condenatória'],
        biblicalOccurrences: 3,
        possibleTranslations: ['condenação', 'sentença punitiva'],
        theologicalContext: 'O sacrifício de Cristo exauriu completamente a ira e o castigo legal devido ao pecado do crente.',
        academicApparatus: 'Moulton & Milligan, Vocabulary of the Greek Testament; BDAG.'
      }
    ],
    crossReferences: [
      {
        reference: 'João 3:18',
        textSnippet: 'Quem crê nele não é condenado; mas quem não crê já está condenado.',
        relationshipType: 'Paralelo Temático',
        explanation: 'Cristo e Paulo compartilham o mesmo princípio da isenção irrevogável de condenação para quem confia no Salvador.'
      },
      {
        reference: 'Gálatas 3:13',
        textSnippet: 'Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós.',
        relationshipType: 'Paralelo Temático',
        explanation: 'A base teológica da não-condenação em Romanos 8:1 é a expiação substitutiva de Cristo na cruz.'
      }
    ],
    applications: {
      personalTransformation: [
        'Viver em liberdade da culpa paralisante, descansando no veredito absoluto de Deus.',
        'Rejeitar as acusações do inimigo com a verdade imutável da Palavra.',
        'Andar em dependência diária do Espírito Santo para mortificar as obras da carne.'
      ],
      reflectionQuestions: [
        'Ainda carrego sentimentos de condenação mesmo após ter confessado meus pecados a Deus?',
        'Como a realidade do "agora nenhuma condenação há" transforma minha adoração e oração diária?'
      ],
      smallGroupDiscussionGuide: {
        observationQuestions: [
          'Qual é a primeira palavra de Romanos 8:1 e por que a palavra "Portanto" é essencial?',
          'O que a Lei de Deus não podia fazer segundo o versículo 3 e como Deus resolveu esse problema?'
        ],
        interpretationQuestions: [
          'Qual a diferença entre a acusação da carne e a convicção amorosa do Espírito Santo?',
          'O que significa na prática diária "andar segundo o Espírito"?'
        ],
        practicalActionQuestions: [
          'Como podemos orar uns pelos outros esta semana para vivermos na plenitude da liberdade da graça?'
        ]
      },
      ethicalAndContemporaryRelevance: 'Em tempos de ansiedade, cancelamento moral implacável e hiper-culpabilização social, Romanos 8 oferece a âncora inabalável da graça restauradora de Deus.'
    },
    homiletics: {
      sermonTitle: 'Livre de Toda Condenação: A Vitória da Graça',
      thematicProposition: 'Em Cristo Jesus, o tribunal de Deus declarou nossa absolvição eterna, capacitando-nos pelo Espírito a vivermos em santidade e paz.',
      biblicalBaseText: 'Romanos 8:1–4',
      exordium: 'Se há uma palavra que resume o anseio da alma humana diante de seus próprios erros, é a palavra "perdão". Mas o evangelho vai além do perdão: ele proclama absolvição legal e definitiva.',
      contextualBridge: 'Após expor o peso insuportável da Lei e a fraqueza humana no capítulo 7, Paulo explode no capítulo 8 com a mais sublime declaração de triunfo.',
      mainPoints: [
        {
          pointNumber: 1,
          title: 'O Veredito Inalterável do Tribunal Celestial (Rm 8:1)',
          biblicalExplanation: 'Nenhuma condenação há. O juiz soberano bateu o martelo da justiça eterna com base no sacrifício de Jesus.',
          subpoints: ['Um veredito presente ("agora")', 'Um veredito total ("nenhuma condenação")', 'Uma posição inabalável ("em Cristo Jesus")'],
          illustrativeAnalogy: 'Uma dívida quitada e carimbada pelo banco central não pode ser cobrada uma segunda vez.',
          practicalApplication: 'Descanse seu coração na certeza do favor imerecido de Deus.'
        },
        {
          pointNumber: 2,
          title: 'A Nova Lei que Quebra Antigas Cadeias (Rm 8:2)',
          biblicalExplanation: 'A lei do Espírito de vida supera a lei do pecado e da morte com poder sobrenatural.',
          subpoints: ['O Espírito traz vida e liberdade', 'A carne não tem mais a palavra final', 'A escravidão do pecado foi abolida'],
          illustrativeAnalogy: 'A lei da aerodinâmica não anula a gravidade, mas supera seu efeito elevando o avião aos céus. O Espírito nos eleva acima da gravidade do pecado.',
          practicalApplication: 'Busque a plenitude do Espírito em vez de lutar com a força frágil da carne.'
        },
        {
          pointNumber: 3,
          title: 'O Triunfo de Deus Onde a Lei Era Impotente (Rm 8:3-4)',
          biblicalExplanation: 'Deus enviou Seu Filho para condenar o pecado no Seu corpo e cumprir a justiça em nosso favor.',
          subpoints: ['A enfermidade da carne', 'A encarnação e expiação de Cristo', 'A justiça cumprida em nós'],
          illustrativeAnalogy: 'A Lei é como um espelho limpo que mostra a sujeira no rosto, mas não tem água nem sabão para lavá-la. Cristo é a água viva que nos purifica.',
          practicalApplication: 'Viva em gratidão e obediência impulsionadas pelo amor.'
        }
      ],
      conclusion: 'A condenação caiu sobre a cruz para que a coroa da justiça pudesse ser colocada sobre os remidos.',
      callToAction: 'Abandone hoje todo auto-engano e toda autojustificação. Aproxime-se do trono da graça em Cristo Jesus com plena certeza de fé!',
      homileticalDisclaimer: 'Material auxiliar homilético para edificação e preparo de mensagens bíblicas.'
    },
    suggestedFurtherReading: [
      'STOTT, John R. W. A Mensagem de Romanos. ABU Editora, 2000.',
      'LLOYD-JONES, D. Martyn. Romanos: Uma Exposição do Capítulo 8. PES, 1998.',
      'CRANFIELD, C. E. B. A Critical and Exegetical Commentary on the Epistle to the Romans. T&T Clark, 1975.',
      'MOO, Douglas J. The Epistle to the Romans (NICNT). Eerdmans, 1996.'
    ]
  }
};

// Canonical Overview Engine based strictly on verified book metadata (Never fabricates fake Greek/Hebrew or fake artifacts)
export function generateTheologicalDossier(bookId: string, startVerse: number, endVerse: number, chapter: number): ComprehensiveStudyDossier {
  const book = BIBLE_BOOKS.find(b => b.id === bookId) || BIBLE_BOOKS[0];
  const refKey = `${bookId}_${chapter}_${startVerse}-${endVerse}`;
  
  if (CURATED_STUDIES[refKey]) {
    return CURATED_STUDIES[refKey];
  }

  const singleKey = `${bookId}_${chapter}`;
  if (CURATED_STUDIES[singleKey]) {
    return CURATED_STUDIES[singleKey];
  }

  const refLabel = `${book.name} ${chapter}:${startVerse}${endVerse > startVerse ? `–${endVerse}` : ''}`;
  
  return {
    reference: refLabel,
    bookId,
    startChapter: chapter,
    endChapter: chapter,
    startVerse,
    endVerse,
    summary: `Visão canônica e temática de ${refLabel}. Este trecho pertence ao livro de ${book.name} (${book.genre}) e desenvolve o tema: "${book.keyTheme}".`,
    biblicalText: {
      ARC: `Texto bíblico não carregado no pacote básico local para ${refLabel}. Importe o módulo completo de texto bíblico para visualização integral.`,
      AA: `Texto bíblico não carregado no pacote básico local para ${refLabel}.`,
      KJV: `Scripture text not loaded in local offline basic seed for ${refLabel}.`,
      originalPreview: undefined
    },
    exegesis: [
      {
        verseNumber: startVerse,
        originalText: `Texto original de ${book.name} ${chapter}:${startVerse}`,
        transliteration: `Aparato filológico detalhado não incluso no pacote local básico`,
        grammaticalAnalysis: `A análise morfológica e sintática exata verso por verso de ${book.name} ${chapter}:${startVerse} requer a ativação da base léxica expandida ou conexão com o backend LLM de exegese.`,
        syntaxAndStructure: `O livro de ${book.name} enquadra-se no gênero ${book.genre}, caracterizado por convenções literárias e teológicas próprias do período de ${book.approxDate}.`,
        keyTerms: [],
        confidence: 'academic_debate'
      }
    ],
    hermeneutics: {
      literaryGenre: `${book.genre} (${book.testament === 'OT' ? 'Antigo Testamento' : 'Novo Testamento'})`,
      authorialIntent: `O autor (${book.author}) escreveu no período de ${book.approxDate} para comunicar a revelação de Deus sobre ${book.keyTheme.toLowerCase()}.`,
      immediateContext: `O fluxo temático de ${book.name} ${chapter} desdobra o ensinamento bíblico dentro da estrutura geral da obra.`,
      broadContext: `A perícope vincula-se ao tema central do livro (${book.keyTheme}) e aponta para o cumprimento redentor da aliança bíblica.`,
      communicativeGoal: `Instruir, edificar e guiar o povo de Deus no conhecimento de Sua santidade e vontade.`,
      interpretativePrinciples: [
        'Princípio Gramático-Histórico: interpretar a passagem à luz do seu contexto histórico e literário original.',
        'Regra da Fé (Analogia Scripturae): a Escritura interpreta a própria Escritura em coerência canônica.'
      ],
      canonicalTrajectory: `Insere-se na grande narrativa de Criação, Queda, Redenção e Consumação das Escrituras Sagradas.`
    },
    history: {
      historicalPeriod: `${book.approxDate}`,
      rulingEmpire: book.testament === 'OT' ? 'Antigo Oriente Próximo' : 'Império Romano',
      keyRulersAndFigures: [book.author],
      culturalAndSocialContext: `Cenário histórico do período de ${book.approxDate}, refletindo os costumes, pactos e estruturas sociais da época.`,
      religiousEnvironment: `Monoteísmo bíblico e fidelidade à aliança de Deus em meio às cosmovisões do mundo antigo.`,
      geography: {
        location: 'Mundo Bíblico (Oriente Próximo / Mediterrâneo)',
        significance: 'Cenário dos atos históricos da redenção revelados nas Escrituras.',
        ancientMapReference: 'Terras Bíblicas'
      },
      archaeologicalFindings: [],
      timeline: [
        { date: book.approxDate, event: `Período de composição de ${book.name}`, biblicalSync: `${book.name} ${chapter}` }
      ],
      consensusVsHypothesis: {
        factOrConsensus: [
          `O livro de ${book.name} é parte integrante do cânon bíblico sagrado.`,
          `Reflete o gênero literário ${book.genre} e o contexto geral de ${book.approxDate}.`
        ],
        scholarlyDebate: [
          'Variações de ênfase exegética e debate acadêmico entre especialistas quanto à datação precisa e destinatários imediatos.'
        ],
        reconstructionHypothesis: []
      }
    },
    theology: {
      systematic: {
        teologiaPropria: 'Revelação da soberania, justiça e fidelidade de Deus.',
        cristologia: 'Conexão profética ou canônica com a história da redenção consumada em Cristo.',
        soteriologia: 'O plano redentor de Deus operando na história da salvação.',
        antropologia: 'A vocação humana sob a soberania e aliança do Criador.'
      },
      biblicalProgression: {
        inThisBook: `Desenvolve o tema de ${book.keyTheme.toLowerCase()} dentro de ${book.name}.`,
        inAuthorCorpus: `Harmoniza-se com a teologia pastoral de ${book.author}.`,
        inTestament: `Constitui elo indispensável no ${book.testament === 'OT' ? 'Antigo Testamento' : 'Novo Testamento'}.`,
        canonicalUnfolding: 'Contribui para a revelação progressiva da graça e verdade divinas.',
        covenantRelationship: 'Manifesta a fidelidade de Deus em cumprir Suas promessas pactuais.'
      }
    },
    languages: [],
    crossReferences: [],
    applications: {
      personalTransformation: [
        'Cultivar reverência diante da soberania e santidade de Deus.',
        'Submeter a vida e as decisões cotidianas à sabedoria da Palavra.',
        'Viver em integridade e fé sincera.'
      ],
      reflectionQuestions: [
        `Como a mensagem geral de ${book.name} (${book.keyTheme}) desafia minhas prioridades de vida hoje?`
      ],
      smallGroupDiscussionGuide: {
        icebreaker: 'O que mais chamou sua atenção no estudo deste livro bíblico?',
        observationQuestions: ['Qual é o tema principal deste capítulo?'],
        interpretationQuestions: ['Como este texto se conecta com a totalidade da mensagem bíblica?'],
        practicalActionQuestions: ['Qual atitude prática de obediência podemos adotar esta semana?']
      },
      ethicalAndContemporaryRelevance: 'Este texto nos convoca a alinhar nossa ética e esperança aos princípios eternos do Reino de Deus.'
    },
    homiletics: {
      sermonTitle: `A Mensagem de ${refLabel}`,
      thematicProposition: `A verdade revelada em ${book.name} nos chama a confiar na fidelidade de Deus e a viver para Sua glória.`,
      biblicalBaseText: refLabel,
      exordium: `Ao abrirmos ${refLabel}, encontramos a sabedoria eterna de Deus comunicada através de ${book.name}.`,
      contextualBridge: `No contexto de ${book.approxDate}, o autor inspirado nos aponta para o compromisso pactual do Senhor.`,
      mainPoints: [
        {
          pointNumber: 1,
          title: 'A Soberania e Santidade de Deus',
          biblicalExplanation: 'O texto bíblico exalta a primazia do Senhor sobre todas as esferas da existência.',
          subpoints: ['Deus reina sobre a história', 'Sua vontade é santa e perfeita'],
          illustrativeAnalogy: 'Como uma âncora firme na tempestade, a soberania divina sustenta a nossa fé.',
          practicalApplication: 'Entregue o controle das suas inquietações a Deus em oração.'
        },
        {
          pointNumber: 2,
          title: 'O Chamado à Fidelidade e Obediência',
          biblicalExplanation: 'O conhecimento da revelação divina exige correspondência prática e coração transformado.',
          subpoints: ['Ouvir a Palavra com reverência', 'Praticar a justiça e o amor'],
          illustrativeAnalogy: 'A árvore saudável fincada junto às águas que dá frutos no tempo certo.',
          practicalApplication: 'Avalie suas ações diárias à luz da santidade de Deus.'
        }
      ],
      conclusion: 'Deus Se revelou em Sua Palavra para que conheçamos Sua graça e andemos em Sua luz.',
      callToAction: 'Consagre hoje sua vida ao Senhor com humildade e gratidão.',
      homileticalDisclaimer: 'Esboço orientativo baseado na mensagem canônica do livro. Não substitui o estudo pessoal do pregador.'
    },
    suggestedFurtherReading: [
      `Comentários bíblicos acadêmicos e confessionais sobre ${book.name}.`
    ]
  };
}
