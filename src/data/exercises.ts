// Exercícios importados de aprendix-play-v10-caligrafia-didatica.html.
// Caligrafia foi excluída por decisão do produto.
export type ChoiceItem = { emoji: string; prompt: string; hint?: string; choices: string[]; answer: string; explain?: string };
export type CountItem = { emoji: string; prompt: string; hint?: string; answer: number; explain?: string };
export type MatchingItem = { emoji: string; prompt: string; pairs: { key: string; left: string; right: string }[] };
export type UnscrambleItem = { emoji: string; prompt: string; answer: string };
export type DragDropItem = { emoji: string; prompt: string; cards: { id: string; label: string; target: string }[]; targets: string[] };
export type CrosswordItem = { emoji: string; prompt: string; entries: { answer: string; clue: string; row: number; col: number; dir: "h" | "v" }[] };
export type MemoryItem = { emoji: string; prompt: string; pairs: { key: string; value?: string; a?: string; b?: string }[] };
export type SequenceItem = { emoji: string; prompt: string; steps: string[] };
export type WordSearchItem = { emoji: string; prompt: string; words: string[] };
export type MazeItem = { emoji: string; prompt: string; grid: string[]; goalLabel?: string; playerEmoji?: string };

type ExerciseMeta = { id: string; title: string; icon: string; context?: string };
export type Exercise = ExerciseMeta & (
  | { type: "choice"; items: ChoiceItem[] }
  | { type: "count"; items: CountItem[] }
  | { type: "matching"; items: MatchingItem[] }
  | { type: "unscramble"; items: UnscrambleItem[] }
  | { type: "dragdrop"; items: DragDropItem[] }
  | { type: "crossword"; items: CrosswordItem[] }
  | { type: "memory"; items: MemoryItem[] }
  | { type: "sequence"; items: SequenceItem[] }
  | { type: "wordsearch"; items: WordSearchItem[] }
  | { type: "maze"; items: MazeItem[] }
);

