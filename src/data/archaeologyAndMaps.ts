import { EpistemicConfidence } from '../types/bible';

export interface ArchaeologicalArtifact {
  id: string;
  name: string;
  period: string;
  discoveryDate: string;
  locationFound: string;
  currentMuseum: string;
  biblicalRelevance: string;
  confidence: EpistemicConfidence;
  imageUrl?: string;
  description: string;
}

export interface MapData {
  id: string;
  title: string;
  period: string;
  description: string;
  keyLocations: {
    name: string;
    description: string;
    biblicalEvents: string[];
  }[];
}

export interface TimelineEvent {
  year: string;
  period: string;
  title: string;
  description: string;
  scriptureReferences: string[];
  keyFigures: string[];
}

export const ARTIFACTS_DATABASE: ArchaeologicalArtifact[] = [
  {
    id: 'art_1',
    name: 'Manuscritos do Mar Morto (Rolos de Qumran)',
    period: 'Século III a.C. a Século I d.C.',
    discoveryDate: '1947',
    locationFound: 'Cavernas de Qumran, Deserto da Judeia',
    currentMuseum: 'Santuário do Livro (Museu de Israel, Jerusalém)',
    biblicalRelevance: 'Contém cópias de quase todos os livros do Antigo Testamento (com destaque para o Grande Rolo de Isaías), demonstrando a extrema precisão da transmissão do texto hebraico ao longo de mais de mil anos.',
    confidence: 'high',
    description: 'A maior descoberta de manuscritos do século XX, demonstrando que o texto massorético preservou com fidelidade admirável as Escrituras proféticas.'
  },
  {
    id: 'art_2',
    name: 'Pedra de Pilatos (Inscrição de Cesareia)',
    period: 'c. 26-36 d.C.',
    discoveryDate: '1961',
    locationFound: 'Teatro Romano de Cesareia Marítima',
    currentMuseum: 'Museu de Israel, Jerusalém',
    biblicalRelevance: 'Inscrição monumental em latim com o nome de "PÔNCIO PILATOS, PREFEITO DA JUDEIA", confirmando a existência histórica e o título oficial exato do magistrado romano que julgou Jesus.',
    confidence: 'high',
    description: 'Primeira confirmação epigráfica contemporânea da governança de Pôncio Pilatos na Judeia.'
  },
  {
    id: 'art_3',
    name: 'Rolos de Prata de Ketef Hinnom (Bênção Aarônica)',
    period: 'c. final do Século VII a.C. (período pré-exílico)',
    discoveryDate: '1979',
    locationFound: 'Túmulos de Ketef Hinnom, Jerusalém',
    currentMuseum: 'Museu de Israel, Jerusalém',
    biblicalRelevance: 'Pequenos amuletos de prata gravados em hebraico arcaico contendo a Bênção Sacerdotal de Números 6:24-26 ("O Senhor te abençoe e te guarde..."). É o texto bíblico mais antigo já descoberto.',
    confidence: 'high',
    description: 'Evidência definitiva de que o texto da Torá já estava em circulação escrita antes da destruição do Primeiro Templo por Nabucodonosor.'
  },
  {
    id: 'art_4',
    name: 'Estela de Tel Dã ("Casa de Davi")',
    period: 'Século IX a.C. (c. 840 a.C.)',
    discoveryDate: '1993',
    locationFound: 'Tel Dã, Norte de Israel',
    currentMuseum: 'Museu de Israel, Jerusalém',
    biblicalRelevance: 'Inscrição aramaica celebrando a vitória de um rei arameu (provavelmente Hazael) que menciona explicitamente a derrota de um rei da "Casa de Davi" (Beit David), refutando o ceticismo minimalista quanto à dinastia davídica.',
    confidence: 'high',
    description: 'Primeira menção extrabíblica explícita da dinastia real do Rei Davi.'
  },
  {
    id: 'art_5',
    name: 'Cilindro de Ciro',
    period: '539 a.C.',
    discoveryDate: '1879',
    locationFound: 'Babilônia (moderno Iraque)',
    currentMuseum: 'British Museum, Londres',
    biblicalRelevance: 'Declaração cuneiforme do rei Ciro, o Grande da Pérsia, autorizando os povos cativos a retornarem às suas terras natais e reconstruírem seus santuários, confirmando o decreto de retorno registrado em Esdras 1 e Isaías 44-45.',
    confidence: 'high',
    description: 'Documento histórico que corrobora a política imperial persa narrada nas Escrituras para a volta do cativeiro de Judá.'
  },
  {
    id: 'art_6',
    name: 'Tanque de Siloé (Escavações de 2004)',
    period: 'Século I a.C. / Século I d.C.',
    discoveryDate: '2004',
    locationFound: 'Cidade de Davi, Jerusalém',
    currentMuseum: 'Sítio Arqueológico in situ, Jerusalém',
    biblicalRelevance: 'Piscina monumental monumental de purificação ritual e abastecimento hídrico onde Jesus enviou o homem cego de nascença para ser curado em João 9.',
    confidence: 'high',
    description: 'Descoberta do reservatório do período do Segundo Templo alimentado pela fonte de Giom.'
  }
];

