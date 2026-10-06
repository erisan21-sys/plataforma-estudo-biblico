import type { BibleBook, BookGenre } from '../types/bible';

export const BIBLE_BOOKS: BibleBook[] = [
  // ANTIGO TESTAMENTO - PENTATEUCO
  { id: 'GEN', name: 'Gênesis', abbr: 'Gn', testament: 'OT', genre: 'Pentateuco', chaptersCount: 50, order: 1, author: 'Moisés', approxDate: '1446-1406 a.C.', keyTheme: 'Origens, Criação, Queda e Aliança Patriarcal' },
  { id: 'EXO', name: 'Êxodo', abbr: 'Êx', testament: 'OT', genre: 'Pentateuco', chaptersCount: 40, order: 2, author: 'Moisés', approxDate: '1446-1406 a.C.', keyTheme: 'Libertação, Redenção, Lei do Sinai e Tabernáculo' },
  { id: 'LEV', name: 'Levítico', abbr: 'Lv', testament: 'OT', genre: 'Pentateuco', chaptersCount: 27, order: 3, author: 'Moisés', approxDate: '1446-1406 a.C.', keyTheme: 'Santidade, Sacrifícios e Sacerdócio' },
  { id: 'NUM', name: 'Números', abbr: 'Nm', testament: 'OT', genre: 'Pentateuco', chaptersCount: 36, order: 4, author: 'Moisés', approxDate: '1446-1406 a.C.', keyTheme: 'Peregrinação no Deserto e Fidelidade de Deus' },
  { id: 'DEU', name: 'Deuteronômio', abbr: 'Dt', testament: 'OT', genre: 'Pentateuco', chaptersCount: 34, order: 5, author: 'Moisés', approxDate: '1406 a.C.', keyTheme: 'Renovação da Aliança e Obediência de Coração' },

  // HISTÓRICOS
  { id: 'JOS', name: 'Josué', abbr: 'Js', testament: 'OT', genre: 'Histórico', chaptersCount: 24, order: 6, author: 'Josué (compilado)', approxDate: '1400-1375 a.C.', keyTheme: 'Conquista e Posse da Terra Prometida' },
  { id: 'JDG', name: 'Juízes', abbr: 'Jz', testament: 'OT', genre: 'Histórico', chaptersCount: 21, order: 7, author: 'Samuel (tradicional)', approxDate: '1050-1000 a.C.', keyTheme: 'Ciclos de Apostasia, Opressão e Libertação' },
  { id: 'RUT', name: 'Rute', abbr: 'Rt', testament: 'OT', genre: 'Histórico', chaptersCount: 4, order: 8, author: 'Desconhecido / Samuel', approxDate: '1010-970 a.C.', keyTheme: 'O Parente Remidor e a Providência Soberana' },
  { id: '1SA', name: '1 Samuel', abbr: '1Sm', testament: 'OT', genre: 'Histórico', chaptersCount: 31, order: 9, author: 'Samuel, Natã e Gade', approxDate: '930-722 a.C.', keyTheme: 'Transição da Teocracia para a Monarquia Davídica' },
  { id: '2SA', name: '2 Samuel', abbr: '2Sm', testament: 'OT', genre: 'Histórico', chaptersCount: 24, order: 10, author: 'Natã e Gade', approxDate: '930-722 a.C.', keyTheme: 'O Reinado de Davi e a Aliança Eterna' },
  { id: '1KI', name: '1 Reis', abbr: '1Rs', testament: 'OT', genre: 'Histórico', chaptersCount: 22, order: 11, author: 'Jeremias (tradicional)', approxDate: '560-538 a.C.', keyTheme: 'Glória de Salomão e Divisão do Reino' },
  { id: '2KI', name: '2 Reis', abbr: '2Rs', testament: 'OT', genre: 'Histórico', chaptersCount: 25, order: 12, author: 'Jeremias (tradicional)', approxDate: '560-538 a.C.', keyTheme: 'Declínio Moral, Queda de Samaria e Exílio Babilônico' },
  { id: '1CH', name: '1 Crônicas', abbr: '1Cr', testament: 'OT', genre: 'Histórico', chaptersCount: 29, order: 13, author: 'Esdras', approxDate: '450-400 a.C.', keyTheme: 'Genealogias e Teologia do Culto Davídico' },
  { id: '2CH', name: '2 Crônicas', abbr: '2Cr', testament: 'OT', genre: 'Histórico', chaptersCount: 36, order: 14, author: 'Esdras', approxDate: '450-400 a.C.', keyTheme: 'O Templo, Avivamento e Julgamento Real' },
  { id: 'EZR', name: 'Esdras', abbr: 'Ed', testament: 'OT', genre: 'Histórico', chaptersCount: 10, order: 15, author: 'Esdras', approxDate: '440-400 a.C.', keyTheme: 'Retorno do Exílio e Reconstrução do Templo' },
  { id: 'NEH', name: 'Neemias', abbr: 'Ne', testament: 'OT', genre: 'Histórico', chaptersCount: 13, order: 16, author: 'Neemias', approxDate: '430-400 a.C.', keyTheme: 'Reconstrução dos Muros e Reforma Espiritual' },
  { id: 'EST', name: 'Ester', abbr: 'Et', testament: 'OT', genre: 'Histórico', chaptersCount: 10, order: 17, author: 'Mordecai (provável)', approxDate: '460-400 a.C.', keyTheme: 'Providência Invisível de Deus na Pérsia' },

  // POÉTICOS E SABEDORIA
  { id: 'JOB', name: 'Jó', abbr: 'Jó', testament: 'OT', genre: 'Poético e Sabedoria', chaptersCount: 42, order: 18, author: 'Desconhecido', approxDate: 'Período Patriarcal / Pré-exílico', keyTheme: 'Soberania de Deus em Meio ao Sofrimento Inocente' },
  { id: 'PSA', name: 'Salmos', abbr: 'Sl', testament: 'OT', genre: 'Poético e Sabedoria', chaptersCount: 150, order: 19, author: 'Davi, Asafe, Filhos de Coré, Moisés', approxDate: '1400-450 a.C.', keyTheme: 'Hinário de Louvor, Lamento e Teologia Messiânica' },
  { id: 'PRO', name: 'Provérbios', abbr: 'Pv', testament: 'OT', genre: 'Poético e Sabedoria', chaptersCount: 31, order: 20, author: 'Salomão, Agur, Lemuel', approxDate: '950-700 a.C.', keyTheme: 'Sabedoria Prática no Temor do Senhor' },
  { id: 'ECC', name: 'Eclesiastes', abbr: 'Ec', testament: 'OT', genre: 'Poético e Sabedoria', chaptersCount: 12, order: 21, author: 'Salomão (Coélet)', approxDate: '935 a.C.', keyTheme: 'A Vaidade da Vida Sem Deus e o Propósito Eterno' },
  { id: 'SNG', name: 'Cânticos', abbr: 'Ct', testament: 'OT', genre: 'Poético e Sabedoria', chaptersCount: 8, order: 22, author: 'Salomão', approxDate: '965 a.C.', keyTheme: 'Beleza do Amor Conjugal e Fidelidade' },

  // PROFETAS MAIORES
  { id: 'ISA', name: 'Isaías', abbr: 'Is', testament: 'OT', genre: 'Profetas Maiores', chaptersCount: 66, order: 23, author: 'Isaías', approxDate: '740-681 a.C.', keyTheme: 'Julgamento, Santidade e o Servo Sofredor (Cristo)' },
  { id: 'JER', name: 'Jeremias', abbr: 'Jr', testament: 'OT', genre: 'Profetas Maiores', chaptersCount: 52, order: 24, author: 'Jeremias', approxDate: '627-580 a.C.', keyTheme: 'A Nova Aliança Escrita no Coração' },
  { id: 'LAM', name: 'Lamentações', abbr: 'Lm', testament: 'OT', genre: 'Profetas Maiores', chaptersCount: 5, order: 25, author: 'Jeremias', approxDate: '586 a.C.', keyTheme: 'Lamento sobre Sião e as Misericórdias Inesgotáveis' },
  { id: 'EZK', name: 'Ezequiel', abbr: 'Ez', testament: 'OT', genre: 'Profetas Maiores', chaptersCount: 48, order: 26, author: 'Ezequiel', approxDate: '593-571 a.C.', keyTheme: 'Glória Divina, Renascimento Espiritual e Novo Templo' },
  { id: 'DAN', name: 'Daniel', abbr: 'Dn', testament: 'OT', genre: 'Profetas Maiores', chaptersCount: 12, order: 27, author: 'Daniel', approxDate: '605-535 a.C.', keyTheme: 'Soberania Universal de Deus sobre os Impérios Humanos' },

  // PROFETAS MENORES
  { id: 'HOS', name: 'Oseias', abbr: 'Os', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 14, order: 28, author: 'Oseias', approxDate: '750-715 a.C.', keyTheme: 'Amor Inabalável de Deus por Israel Infiel' },
  { id: 'JOL', name: 'Joel', abbr: 'Jl', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 3, order: 29, author: 'Joel', approxDate: '835-800 a.C.', keyTheme: 'O Dia do Senhor e o Derramamento do Espírito' },
  { id: 'AMO', name: 'Amós', abbr: 'Am', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 9, order: 30, author: 'Amós', approxDate: '760-750 a.C.', keyTheme: 'Justiça Social e Retidão como Adoração Verdadeira' },
  { id: 'OBA', name: 'Obadias', abbr: 'Ob', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 1, order: 31, author: 'Obadias', approxDate: '586 a.C.', keyTheme: 'Julgamento de Edom e Triunfo do Reino de Deus' },
  { id: 'JON', name: 'Jonas', abbr: 'Jn', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 4, order: 32, author: 'Jonas', approxDate: '780-760 a.C.', keyTheme: 'Graça Divina e Misericórdia para com as Nações Gentílicas' },
  { id: 'MIC', name: 'Miqueias', abbr: 'Mq', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 7, order: 33, author: 'Miqueias', approxDate: '735-700 a.C.', keyTheme: 'Praticar a Justiça, Amar a Misericórdia e Andar Humildemente' },
  { id: 'NAH', name: 'Naum', abbr: 'Na', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 3, order: 34, author: 'Naum', approxDate: '663-612 a.C.', keyTheme: 'Queda de Nínive e Justiça Divina contra a Opressão' },
  { id: 'HAB', name: 'Habacuque', abbr: 'Hc', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 3, order: 35, author: 'Habacuque', approxDate: '608-605 a.C.', keyTheme: 'O Justo Viverá da sua Fé em Tempos Sombrios' },
  { id: 'ZEP', name: 'Sofonias', abbr: 'Sf', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 3, order: 36, author: 'Sofonias', approxDate: '640-620 a.C.', keyTheme: 'O Grande Dia do Senhor e o Remanescente Fiel' },
  { id: 'HAG', name: 'Ageu', abbr: 'Ag', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 2, order: 37, author: 'Ageu', approxDate: '520 a.C.', keyTheme: 'Prioridade da Casa de Deus e Glória Futura' },
  { id: 'ZEC', name: 'Zacarias', abbr: 'Zc', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 14, order: 38, author: 'Zacarias', approxDate: '520-480 a.C.', keyTheme: 'Restauração Messiânica e o Rei Humilde' },
  { id: 'MAL', name: 'Malaquias', abbr: 'Ml', testament: 'OT', genre: 'Profetas Menores', chaptersCount: 4, order: 39, author: 'Malaquias', approxDate: '430 a.C.', keyTheme: 'Fidelidade na Adoração e o Sol da Justiça' },

  // NOVO TESTAMENTO - EVANGELHOS
  { id: 'MAT', name: 'Mateus', abbr: 'Mt', testament: 'NT', genre: 'Evangelhos', chaptersCount: 28, order: 40, author: 'Mateus (Leví)', approxDate: '60-70 d.C.', keyTheme: 'Jesus como o Rei Messiânico e Cumprimento da Lei' },
  { id: 'MRK', name: 'Marcos', abbr: 'Mc', testament: 'NT', genre: 'Evangelhos', chaptersCount: 16, order: 41, author: 'João Marcos', approxDate: '55-65 d.C.', keyTheme: 'Jesus como Servo de Deus e Filho Poderoso' },
  { id: 'LUK', name: 'Lucas', abbr: 'Lc', testament: 'NT', genre: 'Evangelhos', chaptersCount: 24, order: 42, author: 'Lucas, o Médico Amado', approxDate: '60-63 d.C.', keyTheme: 'O Filho do Homem que Veio Salvar os Perdidos' },
  { id: 'JHN', name: 'João', abbr: 'Jo', testament: 'NT', genre: 'Evangelhos', chaptersCount: 21, order: 43, author: 'João, o Discípulo Amado', approxDate: '85-95 d.C.', keyTheme: 'O Verbo Encarnado, Vida Eterna e Divindade de Cristo' },

  // HISTÓRICO NT
  { id: 'ACT', name: 'Atos dos Apóstolos', abbr: 'At', testament: 'NT', genre: 'Histórico NT', chaptersCount: 28, order: 44, author: 'Lucas', approxDate: '63-65 d.C.', keyTheme: 'Expansão da Igreja e Obra Soberana do Espírito Santo' },

  // EPÍSTOLAS PAULINAS
  { id: 'ROM', name: 'Romanos', abbr: 'Rm', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 16, order: 45, author: 'Apóstolo Paulo', approxDate: '57 d.C.', keyTheme: 'Justificação Pela Fé e Teologia da Graça' },
  { id: '1CO', name: '1 Coríntios', abbr: '1Co', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 16, order: 46, author: 'Apóstolo Paulo', approxDate: '55 d.C.', keyTheme: 'Ordem Eclesial, Doutrina da Ressurreição e Amor' },
  { id: '2CO', name: '2 Coríntios', abbr: '2Co', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 13, order: 47, author: 'Apóstolo Paulo', approxDate: '56 d.C.', keyTheme: 'O Ministério Apostólico e Poder na Fraqueza' },
  { id: 'GAL', name: 'Gálatas', abbr: 'Gl', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 6, order: 48, author: 'Apóstolo Paulo', approxDate: '48-55 d.C.', keyTheme: 'Liberdade Cristã e Defesa do Evangelho da Graça' },
  { id: 'EPH', name: 'Efésios', abbr: 'Ef', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 6, order: 49, author: 'Apóstolo Paulo', approxDate: '60-62 d.C.', keyTheme: 'A Igreja como Corpo de Cristo e Riquezas Celestiais' },
  { id: 'PHP', name: 'Filipenses', abbr: 'Fp', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 4, order: 50, author: 'Apóstolo Paulo', approxDate: '61-62 d.C.', keyTheme: 'Alegria em Cristo e a Humilhação/Exaltação de Jesus (Kénosis)' },
  { id: 'COL', name: 'Colossenses', abbr: 'Cl', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 4, order: 51, author: 'Apóstolo Paulo', approxDate: '60-62 d.C.', keyTheme: 'A Supremacia e Suficiência Absoluta de Cristo' },
  { id: '1TH', name: '1 Tessalonicenses', abbr: '1Ts', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 5, order: 52, author: 'Apóstolo Paulo', approxDate: '51 d.C.', keyTheme: 'Santificação e a Esperança da Segunda Vinda' },
  { id: '2TH', name: '2 Tessalonicenses', abbr: '2Ts', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 3, order: 53, author: 'Apóstolo Paulo', approxDate: '51-52 d.C.', keyTheme: 'Consolo na Perseguição e Instruções sobre o Fim' },
  { id: '1TI', name: '1 Timóteo', abbr: '1Tm', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 6, order: 54, author: 'Apóstolo Paulo', approxDate: '63-65 d.C.', keyTheme: 'Liderança Pastoral, Sã Doutrina e Vida da Igreja' },
  { id: '2TI', name: '2 Timóteo', abbr: '2Tm', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 4, order: 55, author: 'Apóstolo Paulo', approxDate: '66-67 d.C.', keyTheme: 'Fidelidade até o Fim e Inspiração das Escrituras' },
  { id: 'TIT', name: 'Tito', abbr: 'Tt', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 3, order: 56, author: 'Apóstolo Paulo', approxDate: '63-65 d.C.', keyTheme: 'Boas Obras Decorrentes da Graça que nos Ensina' },
  { id: 'PHM', name: 'Filemom', abbr: 'Fm', testament: 'NT', genre: 'Epístolas Paulinas', chaptersCount: 1, order: 57, author: 'Apóstolo Paulo', approxDate: '60-62 d.C.', keyTheme: 'Reconciliação e Fraternidade em Cristo' },

  // EPÍSTOLAS GERAIS
  { id: 'HEB', name: 'Hebreus', abbr: 'Hb', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 13, order: 58, author: 'Anônimo (Paulo/Apolo/Barnabé)', approxDate: '64-68 d.C.', keyTheme: 'A Superioridade Eterna de Cristo e da Nova Aliança' },
  { id: 'JAS', name: 'Tiago', abbr: 'Tg', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 5, order: 59, author: 'Tiago, irmão do Senhor', approxDate: '45-48 d.C.', keyTheme: 'A Fé Autêntica Demonstrada por Obras de Justiça' },
  { id: '1PE', name: '1 Pedro', abbr: '1Pe', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 5, order: 60, author: 'Apóstolo Pedro', approxDate: '63-64 d.C.', keyTheme: 'Esperança Viva em Meio ao Sofrimento e Provações' },
  { id: '2PE', name: '2 Pedro', abbr: '2Pe', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 3, order: 61, author: 'Apóstolo Pedro', approxDate: '65-68 d.C.', keyTheme: 'Crescimento na Graça e Alerta contra Falsos Mestres' },
  { id: '1JN', name: '1 João', abbr: '1Jo', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 5, order: 62, author: 'Apóstolo João', approxDate: '85-95 d.C.', keyTheme: 'Comunhão com Deus, Amor Fraternal e Certeza da Salvação' },
  { id: '2JN', name: '2 João', abbr: '2Jo', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 1, order: 63, author: 'Apóstolo João', approxDate: '85-95 d.C.', keyTheme: 'Andar na Verdade e Discernimento contra Enganadores' },
  { id: '3JN', name: '3 João', abbr: '3Jo', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 1, order: 64, author: 'Apóstolo João', approxDate: '85-95 d.C.', keyTheme: 'Hospitalidade Cristã e Fidelidade Ministerial' },
  { id: 'JUD', name: 'Judas', abbr: 'Jd', testament: 'NT', genre: 'Epístolas Gerais', chaptersCount: 1, order: 65, author: 'Judas, irmão de Tiago', approxDate: '65-80 d.C.', keyTheme: 'Batalhar Pela Fé Entregue aos Santos' },

  // PROFECIA E APOCALIPSE
  { id: 'REV', name: 'Apocalipse', abbr: 'Ap', testament: 'NT', genre: 'Profecia e Apocalipse', chaptersCount: 22, order: 66, author: 'Apóstolo João', approxDate: '95-96 d.C.', keyTheme: 'Vitória Final do Cordeiro, Juízo e Novos Céus e Nova Terra' },
];

export const GENRES_LIST: BookGenre[] = [
  'Pentateuco',
  'Histórico',
  'Poético e Sabedoria',
  'Profetas Maiores',
  'Profetas Menores',
  'Evangelhos',
  'Histórico NT',
  'Epístolas Paulinas',
  'Epístolas Gerais',
  'Profecia e Apocalipse'
];