export type ExerciseCategory = "portugues" | "matematica" | "logica" | "geografia" | "ciencias" | "palavras";

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
          "emoji": "🐟",
          "prompt": "Qual é a última letra de PEIXE?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "E"
        },
        {
          "emoji": "🍍",
          "prompt": "Qual é a última letra de ABACAXI?",
          "choices": [
            "A",
            "E",
            "I",
            "O"
          ],
          "answer": "I"
        },
        {
          "emoji": "🦃",
          "prompt": "Qual é a última letra de PERU?",
          "choices": [
            "A",
            "E",
            "I",
            "U"
          ],
          "answer": "U"
        }
      ]
    },
    {
      "id": "pt-vogal",
      "title": "Encontre a vogal",
      "icon": "🅰️",
      "type": "choice",
      "items": [
        {
          "emoji": "🍌",
          "prompt": "Qual é a primeira vogal de BANANA?",
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
      "id": "pt-consoante",
      "title": "Encontre a consoante",
      "icon": "🔤",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Com qual consoante começa GATO?",
          "choices": [
            "A",
            "O",
            "G",
            "U"
          ],
          "answer": "G"
        },
        {
          "emoji": "🐸",
          "prompt": "Com qual consoante começa SAPO?",
          "choices": [
            "A",
            "O",
            "S",
            "E"
          ],
          "answer": "S"
        },
        {
          "emoji": "🦋",
          "prompt": "Com qual consoante começa BORBOLETA?",
          "choices": [
            "A",
            "E",
            "O",
            "B"
          ],
          "answer": "B"
        },
        {
          "emoji": "🍌",
          "prompt": "Com qual consoante começa BANANA?",
          "choices": [
            "A",
            "B",
            "N",
            "P"
          ],
          "answer": "B"
        },
        {
          "emoji": "🔪",
          "prompt": "Com qual consoante começa FACA?",
          "choices": [
            "A",
            "F",
            "V",
            "P"
          ],
          "answer": "F"
        }
      ]
    },
    {
      "id": "pt-maiuscula",
      "title": "Maiúscula e minúscula",
      "icon": "Aa",
      "type": "choice",
      "items": [
        {
          "emoji": "A",
          "prompt": "Qual é a letra minúscula de A?",
          "choices": [
            "a",
            "e",
            "o",
            "u"
          ],
          "answer": "a"
        },
        {
          "emoji": "b",
          "prompt": "Qual é a letra maiúscula de b?",
          "choices": [
            "B",
            "D",
            "P",
            "R"
          ],
          "answer": "B"
        },
        {
          "emoji": "M",
          "prompt": "Qual é a letra minúscula de M?",
          "choices": [
            "n",
            "m",
            "w",
            "v"
          ],
          "answer": "m"
        },
        {
          "emoji": "g",
          "prompt": "Qual é a letra maiúscula de g?",
          "choices": [
            "C",
            "G",
            "J",
            "Q"
          ],
          "answer": "G"
        },
        {
          "emoji": "T",
          "prompt": "Qual é a letra minúscula de T?",
          "choices": [
            "f",
            "t",
            "l",
            "i"
          ],
          "answer": "t"
        }
      ]
    },
    {
      "id": "pt-anterior",
      "title": "Letra anterior",
      "icon": "⬅️",
      "type": "choice",
      "items": [
        {
          "emoji": "B",
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
          "emoji": "F",
          "prompt": "Qual letra vem antes de F?",
          "choices": [
            "D",
            "E",
            "G",
            "H"
          ],
          "answer": "E"
        },
        {
          "emoji": "M",
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
          "emoji": "R",
          "prompt": "Qual letra vem antes de R?",
          "choices": [
            "P",
            "Q",
            "S",
            "T"
          ],
          "answer": "Q"
        },
        {
          "emoji": "Z",
          "prompt": "Qual letra vem antes de Z?",
          "choices": [
            "W",
            "X",
            "Y",
            "Z"
          ],
          "answer": "Y"
        }
      ]
    },
    {
      "id": "pt-seguinte",
      "title": "Letra seguinte",
      "icon": "➡️",
      "type": "choice",
      "items": [
        {
          "emoji": "A",
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
          "emoji": "E",
          "prompt": "Qual letra vem depois de E?",
          "choices": [
            "D",
            "F",
            "G",
            "H"
          ],
          "answer": "F"
        },
        {
          "emoji": "L",
          "prompt": "Qual letra vem depois de L?",
          "choices": [
            "K",
            "M",
            "N",
            "O"
          ],
          "answer": "M"
        },
        {
          "emoji": "Q",
          "prompt": "Qual letra vem depois de Q?",
          "choices": [
            "P",
            "R",
            "S",
            "T"
          ],
          "answer": "R"
        },
        {
          "emoji": "Y",
          "prompt": "Qual letra vem depois de Y?",
          "choices": [
            "W",
            "X",
            "Y",
            "Z"
          ],
          "answer": "Z"
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
          "emoji": "A B C",
          "prompt": "Qual grupo está em ordem alfabética?",
          "choices": [
            "A, B, C",
            "C, B, A",
            "B, A, C",
            "A, C, B"
          ],
          "answer": "A, B, C"
        },
        {
          "emoji": "D E F",
          "prompt": "Qual grupo está em ordem alfabética?",
          "choices": [
            "D, E, F",
            "F, E, D",
            "E, D, F",
            "D, F, E"
          ],
          "answer": "D, E, F"
        },
        {
          "emoji": "G H I",
          "prompt": "Qual grupo está em ordem alfabética?",
          "choices": [
            "G, H, I",
            "I, H, G",
            "H, G, I",
            "G, I, H"
          ],
          "answer": "G, H, I"
        },
        {
          "emoji": "M N O",
          "prompt": "Qual grupo está em ordem alfabética?",
          "choices": [
            "M, N, O",
            "O, N, M",
            "N, M, O",
            "M, O, N"
          ],
          "answer": "M, N, O"
        },
        {
          "emoji": "X Y Z",
          "prompt": "Qual grupo está em ordem alfabética?",
          "choices": [
            "X, Y, Z",
            "Z, Y, X",
            "Y, X, Z",
            "X, Z, Y"
          ],
          "answer": "X, Y, Z"
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
      "id": "pt-primeira-silaba",
      "title": "Primeira sílaba",
      "icon": "1️⃣",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é a primeira sílaba de GATO?",
          "choices": [
            "GA",
            "GO",
            "TA",
            "TO"
          ],
          "answer": "GA"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual é a primeira sílaba de VACA?",
          "choices": [
            "VA",
            "CA",
            "VE",
            "CO"
          ],
          "answer": "VA"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual é a primeira sílaba de BORBOLETA?",
          "choices": [
            "BOR",
            "BO",
            "LE",
            "TA"
          ],
          "answer": "BOR"
        },
        {
          "emoji": "🐸",
          "prompt": "Qual é a primeira sílaba de SAPO?",
          "choices": [
            "SA",
            "SO",
            "PA",
            "PO"
          ],
          "answer": "SA"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual é a primeira sílaba de BANANA?",
          "choices": [
            "BA",
            "NA",
            "BE",
            "NO"
          ],
          "answer": "BA"
        }
      ]
    },
    {
      "id": "pt-ultima-silaba",
      "title": "Última sílaba",
      "icon": "🔚",
      "type": "matching",
      "items": [
        {
          "emoji": "🔚",
          "prompt": "Ligue cada palavra à sua última sílaba.",
          "pairs": [
            {
              "key": "p0",
              "left": "🐈 GATO",
              "right": "TO"
            },
            {
              "key": "p1",
              "left": "🐄 VACA",
              "right": "CA"
            },
            {
              "key": "p2",
              "left": "🦋 BORBOLETA",
              "right": "TA"
            },
            {
              "key": "p3",
              "left": "🐸 SAPO",
              "right": "PO"
            },
            {
              "key": "p4",
              "left": "🍌 BANANA",
              "right": "NA"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-complete-silaba",
      "title": "Complete a sílaba",
      "icon": "🧩",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual sílaba completa GATO?",
          "choices": [
            "GA",
            "CA",
            "PA",
            "TA"
          ],
          "answer": "GA",
          "hint": "__ + TO = GATO"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual sílaba completa VACA?",
          "choices": [
            "CO",
            "CA",
            "GA",
            "TA"
          ],
          "answer": "CA",
          "hint": "VA + __ = VACA"
        },
        {
          "emoji": "🐸",
          "prompt": "Qual sílaba completa SAPO?",
          "choices": [
            "SA",
            "CA",
            "PA",
            "TA"
          ],
          "answer": "SA",
          "hint": "__ + PO = SAPO"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual sílaba completa BANANA?",
          "choices": [
            "NA",
            "NE",
            "NO",
            "NU"
          ],
          "answer": "NA",
          "hint": "BA + __ + NA = BANANA"
        },
        {
          "emoji": "🦋",
          "prompt": "Qual sílaba completa BORBOLETA?",
          "choices": [
            "TE",
            "TI",
            "TA",
            "TO"
          ],
          "answer": "TA",
          "hint": "BOR + BO + LE + __ = BORBOLETA"
        }
      ]
    },
    {
      "id": "pt-monte",
      "title": "Monte a palavra",
      "icon": "🧱",
      "type": "unscramble",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "GATO"
        },
        {
          "emoji": "🐄",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "VACA"
        },
        {
          "emoji": "🐸",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "SAPO"
        },
        {
          "emoji": "🍌",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "BANANA"
        },
        {
          "emoji": "🦉",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "CORUJA"
        }
      ]
    },
    {
      "id": "pt-separe",
      "title": "Separe as sílabas",
      "icon": "✂️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Como separamos GATO em sílabas?",
          "choices": [
            "GA · TO",
            "GAT · O",
            "G · A · TO"
          ],
          "answer": "GA · TO"
        },
        {
          "emoji": "🐄",
          "prompt": "Como separamos VACA em sílabas?",
          "choices": [
            "VA · CA",
            "VAC · A",
            "V · A · CA"
          ],
          "answer": "VA · CA"
        },
        {
          "emoji": "🐸",
          "prompt": "Como separamos SAPO em sílabas?",
          "choices": [
            "SA · PO",
            "SAP · O",
            "S · A · PO"
          ],
          "answer": "SA · PO"
        },
        {
          "emoji": "🦉",
          "prompt": "Como separamos CORUJA em sílabas?",
          "choices": [
            "CO · RU · JA",
            "COR · U · JA",
            "CO · RUJ · A"
          ],
          "answer": "CO · RU · JA"
        },
        {
          "emoji": "🍌",
          "prompt": "Como separamos BANANA em sílabas?",
          "choices": [
            "BA · NA · NA",
            "BAN · A · NA",
            "BA · NAN · A"
          ],
          "answer": "BA · NA · NA"
        }
      ]
    },
    {
      "id": "pt-mesma-silaba",
      "title": "Mesma sílaba inicial",
      "icon": "🔗",
      "type": "choice",
      "items": [
        {
          "emoji": "🐄",
          "prompt": "Qual palavra começa com a mesma sílaba de VACA?",
          "choices": ["VASSOURA", "GATO", "SAPO", "BOLA"],
          "answer": "VASSOURA"
        },
        {
          "emoji": "🐈",
          "prompt": "Qual palavra começa com a mesma sílaba de GATO?",
          "choices": ["GALINHA", "VACA", "SAPO", "PATO"],
          "answer": "GALINHA"
        },
        {
          "emoji": "🐸",
          "prompt": "Qual palavra começa com a mesma sílaba de SAPO?",
          "choices": ["SABÃO", "GATO", "BOLA", "PATO"],
          "answer": "SABÃO"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual palavra começa com a mesma sílaba de BANANA?",
          "choices": ["BALA", "VACA", "GATO", "MALA"],
          "answer": "BALA"
        },
        {
          "emoji": "🦉",
          "prompt": "Qual palavra começa com a mesma sílaba de CORUJA?",
          "choices": ["COPO", "SAPO", "BOLA", "PATO"],
          "answer": "COPO"
        }
      ]
    },
    {
      "id": "pt-complete",
      "title": "Complete a palavra",
      "icon": "✏️",
      "type": "crossword",
      "items": [
        {
          "emoji": "✏️",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "GATO",
              "clue": "🐈",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "VACA",
              "clue": "🐄",
              "row": 0,
              "col": 1,
              "dir": "v"
            },
            {
              "answer": "SAPO",
              "clue": "🐸",
              "row": 4,
              "col": 1,
              "dir": "h"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-imagem-palavra",
      "title": "Imagem e palavra",
      "icon": "🖼️",
      "type": "memory",
      "items": [
        {
          "emoji": "🖼️",
          "prompt": "Encontre os pares que combinam.",
          "pairs": [
            {
              "key": "m0",
              "a": "🐈",
              "b": "GATO"
            },
            {
              "key": "m1",
              "a": "🐄",
              "b": "VACA"
            },
            {
              "key": "m2",
              "a": "🐸",
              "b": "SAPO"
            },
            {
              "key": "m3",
              "a": "🍌",
              "b": "BANANA"
            },
            {
              "key": "m4",
              "a": "🚗",
              "b": "CARRO"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-correta",
      "title": "Palavra correta",
      "icon": "✅",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual palavra está escrita corretamente?",
          "choices": [
            "GATO",
            "GATU",
            "CATO",
            "GATOA"
          ],
          "answer": "GATO"
        },
        {
          "emoji": "🐄",
          "prompt": "Qual palavra está escrita corretamente?",
          "choices": [
            "VACA",
            "VAKA",
            "FACA",
            "VACAA"
          ],
          "answer": "VACA"
        },
        {
          "emoji": "🐸",
          "prompt": "Qual palavra está escrita corretamente?",
          "choices": [
            "SAPO",
            "CAPO",
            "SAPU",
            "SAPOO"
          ],
          "answer": "SAPO"
        },
        {
          "emoji": "🍌",
          "prompt": "Qual palavra está escrita corretamente?",
          "choices": [
            "BANANA",
            "BANANNA",
            "BANENA",
            "PANANA"
          ],
          "answer": "BANANA"
        },
        {
          "emoji": "🏠",
          "prompt": "Qual palavra está escrita corretamente?",
          "choices": [
            "CASA",
            "CAZA",
            "CASSA",
            "CASAA"
          ],
          "answer": "CASA"
        }
      ]
    },
    {
      "id": "pt-intrusa",
      "title": "Palavra intrusa",
      "icon": "🚫",
      "type": "choice",
      "items": [
        {
          "emoji": "🐾",
          "prompt": "Qual palavra não pertence ao grupo dos animais?",
          "choices": ["GATO", "SAPO", "PATO", "CASA"],
          "answer": "CASA"
        },
        {
          "emoji": "🍎",
          "prompt": "Qual palavra não pertence ao grupo das frutas?",
          "choices": ["MAÇÃ", "BANANA", "UVA", "PATO"],
          "answer": "PATO"
        },
        {
          "emoji": "🚗",
          "prompt": "Qual palavra não pertence ao grupo dos transportes?",
          "choices": ["CARRO", "ÔNIBUS", "BICICLETA", "BOLA"],
          "answer": "BOLA"
        },
        {
          "emoji": "🎨",
          "prompt": "Qual palavra não pertence ao grupo das cores?",
          "choices": ["AZUL", "VERDE", "AMARELO", "GATO"],
          "answer": "GATO"
        },
        {
          "emoji": "🎒",
          "prompt": "Qual palavra não pertence ao grupo dos materiais escolares?",
          "choices": ["LÁPIS", "LIVRO", "BORRACHA", "BANANA"],
          "answer": "BANANA"
        }
      ]
    },
    {
      "id": "pt-ordene-letras",
      "title": "Ordene as letras",
      "icon": "🔀",
      "type": "unscramble",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "GATO"
        },
        {
          "emoji": "🐄",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "VACA"
        },
        {
          "emoji": "🐸",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "SAPO"
        },
        {
          "emoji": "🏠",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "CASA"
        },
        {
          "emoji": "⚽",
          "prompt": "Organize as letras para formar a resposta.",
          "answer": "BOLA"
        }
      ]
    },
    {
      "id": "pt-tamanho-palavra",
      "title": "Palavra maior ou menor",
      "icon": "📏",
      "type": "sequence",
      "items": [
        {
          "emoji": "📏",
          "prompt": "Organize as palavras da menor para a maior.",
          "steps": [
            "SOL",
            "GATO",
            "BANANA",
            "ELEFANTE"
          ]
        }
      ]
    },
    {
      "id": "pt-plural",
      "title": "Singular e plural",
      "icon": "👥",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈 🐈",
          "prompt": "Qual é o plural de GATO?",
          "choices": ["GATOS", "GATO", "GATAS", "GATÃO"],
          "answer": "GATOS"
        },
        {
          "emoji": "🏠 🏠",
          "prompt": "Qual é o plural de CASA?",
          "choices": ["CASAS", "CASA", "CASOS", "CASÃO"],
          "answer": "CASAS"
        },
        {
          "emoji": "⚽ ⚽",
          "prompt": "Qual é o plural de BOLA?",
          "choices": ["BOLAS", "BOLA", "BOLOS", "BOLÃO"],
          "answer": "BOLAS"
        },
        {
          "emoji": "🐸 🐸",
          "prompt": "Qual é o plural de SAPO?",
          "choices": ["SAPOS", "SAPO", "SAPAS", "SAPÃO"],
          "answer": "SAPOS"
        },
        {
          "emoji": "📚",
          "prompt": "Qual é o singular de LIVROS?",
          "choices": ["LIVRO", "LIVROS", "LIVRÃO", "LIVRES"],
          "answer": "LIVRO"
        }
      ]
    },
    {
      "id": "pt-genero",
      "title": "Masculino e feminino",
      "icon": "👧👦",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Qual é o feminino de GATO?",
          "choices": ["GATA", "GATOS", "VACA", "GALO"],
          "answer": "GATA"
        },
        {
          "emoji": "🐕",
          "prompt": "Qual é o feminino de CACHORRO?",
          "choices": ["CACHORRA", "GATA", "MENINA", "LEOA"],
          "answer": "CACHORRA"
        },
        {
          "emoji": "👦",
          "prompt": "Qual é o feminino de MENINO?",
          "choices": ["MENINA", "MENINOS", "MENINO", "MULHER"],
          "answer": "MENINA"
        },
        {
          "emoji": "👨",
          "prompt": "Qual é o feminino de HOMEM?",
          "choices": ["MULHER", "HOMENS", "HOMEM", "MENINA"],
          "answer": "MULHER"
        },
        {
          "emoji": "🦁",
          "prompt": "Qual é o feminino de LEÃO?",
          "choices": ["LEOA", "LEÕES", "GATA", "LEÃO"],
          "answer": "LEOA"
        }
      ]
    },
    {
      "id": "pt-rimas",
      "title": "Palavras que rimam",
      "icon": "🎵",
      "type": "matching",
      "items": [
        {
          "emoji": "🎵",
          "prompt": "Ligue as palavras que rimam.",
          "pairs": [
            {
              "key": "m0",
              "left": "🐈 GATO",
              "right": "PATO"
            },
            {
              "key": "m1",
              "left": "🏠 CASA",
              "right": "ASA"
            },
            {
              "key": "m2",
              "left": "⚽ BOLA",
              "right": "MOLA"
            },
            {
              "key": "m3",
              "left": "🐸 SAPO",
              "right": "PAPO"
            },
            {
              "key": "m4",
              "left": "🍞 PÃO",
              "right": "MÃO"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-som-inicial",
      "title": "Mesmo som inicial",
      "icon": "👂",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "👂",
          "prompt": "Encontre todas as palavras escondidas.",
          "words": [
            "GATO",
            "GALO",
            "VACA",
            "VASO",
            "SAPO",
            "SACO"
          ]
        }
      ]
    },
    {
      "id": "pt-som-final",
      "title": "Mesmo som final",
      "icon": "🔊",
      "type": "matching",
      "items": [
        {
          "emoji": "🔊",
          "prompt": "Ligue as palavras que terminam com o mesmo som.",
          "pairs": [
            {
              "key": "p0",
              "left": "🐈 GATO",
              "right": "PATO"
            },
            {
              "key": "p1",
              "left": "🏠 CASA",
              "right": "ASA"
            },
            {
              "key": "p2",
              "left": "⚽ BOLA",
              "right": "MOLA"
            },
            {
              "key": "p3",
              "left": "🍞 PÃO",
              "right": "MÃO"
            },
            {
              "key": "p4",
              "left": "🐸 SAPO",
              "right": "PAPO"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-frase",
      "title": "Complete a frase",
      "icon": "💬",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "💬",
          "prompt": "Leve cada palavra até a frase correta.",
          "cards": [
            {
              "id": "c0",
              "label": "🐈 O ___ mia.",
              "target": "gato"
            },
            {
              "id": "c1",
              "label": "🐟 O peixe vive na ___.",
              "target": "água"
            },
            {
              "id": "c2",
              "label": "☀️ O sol brilha no ___.",
              "target": "céu"
            },
            {
              "id": "c3",
              "label": "📚 Eu leio um ___.",
              "target": "livro"
            },
            {
              "id": "c4",
              "label": "🍎 A maçã é uma ___.",
              "target": "fruta"
            }
          ],
          "targets": [
            "gato",
            "água",
            "céu",
            "livro",
            "fruta"
          ]
        }
      ]
    },
    {
      "id": "pt-leia-imagem",
      "title": "Leia e escolha a imagem",
      "icon": "📖",
      "type": "memory",
      "items": [
        {
          "emoji": "📖",
          "prompt": "Encontre os pares que combinam.",
          "pairs": [
            {
              "key": "m0",
              "a": "GATO",
              "b": "🐈"
            },
            {
              "key": "m1",
              "a": "BOLA",
              "b": "⚽"
            },
            {
              "key": "m2",
              "a": "CASA",
              "b": "🏠"
            },
            {
              "key": "m3",
              "a": "PEIXE",
              "b": "🐟"
            },
            {
              "key": "m4",
              "a": "BANANA",
              "b": "🍌"
            }
          ]
        }
      ]
    },
    {
      "id": "pt-vf",
      "title": "Verdadeiro ou falso",
      "icon": "✅",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "A palavra GATO começa com G.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🐄",
          "prompt": "A palavra VACA termina com O.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        },
        {
          "emoji": "🍌",
          "prompt": "BANANA tem três sílabas.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🐸",
          "prompt": "SAPO começa com a sílaba SA.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Verdadeiro"
        },
        {
          "emoji": "🏠",
          "prompt": "CASA tem cinco letras.",
          "choices": [
            "Verdadeiro",
            "Falso"
          ],
          "answer": "Falso"
        }
      ]
    },
    {
      "id": "pt-interpretacao",
      "title": "Pequena interpretação",
      "icon": "📚",
      "context": "Lia tem um gato chamado Nino. Nino dorme na cama. Pela manhã, Lia coloca água no potinho dele. Depois, ela lê um livro enquanto Nino brinca com uma bola azul.",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Como se chama o gato de Lia?",
          "choices": ["NINO", "LIA", "BOLA", "LIVRO"],
          "answer": "NINO"
        },
        {
          "emoji": "🛏️",
          "prompt": "Onde Nino dorme?",
          "choices": ["NA CAMA", "NO SOFÁ", "NO QUINTAL", "NA MESA"],
          "answer": "NA CAMA"
        },
        {
          "emoji": "💧",
          "prompt": "O que Lia coloca no potinho de Nino?",
          "choices": ["ÁGUA", "LEITE", "SUCO", "AREIA"],
          "answer": "ÁGUA"
        },
        {
          "emoji": "📖",
          "prompt": "O que Lia faz depois?",
          "choices": ["LÊ UM LIVRO", "DORME", "CORRE", "COZINHA"],
          "answer": "LÊ UM LIVRO"
        },
        {
          "emoji": "🔵",
          "prompt": "Com o que Nino brinca?",
          "choices": ["UMA BOLA AZUL", "UM CARRINHO", "UMA CORDA", "UM LIVRO"],
          "answer": "UMA BOLA AZUL"
        }
      ]
    }
  ],
  "matematica": [
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
            "8"
          ],
          "answer": "8"
        },
        {
          "emoji": "12   ou   7",
          "prompt": "Qual número é maior?",
          "choices": [
            "7",
            "12"
          ],
          "answer": "12"
        },
        {
          "emoji": "4   ou   9",
          "prompt": "Qual número é menor?",
          "choices": [
            "4",
            "9"
          ],
          "answer": "4"
        },
        {
          "emoji": "16   ou   20",
          "prompt": "Qual número é menor?",
          "choices": [
            "16",
            "20"
          ],
          "answer": "16"
        },
        {
          "emoji": "25   ou   18",
          "prompt": "Qual número é maior?",
          "choices": [
            "18",
            "25"
          ],
          "answer": "25"
        }
      ]
    },
    {
      "id": "mt-sinais",
      "title": "Maior, menor ou igual",
      "icon": "⚖️",
      "type": "choice",
      "items": [
        {
          "emoji": "5   e   3",
          "prompt": "Qual frase está correta?",
          "choices": [
            "5 é maior que 3",
            "5 é menor que 3",
            "5 é igual a 3"
          ],
          "answer": "5 é maior que 3"
        },
        {
          "emoji": "2   e   7",
          "prompt": "Qual frase está correta?",
          "choices": [
            "2 é maior que 7",
            "2 é menor que 7",
            "2 é igual a 7"
          ],
          "answer": "2 é menor que 7"
        },
        {
          "emoji": "6   e   6",
          "prompt": "Qual frase está correta?",
          "choices": [
            "6 é maior que 6",
            "6 é menor que 6",
            "6 é igual a 6"
          ],
          "answer": "6 é igual a 6"
        },
        {
          "emoji": "10   e   8",
          "prompt": "Qual frase está correta?",
          "choices": [
            "10 é maior que 8",
            "10 é menor que 8",
            "10 é igual a 8"
          ],
          "answer": "10 é maior que 8"
        },
        {
          "emoji": "4   e   9",
          "prompt": "Qual frase está correta?",
          "choices": [
            "4 é maior que 9",
            "4 é menor que 9",
            "4 é igual a 9"
          ],
          "answer": "4 é menor que 9"
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
      "id": "mt-contar",
      "title": "Conte os objetos",
      "icon": "🍎",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🍎",
          "prompt": "Ligue cada grupo à quantidade correta.",
          "cards": [
            {
              "id": "c0",
              "label": "🍎 🍎 🍎",
              "target": "3"
            },
            {
              "id": "c1",
              "label": "⭐ ⭐ ⭐ ⭐",
              "target": "4"
            },
            {
              "id": "c2",
              "label": "🐟 🐟 🐟 🐟 🐟",
              "target": "5"
            },
            {
              "id": "c3",
              "label": "⚽ ⚽",
              "target": "2"
            },
            {
              "id": "c4",
              "label": "🌼 🌼 🌼 🌼 🌼 🌼",
              "target": "6"
            }
          ],
          "targets": [
            "3",
            "4",
            "5",
            "2",
            "6"
          ]
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
          "prompt": "Há 3 maçãs. Para ter 5, quantas faltam?",
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
          "prompt": "Há 4 estrelas. Para ter 6, quantas faltam?",
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
          "prompt": "Há 2 bolas. Para ter 5, quantas faltam?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "3"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟",
          "prompt": "Há 5 peixes. Para ter 8, quantos faltam?",
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
          "prompt": "Há 3 flores. Para ter 7, quantas faltam?",
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
      "id": "mt-sobraram",
      "title": "Quantos sobraram?",
      "icon": "📦",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 🍎 🍎 🍎",
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
          "emoji": "⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽",
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
          "emoji": "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
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
          "emoji": "🐟 🐟 🐟 🐟 🐟 🐟",
          "prompt": "Havia 6 peixes. Um saiu. Quantos ficaram?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "5"
        },
        {
          "emoji": "🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼",
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
      "type": "sequence",
      "items": [
        {
          "emoji": "👯",
          "prompt": "Organize a contagem de dois em dois em ordem crescente.",
          "steps": [
            "2",
            "4",
            "6",
            "8",
            "10"
          ]
        }
      ]
    },
    {
      "id": "mt-grupo5",
      "title": "Agrupe de cinco em cinco",
      "icon": "🖐️",
      "type": "sequence",
      "items": [
        {
          "emoji": "🖐️",
          "prompt": "Organize a contagem de cinco em cinco em ordem crescente.",
          "steps": [
            "5",
            "10",
            "15",
            "20",
            "25"
          ]
        }
      ]
    },
    {
      "id": "mt-grupo10",
      "title": "Agrupe de dez em dez",
      "icon": "🔟",
      "type": "sequence",
      "items": [
        {
          "emoji": "🔟",
          "prompt": "Organize a contagem de dez em dez em ordem crescente.",
          "steps": [
            "10",
            "20",
            "30",
            "40",
            "50"
          ]
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
          "emoji": "🍎 🍎 + 🍎",
          "prompt": "Quantas maçãs há ao todo?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "⭐ ⭐ ⭐ + ⭐ ⭐",
          "prompt": "Quantas estrelas há ao todo?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "5"
        },
        {
          "emoji": "⚽ ⚽ + ⚽ ⚽",
          "prompt": "Quantas bolas há ao todo?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 + 🐟",
          "prompt": "Quantos peixes há ao todo?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "5"
        },
        {
          "emoji": "🌼 🌼 🌼 + 🌼 🌼 🌼",
          "prompt": "Quantas flores há ao todo?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
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
          "emoji": "2 + ? = 5",
          "prompt": "Qual número falta para completar a soma?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "3"
        },
        {
          "emoji": "? + 4 = 7",
          "prompt": "Qual número falta para completar a soma?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "5 + ? = 9",
          "prompt": "Qual número falta para completar a soma?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "? + 6 = 10",
          "prompt": "Qual número falta para completar a soma?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "8 + ? = 12",
          "prompt": "Qual número falta para completar a soma?",
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
      "id": "mt-sub-fig",
      "title": "Subtração com figuras",
      "icon": "🍎",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 🍎 − 🍎",
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
          "emoji": "⭐ ⭐ ⭐ ⭐ ⭐ − ⭐ ⭐",
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
          "emoji": "⚽ ⚽ ⚽ ⚽ − ⚽",
          "prompt": "Quantas bolas sobraram?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "3"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟 − 🐟 🐟",
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
          "emoji": "🌼 🌼 🌼 🌼 🌼 🌼 − 🌼 🌼",
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
          "emoji": "5 − ? = 3",
          "prompt": "Qual número falta para completar a subtração?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "? − 2 = 6",
          "prompt": "Qual número falta para completar a subtração?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "9 − ? = 5",
          "prompt": "Qual número falta para completar a subtração?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "? − 4 = 6",
          "prompt": "Qual número falta para completar a subtração?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "emoji": "12 − ? = 7",
          "prompt": "Qual número falta para completar a subtração?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "5"
        }
      ]
    },
    {
      "id": "mt-dobro",
      "title": "Dois grupos iguais",
      "icon": "👯",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎 + 🍎 🍎",
          "prompt": "Junte os dois grupos. Quantas maçãs há ao todo?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "4"
        },
        {
          "emoji": "⭐ ⭐ ⭐ + ⭐ ⭐ ⭐",
          "prompt": "Junte os dois grupos. Quantas estrelas há ao todo?",
          "choices": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": "6"
        },
        {
          "emoji": "⚽ ⚽ + ⚽ ⚽",
          "prompt": "Junte os dois grupos. Quantas bolas há ao todo?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 + 🐟 🐟 🐟 🐟",
          "prompt": "Junte os dois grupos. Quantos peixes há ao todo?",
          "choices": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "8"
        },
        {
          "emoji": "🌼 🌼 🌼 🌼 🌼 + 🌼 🌼 🌼 🌼 🌼",
          "prompt": "Junte os dois grupos. Quantas flores há ao todo?",
          "choices": [
            "8",
            "9",
            "10",
            "11"
          ],
          "answer": "10"
        }
      ]
    },
    {
      "id": "mt-metade",
      "title": "Reparta igualmente",
      "icon": "🎁",
      "type": "choice",
      "items": [
        {
          "emoji": "🍎 🍎",
          "prompt": "Reparta 2 maçãs igualmente entre 2 crianças. Quantas cada uma recebe?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "1"
        },
        {
          "emoji": "⭐ ⭐ ⭐ ⭐",
          "prompt": "Reparta 4 estrelas igualmente entre 2 crianças. Quantas cada uma recebe?",
          "choices": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "2"
        },
        {
          "emoji": "⚽ ⚽ ⚽ ⚽ ⚽ ⚽",
          "prompt": "Reparta 6 bolas igualmente entre 2 crianças. Quantas cada uma recebe?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "3"
        },
        {
          "emoji": "🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟",
          "prompt": "Reparta 8 peixes igualmente entre 2 crianças. Quantos cada uma recebe?",
          "choices": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": "4"
        },
        {
          "emoji": "🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼 🌼",
          "prompt": "Reparta 10 flores igualmente entre 2 crianças. Quantas cada uma recebe?",
          "choices": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "5"
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
      "type": "maze",
      "items": [
        {
          "emoji": "📘",
          "prompt": "Leve o Dixi até a resposta do probleminha.",
          "grid": [
            "S..#...",
            "##.#.#.",
            "...#.#.",
            ".###.#.",
            ".....#.",
            ".#####.",
            "......G"
          ],
          "goalLabel": "Resposta correta"
        }
      ]
    },
    {
      "id": "mt-dinheiro",
      "title": "Dinheiro no dia a dia",
      "icon": "💰",
      "type": "choice",
      "items": [
        {
          "emoji": "🪙 🪙 🪙",
          "prompt": "Cada moeda vale R$ 1. Quanto valem as 3 moedas juntas?",
          "choices": [
            "R$ 1",
            "R$ 2",
            "R$ 3",
            "R$ 4"
          ],
          "answer": "R$ 3"
        },
        {
          "emoji": "💵 💵",
          "prompt": "Cada nota vale R$ 5. Quanto valem as 2 notas juntas?",
          "choices": [
            "R$ 5",
            "R$ 7",
            "R$ 10",
            "R$ 12"
          ],
          "answer": "R$ 10"
        },
        {
          "emoji": "R$ 2 + R$ 3",
          "prompt": "Quanto dinheiro há ao todo?",
          "choices": [
            "R$ 3",
            "R$ 4",
            "R$ 5",
            "R$ 6"
          ],
          "answer": "R$ 5"
        },
        {
          "emoji": "🍌 R$ 2",
          "prompt": "Você tem R$ 5 e compra a banana. Quanto sobra?",
          "choices": [
            "R$ 2",
            "R$ 3",
            "R$ 4",
            "R$ 5"
          ],
          "answer": "R$ 3"
        },
        {
          "emoji": "📒 R$ 7",
          "prompt": "Você tem R$ 10 e compra o caderno. Quanto sobra?",
          "choices": [
            "R$ 2",
            "R$ 3",
            "R$ 4",
            "R$ 5"
          ],
          "answer": "R$ 3"
        }
      ]
    },
    {
      "id": "mt-calendario",
      "title": "Calendário",
      "icon": "📅",
      "type": "sequence",
      "items": [
        {
          "emoji": "📅",
          "prompt": "Organize os dias da semana.",
          "steps": [
            "SEGUNDA",
            "TERÇA",
            "QUARTA",
            "QUINTA",
            "SEXTA"
          ]
        }
      ]
    },
    {
      "id": "mt-horas",
      "title": "Partes do dia",
      "icon": "🌅",
      "type": "choice",
      "items": [
        {
          "emoji": "🌅",
          "prompt": "O sol está nascendo. Qual é a parte do dia?",
          "choices": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "answer": "Manhã"
        },
        {
          "emoji": "🍽️",
          "prompt": "Já almoçamos e ainda está claro. Qual é a parte do dia?",
          "choices": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "answer": "Tarde"
        },
        {
          "emoji": "🌙",
          "prompt": "Está escuro e a lua apareceu. Qual é a parte do dia?",
          "choices": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "answer": "Noite"
        },
        {
          "emoji": "🥣",
          "prompt": "É hora do café da manhã. Qual é a parte do dia?",
          "choices": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "answer": "Manhã"
        },
        {
          "emoji": "🛏️",
          "prompt": "Está escuro e é hora de dormir. Qual é a parte do dia?",
          "choices": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "answer": "Noite"
        }
      ]
    },
    {
      "id": "mt-formas",
      "title": "Formas geométricas",
      "icon": "🔺",
      "type": "memory",
      "items": [
        {
          "emoji": "🔺",
          "prompt": "Encontre os pares que combinam.",
          "pairs": [
            {
              "key": "m0",
              "a": "🔺",
              "b": "Triângulo"
            },
            {
              "key": "m1",
              "a": "🟦",
              "b": "Quadrado"
            },
            {
              "key": "m2",
              "a": "⚪",
              "b": "Círculo"
            },
            {
              "key": "m3",
              "a": "▭",
              "b": "Retângulo"
            },
            {
              "key": "m4",
              "a": "🔷",
              "b": "Losango"
            }
          ]
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
            "🐘"
          ],
          "answer": "🐜"
        },
        {
          "emoji": "🍒 🍎 🍉",
          "prompt": "Qual é o maior?",
          "choices": [
            "🍒",
            "🍎",
            "🍉"
          ],
          "answer": "🍉"
        },
        {
          "emoji": "🚲 🚗 🚌",
          "prompt": "Qual é o maior?",
          "choices": [
            "🚲",
            "🚗",
            "🚌"
          ],
          "answer": "🚌"
        },
        {
          "emoji": "🌱 🌿 🌳",
          "prompt": "Qual é o menor?",
          "choices": [
            "🌱",
            "🌿",
            "🌳"
          ],
          "answer": "🌱"
        },
        {
          "emoji": "🥄 🍽️ 🛋️",
          "prompt": "Qual é o maior?",
          "choices": [
            "🥄",
            "🍽️",
            "🛋️"
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
            "🚗"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "⭐  🌙  ☀️",
          "prompt": "Observe: qual figura estava primeiro?",
          "choices": [
            "⭐",
            "🌙",
            "☀️"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "🔺  ⚪  🟦",
          "prompt": "Observe: qual figura estava por último?",
          "choices": [
            "🟦",
            "⚪",
            "🔺"
          ],
          "answer": "🟦"
        },
        {
          "emoji": "🍌  🍇  🍓",
          "prompt": "Observe: qual fruta estava no meio?",
          "choices": [
            "🍇",
            "🍌",
            "🍓"
          ],
          "answer": "🍇"
        },
        {
          "emoji": "🚲  🚌  🚗",
          "prompt": "Observe: qual veículo estava primeiro?",
          "choices": [
            "🚲",
            "🚌",
            "🚗"
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
            "🐰"
          ],
          "answer": "🐱"
        },
        {
          "emoji": "🍎  🍌  🍇",
          "prompt": "Qual fruta estava à direita?",
          "choices": [
            "🍇",
            "🍌",
            "🍎"
          ],
          "answer": "🍇"
        },
        {
          "emoji": "🚗  🚌  🚲",
          "prompt": "Qual veículo estava no centro?",
          "choices": [
            "🚌",
            "🚗",
            "🚲"
          ],
          "answer": "🚌"
        },
        {
          "emoji": "⭐  🌙  ☀️",
          "prompt": "O que estava à direita?",
          "choices": [
            "☀️",
            "🌙",
            "⭐"
          ],
          "answer": "☀️"
        },
        {
          "emoji": "🔺  ⚪  🟦",
          "prompt": "O que estava à esquerda?",
          "choices": [
            "🔺",
            "⚪",
            "🟦"
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
            "🐰"
          ],
          "answer": "🐶"
        },
        {
          "emoji": "🍎  🍌  🍇",
          "prompt": "Qual fruta está à esquerda?",
          "choices": [
            "🍎",
            "🍌",
            "🍇"
          ],
          "answer": "🍎"
        },
        {
          "emoji": "🚗  🚌  🚲",
          "prompt": "Qual veículo está à direita?",
          "choices": [
            "🚲",
            "🚗",
            "🚌"
          ],
          "answer": "🚲"
        },
        {
          "emoji": "⭐ acima de 🌙",
          "prompt": "O que está em cima?",
          "choices": [
            "⭐",
            "🌙"
          ],
          "answer": "⭐"
        },
        {
          "emoji": "🐟 abaixo de ⛵",
          "prompt": "O que está embaixo?",
          "choices": [
            "🐟",
            "⛵"
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
          "prompt": "Qual número completa a última linha?",
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
          "prompt": "Qual cor completa a última linha?",
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
          "prompt": "Qual forma completa a última linha?",
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
          "prompt": "Qual animal completa a última linha?",
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
          "prompt": "Qual letra completa a última linha?",
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
  ],
  "geografia": [
    {
      "id": "geo-comodos",
      "title": "Cômodos da casa",
      "icon": "🏠",
      "type": "choice",
      "items": [
        {
          "emoji": "🛏️",
          "prompt": "Em qual cômodo geralmente dormimos?",
          "choices": [
            "Quarto",
            "Cozinha",
            "Banheiro",
            "Garagem"
          ],
          "answer": "Quarto"
        },
        {
          "emoji": "🚿",
          "prompt": "Em qual cômodo tomamos banho?",
          "choices": [
            "Banheiro",
            "Sala",
            "Quarto",
            "Cozinha"
          ],
          "answer": "Banheiro"
        },
        {
          "emoji": "🍳",
          "prompt": "Em qual cômodo preparamos a comida?",
          "choices": [
            "Cozinha",
            "Quarto",
            "Sala",
            "Garagem"
          ],
          "answer": "Cozinha"
        },
        {
          "emoji": "📺",
          "prompt": "Em qual cômodo a família costuma assistir televisão?",
          "choices": [
            "Sala",
            "Banheiro",
            "Garagem",
            "Quarto"
          ],
          "answer": "Sala"
        },
        {
          "emoji": "🚗",
          "prompt": "Onde o carro costuma ficar guardado?",
          "choices": [
            "Garagem",
            "Cozinha",
            "Quarto",
            "Banheiro"
          ],
          "answer": "Garagem"
        }
      ]
    },
    {
      "id": "geo-acoes-casa",
      "title": "Onde fazemos isso?",
      "icon": "🧼",
      "type": "choice",
      "items": [
        {
          "emoji": "🪥",
          "prompt": "Onde escovamos os dentes?",
          "choices": [
            "Banheiro",
            "Sala",
            "Garagem",
            "Quintal"
          ],
          "answer": "Banheiro"
        },
        {
          "emoji": "🍽️",
          "prompt": "Onde fazemos as refeições?",
          "choices": [
            "Cozinha",
            "Banheiro",
            "Garagem",
            "Quarto"
          ],
          "answer": "Cozinha"
        },
        {
          "emoji": "😴",
          "prompt": "Onde costumamos dormir?",
          "choices": [
            "Quarto",
            "Cozinha",
            "Sala",
            "Varanda"
          ],
          "answer": "Quarto"
        },
        {
          "emoji": "🧺",
          "prompt": "Onde podemos lavar roupas?",
          "choices": [
            "Lavanderia",
            "Sala",
            "Quarto",
            "Garagem"
          ],
          "answer": "Lavanderia"
        },
        {
          "emoji": "🛋️",
          "prompt": "Onde costumamos receber visitas?",
          "choices": [
            "Sala",
            "Banheiro",
            "Lavanderia",
            "Garagem"
          ],
          "answer": "Sala"
        }
      ]
    },
    {
      "id": "geo-lugares-cidade",
      "title": "Lugares da cidade",
      "icon": "🏙️",
      "type": "choice",
      "items": [
        {
          "emoji": "🏫",
          "prompt": "Onde as crianças estudam?",
          "choices": [
            "Escola",
            "Hospital",
            "Banco",
            "Mercado"
          ],
          "answer": "Escola"
        },
        {
          "emoji": "🏥",
          "prompt": "Onde vamos quando precisamos de atendimento médico?",
          "choices": [
            "Hospital",
            "Padaria",
            "Parque",
            "Cinema"
          ],
          "answer": "Hospital"
        },
        {
          "emoji": "🛒",
          "prompt": "Onde compramos alimentos e produtos para casa?",
          "choices": [
            "Mercado",
            "Biblioteca",
            "Escola",
            "Praça"
          ],
          "answer": "Mercado"
        },
        {
          "emoji": "📚",
          "prompt": "Onde podemos pegar livros emprestados?",
          "choices": [
            "Biblioteca",
            "Farmácia",
            "Banco",
            "Posto"
          ],
          "answer": "Biblioteca"
        },
        {
          "emoji": "🌳",
          "prompt": "Onde podemos brincar ao ar livre na cidade?",
          "choices": [
            "Parque",
            "Hospital",
            "Banco",
            "Delegacia"
          ],
          "answer": "Parque"
        }
      ]
    },
    {
      "id": "geo-compras-servicos",
      "title": "Onde encontramos?",
      "icon": "🛍️",
      "type": "choice",
      "items": [
        {
          "emoji": "🥖",
          "prompt": "Onde compramos pão?",
          "choices": [
            "Padaria",
            "Farmácia",
            "Hospital",
            "Banco"
          ],
          "answer": "Padaria"
        },
        {
          "emoji": "💊",
          "prompt": "Onde compramos remédios?",
          "choices": [
            "Farmácia",
            "Escola",
            "Praça",
            "Biblioteca"
          ],
          "answer": "Farmácia"
        },
        {
          "emoji": "✉️",
          "prompt": "Onde enviamos cartas e encomendas?",
          "choices": [
            "Correio",
            "Mercado",
            "Hospital",
            "Cinema"
          ],
          "answer": "Correio"
        },
        {
          "emoji": "💰",
          "prompt": "Onde guardamos e movimentamos dinheiro?",
          "choices": [
            "Banco",
            "Padaria",
            "Parque",
            "Escola"
          ],
          "answer": "Banco"
        },
        {
          "emoji": "⛽",
          "prompt": "Onde abastecemos um carro?",
          "choices": [
            "Posto de combustível",
            "Biblioteca",
            "Praça",
            "Hospital"
          ],
          "answer": "Posto de combustível"
        }
      ]
    },
    {
      "id": "geo-profissoes-lugares",
      "title": "Quem trabalha aqui?",
      "icon": "👩‍⚕️",
      "type": "choice",
      "items": [
        {
          "emoji": "🏥",
          "prompt": "Quem costuma trabalhar em um hospital?",
          "choices": [
            "Médico",
            "Padeiro",
            "Carteiro",
            "Motorista"
          ],
          "answer": "Médico"
        },
        {
          "emoji": "🏫",
          "prompt": "Quem ensina na escola?",
          "choices": [
            "Professor",
            "Dentista",
            "Piloto",
            "Cozinheiro"
          ],
          "answer": "Professor"
        },
        {
          "emoji": "🥖",
          "prompt": "Quem trabalha fazendo pães na padaria?",
          "choices": [
            "Padeiro",
            "Professor",
            "Médico",
            "Bombeiro"
          ],
          "answer": "Padeiro"
        },
        {
          "emoji": "🚒",
          "prompt": "Quem apaga incêndios?",
          "choices": [
            "Bombeiro",
            "Bibliotecário",
            "Caixa",
            "Pintor"
          ],
          "answer": "Bombeiro"
        },
        {
          "emoji": "📚",
          "prompt": "Quem organiza livros em uma biblioteca?",
          "choices": [
            "Bibliotecário",
            "Mecânico",
            "Agricultor",
            "Piloto"
          ],
          "answer": "Bibliotecário"
        }
      ]
    },
    {
      "id": "geo-transportes",
      "title": "Meios de transporte",
      "icon": "🚌",
      "type": "choice",
      "items": [
        {
          "emoji": "🚗",
          "prompt": "Qual destes é um meio de transporte?",
          "choices": [
            "Carro",
            "Árvore",
            "Casa",
            "Cadeira"
          ],
          "answer": "Carro"
        },
        {
          "emoji": "🚲",
          "prompt": "Qual transporte usamos pedalando?",
          "choices": [
            "Bicicleta",
            "Avião",
            "Barco",
            "Trem"
          ],
          "answer": "Bicicleta"
        },
        {
          "emoji": "🚌",
          "prompt": "Qual transporte leva várias pessoas pela cidade?",
          "choices": [
            "Ônibus",
            "Patins",
            "Skate",
            "Canoa"
          ],
          "answer": "Ônibus"
        },
        {
          "emoji": "🚂",
          "prompt": "Qual transporte anda sobre trilhos?",
          "choices": [
            "Trem",
            "Carro",
            "Navio",
            "Helicóptero"
          ],
          "answer": "Trem"
        },
        {
          "emoji": "🚕",
          "prompt": "Qual transporte pode levar passageiros pela cidade?",
          "choices": [
            "Táxi",
            "Trator",
            "Foguete",
            "Submarino"
          ],
          "answer": "Táxi"
        }
      ]
    },
    {
      "id": "geo-terrestres",
      "title": "Transportes terrestres",
      "icon": "🚗",
      "type": "choice",
      "items": [
        {
          "emoji": "🚗",
          "prompt": "Qual anda por ruas e estradas?",
          "choices": [
            "Carro",
            "Navio",
            "Avião",
            "Canoa"
          ],
          "answer": "Carro"
        },
        {
          "emoji": "🚌",
          "prompt": "Qual é um transporte terrestre coletivo?",
          "choices": [
            "Ônibus",
            "Barco",
            "Helicóptero",
            "Balsa"
          ],
          "answer": "Ônibus"
        },
        {
          "emoji": "🚲",
          "prompt": "Qual é um transporte terrestre sem motor?",
          "choices": [
            "Bicicleta",
            "Avião",
            "Navio",
            "Lancha"
          ],
          "answer": "Bicicleta"
        },
        {
          "emoji": "🚂",
          "prompt": "Qual transporte terrestre anda em trilhos?",
          "choices": [
            "Trem",
            "Barco",
            "Balão",
            "Submarino"
          ],
          "answer": "Trem"
        },
        {
          "emoji": "🏍️",
          "prompt": "Qual é um transporte terrestre de duas rodas?",
          "choices": [
            "Motocicleta",
            "Navio",
            "Avião",
            "Canoa"
          ],
          "answer": "Motocicleta"
        }
      ]
    },
    {
      "id": "geo-aquaticos",
      "title": "Transportes aquáticos",
      "icon": "🚢",
      "type": "choice",
      "items": [
        {
          "emoji": "🚢",
          "prompt": "Qual transporte anda na água?",
          "choices": [
            "Navio",
            "Carro",
            "Trem",
            "Ônibus"
          ],
          "answer": "Navio"
        },
        {
          "emoji": "🛶",
          "prompt": "Qual destes é um transporte aquático pequeno?",
          "choices": [
            "Canoa",
            "Bicicleta",
            "Avião",
            "Metrô"
          ],
          "answer": "Canoa"
        },
        {
          "emoji": "⛴️",
          "prompt": "Qual pode transportar pessoas e veículos pela água?",
          "choices": [
            "Balsa",
            "Ônibus",
            "Trem",
            "Táxi"
          ],
          "answer": "Balsa"
        },
        {
          "emoji": "🚤",
          "prompt": "Qual é um transporte aquático rápido?",
          "choices": [
            "Lancha",
            "Patinete",
            "Trator",
            "Bonde"
          ],
          "answer": "Lancha"
        },
        {
          "emoji": "⛵",
          "prompt": "Qual transporte usa vela para navegar?",
          "choices": [
            "Veleiro",
            "Carro",
            "Avião",
            "Trem"
          ],
          "answer": "Veleiro"
        }
      ]
    },
    {
      "id": "geo-aereos",
      "title": "Transportes aéreos",
      "icon": "✈️",
      "type": "choice",
      "items": [
        {
          "emoji": "✈️",
          "prompt": "Qual transporte voa pelo céu?",
          "choices": [
            "Avião",
            "Navio",
            "Trem",
            "Ônibus"
          ],
          "answer": "Avião"
        },
        {
          "emoji": "🚁",
          "prompt": "Qual transporte aéreo possui hélices?",
          "choices": [
            "Helicóptero",
            "Carro",
            "Balsa",
            "Metrô"
          ],
          "answer": "Helicóptero"
        },
        {
          "emoji": "🎈",
          "prompt": "Qual transporte pode voar usando ar quente?",
          "choices": [
            "Balão",
            "Canoa",
            "Trem",
            "Bicicleta"
          ],
          "answer": "Balão"
        },
        {
          "emoji": "✈️",
          "prompt": "Onde o avião pousa e decola?",
          "choices": [
            "Aeroporto",
            "Porto",
            "Estação",
            "Garagem"
          ],
          "answer": "Aeroporto"
        },
        {
          "emoji": "🚁",
          "prompt": "Qual destes pode pousar em um heliporto?",
          "choices": [
            "Helicóptero",
            "Navio",
            "Ônibus",
            "Trem"
          ],
          "answer": "Helicóptero"
        }
      ]
    },
    {
      "id": "geo-dia-noite",
      "title": "Dia ou noite?",
      "icon": "🌞",
      "type": "choice",
      "items": [
        {
          "emoji": "☀️",
          "prompt": "Quando o Sol está brilhando no céu, geralmente é...",
          "choices": [
            "Dia",
            "Noite",
            "Madrugada escura",
            "Inverno"
          ],
          "answer": "Dia"
        },
        {
          "emoji": "🌙",
          "prompt": "Quando vemos a Lua e as estrelas, geralmente é...",
          "choices": [
            "Noite",
            "Dia",
            "Manhã ensolarada",
            "Verão"
          ],
          "answer": "Noite"
        },
        {
          "emoji": "🐓",
          "prompt": "O galo cantando e o Sol nascendo indicam...",
          "choices": [
            "Manhã",
            "Noite",
            "Madrugada",
            "Meia-noite"
          ],
          "answer": "Manhã"
        },
        {
          "emoji": "🛏️",
          "prompt": "A maioria das pessoas costuma dormir durante a...",
          "choices": [
            "Noite",
            "Tarde",
            "Manhã",
            "Hora do almoço"
          ],
          "answer": "Noite"
        },
        {
          "emoji": "🌇",
          "prompt": "O pôr do sol acontece no fim da...",
          "choices": [
            "Tarde",
            "Manhã",
            "Noite",
            "Madrugada"
          ],
          "answer": "Tarde"
        }
      ]
    },
    {
      "id": "geo-tempo",
      "title": "Como está o tempo?",
      "icon": "🌦️",
      "type": "memory",
      "items": [
        {
          "emoji": "🌦️",
          "prompt": "Encontre os pares que combinam.",
          "pairs": [
            {
              "key": "m0",
              "a": "☀️",
              "b": "Ensolarado"
            },
            {
              "key": "m1",
              "a": "🌧️",
              "b": "Chuvoso"
            },
            {
              "key": "m2",
              "a": "⛅",
              "b": "Parcialmente nublado"
            },
            {
              "key": "m3",
              "a": "⛈️",
              "b": "Tempestade"
            },
            {
              "key": "m4",
              "a": "💨",
              "b": "Vento"
            }
          ]
        }
      ]
    },
    {
      "id": "geo-direita",
      "title": "Direita",
      "icon": "👉",
      "type": "maze",
      "items": [
        {
          "emoji": "👉",
          "prompt": "Leve o Dixi para a direita até a árvore.",
          "grid": [
            "S..#...",
            "##.#.#.",
            "...#.#.",
            ".###.#.",
            ".....#.",
            ".#####.",
            "......G"
          ],
          "goalLabel": "Árvore"
        }
      ]
    },
    {
      "id": "geo-esquerda",
      "title": "Esquerda",
      "icon": "👈",
      "type": "maze",
      "items": [
        {
          "emoji": "👈",
          "prompt": "Leve o Dixi para a esquerda até a casa.",
          "grid": [
            "G......",
            ".#####.",
            ".....#.",
            ".###.#.",
            ".#.....",
            ".#####.",
            "......S"
          ],
          "goalLabel": "Casa"
        }
      ]
    },
    {
      "id": "geo-em-cima",
      "title": "Em cima ou embaixo?",
      "icon": "↕️",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈 | 📦",
          "prompt": "Onde está o gato em relação à caixa?",
          "choices": [
            "Em cima",
            "Embaixo"
          ],
          "answer": "Em cima"
        },
        {
          "emoji": "🪑 | ⚽",
          "prompt": "Onde está a bola em relação à cadeira?",
          "choices": [
            "Em cima",
            "Embaixo"
          ],
          "answer": "Embaixo"
        },
        {
          "emoji": "☁️ | 🏠",
          "prompt": "Onde está a nuvem em relação à casa?",
          "choices": [
            "Em cima",
            "Embaixo"
          ],
          "answer": "Em cima"
        },
        {
          "emoji": "☂️ | 👦",
          "prompt": "Onde está o menino em relação ao guarda-chuva?",
          "choices": [
            "Em cima",
            "Embaixo"
          ],
          "answer": "Embaixo"
        },
        {
          "emoji": "🕊️ | 🌳",
          "prompt": "Onde está o pássaro em relação à árvore?",
          "choices": [
            "Em cima",
            "Embaixo"
          ],
          "answer": "Em cima"
        }
      ]
    },
    {
      "id": "geo-perto",
      "title": "Perto ou longe?",
      "icon": "↔️",
      "type": "choice",
      "items": [
        {
          "emoji": "🏠 🏫",
          "prompt": "A escola fica ao lado da casa. Ela está perto ou longe?",
          "choices": [
            "Perto",
            "Longe"
          ],
          "answer": "Perto"
        },
        {
          "emoji": "🏠 🏔️",
          "prompt": "A montanha fica a muitas horas da casa. Ela está perto ou longe?",
          "choices": [
            "Perto",
            "Longe"
          ],
          "answer": "Longe"
        },
        {
          "emoji": "👧 🐕",
          "prompt": "O cachorro está ao lado da menina. Ele está perto ou longe?",
          "choices": [
            "Perto",
            "Longe"
          ],
          "answer": "Perto"
        },
        {
          "emoji": "🏠 🏖️",
          "prompt": "A viagem da casa até a praia demora muitas horas. A praia está perto ou longe?",
          "choices": [
            "Perto",
            "Longe"
          ],
          "answer": "Longe"
        },
        {
          "emoji": "🚗 ⛽",
          "prompt": "O carro está ao lado do posto. Ele está perto ou longe?",
          "choices": [
            "Perto",
            "Longe"
          ],
          "answer": "Perto"
        }
      ]
    },
    {
      "id": "geo-dentro",
      "title": "Dentro ou fora?",
      "icon": "📥",
      "type": "choice",
      "items": [
        {
          "emoji": "🐈 📦",
          "prompt": "O gato entrou na caixa. Ele está dentro ou fora?",
          "choices": [
            "Dentro",
            "Fora"
          ],
          "answer": "Dentro"
        },
        {
          "emoji": "✏️ 👜",
          "prompt": "O lápis está sobre a mesa, ao lado da bolsa. Ele está dentro ou fora?",
          "choices": [
            "Dentro",
            "Fora"
          ],
          "answer": "Fora"
        },
        {
          "emoji": "👧 🏠",
          "prompt": "A menina entrou em casa. Ela está dentro ou fora?",
          "choices": [
            "Dentro",
            "Fora"
          ],
          "answer": "Dentro"
        },
        {
          "emoji": "⚽ 🏠",
          "prompt": "A bola ficou no quintal, do lado de fora da casa. Ela está dentro ou fora?",
          "choices": [
            "Dentro",
            "Fora"
          ],
          "answer": "Fora"
        },
        {
          "emoji": "🥚 🪹",
          "prompt": "O ovo está no ninho. Ele está dentro ou fora?",
          "choices": [
            "Dentro",
            "Fora"
          ],
          "answer": "Dentro"
        }
      ]
    },
    {
      "id": "geo-siga-caminho",
      "title": "Siga o caminho",
      "icon": "🗺️",
      "type": "maze",
      "items": [
        {
          "emoji": "🗺️",
          "prompt": "Chegue até a escola.",
          "playerEmoji": "🚗",
          "grid": [
            "S..#...",
            "##.#.#.",
            "...#.#.",
            ".###.#.",
            ".....#.",
            ".#####.",
            "......G"
          ],
          "goalLabel": "Escola"
        }
      ]
    },
    {
      "id": "geo-qual-caminho",
      "title": "Qual caminho chega?",
      "icon": "🧭",
      "type": "maze",
      "items": [
        {
          "emoji": "🧭",
          "prompt": "Escolha o caminho correto para chegar ao destino.",
          "grid": [
            "S.#....",
            "..#.##.",
            "#.#....",
            "#.####.",
            "#......",
            "######.",
            "......G"
          ],
          "goalLabel": "Destino"
        }
      ]
    },
    {
      "id": "geo-vizinhanca",
      "title": "Minha vizinhança",
      "icon": "🏘️",
      "type": "memory",
      "items": [
        {
          "emoji": "🏘️",
          "prompt": "Encontre os pares que combinam.",
          "pairs": [
            {
              "key": "m0",
              "a": "🏠 🏫",
              "b": "Escola"
            },
            {
              "key": "m1",
              "a": "🏠 🛒",
              "b": "Mercado"
            },
            {
              "key": "m2",
              "a": "🏠 🌳",
              "b": "Praça"
            },
            {
              "key": "m3",
              "a": "🏠 🥖",
              "b": "Padaria"
            },
            {
              "key": "m4",
              "a": "🏠 💊",
              "b": "Farmácia"
            }
          ]
        }
      ]
    },
    {
      "id": "geo-campo-cidade",
      "title": "Campo ou cidade?",
      "icon": "🌾",
      "type": "choice",
      "items": [
        {
          "emoji": "🏙️ 🚗",
          "prompt": "Há muitos prédios, ruas e carros. Essa paisagem é do campo ou da cidade?",
          "choices": [
            "Campo",
            "Cidade"
          ],
          "answer": "Cidade"
        },
        {
          "emoji": "🚜 🌾",
          "prompt": "Há tratores e grandes plantações. Essa paisagem é do campo ou da cidade?",
          "choices": [
            "Campo",
            "Cidade"
          ],
          "answer": "Campo"
        },
        {
          "emoji": "🏢 🛍️",
          "prompt": "Há muitos prédios e lojas. Essa paisagem é do campo ou da cidade?",
          "choices": [
            "Campo",
            "Cidade"
          ],
          "answer": "Cidade"
        },
        {
          "emoji": "🐄 🌱",
          "prompt": "Há criação de gado e plantações. Essa paisagem é do campo ou da cidade?",
          "choices": [
            "Campo",
            "Cidade"
          ],
          "answer": "Campo"
        },
        {
          "emoji": "🚦 🚌",
          "prompt": "Há semáforos e muitos ônibus. Essa paisagem é do campo ou da cidade?",
          "choices": [
            "Campo",
            "Cidade"
          ],
          "answer": "Cidade"
        }
      ]
    },
    {
      "id": "geo-urbana",
      "title": "Paisagem urbana",
      "icon": "🌆",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🌆",
          "prompt": "Encontre todas as palavras escondidas.",
          "words": [
            "RUA",
            "LOJA",
            "PRÉDIO",
            "ÔNIBUS",
            "PRAÇA"
          ]
        }
      ]
    },
    {
      "id": "geo-rural",
      "title": "Paisagem rural",
      "icon": "🌾",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🌾",
          "prompt": "Encontre todas as palavras escondidas.",
          "words": [
            "VACA",
            "TRATOR",
            "CAMPO",
            "MILHO",
            "FAZENDA"
          ]
        }
      ]
    },
    {
      "id": "geo-naturais",
      "title": "Elementos naturais",
      "icon": "🌳",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🌳",
          "prompt": "Leve cada elemento para NATURAL.",
          "cards": [
            {
              "id": "c0",
              "label": "🌳 Qual destes é um elemento natural?",
              "target": "Árvore"
            },
            {
              "id": "c1",
              "label": "🏞️ Qual destes é formado pela natureza?",
              "target": "Rio"
            },
            {
              "id": "c2",
              "label": "⛰️ Qual destes é um elemento natural da paisagem?",
              "target": "Montanha"
            },
            {
              "id": "c3",
              "label": "🌊 Qual destes é natural?",
              "target": "Mar"
            },
            {
              "id": "c4",
              "label": "☁️ Qual destes aparece naturalmente no céu?",
              "target": "Nuvem"
            }
          ],
          "targets": [
            "Árvore",
            "Rio",
            "Montanha",
            "Mar",
            "Nuvem"
          ]
        }
      ]
    },
    {
      "id": "geo-construidos",
      "title": "Elementos construídos",
      "icon": "🏗️",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🏗️",
          "prompt": "Leve cada elemento para CONSTRUÍDO.",
          "cards": [
            {
              "id": "c0",
              "label": "🏠 Qual destes foi construído pelas pessoas?",
              "target": "Casa"
            },
            {
              "id": "c1",
              "label": "🌉 Qual destes é uma construção humana?",
              "target": "Ponte"
            },
            {
              "id": "c2",
              "label": "🛣️ Qual destes foi feito para a circulação de ve…",
              "target": "Estrada"
            },
            {
              "id": "c3",
              "label": "🏫 Qual destes foi construído pelas pessoas?",
              "target": "Escola"
            },
            {
              "id": "c4",
              "label": "🚦 Qual destes é um objeto criado para organizar…",
              "target": "Semáforo"
            }
          ],
          "targets": [
            "Casa",
            "Ponte",
            "Estrada",
            "Escola",
            "Semáforo"
          ]
        }
      ]
    },
    {
      "id": "geo-cuidar-natureza",
      "title": "Cuidados com a natureza",
      "icon": "🌱",
      "type": "matching",
      "items": [
        {
          "emoji": "🌱",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "🗑️ Qual atitude ajuda a cuidar da natureza?",
              "right": "Jogar lixo na lixeira"
            },
            {
              "key": "p1",
              "left": "🚰 O que devemos fazer ao terminar de usar a tor…",
              "right": "Fechá-la"
            },
            {
              "key": "p2",
              "left": "🌳 Qual atitude protege as árvores?",
              "right": "Não quebrar galhos"
            },
            {
              "key": "p3",
              "left": "♻️ O que significa separar materiais para recicl…",
              "right": "Ajudar a reaproveitar resíduos"
            },
            {
              "key": "p4",
              "left": "🐦 Como devemos tratar os animais?",
              "right": "Com cuidado e respeito"
            }
          ]
        }
      ]
    },
    {
      "id": "geo-lixo",
      "title": "Lixo no lugar certo",
      "icon": "🚮",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🚮",
          "prompt": "Leve cada resíduo para o destino correto.",
          "cards": [
            {
              "id": "c0",
              "label": "🍌 Onde devemos jogar uma casca de banana?",
              "target": "Lixeira"
            },
            {
              "id": "c1",
              "label": "🧃 Onde devemos colocar uma embalagem vazia?",
              "target": "Lixeira adequada"
            },
            {
              "id": "c2",
              "label": "📄 Qual material pode ser separado para reciclag…",
              "target": "Papel limpo"
            },
            {
              "id": "c3",
              "label": "🥫 Uma lata limpa pode ser colocada na coleta de…",
              "target": "Metal"
            },
            {
              "id": "c4",
              "label": "🍎 Restos de frutas são resíduos...",
              "target": "Orgânicos"
            }
          ],
          "targets": [
            "Lixeira",
            "Lixeira adequada",
            "Papel limpo",
            "Metal",
            "Orgânicos"
          ]
        }
      ]
    },
    {
      "id": "geo-mapa-bairro",
      "title": "Meu bairro no mapa",
      "icon": "🗺️",
      "type": "maze",
      "items": [
        {
          "emoji": "🗺️",
          "prompt": "Percorra o mapa do bairro e chegue à escola.",
          "grid": [
            "S..#...",
            "##.#.#.",
            "...#.#.",
            ".###.#.",
            ".....#.",
            ".#####.",
            "......G"
          ],
          "goalLabel": "Escola"
        }
      ]
    }
  ],
  "ciencias": [
    {
      "id": "ci-seres-vivos",
      "title": "Seres vivos e não vivos",
      "icon": "🌱",
      "type": "choice",
      "items": [
        {
          "emoji": "🐶",
          "prompt": "Qual destes é um ser vivo?",
          "choices": [
            "Cachorro",
            "Pedra",
            "Cadeira",
            "Lápis"
          ],
          "answer": "Cachorro"
        },
        {
          "emoji": "🌳",
          "prompt": "Qual destes cresce e precisa de água?",
          "choices": [
            "Árvore",
            "Bola",
            "Carro",
            "Mesa"
          ],
          "answer": "Árvore"
        },
        {
          "emoji": "🪨",
          "prompt": "Qual destes não é um ser vivo?",
          "choices": [
            "Pedra",
            "Borboleta",
            "Flor",
            "Gato"
          ],
          "answer": "Pedra"
        },
        {
          "emoji": "🐦",
          "prompt": "Qual destes nasce, cresce e se alimenta?",
          "choices": [
            "Pássaro",
            "Livro",
            "Copo",
            "Sapato"
          ],
          "answer": "Pássaro"
        },
        {
          "emoji": "🚲",
          "prompt": "Qual destes não respira?",
          "choices": [
            "Bicicleta",
            "Cachorro",
            "Pessoa",
            "Árvore"
          ],
          "answer": "Bicicleta"
        }
      ]
    },
    {
      "id": "ci-animais-ambiente",
      "title": "Onde vivem os animais?",
      "icon": "🦁",
      "type": "choice",
      "items": [
        {
          "emoji": "🐟",
          "prompt": "Onde o peixe vive?",
          "choices": [
            "Na água",
            "Na árvore",
            "No deserto",
            "No telhado"
          ],
          "answer": "Na água"
        },
        {
          "emoji": "🐒",
          "prompt": "Onde o macaco costuma viver?",
          "choices": [
            "Nas árvores",
            "No fundo do mar",
            "Na geladeira",
            "No asfalto"
          ],
          "answer": "Nas árvores"
        },
        {
          "emoji": "🐫",
          "prompt": "Qual ambiente combina com o camelo?",
          "choices": [
            "Deserto",
            "Oceano",
            "Polo Sul",
            "Floresta alagada"
          ],
          "answer": "Deserto"
        },
        {
          "emoji": "🐧",
          "prompt": "Qual ambiente combina com o pinguim?",
          "choices": [
            "Região gelada",
            "Deserto quente",
            "Copa das árvores",
            "Cidade"
          ],
          "answer": "Região gelada"
        },
        {
          "emoji": "🐸",
          "prompt": "Onde o sapo costuma viver?",
          "choices": [
            "Perto de água",
            "No espaço",
            "Em vulcões",
            "Dentro de carros"
          ],
          "answer": "Perto de água"
        }
      ]
    },
    {
      "id": "ci-cobertura-animais",
      "title": "Pelos, penas e escamas",
      "icon": "🪶",
      "type": "choice",
      "items": [
        {
          "emoji": "🐕",
          "prompt": "O corpo do cachorro é coberto por...",
          "choices": [
            "Pelos",
            "Penas",
            "Escamas",
            "Casca"
          ],
          "answer": "Pelos"
        },
        {
          "emoji": "🐦",
          "prompt": "O corpo do pássaro é coberto por...",
          "choices": [
            "Penas",
            "Pelos",
            "Escamas",
            "Lã"
          ],
          "answer": "Penas"
        },
        {
          "emoji": "🐟",
          "prompt": "O corpo de muitos peixes é coberto por...",
          "choices": [
            "Escamas",
            "Penas",
            "Pelos",
            "Folhas"
          ],
          "answer": "Escamas"
        },
        {
          "emoji": "🐑",
          "prompt": "A ovelha possui...",
          "choices": [
            "Lã",
            "Escamas",
            "Penas",
            "Casco de árvore"
          ],
          "answer": "Lã"
        },
        {
          "emoji": "🐍",
          "prompt": "A cobra possui...",
          "choices": [
            "Escamas",
            "Penas",
            "Pelos",
            "Lã"
          ],
          "answer": "Escamas"
        }
      ]
    },
    {
      "id": "ci-movimento-animais",
      "title": "Como os animais se movem?",
      "icon": "🐾",
      "type": "choice",
      "items": [
        {
          "emoji": "🐦",
          "prompt": "Como o pássaro se desloca principalmente?",
          "choices": [
            "Voando",
            "Nadando",
            "Rastejando",
            "Saltando na água"
          ],
          "answer": "Voando"
        },
        {
          "emoji": "🐟",
          "prompt": "Como o peixe se desloca?",
          "choices": [
            "Nadando",
            "Voando",
            "Correndo",
            "Rastejando"
          ],
          "answer": "Nadando"
        },
        {
          "emoji": "🐍",
          "prompt": "Como a cobra se desloca?",
          "choices": [
            "Rastejando",
            "Voando",
            "Pedalando",
            "Pulando corda"
          ],
          "answer": "Rastejando"
        },
        {
          "emoji": "🐎",
          "prompt": "Como o cavalo se desloca?",
          "choices": [
            "Andando e correndo",
            "Voando",
            "Nadando sempre",
            "Rastejando"
          ],
          "answer": "Andando e correndo"
        },
        {
          "emoji": "🐸",
          "prompt": "Como o sapo se move com frequência?",
          "choices": [
            "Saltando",
            "Voando",
            "Rolando",
            "Pedalando"
          ],
          "answer": "Saltando"
        }
      ]
    },
    {
      "id": "ci-alimentacao-animais",
      "title": "Alimentação dos animais",
      "icon": "🥕",
      "type": "choice",
      "items": [
        {
          "emoji": "🐄",
          "prompt": "A vaca se alimenta principalmente de...",
          "choices": [
            "Capim",
            "Carne",
            "Pedras",
            "Plástico"
          ],
          "answer": "Capim"
        },
        {
          "emoji": "🦁",
          "prompt": "O leão se alimenta principalmente de...",
          "choices": [
            "Carne",
            "Folhas",
            "Pedras",
            "Madeira"
          ],
          "answer": "Carne"
        },
        {
          "emoji": "🐼",
          "prompt": "O panda come muito...",
          "choices": [
            "Bambu",
            "Peixe frito",
            "Areia",
            "Metal"
          ],
          "answer": "Bambu"
        },
        {
          "emoji": "🐰",
          "prompt": "Qual alimento combina com o coelho?",
          "choices": [
            "Folhas e vegetais",
            "Pedras",
            "Plástico",
            "Carne"
          ],
          "answer": "Folhas e vegetais"
        },
        {
          "emoji": "🐝",
          "prompt": "A abelha coleta...",
          "choices": [
            "Néctar das flores",
            "Areia",
            "Folhas secas apenas",
            "Pedras"
          ],
          "answer": "Néctar das flores"
        }
      ]
    },
    {
      "id": "ci-filhotes",
      "title": "Animais e filhotes",
      "icon": "🐣",
      "type": "choice",
      "items": [
        {
          "emoji": "🐔",
          "prompt": "Como chamamos o filhote da galinha?",
          "choices": [
            "Pintinho",
            "Bezerro",
            "Potro",
            "Cordeiro"
          ],
          "answer": "Pintinho"
        },
        {
          "emoji": "🐄",
          "prompt": "Como chamamos o filhote da vaca?",
          "choices": [
            "Bezerro",
            "Pintinho",
            "Leitão",
            "Potro"
          ],
          "answer": "Bezerro"
        },
        {
          "emoji": "🐎",
          "prompt": "Como chamamos o filhote do cavalo?",
          "choices": [
            "Potro",
            "Cordeiro",
            "Pintinho",
            "Bezerro"
          ],
          "answer": "Potro"
        },
        {
          "emoji": "🐑",
          "prompt": "Como chamamos o filhote da ovelha?",
          "choices": [
            "Cordeiro",
            "Potro",
            "Leitão",
            "Pintinho"
          ],
          "answer": "Cordeiro"
        },
        {
          "emoji": "🐖",
          "prompt": "Como chamamos o filhote do porco?",
          "choices": [
            "Leitão",
            "Bezerro",
            "Potro",
            "Cordeiro"
          ],
          "answer": "Leitão"
        }
      ]
    },
    {
      "id": "ci-partes-planta",
      "title": "Partes da planta",
      "icon": "🌻",
      "type": "choice",
      "items": [
        {
          "emoji": "🌱",
          "prompt": "Qual parte fica geralmente debaixo da terra?",
          "choices": [
            "Raiz",
            "Flor",
            "Folha",
            "Fruto"
          ],
          "answer": "Raiz"
        },
        {
          "emoji": "🌿",
          "prompt": "Qual parte sustenta folhas e flores?",
          "choices": [
            "Caule",
            "Raiz apenas",
            "Fruto",
            "Semente"
          ],
          "answer": "Caule"
        },
        {
          "emoji": "🍃",
          "prompt": "Qual parte da planta costuma ser verde?",
          "choices": [
            "Folha",
            "Pedra",
            "Casca de ovo",
            "Nuvem"
          ],
          "answer": "Folha"
        },
        {
          "emoji": "🌸",
          "prompt": "Qual parte pode se transformar em fruto?",
          "choices": [
            "Flor",
            "Raiz",
            "Pedra",
            "Galho seco"
          ],
          "answer": "Flor"
        },
        {
          "emoji": "🍎",
          "prompt": "Onde encontramos sementes em muitas plantas?",
          "choices": [
            "No fruto",
            "Na nuvem",
            "Na pedra",
            "No vento"
          ],
          "answer": "No fruto"
        }
      ]
    },
    {
      "id": "ci-planta-precisa",
      "title": "Do que a planta precisa?",
      "icon": "💧",
      "type": "choice",
      "items": [
        {
          "emoji": "☀️",
          "prompt": "Do que muitas plantas precisam para crescer?",
          "choices": [
            "Luz do Sol",
            "Escuridão total",
            "Plástico",
            "Metal"
          ],
          "answer": "Luz do Sol"
        },
        {
          "emoji": "💧",
          "prompt": "O que devemos oferecer às plantas?",
          "choices": [
            "Água",
            "Refrigerante",
            "Óleo",
            "Tinta"
          ],
          "answer": "Água"
        },
        {
          "emoji": "🌱",
          "prompt": "Onde muitas plantas crescem?",
          "choices": [
            "No solo",
            "No vidro",
            "No plástico",
            "No metal"
          ],
          "answer": "No solo"
        },
        {
          "emoji": "🌬️",
          "prompt": "As plantas também precisam de...",
          "choices": [
            "Ar",
            "Fumaça",
            "Poeira em excesso",
            "Lixo"
          ],
          "answer": "Ar"
        },
        {
          "emoji": "🪴",
          "prompt": "O que acontece se uma planta ficar muitos dias sem água?",
          "choices": [
            "Pode murchar",
            "Vira pedra",
            "Começa a voar",
            "Fica de metal"
          ],
          "answer": "Pode murchar"
        }
      ]
    },
    {
      "id": "ci-sementes",
      "title": "Sementes e germinação",
      "icon": "🌰",
      "type": "choice",
      "items": [
        {
          "emoji": "🌱",
          "prompt": "O que pode nascer de uma semente?",
          "choices": [
            "Uma nova planta",
            "Uma pedra",
            "Um brinquedo",
            "Uma nuvem"
          ],
          "answer": "Uma nova planta"
        },
        {
          "emoji": "💧",
          "prompt": "O que ajuda a semente a germinar?",
          "choices": [
            "Água",
            "Tinta",
            "Plástico",
            "Areia seca apenas"
          ],
          "answer": "Água"
        },
        {
          "emoji": "🌞",
          "prompt": "Depois de brotar, a planta precisa de...",
          "choices": [
            "Luz",
            "Escuridão total",
            "Fumaça",
            "Lixo"
          ],
          "answer": "Luz"
        },
        {
          "emoji": "🫘",
          "prompt": "O feijão é um exemplo de...",
          "choices": [
            "Semente",
            "Pedra",
            "Flor",
            "Raiz"
          ],
          "answer": "Semente"
        },
        {
          "emoji": "🌱",
          "prompt": "Como chamamos o início do crescimento da semente?",
          "choices": [
            "Germinação",
            "Congelamento",
            "Evaporação",
            "Ferrugem"
          ],
          "answer": "Germinação"
        }
      ]
    },
    {
      "id": "ci-corpo",
      "title": "Partes do corpo",
      "icon": "🧍",
      "type": "choice",
      "items": [
        {
          "emoji": "👁️",
          "prompt": "Qual parte usamos para enxergar?",
          "choices": [
            "Olhos",
            "Ouvidos",
            "Pés",
            "Cotovelos"
          ],
          "answer": "Olhos"
        },
        {
          "emoji": "👂",
          "prompt": "Qual parte usamos para ouvir?",
          "choices": [
            "Ouvidos",
            "Olhos",
            "Mãos",
            "Joelhos"
          ],
          "answer": "Ouvidos"
        },
        {
          "emoji": "👃",
          "prompt": "Qual parte usamos para sentir cheiros?",
          "choices": [
            "Nariz",
            "Boca",
            "Pés",
            "Cabelo"
          ],
          "answer": "Nariz"
        },
        {
          "emoji": "🦵",
          "prompt": "Qual parte ajuda a andar e correr?",
          "choices": [
            "Pernas",
            "Orelhas",
            "Cílios",
            "Dentes"
          ],
          "answer": "Pernas"
        },
        {
          "emoji": "🖐️",
          "prompt": "Qual parte usamos para segurar objetos?",
          "choices": [
            "Mãos",
            "Pés",
            "Ombros",
            "Cabelos"
          ],
          "answer": "Mãos"
        }
      ]
    },
    {
      "id": "ci-cinco-sentidos",
      "title": "Os cinco sentidos",
      "icon": "👀",
      "type": "matching",
      "items": [
        {
          "emoji": "👀",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "🍋 Qual sentido percebemos ao provar limão?",
              "right": "Paladar"
            },
            {
              "key": "p1",
              "left": "🎵 Qual sentido usamos para ouvir música?",
              "right": "Audição"
            },
            {
              "key": "p2",
              "left": "🌹 Qual sentido usamos para sentir o cheiro da f…",
              "right": "Olfato"
            },
            {
              "key": "p3",
              "left": "🧸 Qual sentido usamos para perceber se algo é m…",
              "right": "Tato"
            },
            {
              "key": "p4",
              "left": "🌈 Qual sentido usamos para ver as cores?",
              "right": "Visão"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-higiene",
      "title": "Higiene do corpo",
      "icon": "🧼",
      "type": "sequence",
      "items": [
        {
          "emoji": "🧼",
          "prompt": "Organize a lavagem das mãos.",
          "steps": [
            "MOLHAR AS MÃOS",
            "USAR SABÃO",
            "ESFREGAR",
            "ENXAGUAR",
            "SECAR"
          ]
        }
      ]
    },
    {
      "id": "ci-alimentacao-saudavel",
      "title": "Alimentação saudável",
      "icon": "🍎",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🍎",
          "prompt": "Leve os alimentos para SAUDÁVEL ou CONSUMIR COM MODERAÇÃO.",
          "cards": [
            {
              "id": "c0",
              "label": "🍎 Qual é uma opção saudável?",
              "target": "Maçã"
            },
            {
              "id": "c1",
              "label": "🥦 Qual alimento é um vegetal?",
              "target": "Brócolis"
            },
            {
              "id": "c2",
              "label": "💧 Qual bebida é importante para o corpo?",
              "target": "Água"
            },
            {
              "id": "c3",
              "label": "🍽️ Uma alimentação saudável deve ser...",
              "target": "Variada"
            },
            {
              "id": "c4",
              "label": "🍌 Qual fruta pode fazer parte de um lanche saud…",
              "target": "Banana"
            }
          ],
          "targets": [
            "Maçã",
            "Brócolis",
            "Água",
            "Variada",
            "Banana"
          ]
        }
      ]
    },
    {
      "id": "ci-agua-corpo",
      "title": "A importância da água",
      "icon": "💧",
      "type": "matching",
      "items": [
        {
          "emoji": "💧",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "💦 Por que devemos beber água?",
              "right": "Para hidratar o corpo"
            },
            {
              "key": "p1",
              "left": "☀️ Em dias quentes, precisamos...",
              "right": "Beber água"
            },
            {
              "key": "p2",
              "left": "🏃 Depois de brincar e suar, é importante...",
              "right": "Beber água"
            },
            {
              "key": "p3",
              "left": "🚰 Qual água é adequada para beber?",
              "right": "Água potável"
            },
            {
              "key": "p4",
              "left": "🧴 Onde podemos levar água para beber?",
              "right": "Garrafa limpa"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-dentes",
      "title": "Cuidando dos dentes",
      "icon": "🦷",
      "type": "sequence",
      "items": [
        {
          "emoji": "🦷",
          "prompt": "Organize os cuidados com os dentes.",
          "steps": [
            "PEGAR A ESCOVA",
            "COLOCAR CREME DENTAL",
            "ESCOVAR",
            "ENXAGUAR"
          ]
        }
      ]
    },
    {
      "id": "ci-ossos-musculos",
      "title": "Ossos e músculos",
      "icon": "🦴",
      "type": "matching",
      "items": [
        {
          "emoji": "🦴",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "🦴 O que ajuda a sustentar o corpo?",
              "right": "Ossos"
            },
            {
              "key": "p1",
              "left": "💪 O que ajuda o corpo a se movimentar?",
              "right": "Músculos"
            },
            {
              "key": "p2",
              "left": "🦴 Onde encontramos ossos?",
              "right": "Dentro do corpo"
            },
            {
              "key": "p3",
              "left": "🏃 Ao correr, usamos principalmente...",
              "right": "Músculos e ossos"
            },
            {
              "key": "p4",
              "left": "🥛 Uma alimentação equilibrada ajuda a manter os…",
              "right": "Saudáveis"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-estacoes",
      "title": "Estações do ano",
      "icon": "🍂",
      "type": "sequence",
      "items": [
        {
          "emoji": "🍂",
          "prompt": "Organize as estações do ano.",
          "steps": [
            "PRIMAVERA",
            "VERÃO",
            "OUTONO",
            "INVERNO"
          ]
        }
      ]
    },
    {
      "id": "ci-clima-roupas",
      "title": "Clima e roupas",
      "icon": "🧥",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🧥",
          "prompt": "Leve cada roupa para o clima correto.",
          "cards": [
            {
              "id": "c0",
              "label": "☀️ Em um dia quente, qual roupa é mais adequada?",
              "target": "Roupa leve"
            },
            {
              "id": "c1",
              "label": "❄️ Em um dia frio, o que ajuda a aquecer?",
              "target": "Casaco"
            },
            {
              "id": "c2",
              "label": "🌧️ Em um dia chuvoso, o que podemos usar?",
              "target": "Guarda-chuva"
            },
            {
              "id": "c3",
              "label": "🧢 Em um dia de muito sol, o que pode proteger a…",
              "target": "Boné"
            },
            {
              "id": "c4",
              "label": "🥾 Em um lugar com lama, qual calçado ajuda?",
              "target": "Bota"
            }
          ],
          "targets": [
            "Roupa leve",
            "Casaco",
            "Guarda-chuva",
            "Boné",
            "Bota"
          ]
        }
      ]
    },
    {
      "id": "ci-sol-sombra",
      "title": "Sol, luz e sombra",
      "icon": "🌞",
      "type": "matching",
      "items": [
        {
          "emoji": "🌞",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "☀️ O Sol é uma fonte de...",
              "right": "Luz e calor"
            },
            {
              "key": "p1",
              "left": "🌳 A sombra aparece quando algo bloqueia a...",
              "right": "Luz"
            },
            {
              "key": "p2",
              "left": "🔦 Qual objeto produz luz?",
              "right": "Lanterna"
            },
            {
              "key": "p3",
              "left": "🌙 A Lua parece brilhar porque...",
              "right": "Reflete a luz do Sol"
            },
            {
              "key": "p4",
              "left": "🕶️ O que ajuda a proteger os olhos do Sol forte?",
              "right": "Óculos de sol adequados"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-dia-noite",
      "title": "Dia e noite",
      "icon": "🌙",
      "type": "sequence",
      "items": [
        {
          "emoji": "🌙",
          "prompt": "Organize as partes do dia.",
          "steps": [
            "MANHÃ",
            "TARDE",
            "NOITE"
          ]
        }
      ]
    },
    {
      "id": "ci-materiais",
      "title": "De que é feito?",
      "icon": "🧱",
      "type": "matching",
      "items": [
        {
          "emoji": "🧱",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "🪟 Uma janela pode ser feita de...",
              "right": "Vidro"
            },
            {
              "key": "p1",
              "left": "🥄 Uma colher pode ser feita de...",
              "right": "Metal"
            },
            {
              "key": "p2",
              "left": "📦 Uma caixa pode ser feita de...",
              "right": "Papelão"
            },
            {
              "key": "p3",
              "left": "🪑 Uma cadeira pode ser feita de...",
              "right": "Madeira"
            },
            {
              "key": "p4",
              "left": "🧴 Uma garrafa pode ser feita de...",
              "right": "Plástico"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-duro-macio",
      "title": "Duro ou macio?",
      "icon": "🧸",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🧸",
          "prompt": "Leve cada objeto para DURO ou MACIO.",
          "cards": [
            {
              "id": "c0",
              "label": "🪨 A pedra costuma ser...",
              "target": "Dura"
            },
            {
              "id": "c1",
              "label": "🧸 Um urso de pelúcia costuma ser...",
              "target": "Macio"
            },
            {
              "id": "c2",
              "label": "🛏️ Um travesseiro costuma ser...",
              "target": "Macio"
            },
            {
              "id": "c3",
              "label": "🔨 Um martelo costuma ser...",
              "target": "Duro"
            },
            {
              "id": "c4",
              "label": "🍞 O miolo do pão costuma ser...",
              "target": "Macio"
            }
          ],
          "targets": [
            "Dura",
            "Macio",
            "Duro"
          ]
        }
      ]
    },
    {
      "id": "ci-solido-liquido",
      "title": "Sólido ou líquido?",
      "icon": "🧊",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🧊",
          "prompt": "Leve cada material para SÓLIDO ou LÍQUIDO.",
          "cards": [
            {
              "id": "c0",
              "label": "💧 A água em um copo está no estado...",
              "target": "Líquido"
            },
            {
              "id": "c1",
              "label": "🧊 O gelo está no estado...",
              "target": "Sólido"
            },
            {
              "id": "c2",
              "label": "🥛 O leite é...",
              "target": "Líquido"
            },
            {
              "id": "c3",
              "label": "🪨 A pedra é...",
              "target": "Sólida"
            },
            {
              "id": "c4",
              "label": "🍯 O mel é um material...",
              "target": "Líquido espesso"
            }
          ],
          "targets": [
            "Líquido",
            "Sólido",
            "Sólida",
            "Líquido espesso"
          ]
        }
      ]
    },
    {
      "id": "ci-flutua-afunda",
      "title": "Flutua ou afunda?",
      "icon": "🛶",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "🛶",
          "prompt": "Leve cada objeto para FLUTUA ou AFUNDA.",
          "cards": [
            {
              "id": "c0",
              "label": "🪨 O que geralmente acontece com uma pedra na ág…",
              "target": "Afunda"
            },
            {
              "id": "c1",
              "label": "🛶 O que uma canoa faz na água?",
              "target": "Flutua"
            },
            {
              "id": "c2",
              "label": "🪵 Um pedaço leve de madeira geralmente...",
              "target": "Flutua"
            },
            {
              "id": "c3",
              "label": "⚓ Uma âncora geralmente...",
              "target": "Afunda"
            },
            {
              "id": "c4",
              "label": "🦆 Um pato na água geralmente...",
              "target": "Flutua"
            }
          ],
          "targets": [
            "Afunda",
            "Flutua"
          ]
        }
      ]
    },
    {
      "id": "ci-agua-estados",
      "title": "Estados da água",
      "icon": "💧",
      "type": "sequence",
      "items": [
        {
          "emoji": "💧",
          "prompt": "Organize os estados da água do mais frio para o mais quente.",
          "steps": [
            "GELO",
            "ÁGUA",
            "VAPOR"
          ]
        }
      ]
    },
    {
      "id": "ci-ciclo-agua",
      "title": "Ciclo da água",
      "icon": "🌧️",
      "type": "sequence",
      "items": [
        {
          "emoji": "🌧️",
          "prompt": "Organize o ciclo da água.",
          "steps": [
            "EVAPORAÇÃO",
            "NUVENS",
            "CHUVA",
            "RIOS"
          ]
        }
      ]
    },
    {
      "id": "ci-lixo-reciclagem",
      "title": "Reciclagem",
      "icon": "♻️",
      "type": "dragdrop",
      "items": [
        {
          "emoji": "♻️",
          "prompt": "Leve cada material para o tipo de reciclagem correto.",
          "cards": [
            {
              "id": "c0",
              "label": "📄 Qual material pode ser reciclado?",
              "target": "Papel limpo"
            },
            {
              "id": "c1",
              "label": "🥫 Uma lata é feita principalmente de...",
              "target": "Metal"
            },
            {
              "id": "c2",
              "label": "🍾 Uma garrafa de vidro deve ir para a coleta de…",
              "target": "Vidro"
            },
            {
              "id": "c3",
              "label": "🧴 Uma embalagem plástica limpa pode ser...",
              "target": "Reciclada"
            },
            {
              "id": "c4",
              "label": "♻️ Reciclar ajuda a...",
              "target": "Reduzir o lixo"
            }
          ],
          "targets": [
            "Papel limpo",
            "Metal",
            "Vidro",
            "Reciclada",
            "Reduzir o lixo"
          ]
        }
      ]
    },
    {
      "id": "ci-ambiente",
      "title": "Cuidando do ambiente",
      "icon": "🌎",
      "type": "matching",
      "items": [
        {
          "emoji": "🌎",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "🚮 Qual atitude cuida do ambiente?",
              "right": "Jogar lixo na lixeira"
            },
            {
              "key": "p1",
              "left": "🚰 Ao escovar os dentes, devemos...",
              "right": "Fechar a torneira"
            },
            {
              "key": "p2",
              "left": "💡 Ao sair de um cômodo vazio, devemos...",
              "right": "Apagar a luz"
            },
            {
              "key": "p3",
              "left": "🌳 Plantar árvores ajuda a...",
              "right": "Cuidar do ambiente"
            },
            {
              "key": "p4",
              "left": "🛍️ Reutilizar sacolas ajuda a...",
              "right": "Produzir menos lixo"
            }
          ]
        }
      ]
    },
    {
      "id": "ci-seguranca",
      "title": "Segurança em casa",
      "icon": "⚠️",
      "type": "maze",
      "items": [
        {
          "emoji": "⚠️",
          "prompt": "Leve o Dixi pelo caminho seguro, longe de fogo, tomadas e remédios.",
          "grid": [
            "S..#...",
            "##.#.#.",
            "...#.#.",
            ".###.#.",
            ".....#.",
            ".#####.",
            "......G"
          ],
          "goalLabel": "Lugar seguro"
        }
      ]
    },
    {
      "id": "ci-experimentos",
      "title": "Observando e investigando",
      "icon": "🔬",
      "type": "matching",
      "items": [
        {
          "emoji": "🔬",
          "prompt": "Ligue cada pista à resposta correta.",
          "pairs": [
            {
              "key": "p0",
              "left": "👀 Para fazer uma boa observação, usamos...",
              "right": "Os sentidos com cuidado"
            },
            {
              "key": "p1",
              "left": "📋 Depois de observar algo, podemos...",
              "right": "Registrar o que vimos"
            },
            {
              "key": "p2",
              "left": "❓ Uma investigação começa muitas vezes com uma.…",
              "right": "Pergunta"
            },
            {
              "key": "p3",
              "left": "🧪 Em experimentos, devemos seguir...",
              "right": "Orientações de segurança"
            },
            {
              "key": "p4",
              "left": "🔍 Qual objeto ajuda a ver detalhes pequenos?",
              "right": "Lupa"
            }
          ]
        }
      ]
    }
  ],
  "palavras": [
    {
      "id": "var-caca-animais",
      "title": "Caça-palavras: animais",
      "icon": "🐾",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🐾",
          "prompt": "Encontre as palavras de animais.",
          "words": [
            "GATO",
            "SAPO",
            "VACA",
            "PATO",
            "RATO"
          ]
        }
      ]
    },
    {
      "id": "var-caca-frutas",
      "title": "Caça-palavras: frutas",
      "icon": "🍎",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🍎",
          "prompt": "Encontre as palavras de frutas.",
          "words": [
            "UVA",
            "PERA",
            "MANGA",
            "MELAO",
            "BANANA"
          ]
        }
      ]
    },
    {
      "id": "var-caca-corpo",
      "title": "Caça-palavras: corpo",
      "icon": "🧍",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🧍",
          "prompt": "Encontre as palavras de partes do corpo.",
          "words": [
            "MAO",
            "PE",
            "BOCA",
            "NARIZ",
            "OLHO"
          ]
        }
      ]
    },
    {
      "id": "var-caca-casa",
      "title": "Caça-palavras: casa",
      "icon": "🏠",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🏠",
          "prompt": "Encontre as palavras de casa.",
          "words": [
            "SALA",
            "CASA",
            "MESA",
            "CAMA",
            "PORTA"
          ]
        }
      ]
    },
    {
      "id": "var-caca-escola",
      "title": "Caça-palavras: escola",
      "icon": "🎒",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🎒",
          "prompt": "Encontre as palavras de escola.",
          "words": [
            "LAPIS",
            "PAPEL",
            "LIVRO",
            "COLA",
            "MESA"
          ]
        }
      ]
    },
    {
      "id": "var-caca-natureza",
      "title": "Caça-palavras: natureza",
      "icon": "🌳",
      "type": "wordsearch",
      "items": [
        {
          "emoji": "🌳",
          "prompt": "Encontre as palavras de natureza.",
          "words": [
            "SOL",
            "LUA",
            "RIO",
            "FLOR",
            "ARVORE"
          ]
        }
      ]
    },
    {
      "id": "var-cruza-animais",
      "title": "Palavras cruzadas: animais",
      "icon": "🐈",
      "type": "crossword",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "GATO",
              "clue": "🐈",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "TIGRE",
              "clue": "🐅",
              "row": 0,
              "col": 0,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-cruza-frutas",
      "title": "Palavras cruzadas: frutas",
      "icon": "🍌",
      "type": "crossword",
      "items": [
        {
          "emoji": "🍌",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "BANANA",
              "clue": "🍌",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "UVA",
              "clue": "🍇",
              "row": 0,
              "col": 1,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-cruza-casa",
      "title": "Palavras cruzadas: casa",
      "icon": "🏠",
      "type": "crossword",
      "items": [
        {
          "emoji": "🏠",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "CASA",
              "clue": "🏠",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "QUARTO",
              "clue": "🛏️",
              "row": 0,
              "col": 1,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-cruza-corpo",
      "title": "Palavras cruzadas: corpo",
      "icon": "👄",
      "type": "crossword",
      "items": [
        {
          "emoji": "👄",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "BOCA",
              "clue": "👄",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "OMBRO",
              "clue": "💪",
              "row": 0,
              "col": 0,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-cruza-transporte",
      "title": "Palavras cruzadas: transportes",
      "icon": "🚂",
      "type": "crossword",
      "items": [
        {
          "emoji": "🚂",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "TREM",
              "clue": "🚂",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "CARRO",
              "clue": "🚗",
              "row": 0,
              "col": 1,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-cruza-escola",
      "title": "Palavras cruzadas: escola",
      "icon": "✏️",
      "type": "crossword",
      "items": [
        {
          "emoji": "✏️",
          "prompt": "Complete as palavras usando as pistas.",
          "entries": [
            {
              "answer": "LAPIS",
              "clue": "✏️",
              "row": 2,
              "col": 0,
              "dir": "h"
            },
            {
              "answer": "PAPEL",
              "clue": "📄",
              "row": 0,
              "col": 2,
              "dir": "v"
            }
          ]
        }
      ]
    },
    {
      "id": "var-monte-animais",
      "title": "Letras embaralhadas: animais",
      "icon": "🔀",
      "type": "unscramble",
      "items": [
        {
          "emoji": "🐈",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "GATO"
        },
        {
          "emoji": "🐸",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "SAPO"
        },
        {
          "emoji": "🐄",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "VACA"
        },
        {
          "emoji": "🦆",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "PATO"
        },
        {
          "emoji": "🐀",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "RATO"
        }
      ]
    },
    {
      "id": "var-monte-frutas",
      "title": "Letras embaralhadas: frutas",
      "icon": "🍓",
      "type": "unscramble",
      "items": [
        {
          "emoji": "🍇",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "UVA"
        },
        {
          "emoji": "🍐",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "PERA"
        },
        {
          "emoji": "🍌",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "BANANA"
        },
        {
          "emoji": "🥭",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "MANGA"
        },
        {
          "emoji": "🍈",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "MELAO"
        }
      ]
    },
    {
      "id": "var-monte-casa",
      "title": "Letras embaralhadas: casa",
      "icon": "🏡",
      "type": "unscramble",
      "items": [
        {
          "emoji": "🏠",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "CASA"
        },
        {
          "emoji": "🛏️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "CAMA"
        },
        {
          "emoji": "🚪",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "PORTA"
        },
        {
          "emoji": "🪑",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "MESA"
        },
        {
          "emoji": "🛋️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "SALA"
        }
      ]
    },
    {
      "id": "var-monte-escola",
      "title": "Letras embaralhadas: escola",
      "icon": "📚",
      "type": "unscramble",
      "items": [
        {
          "emoji": "✏️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "LAPIS"
        },
        {
          "emoji": "📖",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "LIVRO"
        },
        {
          "emoji": "📄",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "PAPEL"
        },
        {
          "emoji": "🎒",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "BOLSA"
        },
        {
          "emoji": "🧴",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "COLA"
        }
      ]
    },
    {
      "id": "var-monte-corpo",
      "title": "Letras embaralhadas: corpo",
      "icon": "👀",
      "type": "unscramble",
      "items": [
        {
          "emoji": "👁️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "OLHO"
        },
        {
          "emoji": "👄",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "BOCA"
        },
        {
          "emoji": "👃",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "NARIZ"
        },
        {
          "emoji": "🖐️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "MAO"
        },
        {
          "emoji": "🦶",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "PE"
        }
      ]
    },
    {
      "id": "var-monte-natureza",
      "title": "Letras embaralhadas: natureza",
      "icon": "🌿",
      "type": "unscramble",
      "items": [
        {
          "emoji": "☀️",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "SOL"
        },
        {
          "emoji": "🌙",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "LUA"
        },
        {
          "emoji": "🌊",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "RIO"
        },
        {
          "emoji": "🌸",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "FLOR"
        },
        {
          "emoji": "🌳",
          "prompt": "Organize as letras para formar a palavra.",
          "answer": "ARVORE"
        }
      ]
    },
    {
      "id": "var-mem-animais",
      "title": "Memória: animais",
      "icon": "🧠",
      "type": "memory",
      "items": [
        {
          "emoji": "🧠",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "gato",
              "value": "🐈"
            },
            {
              "key": "sapo",
              "value": "🐸"
            },
            {
              "key": "vaca",
              "value": "🐄"
            },
            {
              "key": "pato",
              "value": "🦆"
            },
            {
              "key": "rato",
              "value": "🐀"
            },
            {
              "key": "leao",
              "value": "🦁"
            }
          ]
        }
      ]
    },
    {
      "id": "var-mem-frutas",
      "title": "Memória: frutas",
      "icon": "🍉",
      "type": "memory",
      "items": [
        {
          "emoji": "🍉",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "maca",
              "value": "🍎"
            },
            {
              "key": "banana",
              "value": "🍌"
            },
            {
              "key": "uva",
              "value": "🍇"
            },
            {
              "key": "pera",
              "value": "🍐"
            },
            {
              "key": "melao",
              "value": "🍈"
            },
            {
              "key": "morango",
              "value": "🍓"
            }
          ]
        }
      ]
    },
    {
      "id": "var-mem-formas",
      "title": "Memória: formas",
      "icon": "🔷",
      "type": "memory",
      "items": [
        {
          "emoji": "🔷",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "circulo",
              "value": "⚪"
            },
            {
              "key": "quadrado",
              "value": "🟦"
            },
            {
              "key": "triangulo",
              "value": "🔺"
            },
            {
              "key": "losango",
              "value": "🔷"
            },
            {
              "key": "estrela",
              "value": "⭐"
            },
            {
              "key": "coracao",
              "value": "❤️"
            }
          ]
        }
      ]
    },
    {
      "id": "var-mem-numeros",
      "title": "Memória: números",
      "icon": "1️⃣",
      "type": "memory",
      "items": [
        {
          "emoji": "1️⃣",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "1",
              "value": "1️⃣"
            },
            {
              "key": "2",
              "value": "2️⃣"
            },
            {
              "key": "3",
              "value": "3️⃣"
            },
            {
              "key": "4",
              "value": "4️⃣"
            },
            {
              "key": "5",
              "value": "5️⃣"
            },
            {
              "key": "6",
              "value": "6️⃣"
            }
          ]
        }
      ]
    },
    {
      "id": "var-mem-transporte",
      "title": "Memória: transportes",
      "icon": "🚗",
      "type": "memory",
      "items": [
        {
          "emoji": "🚗",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "carro",
              "value": "🚗"
            },
            {
              "key": "onibus",
              "value": "🚌"
            },
            {
              "key": "trem",
              "value": "🚂"
            },
            {
              "key": "aviao",
              "value": "✈️"
            },
            {
              "key": "barco",
              "value": "🚢"
            },
            {
              "key": "bicicleta",
              "value": "🚲"
            }
          ]
        }
      ]
    },
    {
      "id": "var-mem-natureza",
      "title": "Memória: natureza",
      "icon": "🌎",
      "type": "memory",
      "items": [
        {
          "emoji": "🌎",
          "prompt": "Encontre todos os pares.",
          "pairs": [
            {
              "key": "sol",
              "value": "☀️"
            },
            {
              "key": "lua",
              "value": "🌙"
            },
            {
              "key": "flor",
              "value": "🌸"
            },
            {
              "key": "arvore",
              "value": "🌳"
            },
            {
              "key": "rio",
              "value": "🌊"
            },
            {
              "key": "nuvem",
              "value": "☁️"
            }
          ]
        }
      ]
    }
  ]
};

export const getExercise = (category: ExerciseCategory, id: string): Exercise | undefined =>
  exercises[category]?.find((exercise) => exercise.id === id);
