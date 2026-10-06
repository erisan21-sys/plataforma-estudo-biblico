import type { BibleVerse } from '../types/bible';

// Rich curated database for seminal biblical passages with authentic multi-version & interlinear Greek/Hebrew data
export const CURATED_VERSES: Record<string, BibleVerse[]> = {
  // JOÃO 1
  'JHN_1': [
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 1,
      text: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
      versions: {
        ARC: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
        AA: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
        KJV: 'In the beginning was the Word, and the Word was with God, and the Word was God.'
      },
      interlinear: [
        { hebrewOrGreek: 'Ἐν', transliteration: 'En', strong: 'G1722', morphology: 'Prep', portuguese: 'Em', meaning: 'Preposição que indica posição/origem' },
        { hebrewOrGreek: 'ἀρχῇ', transliteration: 'archē', strong: 'G746', morphology: 'N-DSF', portuguese: 'princípio', meaning: 'começo, origem primordial' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'era/existia', meaning: 'existia continuamente (imperfeito ontológico)' },
        { hebrewOrGreek: 'ὁ', transliteration: 'ho', strong: 'G3588', morphology: 'T-NSM', portuguese: 'o', meaning: 'artigo definido' },
        { hebrewOrGreek: 'Λόγος', transliteration: 'Logos', strong: 'G3056', morphology: 'N-NSM', portuguese: 'Verbo / Palavra', meaning: 'expressão divina, revelação expressa' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'conjunção aditiva' },
        { hebrewOrGreek: 'ὁ', transliteration: 'ho', strong: 'G3588', morphology: 'T-NSM', portuguese: 'o', meaning: 'artigo definido' },
        { hebrewOrGreek: 'Λόγος', transliteration: 'Logos', strong: 'G3056', morphology: 'N-NSM', portuguese: 'Verbo', meaning: 'o Logos' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'estava', meaning: 'existia em comunhão face a face' },
        { hebrewOrGreek: 'πρὸς', transliteration: 'pros', strong: 'G4314', morphology: 'Prep', portuguese: 'com / voltado para', meaning: 'em íntima comunhão relacional' },
        { hebrewOrGreek: 'τὸν', transliteration: 'ton', strong: 'G3588', morphology: 'T-ASM', portuguese: 'o', meaning: 'artigo definido acusativo' },
        { hebrewOrGreek: 'Θεόν', transliteration: 'Theon', strong: 'G2316', morphology: 'N-ASM', portuguese: 'Deus', meaning: 'o Deus Supremo (o Pai)' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'conjunção' },
        { hebrewOrGreek: 'Θεὸς', transliteration: 'Theos', strong: 'G2316', morphology: 'N-NSM', portuguese: 'Deus (em essência)', meaning: 'natureza divina qualitativa (anartro preposto, Regra de Colwell)' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'era', meaning: 'existia sendo' },
        { hebrewOrGreek: 'ὁ', transliteration: 'ho', strong: 'G3588', morphology: 'T-NSM', portuguese: 'o', meaning: 'artigo' },
        { hebrewOrGreek: 'Λόγος', transliteration: 'Logos', strong: 'G3056', morphology: 'N-NSM', portuguese: 'Verbo', meaning: 'o sujeito da oração' }
      ]
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 2,
      text: 'Ele estava no princípio com Deus.',
      versions: {
        ARC: 'Ele estava no princípio com Deus.',
        AA: 'Ele estava no princípio com Deus.',
        KJV: 'The same was in the beginning with God.'
      },
      interlinear: [
        { hebrewOrGreek: 'οὗτος', transliteration: 'houtos', strong: 'G3778', morphology: 'D-NSM', portuguese: 'Este', meaning: 'pronome demonstrativo enfático' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'estava', meaning: 'existia' },
        { hebrewOrGreek: 'ἐν', transliteration: 'en', strong: 'G1722', morphology: 'Prep', portuguese: 'no', meaning: 'em' },
        { hebrewOrGreek: 'ἀρχῇ', transliteration: 'archē', strong: 'G746', morphology: 'N-DSF', portuguese: 'princípio', meaning: 'origem primordial' },
        { hebrewOrGreek: 'πρὸς', transliteration: 'pros', strong: 'G4314', morphology: 'Prep', portuguese: 'com', meaning: 'em íntima relação com' },
        { hebrewOrGreek: 'τὸν', transliteration: 'ton', strong: 'G3588', morphology: 'T-ASM', portuguese: 'o', meaning: 'artigo' },
        { hebrewOrGreek: 'Θεόν', transliteration: 'Theon', strong: 'G2316', morphology: 'N-ASM', portuguese: 'Deus', meaning: 'Deus Pai' }
      ]
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 3,
      text: 'Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.',
      versions: {
        ARC: 'Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.',
        AA: 'Todas as coisas foram feitas por intermédio dele, e sem ele nada do que foi feito se fez.',
        KJV: 'All things were made by him; and without him was not any thing made that was made.'
      },
      interlinear: [
        { hebrewOrGreek: 'πάντα', transliteration: 'panta', strong: 'G3956', morphology: 'A-NPN', portuguese: 'Todas as coisas', meaning: 'a totalidade da criação' },
        { hebrewOrGreek: 'δι’', transliteration: 'di’', strong: 'G1223', morphology: 'Prep', portuguese: 'por meio de', meaning: 'agente intermediário da criação' },
        { hebrewOrGreek: 'αὐτοῦ', transliteration: 'autou', strong: 'G846', morphology: 'P-GSM', portuguese: 'dele', meaning: 'do Logos' },
        { hebrewOrGreek: 'ἐγένετο', transliteration: 'egeneto', strong: 'G1096', morphology: 'V-2ADI-3S', portuguese: 'veio a existir', meaning: 'passou a existir' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'e' },
        { hebrewOrGreek: 'χωρὶς', transliteration: 'chōris', strong: 'G5565', morphology: 'Adv', portuguese: 'sem', meaning: 'à parte de' },
        { hebrewOrGreek: 'αὐτοῦ', transliteration: 'autou', strong: 'G846', morphology: 'P-GSM', portuguese: 'ele', meaning: 'dele' },
        { hebrewOrGreek: 'ἐγένετο', transliteration: 'egeneto', strong: 'G1096', morphology: 'V-2ADI-3S', portuguese: 'foi feito', meaning: 'veio a ser' },
        { hebrewOrGreek: 'οὐδὲ', transliteration: 'oude', strong: 'G3761', morphology: 'Adv', portuguese: 'nem sequer', meaning: 'absolutamente nada' },
        { hebrewOrGreek: 'ἕν', transliteration: 'hen', strong: 'G1520', morphology: 'A-NSN', portuguese: 'uma coisa', meaning: 'uma única entidade' }
      ]
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 4,
      text: 'Nele estava a vida, e a vida era a luz dos homens.',
      versions: {
        ARC: 'Nele estava a vida, e a vida era a luz dos homens.',
        AA: 'Nele estava a vida, e a vida era a luz dos homens.',
        KJV: 'In him was life; and the life was the light of men.'
      },
      interlinear: [
        { hebrewOrGreek: 'ἐν', transliteration: 'en', strong: 'G1722', morphology: 'Prep', portuguese: 'Nele', meaning: 'no Logos' },
        { hebrewOrGreek: 'αὐτῷ', transliteration: 'autō', strong: 'G846', morphology: 'P-DSM', portuguese: 'ele', meaning: 'em Cristo' },
        { hebrewOrGreek: 'ζωὴ', transliteration: 'zōē', strong: 'G2222', morphology: 'N-NSF', portuguese: 'vida', meaning: 'vida incriada divina (zōē)' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'estava', meaning: 'existia' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'e' },
        { hebrewOrGreek: 'ἡ', transliteration: 'hē', strong: 'G3588', morphology: 'T-NSF', portuguese: 'a', meaning: 'artigo' },
        { hebrewOrGreek: 'ζωὴ', transliteration: 'zōē', strong: 'G2222', morphology: 'N-NSF', portuguese: 'vida', meaning: 'vida eterna' },
        { hebrewOrGreek: 'ἦν', transliteration: 'ēn', strong: 'G2258', morphology: 'V-IAI-3S', portuguese: 'era', meaning: 'era' },
        { hebrewOrGreek: 'τὸ', transliteration: 'to', strong: 'G3588', morphology: 'T-NSN', portuguese: 'a', meaning: 'artigo' },
        { hebrewOrGreek: 'φῶς', transliteration: 'phōs', strong: 'G5457', morphology: 'N-NSN', portuguese: 'luz', meaning: 'luz salvífica' },
        { hebrewOrGreek: 'τῶν', transliteration: 'tōn', strong: 'G3588', morphology: 'T-GPM', portuguese: 'dos', meaning: 'artigo' },
        { hebrewOrGreek: 'ἀνθρώπων', transliteration: 'anthrōpōn', strong: 'G444', morphology: 'N-GPM', portuguese: 'homens', meaning: 'humanidade' }
      ]
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 5,
      text: 'E a luz resplandece nas trevas, e as trevas não a compreenderam.',
      versions: {
        ARC: 'E a luz resplandece nas trevas, e as trevas não a compreenderam.',
        AA: 'A luz resplandece nas trevas, e as trevas não prevaleceram contra ela.',
        KJV: 'And the light shineth in darkness; and the darkness comprehended it not.'
      },
      interlinear: [
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'E', meaning: 'e' },
        { hebrewOrGreek: 'τὸ', transliteration: 'to', strong: 'G3588', morphology: 'T-NSN', portuguese: 'a', meaning: 'artigo' },
        { hebrewOrGreek: 'φῶς', transliteration: 'phōs', strong: 'G5457', morphology: 'N-NSN', portuguese: 'luz', meaning: 'luz de Cristo' },
        { hebrewOrGreek: 'ἐν', transliteration: 'en', strong: 'G1722', morphology: 'Prep', portuguese: 'na', meaning: 'em' },
        { hebrewOrGreek: 'τῇ', transliteration: 'tē', strong: 'G3588', morphology: 'T-DSF', portuguese: 'a', meaning: 'artigo' },
        { hebrewOrGreek: 'σκοτίᾳ', transliteration: 'skotia', strong: 'G4653', morphology: 'N-DSF', portuguese: 'escuridão/trevas', meaning: 'mundo moralmente decaído' },
        { hebrewOrGreek: 'φαίνει', transliteration: 'phainei', strong: 'G5316', morphology: 'V-PAI-3S', portuguese: 'resplandece', meaning: 'brilha continuamente no presente' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'e' },
        { hebrewOrGreek: 'ἡ', transliteration: 'hē', strong: 'G3588', morphology: 'T-NSF', portuguese: 'a', meaning: 'artigo' },
        { hebrewOrGreek: 'σκοτία', transliteration: 'skotia', strong: 'G4653', morphology: 'N-NSF', portuguese: 'trevas', meaning: 'escuridão' },
        { hebrewOrGreek: 'αὐτὸ', transliteration: 'auto', strong: 'G846', morphology: 'P-ASN', portuguese: 'a ela', meaning: 'à luz' },
        { hebrewOrGreek: 'οὐ', transliteration: 'ou', strong: 'G3756', morphology: 'Adv', portuguese: 'não', meaning: 'negação categórica' },
        { hebrewOrGreek: 'κατέλαβεν', transliteration: 'katelaben', strong: 'G2638', morphology: 'V-2AAI-3S', portuguese: 'venceram / extinguiram', meaning: 'não puderam sufocar nem apagar' }
      ]
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 14,
      text: 'E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade.',
      versions: {
        ARC: 'E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade.',
        AA: 'E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.',
        KJV: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.'
      }
    },
    {
      bookId: 'JHN',
      chapter: 1,
      verse: 18,
      text: 'Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, esse o revelou.',
      versions: {
        ARC: 'Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, esse o revelou.',
        AA: 'Ninguém jamais viu a Deus. O Deus unigênito, que está no seio do Pai, esse o deu a conhecer.',
        KJV: 'No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him.'
      }
    }
  ],

  // ROMANOS 8
  'ROM_8': [
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 1,
      text: 'Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.',
      versions: {
        ARC: 'Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.',
        AA: 'Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus.',
        KJV: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.'
      },
      interlinear: [
        { hebrewOrGreek: 'Οὐδὲν', transliteration: 'Ouden', strong: 'G3762', morphology: 'A-NSN', portuguese: 'Nenhuma sequer', meaning: 'ausência absoluta' },
        { hebrewOrGreek: 'ἄρα', transliteration: 'ara', strong: 'G686', morphology: 'Conj', portuguese: 'portanto / logo', meaning: 'inferência lógica conclusiva' },
        { hebrewOrGreek: 'νῦν', transliteration: 'nyn', strong: 'G3568', morphology: 'Adv', portuguese: 'agora', meaning: 'na era presente da graça' },
        { hebrewOrGreek: 'κατάκριμα', transliteration: 'katakrima', strong: 'G2631', morphology: 'N-NSN', portuguese: 'condenação judicial', meaning: 'sentença penal punitiva executória' },
        { hebrewOrGreek: 'τοῖς', transliteration: 'tois', strong: 'G3588', morphology: 'T-DPM', portuguese: 'para os que', meaning: 'artigo dativo' },
        { hebrewOrGreek: 'ἐν', transliteration: 'en', strong: 'G1722', morphology: 'Prep', portuguese: 'em', meaning: 'união pactual' },
        { hebrewOrGreek: 'Χριστῷ', transliteration: 'Christō', strong: 'G5547', morphology: 'N-DSM', portuguese: 'Cristo', meaning: 'Messias ungido' },
        { hebrewOrGreek: 'Ἰησοῦ', transliteration: 'Iēsou', strong: 'G2424', morphology: 'N-DSM', portuguese: 'Jesus', meaning: 'Salvador' }
      ]
    },
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 2,
      text: 'Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte.',
      versions: {
        ARC: 'Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte.',
        AA: 'Porque a lei do Espírito da vida, em Cristo Jesus, te livrou da lei do pecado e da morte.',
        KJV: 'For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.'
      }
    },
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 28,
      text: 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.',
      versions: {
        ARC: 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.',
        AA: 'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.',
        KJV: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.'
      }
    },
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 31,
      text: 'Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?',
      versions: {
        ARC: 'Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?',
        AA: 'Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?',
        KJV: 'What shall we then say to these things? If God be for us, who can be against us?'
      }
    },
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 38,
      text: 'Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,',
      versions: {
        ARC: 'Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,',
        AA: 'Porque estou certo de que, nem a morte, nem a vida, nem anjos, nem principados, nem coisas presentes, nem futuras, nem potestades,',
        KJV: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,'
      }
    },
    {
      bookId: 'ROM',
      chapter: 8,
      verse: 39,
      text: 'nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor.',
      versions: {
        ARC: 'nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor.',
        AA: 'nem a altura, nem a profundidade, nem qualquer outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.',
        KJV: 'Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.'
      }
    }
  ],

  // GÊNESIS 1
  'GEN_1': [
    {
      bookId: 'GEN',
      chapter: 1,
      verse: 1,
      text: 'No princípio, criou Deus os céus e a terra.',
      versions: {
        ARC: 'No princípio, criou Deus os céus e a terra.',
        AA: 'No princípio criou Deus os céus e a terra.',
        KJV: 'In the beginning God created the heaven and the earth.'
      },
      interlinear: [
        { hebrewOrGreek: 'בְּרֵאשִׁית', transliteration: 'Bərē’šīṯ', strong: 'H7225', morphology: 'Prep-b | N-fs', portuguese: 'No princípio', meaning: 'ponto de partida do tempo e cosmo' },
        { hebrewOrGreek: 'בָּרָא', transliteration: 'bārā’', strong: 'H1254', morphology: 'V-Qal-Perf-3ms', portuguese: 'criou', meaning: 'criar ex nihilo (sujeito exclusivamente divino)' },
        { hebrewOrGreek: 'אֱלֹהִים', transliteration: '’ĕlōhīm', strong: 'H430', morphology: 'N-mp', portuguese: 'Deus', meaning: 'plural de majestade e plenitude de poder' },
        { hebrewOrGreek: 'אֵת', transliteration: '’ēṯ', strong: 'H853', morphology: 'DirObj', portuguese: '[objeto direto]', meaning: 'marcador de objeto direto' },
        { hebrewOrGreek: 'הַשָּׁמַיִם', transliteration: 'haššāmayim', strong: 'H8064', morphology: 'Art | N-mp', portuguese: 'os céus', meaning: 'o cosmos e espaço sideral' },
        { hebrewOrGreek: 'וְאֵת', transliteration: 'wə’ēṯ', strong: 'H853', morphology: 'Conj | DirObj', portuguese: 'e', meaning: 'conjunção + marcador' },
        { hebrewOrGreek: 'הָאָרֶץ', transliteration: 'hā’āreṣ', strong: 'H776', morphology: 'Art | N-fs', portuguese: 'a terra', meaning: 'o globo terrestre habitável' }
      ]
    },
    {
      bookId: 'GEN',
      chapter: 1,
      verse: 2,
      text: 'E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.',
      versions: {
        ARC: 'E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.',
        AA: 'A terra era sem forma e vazia; e havia trevas sobre a face do abismo, mas o Espírito de Deus pairava sobre a face das águas.',
        KJV: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.'
      }
    },
    {
      bookId: 'GEN',
      chapter: 1,
      verse: 3,
      text: 'E disse Deus: Haja luz. E houve luz.',
      versions: {
        ARC: 'E disse Deus: Haja luz. E houve luz.',
        AA: 'Disse Deus: haja luz. E houve luz.',
        KJV: 'And God said, Let there be light: and there was light.'
      }
    },
    {
      bookId: 'GEN',
      chapter: 1,
      verse: 26,
      text: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra.',
      versions: {
        ARC: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança...',
        AA: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança...',
        KJV: 'And God said, Let us make man in our image, after our likeness...'
      }
    },
    {
      bookId: 'GEN',
      chapter: 1,
      verse: 27,
      text: 'E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.',
      versions: {
        ARC: 'E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.',
        AA: 'Criou, pois, Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.',
        KJV: 'So God created man in his own image, in the image of God created he him; male and female created he them.'
      }
    }
  ],

  // SALMO 23
  'PSA_23': [
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 1,
      text: 'O Senhor é o meu pastor; nada me faltará.',
      versions: {
        ARC: 'O Senhor é o meu pastor; nada me faltará.',
        AA: 'O Senhor é o meu pastor; nada me faltará.',
        KJV: 'The LORD is my shepherd; I shall not want.'
      },
      interlinear: [
        { hebrewOrGreek: 'יְהוָה', transliteration: 'Yahweh', strong: 'H3068', morphology: 'N-pr-ms', portuguese: 'O SENHOR', meaning: 'o Deus autoexistente da aliança' },
        { hebrewOrGreek: 'רֹעִי', transliteration: 'rō‘ī', strong: 'H7462', morphology: 'V-Qal-Ptcp-ms | Suff-1cs', portuguese: 'é meu pastor', meaning: 'aquele que apascenta e cuida' },
        { hebrewOrGreek: 'לֹא', transliteration: 'lō’', strong: 'H3808', morphology: 'Adv-Neg', portuguese: 'não', meaning: 'negação total' },
        { hebrewOrGreek: 'אֶחְסָר', transliteration: '’eḥsār', strong: 'H2637', morphology: 'V-Qal-Imperf-1cs', portuguese: 'terei falta / me faltará', meaning: 'carecer de qualquer provisão' }
      ]
    },
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 2,
      text: 'Deitar-me faz em verdes pastos, guia-me mansamente a águas mansas.',
      versions: {
        ARC: 'Deitar-me faz em verdes pastos, guia-me mansamente a águas mansas.',
        AA: 'Deita-me faz em verdes pastos, guia-me mansamente a águas mansas.',
        KJV: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.'
      }
    },
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 3,
      text: 'Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome.',
      versions: {
        ARC: 'Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome.',
        AA: 'Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome.',
        KJV: 'He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.'
      }
    },
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 4,
      text: 'Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.',
      versions: {
        ARC: 'Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.',
        AA: 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.',
        KJV: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.'
      }
    },
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 5,
      text: 'Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.',
      versions: {
        ARC: 'Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.',
        AA: 'Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.',
        KJV: 'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.'
      }
    },
    {
      bookId: 'PSA',
      chapter: 23,
      verse: 6,
      text: 'Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor por longos dias.',
      versions: {
        ARC: 'Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor por longos dias.',
        AA: 'Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.',
        KJV: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.'
      }
    }
  ],

  // ISAÍAS 53
  'ISA_53': [
    {
      bookId: 'ISA',
      chapter: 53,
      verse: 3,
      text: 'Era desprezado e o mais indigno entre os homens, homem de dores, experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum.',
      versions: {
        ARC: 'Era desprezado e o mais indigno entre os homens, homem de dores...',
        AA: 'Era desprezado, e rejeitado dos homens; homem de dores...',
        KJV: 'He is despised and rejected of men; a man of sorrows, and acquainted with grief...'
      }
    },
    {
      bookId: 'ISA',
      chapter: 53,
      verse: 4,
      text: 'Verdadeiramente, ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si; e nós o reputamos por aflito, ferido de Deus e oprimido.',
      versions: {
        ARC: 'Verdadeiramente, ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si...',
        AA: 'Verdadeiramente ele tomou sobre si as nossas enfermidades, e carregou com as nossas dores...',
        KJV: 'Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.'
      }
    },
    {
      bookId: 'ISA',
      chapter: 53,
      verse: 5,
      text: 'Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e, pelas suas pisaduras, fomos sarados.',
      versions: {
        ARC: 'Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e, pelas suas pisaduras, fomos sarados.',
        AA: 'Mas ele foi ferido por causa das nossas transgressões, e esmagado por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.',
        KJV: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.'
      }
    },
    {
      bookId: 'ISA',
      chapter: 53,
      verse: 6,
      text: 'Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniquidade de nós todos.',
      versions: {
        ARC: 'Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniquidade de nós todos.',
        AA: 'Todos nós andávamos desgarrados como ovelhas, cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniquidade de todos nós.',
        KJV: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.'
      }
    }
  ],

  // EFÉSIOS 2
  'EPH_2': [
    {
      bookId: 'EPH',
      chapter: 2,
      verse: 8,
      text: 'Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.',
      versions: {
        ARC: 'Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.',
        AA: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus;',
        KJV: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:'
      },
      interlinear: [
        { hebrewOrGreek: 'τῇ', transliteration: 'tē', strong: 'G3588', morphology: 'T-DSF', portuguese: 'pela', meaning: 'artigo instrumental' },
        { hebrewOrGreek: 'γὰρ', transliteration: 'gar', strong: 'G1063', morphology: 'Conj', portuguese: 'porque', meaning: 'conjunção explicativa' },
        { hebrewOrGreek: 'χάριτί', transliteration: 'chariti', strong: 'G5485', morphology: 'N-DSF', portuguese: 'graça', meaning: 'favor imerecido salvífico' },
        { hebrewOrGreek: 'ἐστε', transliteration: 'este', strong: 'G2075', morphology: 'V-PAI-2P', portuguese: 'sois', meaning: 'estais no estado contínuo de' },
        { hebrewOrGreek: 'σεσῳσμένοι', transliteration: 'sesōsmenoi', strong: 'G4982', morphology: 'V-RPP-NPM', portuguese: 'tendo sido salvos', meaning: 'particípio perfeito: salvação concluída com efeitos permanentes' },
        { hebrewOrGreek: 'διὰ', transliteration: 'dia', strong: 'G1223', morphology: 'Prep', portuguese: 'por meio de', meaning: 'instrumento' },
        { hebrewOrGreek: 'πίστεως', transliteration: 'pisteōs', strong: 'G4102', morphology: 'N-GSF', portuguese: 'fé', meaning: 'confiança salvífica' },
        { hebrewOrGreek: 'καὶ', transliteration: 'kai', strong: 'G2532', morphology: 'Conj', portuguese: 'e', meaning: 'e' },
        { hebrewOrGreek: 'τοῦτο', transliteration: 'touto', strong: 'G5124', morphology: 'D-NSN', portuguese: 'isto', meaning: 'todo o evento da graça e fé' },
        { hebrewOrGreek: 'οὐκ', transliteration: 'ouk', strong: 'G3756', morphology: 'Adv', portuguese: 'não', meaning: 'não' },
        { hebrewOrGreek: 'ἐξ', transliteration: 'ex', strong: 'G1537', morphology: 'Prep', portuguese: 'de', meaning: 'com origem em' },
        { hebrewOrGreek: 'ὑμῶν', transliteration: 'hymōn', strong: 'G5216', morphology: 'P-2GP', portuguese: 'vós', meaning: 'mérito humano' },
        { hebrewOrGreek: 'Θεοῦ', transliteration: 'Theou', strong: 'G2316', morphology: 'N-GSM', portuguese: 'de Deus', meaning: 'de Deus' },
        { hebrewOrGreek: 'τὸ', transliteration: 'to', strong: 'G3588', morphology: 'T-NSN', portuguese: 'o', meaning: 'artigo' },
        { hebrewOrGreek: 'δῶρον', transliteration: 'dōron', strong: 'G1435', morphology: 'N-NSN', portuguese: 'dom gratuito', meaning: 'presente incondicional concedido' }
      ]
    },
    {
      bookId: 'EPH',
      chapter: 2,
      verse: 9,
      text: 'Não vem das obras, para que ninguém se glorie.',
      versions: {
        ARC: 'Não vem das obras, para que ninguém se glorie.',
        AA: 'não vem das obras, para que ninguém se glorie.',
        KJV: 'Not of works, lest any man should boast.'
      }
    },
    {
      bookId: 'EPH',
      chapter: 2,
      verse: 10,
      text: 'Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.',
      versions: {
        ARC: 'Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.',
        AA: 'Porque somos feitura sua, criados em Cristo Jesus para boas obras, as quais Deus antes preparou para que andássemos nelas.',
        KJV: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.'
      }
    }
  ],

  // FILIPENSES 2
  'PHP_2': [
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 5,
      text: 'De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus,',
      versions: {
        ARC: 'De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus,',
        AA: 'Tende em vós aquele sentimento que houve também em Cristo Jesus,',
        KJV: 'Let this mind be in you, which was also in Christ Jesus:'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 6,
      text: 'que, sendo em forma de Deus, não teve por usurpação ser igual a Deus,',
      versions: {
        ARC: 'que, sendo em forma de Deus, não teve por usurpação ser igual a Deus,',
        AA: 'o qual, subsistindo em forma de Deus, não considerou o ser igual a Deus coisa a que devia aferrar-se,',
        KJV: 'Who, being in the form of God, thought it not robbery to be equal with God:'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 7,
      text: 'mas aniquilou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens;',
      versions: {
        ARC: 'mas aniquilou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens;',
        AA: 'mas esvaziou-se a si mesmo, tomando a forma de servo, tornando-se semelhante aos homens;',
        KJV: 'But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men:'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 8,
      text: 'e, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte e morte de cruz.',
      versions: {
        ARC: 'e, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte e morte de cruz.',
        AA: 'e, achado na forma de homem, humilhou-se a si mesmo, tornando-se obediente até a morte, e morte de cruz.',
        KJV: 'And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 9,
      text: 'Pelo que também Deus o exaltou soberanamente e lhe deu um nome que é sobre todo o nome,',
      versions: {
        ARC: 'Pelo que também Deus o exaltou soberanamente e lhe deu um nome que é sobre todo o nome,',
        AA: 'Pelo que também Deus o exaltou soberanamente, e lhe deu o nome que é sobre todo nome;',
        KJV: 'Wherefore God also hath highly exalted him, and given him a name which is above every name:'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 10,
      text: 'para que ao nome de Jesus se dobre todo joelho dos que estão nos céus, e na terra, e debaixo da terra,',
      versions: {
        ARC: 'para que ao nome de Jesus se dobre todo joelho dos que estão nos céus, e na terra, e debaixo da terra,',
        AA: 'para que ao nome de Jesus se dobre todo joelho dos que estão nos céus, e na terra, e debaixo da terra,',
        KJV: 'That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth;'
      }
    },
    {
      bookId: 'PHP',
      chapter: 2,
      verse: 11,
      text: 'e toda língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai.',
      versions: {
        ARC: 'e toda língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai.',
        AA: 'e toda língua confesse que Jesus Cristo é Senhor, para glória de Deus Pai.',
        KJV: 'And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.'
      }
    }
  ],

  // ATOS 16
  'ACT_16': [
    {
      bookId: 'ACT',
      chapter: 16,
      verse: 25,
      text: 'E, perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam.',
      versions: {
        ARC: 'E, perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam.',
        AA: 'Pela meia-noite Paulo e Silas oravam e cantavam hinos a Deus, enquanto os presos os ouviam.',
        KJV: 'And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.'
      }
    },
    {
      bookId: 'ACT',
      chapter: 16,
      verse: 26,
      text: 'E, de repente, sobreveio um tão grande terremoto, que os alicerces do cárcere se moveram, e logo se abriram todas as portas, e foram soltas as prisões de todos.',
      versions: {
        ARC: 'E, de repente, sobreveio um tão grande terremoto, que os alicerces do cárcere se moveram, e logo se abriram todas as portas, e foram soltas as prisões de todos.',
        AA: 'De repente houve um tão grande terremoto que foram abalados os alicerces do cárcere, e logo se abriram todas as portas e foram soltos os grilhões de todos.',
        KJV: 'And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one’s bands were loosed.'
      }
    },
    {
      bookId: 'ACT',
      chapter: 16,
      verse: 30,
      text: 'E, tirando-os para fora, disse: Senhores, que é necessário que eu faça para me salvar?',
      versions: {
        ARC: 'E, tirando-os para fora, disse: Senhores, que é necessário que eu faça para me salvar?',
        AA: 'e, tirando-os para fora, disse: Senhores, que me é necessário fazer para me salvar?',
        KJV: 'And brought them out, and said, Sirs, what must I do to be saved?'
      }
    },
    {
      bookId: 'ACT',
      chapter: 16,
      verse: 31,
      text: 'E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.',
      versions: {
        ARC: 'E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.',
        AA: 'Responderam eles: Crê no Senhor Jesus e serás salvo, tu e tua casa.',
        KJV: 'And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.'
      }
    }
  ]
};

// Returns authentic verses if available in offline cache, or empty array (never fabricates fake verses)
export function getChapterVerses(bookId: string, chapter: number): BibleVerse[] {
  const key = `${bookId}_${chapter}`;
  if (CURATED_VERSES[key] && CURATED_VERSES[key].length > 0) {
    return CURATED_VERSES[key];
  }
  // Explicitly return empty array when text is not yet loaded in local offline seed
  return [];
}

export function isChapterAvailableInLocalSeed(bookId: string, chapter: number): boolean {
  const key = `${bookId}_${chapter}`;
  return !!(CURATED_VERSES[key] && CURATED_VERSES[key].length > 0);
}
