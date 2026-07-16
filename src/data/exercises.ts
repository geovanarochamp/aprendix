// Arsenal de exercícios (portado de aprendix-play-v3.html).
// choice: escolha entre opções | count: escolher a quantidade (1..5).
export type ChoiceItem = {
  emoji: string;
  prompt: string;
  choices: string[];
  answer: string;
  explain?: string;
};
export type CountItem = {
  emoji: string;
  prompt: string;
  answer: number;
  explain?: string;
};
export type Exercise =
  | { id: string; title: string; icon: string; type: "choice"; items: ChoiceItem[] }
  | { id: string; title: string; icon: string; type: "count"; items: CountItem[] };

/** chaves batem com a categoria de exercícios */
export type ExerciseCategory = "portugues" | "matematica" | "logica";

export const exercises: Record<ExerciseCategory, Exercise[]> = {
  "portugues": [
    {
      "id": "pt-inicial",
      "title": "Qual é a letra inicial?",
      "icon": "🔠",
      "type": "choice",
      "items": [
        {
          "emoji": "🐘",
          "prompt": "Com qual letra começa ELEFANTE?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "E"
        },
        {
          "emoji": "🦋",
          "prompt": "Com qual letra começa BORBOLETA?",
          "choices": [
            "B",
            "D",
            "P",
            "T"
          ],
          "answer": "B"
        },
        {
          "emoji": "🐸",
          "prompt": "Com qual letra começa SAPO?",
          "choices": [
            "C",
            "F",
            "S",
            "V"
          ],
          "answer": "S"
        },
        {
          "emoji": "🦁",
          "prompt": "Com qual letra começa LEÃO?",
          "choices": [
            "L",
            "M",
            "N",
            "R"
          ],
          "answer": "L"
        },
        {
          "emoji": "🐙",
          "prompt": "Com qual letra começa POLVO?",
          "choices": [
            "B",
            "P",
            "R",
            "T"
          ],
          "answer": "P"
        }
      ]
    },
    {
      "id": "pt-final",
      "title": "Qual é a letra final?",
      "icon": "🔡",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é a última letra de GATO?",
          "choices": [
            "A",
            "E",
            "O",
            "U"
          ],
          "answer": "O"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual é a última letra de VACA?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "A"
        },
        {
          "emoji": "🐸",
          "prompt": "Qual é a última letra de SAPO?",
          "choices": [
            "A",
            "E",
            "O",
            "U"
          ],
          "answer": "O"
        },
        {
          "emoji": "🦁",
          "prompt": "Qual é a última letra de LEÃO?",
          "choices": [
            "A",
            "E",
            "O",
            "U"
          ],
          "answer": "O"
        },
        {
          "emoji": "🐟",
          "prompt": "Qual é a última letra de PEIXE?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "E"
        }
      ]
    },
    {
      "id": "pt-vogal",
      "title": "Encontre a vogal",
      "icon": "🔤",
      "type": "choice",
      "items": [
        {
          "emoji": "🍌",
          "prompt": "Qual vogal aparece mais em BANANA?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "A"
        },
        {
          "emoji": "🍇",
          "prompt": "Qual é a primeira vogal de UVA?",
          "choices": [
            "A",
            "E",
            "I",
            "U"
          ],
          "answer": "U"
        },
        {
          "emoji": "🐘",
          "prompt": "Qual é a primeira vogal de ELEFANTE?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "E"
        },
        {
          "emoji": "🏝️",
          "prompt": "Qual é a primeira vogal de ILHA?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "I"
        },
        {
          "emoji": "🥚",
          "prompt": "Qual é a primeira vogal de OVO?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "O"
        }
      ]
    },
    {
      "id": "pt-silabas",
      "title": "Quantas sílabas?",
      "icon": "🟣",
      "type": "count",
      "items": [
        {
          "emoji": "🐄",
          "prompt": "Quantos pedacinhos tem VACA?",
          "answer": 2,
          "explain": "VA · CA"
        },
        {
          "emoji": "🐢",
          "prompt": "Quantos pedacinhos tem TARTARUGA?",
          "answer": 4,
          "explain": "TAR · TA · RU · GA"
        },
        {
          "emoji": "🐈",
          "prompt": "Quantos pedacinhos tem GATO?",
          "answer": 2,
          "explain": "GA · TO"
        },
        {
          "emoji": "🦉",
          "prompt": "Quantos pedacinhos tem CORUJA?",
          "answer": 3,
          "explain": "CO · RU · JA"
        },
        {
          "emoji": "🐕",
          "prompt": "Quantos pedacinhos tem CACHORRO?",
          "answer": 3,
          "explain": "CA · CHOR · RO"
        }
      ]
    },
    {
      "id": "pt-complete",
      "title": "Complete a palavra",
      "icon": "✏️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "G _ T O",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "A"
        },
        {
          "emoji": "🐄",
          "prompt": "V _ C A",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "A"
        },
        {
          "emoji": "🐸",
          "prompt": "S _ P O",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "A"
        },
        {
          "emoji": "🦁",
          "prompt": "L _ Ã O",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "E"
        },
        {
          "emoji": "🐙",
          "prompt": "P _ L V O",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "O"
        }
      ]
    },
    {
      "id": "pt-consoante",
      "title": "Encontre a consoante",
      "icon": "🔤",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual destas é uma consoante?",
          "choices": [
            "A",
            "G",
            "E",
            "O"
          ],
          "answer": "G"
        },
        {
          "emoji": "🌟",
          "prompt": "Qual destas é uma consoante?",
          "choices": [
            "I",
            "U",
            "M",
            "A"
          ],
          "answer": "M"
        },
        {
          "emoji": "🐝",
          "prompt": "Qual destas é uma consoante?",
          "choices": [
            "E",
            "B",
            "A",
            "O"
          ],
          "answer": "B"
        },
        {
          "emoji": "🚗",
          "prompt": "Qual destas é uma consoante?",
          "choices": [
            "R",
            "A",
            "E",
            "I"
          ],
          "answer": "R"
        },
        {
          "emoji": "🍭",
          "prompt": "Qual destas é uma consoante?",
          "choices": [
            "O",
            "U",
            "P",
            "A"
          ],
          "answer": "P"
        }
      ]
    },
    {
      "id": "pt-caixa",
      "title": "Maiúscula e minúscula",
      "icon": "🔠",
      "type": "choice",
      "items": [
        {
          "emoji": "A",
          "prompt": "Qual é a letra 'A' minúscula?",
          "choices": [
            "a",
            "e",
            "b",
            "o"
          ],
          "answer": "a"
        },
        {
          "emoji": "b",
          "prompt": "Qual é a letra 'b' maiúscula?",
          "choices": [
            "D",
            "B",
            "P",
            "R"
          ],
          "answer": "B"
        },
        {
          "emoji": "M",
          "prompt": "Qual é a letra 'M' minúscula?",
          "choices": [
            "n",
            "m",
            "w",
            "u"
          ],
          "answer": "m"
        },
        {
          "emoji": "e",
          "prompt": "Qual é a letra 'e' maiúscula?",
          "choices": [
            "F",
            "E",
            "C",
            "B"
          ],
          "answer": "E"
        },
        {
          "emoji": "S",
          "prompt": "Qual é a letra 'S' minúscula?",
          "choices": [
            "z",
            "c",
            "s",
            "o"
          ],
          "answer": "s"
        }
      ]
    },
    {
      "id": "pt-letra-anterior",
      "title": "Letra anterior",
      "icon": "⬅️",
      "type": "choice",
      "items": [
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem antes de B?",
          "choices": [
            "A",
            "C",
            "D",
            "E"
          ],
          "answer": "A"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem antes de E?",
          "choices": [
            "C",
            "D",
            "F",
            "G"
          ],
          "answer": "D"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem antes de M?",
          "choices": [
            "K",
            "L",
            "N",
            "O"
          ],
          "answer": "L"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem antes de P?",
          "choices": [
            "N",
            "O",
            "Q",
            "R"
          ],
          "answer": "O"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem antes de T?",
          "choices": [
            "R",
            "S",
            "U",
            "V"
          ],
          "answer": "S"
        }
      ]
    },
    {
      "id": "pt-letra-seguinte",
      "title": "Letra seguinte",
      "icon": "➡️",
      "type": "choice",
      "items": [
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem depois de A?",
          "choices": [
            "B",
            "C",
            "D",
            "E"
          ],
          "answer": "B"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem depois de D?",
          "choices": [
            "B",
            "C",
            "E",
            "F"
          ],
          "answer": "E"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem depois de H?",
          "choices": [
            "G",
            "I",
            "J",
            "K"
          ],
          "answer": "I"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem depois de N?",
          "choices": [
            "L",
            "M",
            "O",
            "P"
          ],
          "answer": "O"
        },
        {
          "emoji": "🔤",
          "prompt": "Qual letra vem depois de R?",
          "choices": [
            "P",
            "Q",
            "S",
            "T"
          ],
          "answer": "S"
        }
      ]
    },
    {
      "id": "pt-alfabetica",
      "title": "Ordem alfabética",
      "icon": "🔡",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈 🐕",
          "prompt": "Qual vem primeiro no alfabeto?",
          "choices": [
            "CASA",
            "MALA"
          ],
          "answer": "CASA"
        },
        {
          "emoji": "🍌 🍎",
          "prompt": "Qual vem primeiro no alfabeto?",
          "choices": [
            "ABACAXI",
            "BANANA"
          ],
          "answer": "ABACAXI"
        },
        {
          "emoji": "🐸 🦁",
          "prompt": "Qual vem primeiro no alfabeto?",
          "choices": [
            "LEÃO",
            "SAPO"
          ],
          "answer": "LEÃO"
        },
        {
          "emoji": "📚",
          "prompt": "Qual está em ordem alfabética?",
          "choices": [
            "A, B, C",
            "C, B, A",
            "B, A, C"
          ],
          "answer": "A, B, C"
        },
        {
          "emoji": "🅰️",
          "prompt": "Qual está em ordem alfabética?",
          "choices": [
            "G, H, I",
            "I, H, G",
            "H, G, I"
          ],
          "answer": "G, H, I"
        }
      ]
    },
    {
      "id": "pt-primeira-silaba",
      "title": "Primeira sílaba",
      "icon": "🟢",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é a primeira sílaba de GATO?",
          "choices": [
            "GA",
            "TO",
            "GO",
            "TA"
          ],
          "answer": "GA"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual é a primeira sílaba de VACA?",
          "choices": [
            "CA",
            "VA",
            "VO",
            "CO"
          ],
          "answer": "VA"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual é a primeira sílaba de BOLA?",
          "choices": [
            "LA",
            "BO",
            "BA",
            "LO"
          ],
          "answer": "BO"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual é a primeira sílaba de CASA?",
          "choices": [
            "SA",
            "CA",
            "CO",
            "SO"
          ],
          "answer": "CA"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual é a primeira sílaba de BANANA?",
          "choices": [
            "NA",
            "BA",
            "BO",
            "NO"
          ],
          "answer": "BA"
        }
      ]
    },
    {
      "id": "pt-ultima-silaba",
      "title": "Última sílaba",
      "icon": "🔵",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é a última sílaba de GATO?",
          "choices": [
            "GA",
            "TO",
            "GO",
            "TA"
          ],
          "answer": "TO"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual é a última sílaba de VACA?",
          "choices": [
            "CA",
            "VA",
            "VO",
            "CO"
          ],
          "answer": "CA"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual é a última sílaba de BANANA?",
          "choices": [
            "NA",
            "BA",
            "BO",
            "NO"
          ],
          "answer": "NA"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual é a última sílaba de CASA?",
          "choices": [
            "SA",
            "CA",
            "CO",
            "SO"
          ],
          "answer": "SA"
        },
        {
          "emoji": "🦆",
          "prompt": "Qual é a última sílaba de PATO?",
          "choices": [
            "PA",
            "TO",
            "PO",
            "TA"
          ],
          "answer": "TO"
        }
      ]
    },
    {
      "id": "pt-complete-silaba",
      "title": "Complete a sílaba",
      "icon": "✏️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "GA _ O (gato). Qual sílaba falta?",
          "choices": [
            "TO",
            "BO",
            "LO",
            "MO"
          ],
          "answer": "TO"
        },
        {
          "emoji": "🐄",
          "prompt": "VA _ A (vaca). Qual sílaba falta?",
          "choices": [
            "CA",
            "LA",
            "PA",
            "TA"
          ],
          "answer": "CA"
        },
        {
          "emoji": "🍌",
          "prompt": "BA _ NA (banana). Qual sílaba falta?",
          "choices": [
            "NA",
            "LA",
            "TA",
            "RA"
          ],
          "answer": "NA"
        },
        {
          "emoji": "🦋",
          "prompt": "BO _ A (bola). Qual sílaba falta?",
          "choices": [
            "LA",
            "CA",
            "MA",
            "NA"
          ],
          "answer": "LA"
        },
        {
          "emoji": "🦁",
          "prompt": "LE _ O (leão). Qual sílaba falta?",
          "choices": [
            "ÃO",
            "AR",
            "AL",
            "AS"
          ],
          "answer": "ÃO"
        }
      ]
    },
    {
      "id": "pt-monte-palavra",
      "title": "Monte a palavra",
      "icon": "🧩",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Junte GA + TO. Que palavra forma?",
          "choices": [
            "GATO",
            "TOGA",
            "GOTA",
            "TAGO"
          ],
          "answer": "GATO"
        },
        {
          "emoji": "🐄",
          "prompt": "Junte VA + CA. Que palavra forma?",
          "choices": [
            "CAVA",
            "VACA",
            "VOCA",
            "CAVO"
          ],
          "answer": "VACA"
        },
        {
          "emoji": "🦋",
          "prompt": "Junte BO + LA. Que palavra forma?",
          "choices": [
            "LOBA",
            "BOLA",
            "BALO",
            "LABO"
          ],
          "answer": "BOLA"
        },
        {
          "emoji": "🐕",
          "prompt": "Junte CA + SA. Que palavra forma?",
          "choices": [
            "SACA",
            "CASA",
            "SOCA",
            "CASO"
          ],
          "answer": "CASA"
        },
        {
          "emoji": "🦆",
          "prompt": "Junte PA + TO. Que palavra forma?",
          "choices": [
            "TOPA",
            "PATO",
            "POTA",
            "TAPO"
          ],
          "answer": "PATO"
        }
      ]
    },
    {
      "id": "pt-separe-silabas",
      "title": "Separe as sílabas",
      "icon": "✂️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Como separamos GATO?",
          "choices": [
            "GA-TO",
            "GAT-O",
            "G-ATO",
            "GATO"
          ],
          "answer": "GA-TO"
        },
        {
          "emoji": "🍌",
          "prompt": "Como separamos BANANA?",
          "choices": [
            "BA-NA-NA",
            "BAN-ANA",
            "BANA-NA",
            "B-ANANA"
          ],
          "answer": "BA-NA-NA"
        },
        {
          "emoji": "🦋",
          "prompt": "Como separamos BORBOLETA?",
          "choices": [
            "BOR-BO-LE-TA",
            "BORBO-LETA",
            "BO-RBOLE-TA",
            "BORB-OLETA"
          ],
          "answer": "BOR-BO-LE-TA"
        },
        {
          "emoji": "🦉",
          "prompt": "Como separamos CORUJA?",
          "choices": [
            "CO-RU-JA",
            "COR-UJA",
            "CORU-JA",
            "C-ORUJA"
          ],
          "answer": "CO-RU-JA"
        },
        {
          "emoji": "🐕",
          "prompt": "Como separamos CASA?",
          "choices": [
            "CA-SA",
            "CAS-A",
            "C-ASA",
            "CASA"
          ],
          "answer": "CA-SA"
        }
      ]
    },
    {
      "id": "pt-mesma-silaba",
      "title": "Mesma sílaba",
      "icon": "🔗",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual palavra começa igual a GATO?",
          "choices": [
            "GALO",
            "BOLA",
            "PATO",
            "VACA"
          ],
          "answer": "GALO"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual palavra começa igual a VACA?",
          "choices": [
            "VASO",
            "CASA",
            "GATO",
            "BOLA"
          ],
          "answer": "VASO"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual palavra começa igual a BOLA?",
          "choices": [
            "BONÉ",
            "MALA",
            "GATO",
            "SAPO"
          ],
          "answer": "BONÉ"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual palavra começa igual a BANANA?",
          "choices": [
            "BALÃO",
            "CANOA",
            "LIMÃO",
            "PATO"
          ],
          "answer": "BALÃO"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual palavra começa igual a CASA?",
          "choices": [
            "CAMA",
            "MALA",
            "SAPO",
            "BOLA"
          ],
          "answer": "CAMA"
        }
      ]
    },
    {
      "id": "pt-imagem-palavra",
      "title": "Imagem e palavra",
      "icon": "🖼️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Que palavra combina com a figura?",
          "choices": [
            "GATO",
            "PATO",
            "RATO",
            "MATO"
          ],
          "answer": "GATO"
        },
        {
          "emoji": "🍎",
          "prompt": "Que palavra combina com a figura?",
          "choices": [
            "MAÇÃ",
            "UVA",
            "PERA",
            "LIMÃO"
          ],
          "answer": "MAÇÃ"
        },
        {
          "emoji": "🌞",
          "prompt": "Que palavra combina com a figura?",
          "choices": [
            "SOL",
            "LUA",
            "MAR",
            "CÉU"
          ],
          "answer": "SOL"
        },
        {
          "emoji": "🏠",
          "prompt": "Que palavra combina com a figura?",
          "choices": [
            "CASA",
            "CARRO",
            "BOLA",
            "MESA"
          ],
          "answer": "CASA"
        },
        {
          "emoji": "🐟",
          "prompt": "Que palavra combina com a figura?",
          "choices": [
            "PEIXE",
            "PATO",
            "GATO",
            "CAVALO"
          ],
          "answer": "PEIXE"
        }
      ]
    },
    {
      "id": "pt-palavra-correta",
      "title": "Palavra correta",
      "icon": "✅",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual está escrita corretamente?",
          "choices": [
            "GATO",
            "GATU",
            "JATO",
            "QATO"
          ],
          "answer": "GATO"
        },
        {
          "emoji": "🏠",
          "prompt": "Qual está escrita corretamente?",
          "choices": [
            "KASA",
            "CAZA",
            "CASA",
            "CASSA"
          ],
          "answer": "CASA"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual está escrita corretamente?",
          "choices": [
            "BOLA",
            "BÓLA",
            "VOLA",
            "BOULA"
          ],
          "answer": "BOLA"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual está escrita corretamente?",
          "choices": [
            "BANANA",
            "BANANNA",
            "BANNANA",
            "VANANA"
          ],
          "answer": "BANANA"
        },
        {
          "emoji": "🌞",
          "prompt": "Qual está escrita corretamente?",
          "choices": [
            "SOL",
            "SOU",
            "SÓL",
            "SSOL"
          ],
          "answer": "SOL"
        }
      ]
    },
    {
      "id": "pt-palavra-intrusa",
      "title": "Palavra intrusa",
      "icon": "🕵️",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎🍌🍇",
          "prompt": "Qual palavra NÃO é uma fruta?",
          "choices": [
            "MAÇÃ",
            "BANANA",
            "UVA",
            "CADEIRA"
          ],
          "answer": "CADEIRA"
        },
        {
          "emoji": "🐈🐕🐄",
          "prompt": "Qual palavra NÃO é um animal?",
          "choices": [
            "GATO",
            "CACHORRO",
            "MESA",
            "VACA"
          ],
          "answer": "MESA"
        },
        {
          "emoji": "🔴🔵🟢",
          "prompt": "Qual palavra NÃO é uma cor?",
          "choices": [
            "AZUL",
            "VERDE",
            "BOLA",
            "VERMELHO"
          ],
          "answer": "BOLA"
        },
        {
          "emoji": "👕👗👖",
          "prompt": "Qual palavra NÃO é uma roupa?",
          "choices": [
            "CAMISA",
            "VESTIDO",
            "CALÇA",
            "LIVRO"
          ],
          "answer": "LIVRO"
        },
        {
          "emoji": "🍽️",
          "prompt": "Qual palavra NÃO é uma comida?",
          "choices": [
            "ARROZ",
            "FEIJÃO",
            "CARRO",
            "PÃO"
          ],
          "answer": "CARRO"
        }
      ]
    },
    {
      "id": "pt-ordene-letras",
      "title": "Ordene as letras",
      "icon": "🔀",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Organize as letras T-A-G-O e forme um animal:",
          "choices": [
            "GATO",
            "TOGA",
            "GOTA",
            "TAGO"
          ],
          "answer": "GATO"
        },
        {
          "emoji": "🌞",
          "prompt": "Organize as letras L-O-S e forme uma palavra:",
          "choices": [
            "SOL",
            "LOS",
            "OLS",
            "SLO"
          ],
          "answer": "SOL"
        },
        {
          "emoji": "🦋",
          "prompt": "Organize as letras A-B-O-L:",
          "choices": [
            "BOLA",
            "LOBA",
            "BALO",
            "ABLO"
          ],
          "answer": "BOLA"
        },
        {
          "emoji": "🏠",
          "prompt": "Organize as letras S-A-C-A:",
          "choices": [
            "CASA",
            "SACA",
            "ASCA",
            "CAAS"
          ],
          "answer": "CASA"
        },
        {
          "emoji": "🦆",
          "prompt": "Organize as letras O-T-P-A:",
          "choices": [
            "PATO",
            "TOPA",
            "POTA",
            "APTO"
          ],
          "answer": "PATO"
        }
      ]
    },
    {
      "id": "pt-tamanho-palavra",
      "title": "Palavra maior ou menor",
      "icon": "📏",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈🐘",
          "prompt": "Qual palavra é MAIOR (tem mais letras)?",
          "choices": [
            "ELEFANTE",
            "GATO"
          ],
          "answer": "ELEFANTE"
        },
        {
          "emoji": "🌞🌈",
          "prompt": "Qual palavra é MENOR (tem menos letras)?",
          "choices": [
            "SOL",
            "ARCO-ÍRIS"
          ],
          "answer": "SOL"
        },
        {
          "emoji": "🐜🦒",
          "prompt": "Qual palavra é MAIOR?",
          "choices": [
            "FORMIGA",
            "BOI"
          ],
          "answer": "FORMIGA"
        },
        {
          "emoji": "🍇🍉",
          "prompt": "Qual palavra é MENOR?",
          "choices": [
            "UVA",
            "MELANCIA"
          ],
          "answer": "UVA"
        },
        {
          "emoji": "🦋🐝",
          "prompt": "Qual palavra é MAIOR?",
          "choices": [
            "BORBOLETA",
            "ABELHA"
          ],
          "answer": "BORBOLETA"
        }
      ]
    },
    {
      "id": "pt-singular-plural",
      "title": "Singular e plural",
      "icon": "➕",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é o plural de GATO?",
          "choices": [
            "GATOS",
            "GATO",
            "GATAS",
            "GATE"
          ],
          "answer": "GATOS"
        },
        {
          "emoji": "🌸",
          "prompt": "Qual é o plural de FLOR?",
          "choices": [
            "FLORES",
            "FLORS",
            "FLOR",
            "FLORAS"
          ],
          "answer": "FLORES"
        },
        {
          "emoji": "🏠",
          "prompt": "Qual é o plural de CASA?",
          "choices": [
            "CASAS",
            "CASA",
            "CASES",
            "CASOS"
          ],
          "answer": "CASAS"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual é o singular de CACHORROS?",
          "choices": [
            "CACHORRO",
            "CACHORROS",
            "CACHORRA",
            "CACHORRE"
          ],
          "answer": "CACHORRO"
        },
        {
          "emoji": "⭐",
          "prompt": "Qual é o plural de ESTRELA?",
          "choices": [
            "ESTRELAS",
            "ESTRELA",
            "ESTRELES",
            "ESTRELOS"
          ],
          "answer": "ESTRELAS"
        }
      ]
    },
    {
      "id": "pt-masculino-feminino",
      "title": "Masculino e feminino",
      "icon": "⚥",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é o feminino de GATO?",
          "choices": [
            "GATA",
            "GATO",
            "GATE",
            "GATU"
          ],
          "answer": "GATA"
        },
        {
          "emoji": "👦",
          "prompt": "Qual é o feminino de MENINO?",
          "choices": [
            "MENINA",
            "MENINO",
            "MENINE",
            "MENÃO"
          ],
          "answer": "MENINA"
        },
        {
          "emoji": "🦁",
          "prompt": "Qual é o feminino de LEÃO?",
          "choices": [
            "LEOA",
            "LEÃO",
            "LEONA",
            "LEA"
          ],
          "answer": "LEOA"
        },
        {
          "emoji": "👨",
          "prompt": "Qual é o masculino de MULHER?",
          "choices": [
            "HOMEM",
            "MULHERO",
            "MENINO",
            "MOÇO"
          ],
          "answer": "HOMEM"
        },
        {
          "emoji": "🐴",
          "prompt": "Qual é o feminino de CAVALO?",
          "choices": [
            "ÉGUA",
            "CAVALA",
            "CAVALINHA",
            "POTRA"
          ],
          "answer": "ÉGUA"
        }
      ]
    },
    {
      "id": "pt-rimas",
      "title": "Palavras que rimam",
      "icon": "🎵",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual palavra rima com GATO?",
          "choices": [
            "PATO",
            "BOLA",
            "CASA",
            "SOL"
          ],
          "answer": "PATO"
        },
        {
          "emoji": "🐘",
          "prompt": "Qual palavra rima com MÃO?",
          "choices": [
            "PÃO",
            "MESA",
            "GATO",
            "LUA"
          ],
          "answer": "PÃO"
        },
        {
          "emoji": "⭐",
          "prompt": "Qual palavra rima com ESTRELA?",
          "choices": [
            "PANELA",
            "CASA",
            "SOL",
            "GATO"
          ],
          "answer": "PANELA"
        },
        {
          "emoji": "🌸",
          "prompt": "Qual palavra rima com FLOR?",
          "choices": [
            "AMOR",
            "MESA",
            "BOLA",
            "PATO"
          ],
          "answer": "AMOR"
        },
        {
          "emoji": "🐝",
          "prompt": "Qual palavra rima com ABELHA?",
          "choices": [
            "ORELHA",
            "GATO",
            "CASA",
            "LUA"
          ],
          "answer": "ORELHA"
        }
      ]
    },
    {
      "id": "pt-som-inicial",
      "title": "Mesmo som inicial",
      "icon": "🔊",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual começa com o mesmo som de CASA?",
          "choices": [
            "CAMA",
            "MESA",
            "BOLA",
            "PATO"
          ],
          "answer": "CAMA"
        },
        {
          "emoji": "🌞",
          "prompt": "Qual começa com o mesmo som de SOL?",
          "choices": [
            "SAPO",
            "LUA",
            "GATO",
            "PATO"
          ],
          "answer": "SAPO"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual começa com o mesmo som de BOLA?",
          "choices": [
            "BONÉ",
            "MALA",
            "CASA",
            "SOL"
          ],
          "answer": "BONÉ"
        },
        {
          "emoji": "🦁",
          "prompt": "Qual começa com o mesmo som de LUA?",
          "choices": [
            "LIVRO",
            "GATO",
            "MESA",
            "PATO"
          ],
          "answer": "LIVRO"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual começa com o mesmo som de PATO?",
          "choices": [
            "PENA",
            "GATO",
            "MALA",
            "SOL"
          ],
          "answer": "PENA"
        }
      ]
    },
    {
      "id": "pt-som-final",
      "title": "Mesmo som final",
      "icon": "🔈",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual termina com o mesmo som de GATO?",
          "choices": [
            "PATO",
            "BOLA",
            "CASA",
            "SOL"
          ],
          "answer": "PATO"
        },
        {
          "emoji": "🌸",
          "prompt": "Qual termina com o mesmo som de FLOR?",
          "choices": [
            "AMOR",
            "MESA",
            "GATO",
            "LUA"
          ],
          "answer": "AMOR"
        },
        {
          "emoji": "🐘",
          "prompt": "Qual termina com o mesmo som de PÃO?",
          "choices": [
            "MÃO",
            "MESA",
            "BOLA",
            "SOL"
          ],
          "answer": "MÃO"
        },
        {
          "emoji": "🏠",
          "prompt": "Qual termina com o mesmo som de CASA?",
          "choices": [
            "MESA",
            "GATO",
            "SOL",
            "PATO"
          ],
          "answer": "MESA"
        },
        {
          "emoji": "⭐",
          "prompt": "Qual termina com o mesmo som de PANELA?",
          "choices": [
            "JANELA",
            "GATO",
            "SOL",
            "MÃO"
          ],
          "answer": "JANELA"
        }
      ]
    },
    {
      "id": "pt-complete-frase",
      "title": "Complete a frase",
      "icon": "📝",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "O gato bebe ____.",
          "choices": [
            "leite",
            "pedra",
            "carro",
            "porta"
          ],
          "answer": "leite"
        },
        {
          "emoji": "🌞",
          "prompt": "De dia vemos o ____ no céu.",
          "choices": [
            "sol",
            "sapato",
            "livro",
            "garfo"
          ],
          "answer": "sol"
        },
        {
          "emoji": "🐟",
          "prompt": "O peixe vive na ____.",
          "choices": [
            "água",
            "árvore",
            "cama",
            "rua"
          ],
          "answer": "água"
        },
        {
          "emoji": "🍎",
          "prompt": "Eu como uma ____ vermelha.",
          "choices": [
            "maçã",
            "bola",
            "mesa",
            "nuvem"
          ],
          "answer": "maçã"
        },
        {
          "emoji": "🛏️",
          "prompt": "À noite eu vou ____.",
          "choices": [
            "dormir",
            "correr",
            "pular",
            "nadar"
          ],
          "answer": "dormir"
        }
      ]
    },
    {
      "id": "pt-leia-imagem",
      "title": "Leia e escolha a imagem",
      "icon": "👀",
      "type": "choice",
      "items": [
        {
          "emoji": "❓",
          "prompt": "Qual é o CACHORRO?",
          "choices": [
            "🐕",
            "🐈",
            "🐟",
            "🐘"
          ],
          "answer": "🐕"
        },
        {
          "emoji": "❓",
          "prompt": "Qual é a MAÇÃ?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍉"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "❓",
          "prompt": "Qual é o SOL?",
          "choices": [
            "🌞",
            "🌙",
            "⭐",
            "☁️"
          ],
          "answer": "🌞"
        },
        {
          "emoji": "❓",
          "prompt": "Qual é a BOLA?",
          "choices": [
            "⚽",
            "🚗",
            "📚",
            "🪑"
          ],
          "answer": "⚽"
        },
        {
          "emoji": "❓",
          "prompt": "Qual é o PEIXE?",
          "choices": [
            "🐟",
            "🐦",
            "🐝",
            "🦋"
          ],
          "answer": "🐟"
        }
      ]
    },
    {
      "id": "pt-verdadeiro-falso",
      "title": "Verdadeiro ou falso",
      "icon": "❔",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "A palavra GATO começa com a letra G. Isso é...",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🍌",
          "prompt": "A palavra BANANA tem 2 sílabas. Isso é...",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        },
        {
          "emoji": "🌞",
          "prompt": "A letra A é uma vogal. Isso é...",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🏠",
          "prompt": "A palavra CASA termina com a letra O. Isso é...",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        },
        {
          "emoji": "🦋",
          "prompt": "BOLA e MOLA rimam. Isso é...",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        }
      ]
    },
    {
      "id": "pt-interpretacao",
      "title": "Pequena interpretação",
      "icon": "📖",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "“O gato subiu no telhado.” Onde o gato subiu?",
          "choices": [
            "No telhado",
            "Na árvore",
            "No carro",
            "Na cama"
          ],
          "answer": "No telhado"
        },
        {
          "emoji": "🍎",
          "prompt": "“Ana comeu uma maçã.” O que Ana comeu?",
          "choices": [
            "Uma maçã",
            "Uma banana",
            "Um bolo",
            "Uma pera"
          ],
          "answer": "Uma maçã"
        },
        {
          "emoji": "🌧️",
          "prompt": "“Estava chovendo, então peguei o guarda-chuva.” Por que peguei o guarda-chuva?",
          "choices": [
            "Porque chovia",
            "Porque fazia sol",
            "Porque ventava",
            "Porque nevava"
          ],
          "answer": "Porque chovia"
        },
        {
          "emoji": "🐕",
          "prompt": "“O cachorro estava com fome e comeu a ração.” Como o cachorro estava?",
          "choices": [
            "Com fome",
            "Com sono",
            "Com medo",
            "Feliz"
          ],
          "answer": "Com fome"
        },
        {
          "emoji": "⚽",
          "prompt": "“João jogou bola no parque com os amigos.” Onde João jogou bola?",
          "choices": [
            "No parque",
            "Na escola",
            "Em casa",
            "Na praia"
          ],
          "answer": "No parque"
        }
      ]
    }
  ],
  "matematica": [
    {
      "id": "mt-numero",
      "title": "Reconheça o número",
      "icon": "🔢",
      "type": "choice",
      "items": [
        {
          "emoji": "3️⃣",
          "prompt": "Qual é este número?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "7️⃣",
          "prompt": "Qual é este número?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        },
        {
          "emoji": "🔟",
          "prompt": "Qual número aparece?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "1️⃣2️⃣",
          "prompt": "Qual número aparece?",
          "choices": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": "12"
        },
        {
          "emoji": "1️⃣5️⃣",
          "prompt": "Qual número aparece?",
          "choices": [
            "13",
            "14",
            "15",
            "16"
          ],
          "answer": "15"
        }
      ]
    },
    {
      "id": "mt-anterior",
      "title": "Número anterior",
      "icon": "⬅️",
      "type": "choice",
      "items": [
        {
          "emoji": "🔢",
          "prompt": "Qual número vem antes de 5?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem antes de 10?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "9"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem antes de 16?",
          "choices": [
            "14",
            "15",
            "16",
            "17"
          ],
          "answer": "15"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem antes de 21?",
          "choices": [
            "19",
            "20",
            "21",
            "22"
          ],
          "answer": "20"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem antes de 30?",
          "choices": [
            "28",
            "29",
            "30",
            "31"
          ],
          "answer": "29"
        }
      ]
    },
    {
      "id": "mt-seguinte",
      "title": "Número seguinte",
      "icon": "➡️",
      "type": "choice",
      "items": [
        {
          "emoji": "🔢",
          "prompt": "Qual número vem depois de 4?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem depois de 9?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem depois de 14?",
          "choices": [
            "14",
            "15",
            "16",
            "17"
          ],
          "answer": "15"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem depois de 19?",
          "choices": [
            "18",
            "19",
            "20",
            "21"
          ],
          "answer": "20"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual número vem depois de 29?",
          "choices": [
            "28",
            "29",
            "30",
            "31"
          ],
          "answer": "30"
        }
      ]
    },
    {
      "id": "mt-seq",
      "title": "Complete a sequência",
      "icon": "🧩",
      "type": "choice",
      "items": [
        {
          "emoji": "1  2  3  __",
          "prompt": "Complete: 1, 2, 3, __",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "4"
        },
        {
          "emoji": "5  6  7  __",
          "prompt": "Complete: 5, 6, 7, __",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "10  11  __  13",
          "prompt": "Qual número está faltando?",
          "choices": [
            "11",
            "12",
            "13",
            "14"
          ],
          "answer": "12"
        },
        {
          "emoji": "2  4  6  __",
          "prompt": "Complete pulando de 2 em 2.",
          "choices": [
            "7",
            "8",
            "9",
            "10"
          ],
          "answer": "8"
        },
        {
          "emoji": "5  10  15  __",
          "prompt": "Complete pulando de 5 em 5.",
          "choices": [
            "18",
            "20",
            "22",
            "25"
          ],
          "answer": "20"
        }
      ]
    },
    {
      "id": "mt-crescente",
      "title": "Ordem crescente",
      "icon": "📈",
      "type": "choice",
      "items": [
        {
          "emoji": "🔢",
          "prompt": "Qual está do menor para o maior?",
          "choices": [
            "1, 2, 3",
            "3, 2, 1",
            "2, 1, 3",
            "1, 3, 2"
          ],
          "answer": "1, 2, 3"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem crescente?",
          "choices": [
            "4, 5, 6",
            "6, 5, 4",
            "5, 4, 6",
            "4, 6, 5"
          ],
          "answer": "4, 5, 6"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem crescente?",
          "choices": [
            "7, 9, 12",
            "12, 9, 7",
            "9, 7, 12",
            "7, 12, 9"
          ],
          "answer": "7, 9, 12"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem crescente?",
          "choices": [
            "10, 15, 20",
            "20, 15, 10",
            "15, 10, 20",
            "10, 20, 15"
          ],
          "answer": "10, 15, 20"
        }
      ]
    },
    {
      "id": "mt-decrescente",
      "title": "Ordem decrescente",
      "icon": "📉",
      "type": "choice",
      "items": [
        {
          "emoji": "🔢",
          "prompt": "Qual está do maior para o menor?",
          "choices": [
            "3, 2, 1",
            "1, 2, 3",
            "2, 3, 1",
            "3, 1, 2"
          ],
          "answer": "3, 2, 1"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem decrescente?",
          "choices": [
            "9, 7, 5",
            "5, 7, 9",
            "7, 9, 5",
            "9, 5, 7"
          ],
          "answer": "9, 7, 5"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem decrescente?",
          "choices": [
            "20, 15, 10",
            "10, 15, 20",
            "15, 20, 10",
            "20, 10, 15"
          ],
          "answer": "20, 15, 10"
        },
        {
          "emoji": "🔢",
          "prompt": "Qual está em ordem decrescente?",
          "choices": [
            "12, 8, 4",
            "4, 8, 12",
            "8, 12, 4",
            "12, 4, 8"
          ],
          "answer": "12, 8, 4"
        }
      ]
    },
    {
      "id": "mt-maior-menor",
      "title": "Maior ou menor",
      "icon": "🐘",
      "type": "choice",
      "items": [
        {
          "emoji": "3   ou   8",
          "prompt": "Qual número é maior?",
          "choices": [
            "3",
            "5",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "12   ou   7",
          "prompt": "Qual número é maior?",
          "choices": [
            "5",
            "7",
            "10",
            "12"
          ],
          "answer": "12"
        },
        {
          "emoji": "4   ou   9",
          "prompt": "Qual número é menor?",
          "choices": [
            "3",
            "4",
            "8",
            "9"
          ],
          "answer": "4"
        },
        {
          "emoji": "16   ou   20",
          "prompt": "Qual número é menor?",
          "choices": [
            "15",
            "16",
            "19",
            "20"
          ],
          "answer": "16"
        },
        {
          "emoji": "25   ou   18",
          "prompt": "Qual número é maior?",
          "choices": [
            "18",
            "20",
            "24",
            "25"
          ],
          "answer": "25"
        }
      ]
    },
    {
      "id": "mt-sinais",
      "title": "Igual, maior ou menor",
      "icon": "⚖️",
      "type": "choice",
      "items": [
        {
          "emoji": "5  ?  3",
          "prompt": "Qual sinal completa?",
          "choices": [
            ">",
            "<",
            "="
          ],
          "answer": ">"
        },
        {
          "emoji": "2  ?  7",
          "prompt": "Qual sinal completa?",
          "choices": [
            ">",
            "<",
            "="
          ],
          "answer": "<"
        },
        {
          "emoji": "6  ?  6",
          "prompt": "Qual sinal completa?",
          "choices": [
            ">",
            "<",
            "="
          ],
          "answer": "="
        },
        {
          "emoji": "10  ?  8",
          "prompt": "Qual sinal completa?",
          "choices": [
            ">",
            "<",
            "="
          ],
          "answer": ">"
        },
        {
          "emoji": "4  ?  9",
          "prompt": "Qual sinal completa?",
          "choices": [
            ">",
            "<",
            "="
          ],
          "answer": "<"
        }
      ]
    },
    {
      "id": "mt-extenso",
      "title": "Número por extenso",
      "icon": "🔤",
      "type": "choice",
      "items": [
        {
          "emoji": "4",
          "prompt": "Como escrevemos o número 4?",
          "choices": [
            "quatro",
            "cinco",
            "seis",
            "sete"
          ],
          "answer": "quatro"
        },
        {
          "emoji": "7",
          "prompt": "Como escrevemos o número 7?",
          "choices": [
            "cinco",
            "seis",
            "sete",
            "oito"
          ],
          "answer": "sete"
        },
        {
          "emoji": "10",
          "prompt": "Como escrevemos o número 10?",
          "choices": [
            "nove",
            "dez",
            "onze",
            "doze"
          ],
          "answer": "dez"
        },
        {
          "emoji": "12",
          "prompt": "Como escrevemos o número 12?",
          "choices": [
            "dez",
            "onze",
            "doze",
            "treze"
          ],
          "answer": "doze"
        },
        {
          "emoji": "15",
          "prompt": "Como escrevemos o número 15?",
          "choices": [
            "treze",
            "quatorze",
            "quinze",
            "dezesseis"
          ],
          "answer": "quinze"
        }
      ]
    },
    {
      "id": "mt-dezenas",
      "title": "Dezenas e unidades",
      "icon": "🧱",
      "type": "choice",
      "items": [
        {
          "emoji": "14",
          "prompt": "Quantas dezenas há em 14?",
          "choices": [
            "0",
            "1",
            "2",
            "4"
          ],
          "answer": "1"
        },
        {
          "emoji": "23",
          "prompt": "Quantas unidades há em 23?",
          "choices": [
            "2",
            "3",
            "20",
            "23"
          ],
          "answer": "3"
        },
        {
          "emoji": "36",
          "prompt": "Quantas dezenas há em 36?",
          "choices": [
            "3",
            "6",
            "30",
            "36"
          ],
          "answer": "3"
        },
        {
          "emoji": "42",
          "prompt": "Quantas unidades há em 42?",
          "choices": [
            "2",
            "4",
            "40",
            "42"
          ],
          "answer": "2"
        },
        {
          "emoji": "50",
          "prompt": "Quantas dezenas há em 50?",
          "choices": [
            "0",
            "5",
            "10",
            "50"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-contar",
      "title": "Conte os objetos",
      "icon": "🍎",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 🍎",
          "prompt": "Quantas maçãs aparecem?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "⭐ ⭐ ⭐ ⭐",
          "prompt": "Quantas estrelas aparecem?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟",
          "prompt": "Quantos peixes aparecem?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "⚽ ⚽",
          "prompt": "Quantas bolas aparecem?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "🌼 🌼 🌼 🌼 🌼 🌼",
          "prompt": "Quantas flores aparecem?",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": "6"
        }
      ]
    },
    {
      "id": "mt-faltam",
      "title": "Quantos faltam?",
      "icon": "🧺",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 🍎",
          "prompt": "Para ter 5 maçãs, quantas faltam?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "⭐ ⭐ ⭐ ⭐",
          "prompt": "Para ter 6 estrelas, quantas faltam?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "⚽ ⚽",
          "prompt": "Para ter 5 bolas, quantas faltam?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟",
          "prompt": "Para ter 8 peixes, quantos faltam?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🌼 🌼 🌼",
          "prompt": "Para ter 7 flores, quantas faltam?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        }
      ]
    },
    {
      "id": "mt-sobraram",
      "title": "Quantos sobraram?",
      "icon": "📦",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎",
          "prompt": "Havia 5 maçãs. Comemos 2. Quantas sobraram?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "⚽",
          "prompt": "Havia 7 bolas. Guardamos 3. Quantas ficaram fora?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "⭐",
          "prompt": "Havia 9 estrelas. Tiramos 4. Quantas sobraram?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🐟",
          "prompt": "Havia 6 peixes. 1 saiu. Quantos ficaram?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🌼",
          "prompt": "Havia 10 flores. Colhemos 3. Quantas sobraram?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        }
      ]
    },
    {
      "id": "mt-grupo2",
      "title": "Agrupe de dois em dois",
      "icon": "👯",
      "type": "choice",
      "items": [
        {
          "emoji": "● ● ● ● ● ●",
          "prompt": "Quantos grupos de 2 podemos formar?",
          "choices": [
            "2",
            "3",
            "4",
            "6"
          ],
          "answer": "3"
        },
        {
          "emoji": "★ ★ ★ ★ ★ ★ ★ ★",
          "prompt": "Quantos pares de estrelas?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "🍎 🍎 🍎 🍎",
          "prompt": "Quantos grupos de 2?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽",
          "prompt": "Quantos pares de bolas?",
          "choices": [
            "4",
            "5",
            "6",
            "10"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-grupo5",
      "title": "Agrupe de cinco em cinco",
      "icon": "🖐️",
      "type": "choice",
      "items": [
        {
          "emoji": "10 objetos",
          "prompt": "Quantos grupos de 5 há em 10?",
          "choices": [
            "1",
            "2",
            "3",
            "5"
          ],
          "answer": "2"
        },
        {
          "emoji": "15 objetos",
          "prompt": "Quantos grupos de 5 há em 15?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "20 objetos",
          "prompt": "Quantos grupos de 5 há em 20?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "25 objetos",
          "prompt": "Quantos grupos de 5 há em 25?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-grupo10",
      "title": "Agrupe de dez em dez",
      "icon": "🔟",
      "type": "choice",
      "items": [
        {
          "emoji": "20 objetos",
          "prompt": "Quantos grupos de 10 há em 20?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "30 objetos",
          "prompt": "Quantos grupos de 10 há em 30?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "40 objetos",
          "prompt": "Quantos grupos de 10 há em 40?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "50 objetos",
          "prompt": "Quantos grupos de 10 há em 50?",
          "choices": [
            "4",
            "5",
            "6",
            "10"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-soma-fig",
      "title": "Soma com figuras",
      "icon": "🍎",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎  +  🍎",
          "prompt": "Quantas maçãs ao todo?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "⭐ ⭐ ⭐  +  ⭐ ⭐",
          "prompt": "Quantas estrelas ao todo?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "⚽ ⚽  +  ⚽ ⚽",
          "prompt": "Quantas bolas ao todo?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟  +  🐟",
          "prompt": "Quantos peixes ao todo?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🌼 🌼 🌼  +  🌼 🌼 🌼",
          "prompt": "Quantas flores ao todo?",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": "6"
        }
      ]
    },
    {
      "id": "mt-soma",
      "title": "Soma simples",
      "icon": "➕",
      "type": "choice",
      "items": [
        {
          "emoji": "🧮",
          "prompt": "2 + 3 = ?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🧮",
          "prompt": "4 + 2 = ?",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": "6"
        },
        {
          "emoji": "🧮",
          "prompt": "5 + 3 = ?",
          "choices": [
            "7",
            "8",
            "9",
            "10"
          ],
          "answer": "8"
        },
        {
          "emoji": "🧮",
          "prompt": "6 + 4 = ?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "🧮",
          "prompt": "7 + 5 = ?",
          "choices": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": "12"
        }
      ]
    },
    {
      "id": "mt-complete-soma",
      "title": "Complete a soma",
      "icon": "❓",
      "type": "choice",
      "items": [
        {
          "emoji": "2 + __ = 5",
          "prompt": "Qual número falta?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "__ + 4 = 7",
          "prompt": "Qual número falta?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "5 + __ = 9",
          "prompt": "Qual número falta?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "__ + 6 = 10",
          "prompt": "Qual número falta?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "8 + __ = 12",
          "prompt": "Qual número falta?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        }
      ]
    },
    {
      "id": "mt-sub-fig",
      "title": "Subtração com figuras",
      "icon": "🍎",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 🍎  −  🍎",
          "prompt": "Quantas maçãs sobraram?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "⭐ ⭐ ⭐ ⭐ ⭐  −  ⭐ ⭐",
          "prompt": "Quantas estrelas sobraram?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "⚽ ⚽ ⚽ ⚽  −  ⚽",
          "prompt": "Quantas bolas sobraram?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟  −  🐟 🐟",
          "prompt": "Quantos peixes sobraram?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🌼 🌼 🌼 🌼 🌼 🌼  −  🌼 🌼",
          "prompt": "Quantas flores sobraram?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        }
      ]
    },
    {
      "id": "mt-sub",
      "title": "Subtração simples",
      "icon": "➖",
      "type": "choice",
      "items": [
        {
          "emoji": "🧮",
          "prompt": "5 − 2 = ?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🧮",
          "prompt": "7 − 3 = ?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🧮",
          "prompt": "9 − 4 = ?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🧮",
          "prompt": "10 − 6 = ?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🧮",
          "prompt": "12 − 5 = ?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        }
      ]
    },
    {
      "id": "mt-complete-sub",
      "title": "Complete a subtração",
      "icon": "❓",
      "type": "choice",
      "items": [
        {
          "emoji": "5 − __ = 3",
          "prompt": "Qual número falta?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "__ − 2 = 6",
          "prompt": "Qual número falta?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "9 − __ = 5",
          "prompt": "Qual número falta?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "__ − 4 = 6",
          "prompt": "Qual número falta?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "12 − __ = 7",
          "prompt": "Qual número falta?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-dobro",
      "title": "Dobro",
      "icon": "✌️",
      "type": "choice",
      "items": [
        {
          "emoji": "2",
          "prompt": "Qual é o dobro de 2?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "3",
          "prompt": "Qual é o dobro de 3?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "6"
        },
        {
          "emoji": "4",
          "prompt": "Qual é o dobro de 4?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "5",
          "prompt": "Qual é o dobro de 5?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "6",
          "prompt": "Qual é o dobro de 6?",
          "choices": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": "12"
        }
      ]
    },
    {
      "id": "mt-metade",
      "title": "Metade",
      "icon": "🍰",
      "type": "choice",
      "items": [
        {
          "emoji": "4",
          "prompt": "Qual é a metade de 4?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "6",
          "prompt": "Qual é a metade de 6?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "8",
          "prompt": "Qual é a metade de 8?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "10",
          "prompt": "Qual é a metade de 10?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "12",
          "prompt": "Qual é a metade de 12?",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": "6"
        }
      ]
    },
    {
      "id": "mt-prob-soma",
      "title": "Probleminhas de soma",
      "icon": "📖",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎",
          "prompt": "Ana tinha 3 maçãs e ganhou mais 2. Quantas tem agora?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "⚽",
          "prompt": "João tinha 4 bolas e ganhou 3. Quantas tem agora?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        },
        {
          "emoji": "📚",
          "prompt": "Havia 5 livros e chegaram mais 4. Quantos são?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "9"
        },
        {
          "emoji": "🦋",
          "prompt": "Mariana viu 6 borboletas e depois mais 2. Quantas viu?",
          "choices": [
            "7",
            "8",
            "9",
            "10"
          ],
          "answer": "8"
        },
        {
          "emoji": "🚗",
          "prompt": "Na garagem havia 7 carros e chegaram 3. Quantos ficaram?",
          "choices": [
            "9",
            "10",
            "11",
            "12"
          ],
          "answer": "10"
        }
      ]
    },
    {
      "id": "mt-prob-sub",
      "title": "Probleminhas de subtração",
      "icon": "📘",
      "type": "choice",
      "items": [
        {
          "emoji": "🍬",
          "prompt": "Pedro tinha 6 balas e comeu 2. Quantas sobraram?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "🎈",
          "prompt": "Havia 8 balões e 3 estouraram. Quantos sobraram?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "🐟",
          "prompt": "No aquário havia 9 peixes e 4 saíram. Quantos ficaram?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "5"
        },
        {
          "emoji": "✏️",
          "prompt": "Lia tinha 10 lápis e perdeu 3. Quantos ficaram?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        },
        {
          "emoji": "🍪",
          "prompt": "Havia 12 biscoitos e comemos 5. Quantos sobraram?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        }
      ]
    },
    {
      "id": "mt-dinheiro",
      "title": "Sistema monetário",
      "icon": "💰",
      "type": "choice",
      "items": [
        {
          "emoji": "R$ 2 + R$ 3",
          "prompt": "Quanto dinheiro há ao todo?",
          "choices": [
            "R$ 4",
            "R$ 5",
            "R$ 6",
            "R$ 7"
          ],
          "answer": "R$ 5"
        },
        {
          "emoji": "R$ 5",
          "prompt": "Uma bala custa R$ 2. Quanto sobra?",
          "choices": [
            "R$ 2",
            "R$ 3",
            "R$ 4",
            "R$ 5"
          ],
          "answer": "R$ 3"
        },
        {
          "emoji": "R$ 10",
          "prompt": "Um brinquedo custa R$ 7. Quanto sobra?",
          "choices": [
            "R$ 2",
            "R$ 3",
            "R$ 4",
            "R$ 5"
          ],
          "answer": "R$ 3"
        },
        {
          "emoji": "🪙 🪙 🪙",
          "prompt": "Três moedas de R$ 1 valem quanto?",
          "choices": [
            "R$ 1",
            "R$ 2",
            "R$ 3",
            "R$ 4"
          ],
          "answer": "R$ 3"
        },
        {
          "emoji": "R$ 5 + R$ 5",
          "prompt": "Quanto temos?",
          "choices": [
            "R$ 8",
            "R$ 9",
            "R$ 10",
            "R$ 11"
          ],
          "answer": "R$ 10"
        }
      ]
    },
    {
      "id": "mt-calendario",
      "title": "Calendário",
      "icon": "📅",
      "type": "choice",
      "items": [
        {
          "emoji": "📅",
          "prompt": "Quantos dias tem uma semana?",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": "7"
        },
        {
          "emoji": "📅",
          "prompt": "Qual dia vem depois de segunda-feira?",
          "choices": [
            "domingo",
            "terça-feira",
            "quarta-feira",
            "sexta-feira"
          ],
          "answer": "terça-feira"
        },
        {
          "emoji": "📅",
          "prompt": "Qual dia vem antes de sexta-feira?",
          "choices": [
            "quarta-feira",
            "quinta-feira",
            "sábado",
            "domingo"
          ],
          "answer": "quinta-feira"
        },
        {
          "emoji": "📅",
          "prompt": "Quantos meses tem um ano?",
          "choices": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": "12"
        },
        {
          "emoji": "📅",
          "prompt": "Qual mês vem depois de junho?",
          "choices": [
            "maio",
            "julho",
            "agosto",
            "setembro"
          ],
          "answer": "julho"
        }
      ]
    },
    {
      "id": "mt-horas",
      "title": "Horas exatas",
      "icon": "🕒",
      "type": "choice",
      "items": [
        {
          "emoji": "🕒",
          "prompt": "Que horas o relógio mostra?",
          "choices": [
            "2 horas",
            "3 horas",
            "4 horas",
            "5 horas"
          ],
          "answer": "3 horas"
        },
        {
          "emoji": "🕕",
          "prompt": "Que horas o relógio mostra?",
          "choices": [
            "5 horas",
            "6 horas",
            "7 horas",
            "8 horas"
          ],
          "answer": "6 horas"
        },
        {
          "emoji": "🕘",
          "prompt": "Que horas o relógio mostra?",
          "choices": [
            "8 horas",
            "9 horas",
            "10 horas",
            "11 horas"
          ],
          "answer": "9 horas"
        },
        {
          "emoji": "🕛",
          "prompt": "Que horas o relógio mostra?",
          "choices": [
            "10 horas",
            "11 horas",
            "12 horas",
            "1 hora"
          ],
          "answer": "12 horas"
        },
        {
          "emoji": "🕓",
          "prompt": "Que horas o relógio mostra?",
          "choices": [
            "3 horas",
            "4 horas",
            "5 horas",
            "6 horas"
          ],
          "answer": "4 horas"
        }
      ]
    },
    {
      "id": "mt-formas",
      "title": "Formas geométricas",
      "icon": "🔺",
      "type": "choice",
      "items": [
        {
          "emoji": "🔺",
          "prompt": "Que forma é esta?",
          "choices": [
            "Círculo",
            "Quadrado",
            "Triângulo",
            "Retângulo"
          ],
          "answer": "Triângulo"
        },
        {
          "emoji": "🟦",
          "prompt": "Que forma é esta?",
          "choices": [
            "Círculo",
            "Quadrado",
            "Triângulo",
            "Retângulo"
          ],
          "answer": "Quadrado"
        },
        {
          "emoji": "⚪",
          "prompt": "Que forma é esta?",
          "choices": [
            "Círculo",
            "Quadrado",
            "Triângulo",
            "Retângulo"
          ],
          "answer": "Círculo"
        },
        {
          "emoji": "▭",
          "prompt": "Que forma é esta?",
          "choices": [
            "Círculo",
            "Quadrado",
            "Triângulo",
            "Retângulo"
          ],
          "answer": "Retângulo"
        },
        {
          "emoji": "🔷",
          "prompt": "Que forma parece um diamante?",
          "choices": [
            "Losango",
            "Círculo",
            "Quadrado",
            "Triângulo"
          ],
          "answer": "Losango"
        }
      ]
    }
  ],
  "logica": [
    {
      "id": "lg-padrao",
      "title": "Complete o padrão",
      "icon": "🧩",
      "type": "choice",
      "items": [
        {
          "emoji": "🔴 🔵 🔴 🔵 __",
          "prompt": "O que completa o padrão?",
          "choices": [
            "🔴",
            "🔵",
            "🟢",
            "🟡"
          ],
          "answer": "🔴"
        },
        {
          "emoji": "⭐ 🌙 ⭐ 🌙 __",
          "prompt": "O que completa o padrão?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "1 2 1 2 __",
          "prompt": "Qual número vem agora?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "1"
        },
        {
          "emoji": "🍎 🍌 🍎 🍌 __",
          "prompt": "Qual fruta vem agora?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍓"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "▲ ■ ▲ ■ __",
          "prompt": "Qual forma vem agora?",
          "choices": [
            "▲",
            "■",
            "●",
            "◆"
          ],
          "answer": "▲"
        }
      ]
    },
    {
      "id": "lg-depois",
      "title": "Qual figura vem depois?",
      "icon": "➡️",
      "type": "choice",
      "items": [
        {
          "emoji": "● ● ▲ ● ● ▲",
          "prompt": "Qual figura vem depois?",
          "choices": [
            "●",
            "▲",
            "■",
            "◆"
          ],
          "answer": "●"
        },
        {
          "emoji": "🔺 🔵 🔺 🔵",
          "prompt": "Qual figura vem depois?",
          "choices": [
            "🔺",
            "🔵",
            "🟩",
            "⭐"
          ],
          "answer": "🔺"
        },
        {
          "emoji": "🌞 🌞 🌙 🌞 🌞 🌙",
          "prompt": "Qual figura vem depois?",
          "choices": [
            "🌞",
            "🌙",
            "⭐",
            "☁️"
          ],
          "answer": "🌞"
        },
        {
          "emoji": "■ ▲ ▲ ■ ▲ ▲",
          "prompt": "Qual figura vem depois?",
          "choices": [
            "■",
            "▲",
            "●",
            "◆"
          ],
          "answer": "■"
        },
        {
          "emoji": "🟢 🟡 🟡 🟢 🟡 🟡",
          "prompt": "Qual figura vem depois?",
          "choices": [
            "🟢",
            "🟡",
            "🔴",
            "🔵"
          ],
          "answer": "🟢"
        }
      ]
    },
    {
      "id": "lg-antesfig",
      "title": "Qual figura vem antes?",
      "icon": "⬅️",
      "type": "choice",
      "items": [
        {
          "emoji": "__ 🔵 🔴 🔵 🔴",
          "prompt": "Qual figura vem antes?",
          "choices": [
            "🔴",
            "🔵",
            "🟢",
            "🟡"
          ],
          "answer": "🔴"
        },
        {
          "emoji": "__ 🌙 ⭐ 🌙 ⭐",
          "prompt": "Qual figura vem antes?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "__ 2 1 2 1",
          "prompt": "Qual número vem antes?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "1"
        },
        {
          "emoji": "__ 🍌 🍎 🍌 🍎",
          "prompt": "Qual fruta vem antes?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍓"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "__ ■ ▲ ■ ▲",
          "prompt": "Qual forma vem antes?",
          "choices": [
            "▲",
            "■",
            "●",
            "◆"
          ],
          "answer": "▲"
        }
      ]
    },
    {
      "id": "lg-diferente",
      "title": "Encontre o diferente",
      "icon": "🔍",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶 🐶 🐱 🐶",
          "prompt": "Qual é diferente?",
          "choices": [
            "🐶",
            "🐱",
            "🐭",
            "🐰"
          ],
          "answer": "🐱"
        },
        {
          "emoji": "🍎 🍎 🍐 🍎",
          "prompt": "Qual é diferente?",
          "choices": [
            "🍎",
            "🍐",
            "🍌",
            "🍇"
          ],
          "answer": "🍐"
        },
        {
          "emoji": "🔵 🔵 🔴 🔵",
          "prompt": "Qual é diferente?",
          "choices": [
            "🔵",
            "🔴",
            "🟢",
            "🟡"
          ],
          "answer": "🔴"
        },
        {
          "emoji": "▲ ▲ ■ ▲",
          "prompt": "Qual é diferente?",
          "choices": [
            "▲",
            "■",
            "●",
            "◆"
          ],
          "answer": "■"
        },
        {
          "emoji": "🚗 🚗 🚌 🚗",
          "prompt": "Qual é diferente?",
          "choices": [
            "🚗",
            "🚌",
            "🚲",
            "🚂"
          ],
          "answer": "🚌"
        }
      ]
    },
    {
      "id": "lg-iguais",
      "title": "Encontre os iguais",
      "icon": "👯",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶 🐱 🐶 🐰",
          "prompt": "Qual figura aparece duas vezes?",
          "choices": [
            "🐶",
            "🐱",
            "🐰",
            "🐭"
          ],
          "answer": "🐶"
        },
        {
          "emoji": "🍎 🍌 🍇 🍌",
          "prompt": "Qual fruta aparece duas vezes?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍓"
          ],
          "answer": "🍌"
        },
        {
          "emoji": "🔺 ⚪ 🟦 ⚪",
          "prompt": "Qual forma aparece duas vezes?",
          "choices": [
            "🔺",
            "⚪",
            "🟦",
            "🔷"
          ],
          "answer": "⚪"
        },
        {
          "emoji": "🚗 🚲 🚌 🚲",
          "prompt": "Qual veículo aparece duas vezes?",
          "choices": [
            "🚗",
            "🚲",
            "🚌",
            "🚂"
          ],
          "answer": "🚲"
        },
        {
          "emoji": "⭐ 🌙 ☀️ ⭐",
          "prompt": "Qual figura aparece duas vezes?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        }
      ]
    },
    {
      "id": "lg-cor",
      "title": "Classifique por cor",
      "icon": "🎨",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🚒 ❤️",
          "prompt": "Qual item também é vermelho?",
          "choices": [
            "🍓",
            "🍋",
            "🥝",
            "🫐"
          ],
          "answer": "🍓"
        },
        {
          "emoji": "🌞 🍌 ⭐",
          "prompt": "Qual item também é amarelo?",
          "choices": [
            "🍋",
            "🍇",
            "🍎",
            "🥦"
          ],
          "answer": "🍋"
        },
        {
          "emoji": "🌿 🐢 🥦",
          "prompt": "Qual item também é verde?",
          "choices": [
            "🥝",
            "🍓",
            "🫐",
            "🍊"
          ],
          "answer": "🥝"
        },
        {
          "emoji": "🌊 🫐 🧢",
          "prompt": "Qual item também é azul?",
          "choices": [
            "🔵",
            "🔴",
            "🟢",
            "🟡"
          ],
          "answer": "🔵"
        },
        {
          "emoji": "🍇 ☂️ 🟣",
          "prompt": "Qual item também é roxo?",
          "choices": [
            "🟣",
            "🟡",
            "🟢",
            "🔴"
          ],
          "answer": "🟣"
        }
      ]
    },
    {
      "id": "lg-forma",
      "title": "Classifique por forma",
      "icon": "🔷",
      "type": "choice",
      "items": [
        {
          "emoji": "⚽ 🪙 🕒",
          "prompt": "Qual também é redondo?",
          "choices": [
            "🍽️",
            "📕",
            "📐",
            "🚪"
          ],
          "answer": "🍽️"
        },
        {
          "emoji": "🪟 🖼️ 📱",
          "prompt": "Qual também é retangular?",
          "choices": [
            "🚪",
            "⚽",
            "🍊",
            "🪙"
          ],
          "answer": "🚪"
        },
        {
          "emoji": "🔺 📐 ⛺",
          "prompt": "Qual também parece um triângulo?",
          "choices": [
            "🍕",
            "⚪",
            "🟦",
            "📕"
          ],
          "answer": "🍕"
        },
        {
          "emoji": "🎲 🧊 📦",
          "prompt": "Qual também parece um cubo?",
          "choices": [
            "🧊",
            "⚽",
            "🥚",
            "🍽️"
          ],
          "answer": "🧊"
        },
        {
          "emoji": "🥚 🏉",
          "prompt": "Qual também tem formato oval?",
          "choices": [
            "🥭",
            "🟦",
            "🔺",
            "📕"
          ],
          "answer": "🥭"
        }
      ]
    },
    {
      "id": "lg-class-tamanho",
      "title": "Classifique por tamanho",
      "icon": "📐",
      "type": "choice",
      "items": [
        {
          "emoji": "🐜 🐕 🐘",
          "prompt": "Qual é o menor?",
          "choices": [
            "🐜",
            "🐕",
            "🐘",
            "🐎"
          ],
          "answer": "🐜"
        },
        {
          "emoji": "🍒 🍎 🍉",
          "prompt": "Qual é o maior?",
          "choices": [
            "🍒",
            "🍎",
            "🍉",
            "🍇"
          ],
          "answer": "🍉"
        },
        {
          "emoji": "🚲 🚗 🚌",
          "prompt": "Qual é o maior?",
          "choices": [
            "🚲",
            "🚗",
            "🚌",
            "🛴"
          ],
          "answer": "🚌"
        },
        {
          "emoji": "🌱 🌿 🌳",
          "prompt": "Qual é o menor?",
          "choices": [
            "🌱",
            "🌿",
            "🌳",
            "🌴"
          ],
          "answer": "🌱"
        },
        {
          "emoji": "🥄 🍽️ 🛋️",
          "prompt": "Qual é o maior?",
          "choices": [
            "🥄",
            "🍽️",
            "🛋️",
            "✏️"
          ],
          "answer": "🛋️"
        }
      ]
    },
    {
      "id": "lg-menor-maior",
      "title": "Ordem do menor para o maior",
      "icon": "📏",
      "type": "choice",
      "items": [
        {
          "emoji": "🐜  🐕  🐘",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🐜, 🐕, 🐘",
            "🐘, 🐕, 🐜",
            "🐕, 🐜, 🐘",
            "🐜, 🐘, 🐕"
          ],
          "answer": "🐜, 🐕, 🐘"
        },
        {
          "emoji": "🍒  🍎  🍉",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🍒, 🍎, 🍉",
            "🍉, 🍎, 🍒",
            "🍎, 🍒, 🍉",
            "🍒, 🍉, 🍎"
          ],
          "answer": "🍒, 🍎, 🍉"
        },
        {
          "emoji": "🌱  🌿  🌳",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🌱, 🌿, 🌳",
            "🌳, 🌿, 🌱",
            "🌿, 🌱, 🌳",
            "🌱, 🌳, 🌿"
          ],
          "answer": "🌱, 🌿, 🌳"
        },
        {
          "emoji": "🛴  🚗  🚌",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🛴, 🚗, 🚌",
            "🚌, 🚗, 🛴",
            "🚗, 🛴, 🚌",
            "🛴, 🚌, 🚗"
          ],
          "answer": "🛴, 🚗, 🚌"
        }
      ]
    },
    {
      "id": "lg-peso",
      "title": "Ordem do mais leve para o mais pesado",
      "icon": "⚖️",
      "type": "choice",
      "items": [
        {
          "emoji": "🪶  📘  🧱",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🪶, 📘, 🧱",
            "🧱, 📘, 🪶",
            "📘, 🪶, 🧱",
            "🪶, 🧱, 📘"
          ],
          "answer": "🪶, 📘, 🧱"
        },
        {
          "emoji": "🍃  🍎  🍉",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "🍃, 🍎, 🍉",
            "🍉, 🍎, 🍃",
            "🍎, 🍃, 🍉",
            "🍃, 🍉, 🍎"
          ],
          "answer": "🍃, 🍎, 🍉"
        },
        {
          "emoji": "✏️  🎒  🪑",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "✏️, 🎒, 🪑",
            "🪑, 🎒, ✏️",
            "🎒, ✏️, 🪑",
            "✏️, 🪑, 🎒"
          ],
          "answer": "✏️, 🎒, 🪑"
        },
        {
          "emoji": "⚽  🚲  🚗",
          "prompt": "Qual ordem está correta?",
          "choices": [
            "⚽, 🚲, 🚗",
            "🚗, 🚲, ⚽",
            "🚲, ⚽, 🚗",
            "⚽, 🚗, 🚲"
          ],
          "answer": "⚽, 🚲, 🚗"
        }
      ]
    },
    {
      "id": "lg-seq-cor",
      "title": "Sequência de cores",
      "icon": "🌈",
      "type": "choice",
      "items": [
        {
          "emoji": "🔴 🔵 🔴 🔵 __",
          "prompt": "Qual cor vem depois?",
          "choices": [
            "🔴",
            "🔵",
            "🟢",
            "🟡"
          ],
          "answer": "🔴"
        },
        {
          "emoji": "🟢 🟡 🟡 🟢 🟡 🟡 __",
          "prompt": "Qual cor vem depois?",
          "choices": [
            "🟢",
            "🟡",
            "🔴",
            "🔵"
          ],
          "answer": "🟢"
        },
        {
          "emoji": "🟣 🟣 🟠 🟣 🟣 🟠 __",
          "prompt": "Qual cor vem depois?",
          "choices": [
            "🟣",
            "🟠",
            "🟢",
            "🔵"
          ],
          "answer": "🟣"
        },
        {
          "emoji": "🔵 🟢 🟡 🔵 🟢 __",
          "prompt": "Qual cor vem depois?",
          "choices": [
            "🟡",
            "🔵",
            "🟢",
            "🔴"
          ],
          "answer": "🟡"
        },
        {
          "emoji": "🔴 🔴 🔵 🔵 🔴 🔴 __",
          "prompt": "Qual cor vem depois?",
          "choices": [
            "🔵",
            "🔴",
            "🟢",
            "🟡"
          ],
          "answer": "🔵"
        }
      ]
    },
    {
      "id": "lg-seq-forma",
      "title": "Sequência de formas",
      "icon": "🔺",
      "type": "choice",
      "items": [
        {
          "emoji": "▲ ■ ▲ ■ __",
          "prompt": "Qual forma vem depois?",
          "choices": [
            "▲",
            "■",
            "●",
            "◆"
          ],
          "answer": "▲"
        },
        {
          "emoji": "● ● ◆ ● ● ◆ __",
          "prompt": "Qual forma vem depois?",
          "choices": [
            "●",
            "◆",
            "■",
            "▲"
          ],
          "answer": "●"
        },
        {
          "emoji": "■ ▲ ● ■ ▲ __",
          "prompt": "Qual forma vem depois?",
          "choices": [
            "●",
            "■",
            "▲",
            "◆"
          ],
          "answer": "●"
        },
        {
          "emoji": "◆ ◆ ● ◆ ◆ ● __",
          "prompt": "Qual forma vem depois?",
          "choices": [
            "◆",
            "●",
            "■",
            "▲"
          ],
          "answer": "◆"
        },
        {
          "emoji": "▲ ■ ■ ▲ ■ ■ __",
          "prompt": "Qual forma vem depois?",
          "choices": [
            "▲",
            "■",
            "●",
            "◆"
          ],
          "answer": "▲"
        }
      ]
    },
    {
      "id": "lg-movimentos",
      "title": "Sequência de movimentos",
      "icon": "🤸",
      "type": "choice",
      "items": [
        {
          "emoji": "👏 👣 👏 👣 __",
          "prompt": "Qual movimento vem depois?",
          "choices": [
            "👏",
            "👣",
            "🙌",
            "🤸"
          ],
          "answer": "👏"
        },
        {
          "emoji": "⬆️ ➡️ ⬇️ ⬆️ ➡️ __",
          "prompt": "Qual direção vem depois?",
          "choices": [
            "⬇️",
            "⬆️",
            "➡️",
            "⬅️"
          ],
          "answer": "⬇️"
        },
        {
          "emoji": "🙋 🧎 🙋 🧎 __",
          "prompt": "Qual movimento vem depois?",
          "choices": [
            "🙋",
            "🧎",
            "👏",
            "👣"
          ],
          "answer": "🙋"
        },
        {
          "emoji": "↖️ ↗️ ↖️ ↗️ __",
          "prompt": "Qual direção vem depois?",
          "choices": [
            "↖️",
            "↗️",
            "↘️",
            "↙️"
          ],
          "answer": "↖️"
        },
        {
          "emoji": "🦘 🐢 🦘 🐢 __",
          "prompt": "Quem vem depois?",
          "choices": [
            "🦘",
            "🐢",
            "🐇",
            "🐸"
          ],
          "answer": "🦘"
        }
      ]
    },
    {
      "id": "lg-mem-fig",
      "title": "Memória de figuras",
      "icon": "🧠",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶  🍎  🚗",
          "prompt": "Observe: qual figura estava no meio?",
          "choices": [
            "🍎",
            "🐶",
            "🚗",
            "⭐"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "⭐  🌙  ☀️",
          "prompt": "Observe: qual figura estava primeiro?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "🔺  ⚪  🟦",
          "prompt": "Observe: qual figura estava por último?",
          "choices": [
            "🟦",
            "⚪",
            "🔺",
            "🔷"
          ],
          "answer": "🟦"
        },
        {
          "emoji": "🍌  🍇  🍓",
          "prompt": "Observe: qual fruta estava no meio?",
          "choices": [
            "🍇",
            "🍌",
            "🍓",
            "🍎"
          ],
          "answer": "🍇"
        },
        {
          "emoji": "🚲  🚌  🚗",
          "prompt": "Observe: qual veículo estava primeiro?",
          "choices": [
            "🚲",
            "🚌",
            "🚗",
            "🚂"
          ],
          "answer": "🚲"
        }
      ]
    },
    {
      "id": "lg-mem-pos",
      "title": "Memória de posições",
      "icon": "📍",
      "type": "choice",
      "items": [
        {
          "emoji": "🐱  🐶  🐰",
          "prompt": "Quem estava à esquerda?",
          "choices": [
            "🐱",
            "🐶",
            "🐰",
            "🐭"
          ],
          "answer": "🐱"
        },
        {
          "emoji": "🍎  🍌  🍇",
          "prompt": "Qual fruta estava à direita?",
          "choices": [
            "🍇",
            "🍌",
            "🍎",
            "🍓"
          ],
          "answer": "🍇"
        },
        {
          "emoji": "🚗  🚌  🚲",
          "prompt": "Qual veículo estava no centro?",
          "choices": [
            "🚌",
            "🚗",
            "🚲",
            "🚂"
          ],
          "answer": "🚌"
        },
        {
          "emoji": "⭐  🌙  ☀️",
          "prompt": "O que estava à direita?",
          "choices": [
            "☀️",
            "🌙",
            "⭐",
            "☁️"
          ],
          "answer": "☀️"
        },
        {
          "emoji": "🔺  ⚪  🟦",
          "prompt": "O que estava à esquerda?",
          "choices": [
            "🔺",
            "⚪",
            "🟦",
            "🔷"
          ],
          "answer": "🔺"
        }
      ]
    },
    {
      "id": "lg-pares",
      "title": "Jogo dos pares",
      "icon": "🃏",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶  ?",
          "prompt": "Qual é o par do cachorro?",
          "choices": [
            "🐶",
            "🐱",
            "🐰",
            "🐭"
          ],
          "answer": "🐶"
        },
        {
          "emoji": "🍎  ?",
          "prompt": "Qual é o par da maçã?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍓"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "🚗  ?",
          "prompt": "Qual é o par do carro?",
          "choices": [
            "🚗",
            "🚌",
            "🚲",
            "🚂"
          ],
          "answer": "🚗"
        },
        {
          "emoji": "⭐  ?",
          "prompt": "Qual é o par da estrela?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "🔺  ?",
          "prompt": "Qual é o par do triângulo?",
          "choices": [
            "🔺",
            "⚪",
            "🟦",
            "🔷"
          ],
          "answer": "🔺"
        }
      ]
    },
    {
      "id": "lg-labirinto",
      "title": "Labirinto simples",
      "icon": "🌀",
      "type": "choice",
      "items": [
        {
          "emoji": "🐭 ➜ 🧀",
          "prompt": "O ratinho quer chegar ao queijo. Para qual lado deve ir?",
          "choices": [
            "Direita",
            "Esquerda",
            "Cima",
            "Baixo"
          ],
          "answer": "Direita"
        },
        {
          "emoji": "🏠 ⬅️ 🐶",
          "prompt": "Para chegar em casa, o cachorro deve ir para qual lado?",
          "choices": [
            "Esquerda",
            "Direita",
            "Cima",
            "Baixo"
          ],
          "answer": "Esquerda"
        },
        {
          "emoji": "⭐\n⬆️\n🚀",
          "prompt": "Para chegar à estrela, o foguete deve ir para onde?",
          "choices": [
            "Cima",
            "Baixo",
            "Direita",
            "Esquerda"
          ],
          "answer": "Cima"
        },
        {
          "emoji": "🐟\n⬇️\n🌊",
          "prompt": "Para chegar à água, o peixe deve ir para onde?",
          "choices": [
            "Baixo",
            "Cima",
            "Direita",
            "Esquerda"
          ],
          "answer": "Baixo"
        }
      ]
    },
    {
      "id": "lg-caminho",
      "title": "Caminho correto",
      "icon": "🛤️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐝 → 🌸",
          "prompt": "Onde a abelha deve chegar?",
          "choices": [
            "🌸",
            "🌊",
            "🏠",
            "🚗"
          ],
          "answer": "🌸"
        },
        {
          "emoji": "🐶 → 🦴",
          "prompt": "Onde o cachorro deve chegar?",
          "choices": [
            "🦴",
            "🍎",
            "📘",
            "⚽"
          ],
          "answer": "🦴"
        },
        {
          "emoji": "🚗 → ⛽",
          "prompt": "Onde o carro deve chegar?",
          "choices": [
            "⛽",
            "🌳",
            "🍰",
            "🛏️"
          ],
          "answer": "⛽"
        },
        {
          "emoji": "✉️ → 📮",
          "prompt": "Onde a carta deve chegar?",
          "choices": [
            "📮",
            "🥛",
            "🧸",
            "🚲"
          ],
          "answer": "📮"
        },
        {
          "emoji": "🚀 → 🌙",
          "prompt": "Onde o foguete deve chegar?",
          "choices": [
            "🌙",
            "🌳",
            "🏠",
            "🌊"
          ],
          "answer": "🌙"
        }
      ]
    },
    {
      "id": "lg-puzzle",
      "title": "Quebra-cabeça",
      "icon": "🧩",
      "type": "choice",
      "items": [
        {
          "emoji": "🐘 = cabeça + corpo + ?",
          "prompt": "Qual parte completa o elefante?",
          "choices": [
            "Pernas",
            "Rodas",
            "Asas",
            "Velas"
          ],
          "answer": "Pernas"
        },
        {
          "emoji": "🚗 = carroceria + rodas + ?",
          "prompt": "O que completa o carro?",
          "choices": [
            "Volante",
            "Asas",
            "Cauda",
            "Folhas"
          ],
          "answer": "Volante"
        },
        {
          "emoji": "🏠 = paredes + teto + ?",
          "prompt": "O que completa a casa?",
          "choices": [
            "Porta",
            "Rodas",
            "Asas",
            "Cauda"
          ],
          "answer": "Porta"
        },
        {
          "emoji": "🌳 = tronco + galhos + ?",
          "prompt": "O que completa a árvore?",
          "choices": [
            "Folhas",
            "Rodas",
            "Janelas",
            "Sapatos"
          ],
          "answer": "Folhas"
        },
        {
          "emoji": "🚲 = quadro + rodas + ?",
          "prompt": "O que completa a bicicleta?",
          "choices": [
            "Guidão",
            "Telhado",
            "Cauda",
            "Asas"
          ],
          "answer": "Guidão"
        }
      ]
    },
    {
      "id": "lg-completa-img",
      "title": "Complete a imagem",
      "icon": "🖼️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐟 sem cauda",
          "prompt": "Qual parte está faltando?",
          "choices": [
            "Cauda",
            "Roda",
            "Folha",
            "Porta"
          ],
          "answer": "Cauda"
        },
        {
          "emoji": "🚗 sem rodas",
          "prompt": "Qual parte está faltando?",
          "choices": [
            "Rodas",
            "Asas",
            "Folhas",
            "Patas"
          ],
          "answer": "Rodas"
        },
        {
          "emoji": "🏠 sem porta",
          "prompt": "Qual parte está faltando?",
          "choices": [
            "Porta",
            "Cauda",
            "Rodas",
            "Patas"
          ],
          "answer": "Porta"
        },
        {
          "emoji": "🌳 sem folhas",
          "prompt": "Qual parte está faltando?",
          "choices": [
            "Folhas",
            "Rodas",
            "Janelas",
            "Sapatos"
          ],
          "answer": "Folhas"
        },
        {
          "emoji": "🐦 sem asas",
          "prompt": "Qual parte está faltando?",
          "choices": [
            "Asas",
            "Rodas",
            "Porta",
            "Folhas"
          ],
          "answer": "Asas"
        }
      ]
    },
    {
      "id": "lg-sombra",
      "title": "Sombra correta",
      "icon": "🌑",
      "type": "choice",
      "items": [
        {
          "emoji": "🐘",
          "prompt": "Qual sombra combina com o elefante?",
          "choices": [
            "🐘",
            "🐭",
            "🐦",
            "🐟"
          ],
          "answer": "🐘"
        },
        {
          "emoji": "🚲",
          "prompt": "Qual sombra combina com a bicicleta?",
          "choices": [
            "🚲",
            "🚗",
            "🚌",
            "🚂"
          ],
          "answer": "🚲"
        },
        {
          "emoji": "🌳",
          "prompt": "Qual sombra combina com a árvore?",
          "choices": [
            "🌳",
            "🌼",
            "🌱",
            "🍄"
          ],
          "answer": "🌳"
        },
        {
          "emoji": "⛵",
          "prompt": "Qual sombra combina com o barco?",
          "choices": [
            "⛵",
            "✈️",
            "🚗",
            "🚲"
          ],
          "answer": "⛵"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual sombra combina com a borboleta?",
          "choices": [
            "🦋",
            "🐝",
            "🐞",
            "🕷️"
          ],
          "answer": "🦋"
        }
      ]
    },
    {
      "id": "lg-funcao",
      "title": "Objeto e função",
      "icon": "🛠️",
      "type": "choice",
      "items": [
        {
          "emoji": "✂️",
          "prompt": "Para que serve a tesoura?",
          "choices": [
            "Cortar",
            "Dormir",
            "Beber",
            "Correr"
          ],
          "answer": "Cortar"
        },
        {
          "emoji": "🪥",
          "prompt": "Para que serve a escova de dentes?",
          "choices": [
            "Escovar os dentes",
            "Cozinhar",
            "Jogar bola",
            "Pintar parede"
          ],
          "answer": "Escovar os dentes"
        },
        {
          "emoji": "☂️",
          "prompt": "Para que serve o guarda-chuva?",
          "choices": [
            "Proteger da chuva",
            "Escrever",
            "Comer",
            "Nadar"
          ],
          "answer": "Proteger da chuva"
        },
        {
          "emoji": "🔑",
          "prompt": "Para que serve a chave?",
          "choices": [
            "Abrir fechadura",
            "Cortar papel",
            "Beber água",
            "Varrer chão"
          ],
          "answer": "Abrir fechadura"
        },
        {
          "emoji": "🧹",
          "prompt": "Para que serve a vassoura?",
          "choices": [
            "Varrer",
            "Dormir",
            "Desenhar",
            "Telefonar"
          ],
          "answer": "Varrer"
        }
      ]
    },
    {
      "id": "lg-parte-todo",
      "title": "Parte e todo",
      "icon": "🧱",
      "type": "choice",
      "items": [
        {
          "emoji": "🚗",
          "prompt": "Qual é uma parte do carro?",
          "choices": [
            "Roda",
            "Folha",
            "Asa",
            "Cauda"
          ],
          "answer": "Roda"
        },
        {
          "emoji": "🌳",
          "prompt": "Qual é uma parte da árvore?",
          "choices": [
            "Folha",
            "Roda",
            "Porta",
            "Volante"
          ],
          "answer": "Folha"
        },
        {
          "emoji": "🐦",
          "prompt": "Qual é uma parte do pássaro?",
          "choices": [
            "Asa",
            "Roda",
            "Telhado",
            "Volante"
          ],
          "answer": "Asa"
        },
        {
          "emoji": "🏠",
          "prompt": "Qual é uma parte da casa?",
          "choices": [
            "Janela",
            "Cauda",
            "Pata",
            "Asa"
          ],
          "answer": "Janela"
        },
        {
          "emoji": "🚲",
          "prompt": "Qual é uma parte da bicicleta?",
          "choices": [
            "Pedal",
            "Folha",
            "Telhado",
            "Cauda"
          ],
          "answer": "Pedal"
        }
      ]
    },
    {
      "id": "lg-intruso",
      "title": "Quem não pertence ao grupo?",
      "icon": "🚫",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶 🐱 🐰 🚗",
          "prompt": "Qual não pertence ao grupo?",
          "choices": [
            "🐶",
            "🐱",
            "🐰",
            "🚗"
          ],
          "answer": "🚗"
        },
        {
          "emoji": "🍎 🍌 🍇 ⚽",
          "prompt": "Qual não pertence ao grupo?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "⚽"
          ],
          "answer": "⚽"
        },
        {
          "emoji": "🚗 🚌 🚲 🌳",
          "prompt": "Qual não pertence ao grupo?",
          "choices": [
            "🚗",
            "🚌",
            "🚲",
            "🌳"
          ],
          "answer": "🌳"
        },
        {
          "emoji": "🔺 🟦 ⚪ 🐟",
          "prompt": "Qual não pertence ao grupo?",
          "choices": [
            "🔺",
            "🟦",
            "⚪",
            "🐟"
          ],
          "answer": "🐟"
        },
        {
          "emoji": "🥄 🍴 🍽️ 🛏️",
          "prompt": "Qual não pertence ao grupo?",
          "choices": [
            "🥄",
            "🍴",
            "🍽️",
            "🛏️"
          ],
          "answer": "🛏️"
        }
      ]
    },
    {
      "id": "lg-vf",
      "title": "Verdadeiro ou falso lógico",
      "icon": "✅",
      "type": "choice",
      "items": [
        {
          "emoji": "🐘 > 🐜",
          "prompt": "O elefante é maior que a formiga.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🌙 aparece de dia",
          "prompt": "A Lua só pode aparecer à noite.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        },
        {
          "emoji": "🐟 vive na água",
          "prompt": "Peixes vivem na água.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🚗 tem asas",
          "prompt": "Carros têm asas.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        },
        {
          "emoji": "🍎 é uma fruta",
          "prompt": "A maçã é uma fruta.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        }
      ]
    },
    {
      "id": "lg-tempo",
      "title": "Antes, durante e depois",
      "icon": "⏳",
      "type": "choice",
      "items": [
        {
          "emoji": "🥚 ➜ 🐣 ➜ 🐔",
          "prompt": "O que vem depois do pintinho?",
          "choices": [
            "🐔",
            "🥚",
            "🌱",
            "🐟"
          ],
          "answer": "🐔"
        },
        {
          "emoji": "🌱 ➜ 🌿 ➜ 🌳",
          "prompt": "O que vem antes da árvore?",
          "choices": [
            "🌿",
            "🚗",
            "🐟",
            "⭐"
          ],
          "answer": "🌿"
        },
        {
          "emoji": "Acordar ➜ ? ➜ Ir à escola",
          "prompt": "O que pode acontecer no meio?",
          "choices": [
            "Tomar café",
            "Dormir",
            "Jantar",
            "Tomar banho à noite"
          ],
          "answer": "Tomar café"
        },
        {
          "emoji": "Misturar ➜ Assar ➜ ?",
          "prompt": "O que vem depois de assar um bolo?",
          "choices": [
            "Comer",
            "Plantar",
            "Dormir",
            "Nadar"
          ],
          "answer": "Comer"
        },
        {
          "emoji": "Chuva ➜ ? ➜ Sol",
          "prompt": "O que pode aparecer durante a mudança do tempo?",
          "choices": [
            "Arco-íris",
            "Neve dentro de casa",
            "Fogo",
            "Carro"
          ],
          "answer": "Arco-íris"
        }
      ]
    },
    {
      "id": "lg-rotina",
      "title": "Organização de rotina",
      "icon": "📅",
      "type": "choice",
      "items": [
        {
          "emoji": "🌅",
          "prompt": "O que normalmente fazemos primeiro pela manhã?",
          "choices": [
            "Acordar",
            "Jantar",
            "Dormir",
            "Ver estrelas"
          ],
          "answer": "Acordar"
        },
        {
          "emoji": "🪥",
          "prompt": "Quando escovamos os dentes pela manhã?",
          "choices": [
            "Depois de acordar",
            "Antes de nascer",
            "Durante o sono",
            "Depois de dormir à noite"
          ],
          "answer": "Depois de acordar"
        },
        {
          "emoji": "🏫",
          "prompt": "O que fazemos antes de voltar da escola?",
          "choices": [
            "Estudamos",
            "Dormimos a noite inteira",
            "Jantamos",
            "Tomamos banho de piscina"
          ],
          "answer": "Estudamos"
        },
        {
          "emoji": "🍽️",
          "prompt": "O que devemos fazer antes de comer?",
          "choices": [
            "Lavar as mãos",
            "Sujar as mãos",
            "Dormir",
            "Correr na rua"
          ],
          "answer": "Lavar as mãos"
        },
        {
          "emoji": "🌙",
          "prompt": "O que fazemos no final do dia?",
          "choices": [
            "Dormir",
            "Tomar café da manhã",
            "Ir à escola",
            "Almoçar"
          ],
          "answer": "Dormir"
        }
      ]
    },
    {
      "id": "lg-posicoes",
      "title": "Problema de posições",
      "icon": "🧭",
      "type": "choice",
      "items": [
        {
          "emoji": "🐱  🐶  🐰",
          "prompt": "Quem está no meio?",
          "choices": [
            "🐶",
            "🐱",
            "🐰",
            "🐭"
          ],
          "answer": "🐶"
        },
        {
          "emoji": "🍎  🍌  🍇",
          "prompt": "Qual fruta está à esquerda?",
          "choices": [
            "🍎",
            "🍌",
            "🍇",
            "🍓"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "🚗  🚌  🚲",
          "prompt": "Qual veículo está à direita?",
          "choices": [
            "🚲",
            "🚗",
            "🚌",
            "🚂"
          ],
          "answer": "🚲"
        },
        {
          "emoji": "⭐ acima de 🌙",
          "prompt": "O que está em cima?",
          "choices": [
            "⭐",
            "🌙",
            "☀️",
            "☁️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "🐟 abaixo de ⛵",
          "prompt": "O que está embaixo?",
          "choices": [
            "🐟",
            "⛵",
            "🌊",
            "⭐"
          ],
          "answer": "🐟"
        }
      ]
    },
    {
      "id": "lg-sudoku",
      "title": "Sudoku infantil",
      "icon": "🔢",
      "type": "choice",
      "items": [
        {
          "emoji": "1 2 3 | 2 3 1 | 3 1 __",
          "prompt": "Qual número completa?",
          "choices": [
            "2",
            "1",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "🔴 🔵 🟢 | 🔵 🟢 🔴 | 🟢 🔴 __",
          "prompt": "Qual cor completa?",
          "choices": [
            "🔵",
            "🔴",
            "🟢",
            "🟡"
          ],
          "answer": "🔵"
        },
        {
          "emoji": "▲ ■ ● | ■ ● ▲ | ● ▲ __",
          "prompt": "Qual forma completa?",
          "choices": [
            "■",
            "▲",
            "●",
            "◆"
          ],
          "answer": "■"
        },
        {
          "emoji": "🐶 🐱 🐰 | 🐱 🐰 🐶 | 🐰 🐶 __",
          "prompt": "Qual animal completa?",
          "choices": [
            "🐱",
            "🐶",
            "🐰",
            "🐭"
          ],
          "answer": "🐱"
        },
        {
          "emoji": "A B C | B C A | C A __",
          "prompt": "Qual letra completa?",
          "choices": [
            "B",
            "A",
            "C",
            "D"
          ],
          "answer": "B"
        }
      ]
    },
    {
      "id": "lg-codigo",
      "title": "Código secreto",
      "icon": "🔐",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 = 1, 🍌 = 2",
          "prompt": "Qual é o código de 🍌 🍎?",
          "choices": [
            "21",
            "12",
            "11",
            "22"
          ],
          "answer": "21"
        },
        {
          "emoji": "⭐ = A, 🌙 = B",
          "prompt": "Qual é o código de 🌙 ⭐?",
          "choices": [
            "BA",
            "AB",
            "AA",
            "BB"
          ],
          "answer": "BA"
        },
        {
          "emoji": "🔴 = 3, 🔵 = 4",
          "prompt": "Qual é o código de 🔴 🔵?",
          "choices": [
            "34",
            "43",
            "33",
            "44"
          ],
          "answer": "34"
        },
        {
          "emoji": "🐶 = X, 🐱 = Y",
          "prompt": "Qual é o código de 🐱 🐶?",
          "choices": [
            "YX",
            "XY",
            "XX",
            "YY"
          ],
          "answer": "YX"
        },
        {
          "emoji": "▲ = 5, ■ = 6",
          "prompt": "Qual é o código de ■ ▲?",
          "choices": [
            "65",
            "56",
            "55",
            "66"
          ],
          "answer": "65"
        }
      ]
    }
  ]
};


export const getExercise = (
  category: ExerciseCategory,
  id: string,
): Exercise | undefined => exercises[category]?.find((e) => e.id === id);