export const BIBLICAL_MAPS: MapData[] = [
  {
    id: 'map_1',
    title: 'Jerusalém no Período do Segundo Templo (Século I d.C.)',
    period: 'Tempo de Jesus e da Igreja Primitiva',
    description: 'A topografia de Jerusalém destacando o complexo grandioso do Templo ampliado por Herodes, a Fortaleza Antônia, o Monte das Oliveiras e o Gólgota.',
    keyLocations: [
      { name: 'Templo de Jerusalém', description: 'O centro espiritual e sacrificial de Israel, reconstruído por Herodes o Grande.', biblicalEvents: ['Apresentação de Jesus', 'Purificação do Templo', 'Ensino dos Apóstolos'] },
      { name: 'Fortaleza Antônia', description: 'Guarnição militar romana adjacente ao Templo onde Pilatos julgou os prisioneiros.', biblicalEvents: ['Julgamento de Jesus', 'Prisão de Paulo'] },
      { name: 'Jardim do Getsêmani', description: 'Olival na encosta ocidental do Monte das Oliveiras.', biblicalEvents: ['Agonia e Oração de Jesus', 'Traição de Judas'] },
      { name: 'Tanque de Betesda', description: 'Piscina com cinco pórticos perto da Porta das Ovelhas.', biblicalEvents: ['Cura do paralítico em João 5'] }
    ]
  },
  {
    id: 'map_2',
    title: 'As Viagens Missionárias do Apóstolo Paulo',
    period: 'c. 47-62 d.C.',
    description: 'O avanço do evangelho por Antioquia da Síria, Ásia Menor, Grécia continental (Macedônia e Acaia) até Roma através das calçadas romanas (*Via Egnatia*) e rotas marítimas.',
    keyLocations: [
      { name: 'Antioquia da Síria', description: 'Base missionária da igreja gentílica de onde Paulo e Barnabé foram enviados.', biblicalEvents: ['Primeiro envio missionário em Atos 13'] },
      { name: 'Filipos', description: 'Colônia militar romana de status especial na Macedônia.', biblicalEvents: ['Conversão de Lídia', 'Prisão de Paulo e Silas', 'Conversão do Carcereiro'] },
      { name: 'Éfeso', description: 'Metrópole da Ásia Menor onde Paulo permaneceu por quase 3 anos ensinando na Escola de Tirano.', biblicalEvents: ['Avivamento em Atos 19', 'Epístola aos Efésios'] },
      { name: 'Atenas', description: 'Centro cultural e filosófico do mundo helenístico.', biblicalEvents: ['Discurso de Paulo no Areópago em Atos 17'] }
    ]
  },
  {
    id: 'map_3',
    title: 'O Antigo Oriente Próximo e os Grandes Impérios',
    period: '2000 a.C. a 500 a.C.',
    description: 'O Crescente Fértil abrangendo a Mesopotâmia (Suméria, Assíria, Babilônia), o Egito faraônico e a terra de Canaã.',
    keyLocations: [
      { name: 'Ur dos Caldeus', description: 'Cidade ancestral mesopotâmica de onde Abraão partiu pela fé.', biblicalEvents: ['Chamado de Abraão em Gênesis 12'] },
      { name: 'Monte Sinai (Horebe)', description: 'Montanha sagrada na Península do Sinai.', biblicalEvents: ['Entrega da Lei e dos Dez Mandamentos'] },
      { name: 'Babilônia', description: 'Capital do império de Nabucodonosor que destruiu Jerusalém em 586 a.C.', biblicalEvents: ['Exílio Judaico', 'Ministério de Daniel e Ezequiel'] }
    ]
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: 'c. 2000 a.C.',
    period: 'Era dos Patriarcas',
    title: 'Chamado de Abraão e a Aliança Patriarcal',
    description: 'Deus chama Abrão de Ur dos Caldeus e estabelece uma aliança incondicional prometendo terra, descendência e bênção a todas as famílias da terra.',
    scriptureReferences: ['Gênesis 12:1-3', 'Gênesis 15', 'Gênesis 17'],
    keyFigures: ['Abraão', 'Sara', 'Isaque', 'Jacó']
  },
  {
    year: 'c. 1446 / 1250 a.C.',
    period: 'Êxodo e Peregrinação',
    title: 'A Libertação do Egito e a Aliança do Sinai',
    description: 'Moisés conduz o povo de Israel para fora da escravidão egípcia através de milagres e recebe a Torá no Monte Sinai.',
    scriptureReferences: ['Êxodo 1-20', 'Deuteronômio'],
    keyFigures: ['Moisés', 'Arão', 'Miriã', 'Josué']
  },
  {
    year: 'c. 1010-970 a.C.',
    period: 'Monarquia Unida',
    title: 'Reinado de Davi e a Aliança Davídica',
    description: 'Davi unifica as 12 tribos, conquista Jerusalém como capital e recebe a promessa de uma dinastia eterna que culminará no Messias.',
    scriptureReferences: ['2 Samuel 7', '1 Crônicas 17', 'Salmos'],
    keyFigures: ['Rei Davi', 'Profeta Natã', 'Salomão']
  },
  {
    year: '586 a.C.',
    period: 'O Exílio Babilônico',
    title: 'Destruição de Jerusalém e Queda do Templo',
    description: 'Nabucodonosor invade Judá, destrói o Primeiro Templo construído por Salomão e deporta a nobreza e o povo para a Babilônia.',
    scriptureReferences: ['2 Reis 25', 'Jeremias 39', 'Lamentações'],
    keyFigures: ['Nabucodonosor', 'Jeremias', 'Ezequiel', 'Daniel']
  },
  {
    year: '538 a.C.',
    period: 'Pós-Exílio e Reconstrução',
    title: 'Decreto de Ciro e Retorno dos Exilados',
    description: 'O rei Ciro da Pérsia autoriza o retorno a Jerusalém; Esdras e Zorobabel reconstroem o Templo e Neemias restaura as muralhas.',
    scriptureReferences: ['Esdras 1-6', 'Neemias 1-13', 'Ageu', 'Zacarias'],
    keyFigures: ['Ciro o Grande', 'Zorobabel', 'Esdras', 'Neemias']
  },
  {
    year: 'c. 4 a.C. - 30 d.C.',
    period: 'A Plenitude dos Tempos',
    title: 'Vida, Ministério, Morte e Ressurreição de Jesus',
    description: 'A encarnação do Filho de Deus, proclamação do Reino, sacrifício expiatório na cruz e ressurreição gloriosa.',
    scriptureReferences: ['Mateus', 'Marcos', 'Lucas', 'João'],
    keyFigures: ['Jesus Cristo', 'João Batista', 'Os Doze Apóstolos', 'Maria']
  },
  {
    year: 'c. 30-100 d.C.',
    period: 'A Era Apostólica',
    title: 'Derramamento do Espírito Santo e Expansão da Igreja',
    description: 'Em Pentecostes o Espírito Santo desce sobre os discípulos; o evangelho se espalha de Jerusalém aos confins da terra.',
    scriptureReferences: ['Atos dos Apóstolos', 'Epístolas Paulinas e Gerais', 'Apocalipse'],
    keyFigures: ['Pedro', 'Paulo', 'João', 'Tiago', 'Lucas']
  }
];
