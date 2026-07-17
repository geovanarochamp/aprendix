import { useMemo, useState } from "react";
import type {
  CrosswordItem,
  DragDropItem,
  Exercise,
  MatchingItem,
  MazeItem,
  MemoryItem,
  SequenceItem,
  UnscrambleItem,
  WordSearchItem,
} from "../../data/exercises";
import { assetUrl } from "../../lib/assetUrl";

type ChallengeCallbacks = {
  onSolved: () => void;
  onMistake: () => void;
};

const shuffle = <T,>(values: T[]) => {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index--) {
    const random = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[random]] = [copy[random], copy[index]];
  }
  return copy;
};

const cleanWord = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

function MatchingChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: MatchingItem }) {
  const left = useMemo(() => shuffle(item.pairs), [item]);
  const right = useMemo(() => shuffle(item.pairs), [item]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matchedLeft, setMatchedLeft] = useState(() => new Set<string>());
  const [matchedRight, setMatchedRight] = useState(() => new Set<string>());
  const [message, setMessage] = useState("Toque em um card da esquerda e depois no par correto.");

  const pickAnswer = (rightKey: string) => {
    if (!selected) {
      setMessage("Primeiro escolha um card do lado esquerdo.");
      return;
    }
    const leftPair = item.pairs.find((pair) => pair.key === selected)!;
    const rightPair = item.pairs.find((pair) => pair.key === rightKey)!;
    if (leftPair.right !== rightPair.right) {
      onMistake();
      setSelected(null);
      setMessage("Esses dois não formam um par. Tente novamente.");
      return;
    }

    const nextLeft = new Set(matchedLeft).add(selected);
    setMatchedLeft(nextLeft);
    setMatchedRight((current) => new Set(current).add(rightKey));
    setSelected(null);
    setMessage("Par encontrado! Escolha o próximo.");
    if (nextLeft.size === item.pairs.length) onSolved();
  };

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-bold text-navy/60">{message}</p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="grid content-start gap-2">
          {left.map((pair) => (
            <button
              key={pair.key}
              type="button"
              disabled={matchedLeft.has(pair.key)}
              onClick={() => setSelected(pair.key)}
              className={`min-h-12 rounded-2xl border-4 px-2 py-2 text-sm font-black leading-tight transition sm:text-base ${
                matchedLeft.has(pair.key)
                  ? "border-green bg-green/20 opacity-55"
                  : selected === pair.key
                    ? "border-purple bg-purple/15"
                    : "border-navy/10 bg-white"
              }`}
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="grid content-start gap-2">
          {right.map((pair) => (
            <button
              key={pair.key}
              type="button"
              disabled={matchedRight.has(pair.key)}
              onClick={() => pickAnswer(pair.key)}
              className={`min-h-12 rounded-2xl border-4 px-2 py-2 text-sm font-black leading-tight transition sm:text-base ${
                matchedRight.has(pair.key)
                  ? "border-green bg-green/20 opacity-55"
                  : "border-navy/10 bg-white"
              }`}
            >
              {pair.right}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DragDropChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: DragDropItem }) {
  const cards = useMemo(() => shuffle(item.cards), [item]);
  const [selected, setSelected] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("Toque em uma ficha e depois no lugar certo.");

  const place = (target: string) => {
    const card = cards.find((entry) => entry.id === selected);
    if (!card) {
      setMessage("Escolha primeiro uma ficha acima.");
      return;
    }
    if (card.target !== target) {
      onMistake();
      setSelected(null);
      setMessage("Esse não é o lugar dessa ficha. Tente novamente.");
      return;
    }

    const next = { ...placed, [card.id]: target };
    setPlaced(next);
    setSelected(null);
    setMessage("Muito bem! Escolha a próxima ficha.");
    if (Object.keys(next).length === item.cards.length) onSolved();
  };

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-bold text-navy/60">{message}</p>
      <div className="mb-3 flex flex-wrap justify-center gap-2">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            disabled={Boolean(placed[card.id])}
            onClick={() => setSelected(card.id)}
            className={`min-h-11 rounded-xl border-4 px-3 py-2 text-sm font-black leading-tight transition ${
              placed[card.id]
                ? "border-green bg-green/20 opacity-40"
                : selected === card.id
                  ? "border-orange bg-yellow/35"
                  : "border-navy/10 bg-white"
            }`}
          >
            {card.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {item.targets.map((target) => (
          <button
            key={target}
            type="button"
            onClick={() => place(target)}
            className="min-h-14 rounded-2xl border-4 border-dashed border-blue/35 bg-blue/10 px-2 py-2 text-sm font-black leading-tight"
          >
            <span className="block text-navy">{target}</span>
            {cards.filter((card) => placed[card.id] === target).map((card) => (
              <span key={card.id} className="mt-1 block rounded-lg bg-white px-1 py-1 text-[11px] text-navy/60">
                {card.label}
              </span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

type MemoryCard = { id: string; key: string; value: string };

function MemoryChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: MemoryItem }) {
  const cards = useMemo<MemoryCard[]>(
    () =>
      shuffle(
        item.pairs.flatMap((pair) => [
          { id: `${pair.key}-a`, key: pair.key, value: pair.a ?? pair.value ?? "?" },
          { id: `${pair.key}-b`, key: pair.key, value: pair.b ?? pair.value ?? "?" },
        ]),
      ),
    [item],
  );
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState(() => new Set<string>());
  const [locked, setLocked] = useState(false);

  const flip = (card: MemoryCard) => {
    if (locked || open.includes(card.id) || matched.has(card.key)) return;
    const nextOpen = [...open, card.id];
    setOpen(nextOpen);
    if (nextOpen.length !== 2) return;

    setLocked(true);
    const first = cards.find((entry) => entry.id === nextOpen[0])!;
    if (first.key === card.key) {
      window.setTimeout(() => {
        const nextMatched = new Set(matched).add(card.key);
        setMatched(nextMatched);
        setOpen([]);
        setLocked(false);
        if (nextMatched.size === item.pairs.length) onSolved();
      }, 300);
    } else {
      onMistake();
      window.setTimeout(() => {
        setOpen([]);
        setLocked(false);
      }, 650);
    }
  };

  return (
    <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
      {cards.map((card) => {
        const visible = open.includes(card.id) || matched.has(card.key);
        return (
          <button
            key={card.id}
            type="button"
            onClick={() => flip(card)}
            className={`min-h-20 break-words rounded-2xl border-4 px-2 py-2 text-base font-black leading-tight transition sm:min-h-20 sm:text-xl ${
              matched.has(card.key)
                ? "border-green bg-green/25"
                : visible
                  ? "border-purple bg-white"
                  : "border-purple/25 bg-purple text-white"
            }`}
            aria-label={visible ? card.value : "Carta virada"}
          >
            {visible ? card.value : "?"}
          </button>
        );
      })}
    </div>
  );
}

function UnscrambleChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: UnscrambleItem }) {
  const answer = item.answer.normalize("NFC").replace(/\s/g, "").toUpperCase();
  const comparableAnswer = cleanWord(answer);
  const tiles = useMemo(() => {
    const shuffled = shuffle([...answer].map((letter, id) => ({ id, letter })));
    return shuffled.map((tile) => tile.letter).join("") === answer && answer.length > 2
      ? [...shuffled.slice(1), shuffled[0]]
      : shuffled;
  }, [answer]);
  const [chosen, setChosen] = useState<number[]>([]);
  const [message, setMessage] = useState("Toque nas letras na ordem correta.");
  const built = chosen.map((id) => tiles.find((tile) => tile.id === id)?.letter).join("");

  const check = () => {
    if (cleanWord(built) === comparableAnswer) onSolved();
    else {
      onMistake();
      setMessage("A palavra ainda não está certa. Apague e tente outra ordem.");
    }
  };

  return (
    <div className="w-full text-center">
      <p className="mb-3 text-sm font-bold text-navy/60">{message}</p>
      <div className="mb-3 flex min-h-14 flex-wrap items-center justify-center gap-1 rounded-2xl border-4 border-dashed border-navy/15 bg-white/60 p-2">
        {[...answer].map((_, index) => (
          <span key={index} className="grid h-10 w-9 place-items-center rounded-lg bg-white text-xl font-black shadow-sm">
            {built[index] ?? ""}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={chosen.includes(tile.id)}
            onClick={() => setChosen((current) => [...current, tile.id])}
            className="grid h-12 w-12 place-items-center rounded-xl border-4 border-purple/20 bg-white text-xl font-black disabled:opacity-30"
          >
            {tile.letter}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => setChosen((current) => current.slice(0, -1))} className="min-h-11 rounded-xl bg-navy/10 font-black">
          Apagar última
        </button>
        <button type="button" disabled={chosen.length !== answer.length} onClick={check} className="min-h-11 rounded-xl bg-green font-black disabled:opacity-40">
          Conferir
        </button>
      </div>
    </div>
  );
}

function SequenceChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: SequenceItem }) {
  const tiles = useMemo(() => shuffle(item.steps.map((value, id) => ({ id, value }))), [item]);
  const [chosen, setChosen] = useState<number[]>([]);
  const values = chosen.map((id) => tiles.find((tile) => tile.id === id)!.value);

  const check = () => {
    if (values.every((value, index) => value === item.steps[index])) onSolved();
    else onMistake();
  };

  return (
    <div className="w-full">
      <div className="mb-3 flex min-h-16 flex-wrap items-center justify-center gap-2 rounded-2xl border-4 border-dashed border-navy/15 bg-white/60 p-2">
        {item.steps.map((_, index) => (
          <span key={index} className="min-h-10 min-w-12 rounded-xl bg-white px-3 py-2 text-center text-sm font-black shadow-sm">
            {values[index] ?? `${index + 1}`}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={chosen.includes(tile.id)}
            onClick={() => setChosen((current) => [...current, tile.id])}
            className="min-h-11 rounded-xl border-4 border-blue/20 bg-white px-3 text-sm font-black disabled:opacity-30"
          >
            {tile.value}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => setChosen((current) => current.slice(0, -1))} className="min-h-11 rounded-xl bg-navy/10 font-black">
          Apagar último
        </button>
        <button type="button" disabled={chosen.length !== item.steps.length} onClick={check} className="min-h-11 rounded-xl bg-green font-black disabled:opacity-40">
          Conferir
        </button>
      </div>
    </div>
  );
}

function CrosswordChallenge({
  item,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { item: CrosswordItem }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [message, setMessage] = useState("Complete uma palavra para cada pista.");

  const check = () => {
    const correct = item.entries.every(
      (entry, index) => cleanWord(answers[index] ?? "") === cleanWord(entry.answer),
    );
    if (correct) onSolved();
    else {
      onMistake();
      setMessage("Alguma palavra precisa de ajuste. Observe as pistas novamente.");
    }
  };

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-bold text-navy/60">{message}</p>
      <div className="grid gap-2">
        {item.entries.map((entry, index) => (
          <label key={`${entry.answer}-${index}`} className="grid grid-cols-[1fr_minmax(110px,0.9fr)] items-center gap-2 rounded-2xl bg-white p-2 shadow-sm">
            <span className="text-sm font-black leading-tight">{index + 1}. {entry.clue}</span>
            <input
              value={answers[index] ?? ""}
              onChange={(event) => setAnswers((current) => ({ ...current, [index]: event.target.value.toUpperCase() }))}
              maxLength={entry.answer.length}
              autoCapitalize="characters"
              className="min-h-11 min-w-0 rounded-xl border-4 border-navy/10 bg-cream px-2 text-center text-lg font-black uppercase outline-none focus:border-purple"
              aria-label={`Resposta da pista ${index + 1}`}
            />
          </label>
        ))}
      </div>
      <button
        type="button"
        disabled={item.entries.some((entry, index) => (answers[index]?.length ?? 0) !== entry.answer.length)}
        onClick={check}
        className="mt-3 min-h-12 w-full rounded-xl bg-green text-lg font-black disabled:opacity-40"
      >
        Conferir palavras
      </button>
    </div>
  );
}

type WordPlacement = { word: string; raw: string; cells: string[] };

function makeWordGrid(words: string[], size = 8) {
  const grid = Array.from({ length: size }, () => Array<string>(size).fill(""));
  const placements: WordPlacement[] = [];
  for (const raw of words) {
    const word = raw.normalize("NFC").replace(/\s/g, "").toUpperCase();
    let placed = false;
    for (let tries = 0; tries < 1000 && !placed; tries++) {
      const vertical = Math.random() < 0.5;
      const maxRow = vertical ? size - word.length : size - 1;
      const maxColumn = vertical ? size - 1 : size - word.length;
      if (maxRow < 0 || maxColumn < 0) continue;
      const row = Math.floor(Math.random() * (maxRow + 1));
      const column = Math.floor(Math.random() * (maxColumn + 1));
      const cells: string[] = [];
      let valid = true;
      for (let index = 0; index < word.length; index++) {
        const currentRow = row + (vertical ? index : 0);
        const currentColumn = column + (vertical ? 0 : index);
        // No jogo infantil, cada letra pertence a uma única palavra. Evitar
        // cruzamentos elimina a necessidade pouco intuitiva de marcar a mesma
        // casa duas vezes.
        if (grid[currentRow][currentColumn]) valid = false;
        cells.push(`${currentRow}-${currentColumn}`);
      }
      if (!valid) continue;
      [...word].forEach((letter, index) => {
        grid[row + (vertical ? index : 0)][column + (vertical ? 0 : index)] = letter;
      });
      placements.push({ word, raw, cells });
      placed = true;
    }
  }
  // Uma grade menor deixa as letras maiores. Se uma distribuição aleatória
  // não acomodar todas as palavras sem cruzamentos, tenta novamente em 9×9.
  if (placements.length !== words.length && size < 9) {
    return makeWordGrid(words, 9);
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  grid.forEach((row) => row.forEach((letter, column) => {
    if (!letter) row[column] = alphabet[Math.floor(Math.random() * alphabet.length)];
  }));
  return { grid, placements };
}

function WordSearchChallenge({ item, onSolved }: ChallengeCallbacks & { item: WordSearchItem }) {
  const data = useMemo(() => makeWordGrid(item.words), [item]);
  const [path, setPath] = useState<string[]>([]);
  const [direction, setDirection] = useState<[number, number] | null>(null);
  const [found, setFound] = useState(() => new Set<string>());
  const foundCells = useMemo(
    () => new Set(data.placements.filter((entry) => found.has(entry.word)).flatMap((entry) => entry.cells)),
    [data, found],
  );

  const select = (row: number, column: number) => {
    const id = `${row}-${column}`;
    let nextPath = [...path];
    let nextDirection = direction;
    if (nextPath.length) {
      const [lastRow, lastColumn] = nextPath[nextPath.length - 1].split("-").map(Number);
      const rowStep = row - lastRow;
      const columnStep = column - lastColumn;
      const proposed: [number, number] = [Math.sign(rowStep), Math.sign(columnStep)];
      const adjacent = Math.abs(rowStep) <= 1 && Math.abs(columnStep) <= 1 && (rowStep !== 0 || columnStep !== 0);
      const aligned = nextPath.length === 1 || (direction?.[0] === proposed[0] && direction?.[1] === proposed[1]);
      if (!adjacent || !aligned) {
        nextPath = [];
        nextDirection = null;
      } else if (nextPath.length === 1) nextDirection = proposed;
    }
    nextPath.push(id);
    const letters = nextPath.map((cell) => {
      const [currentRow, currentColumn] = cell.split("-").map(Number);
      return data.grid[currentRow][currentColumn];
    }).join("");
    const match = data.placements.find((entry) => entry.word === letters && !found.has(entry.word));
    if (match) {
      const nextFound = new Set(found).add(match.word);
      setFound(nextFound);
      setPath([]);
      setDirection(null);
      if (nextFound.size === data.placements.length) onSolved();
    } else {
      setPath(nextPath);
      setDirection(nextDirection);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap justify-center gap-2">
        {data.placements.map((entry) => (
          <span key={entry.word} className={`rounded-full px-3 py-1 text-xs font-black ${found.has(entry.word) ? "bg-green/25 line-through" : "bg-white"}`}>
            {entry.raw}
          </span>
        ))}
      </div>
      <div
        className="mx-auto grid w-fit gap-px rounded-2xl bg-white p-0.5 shadow-sm"
        style={{ gridTemplateColumns: `repeat(${data.grid.length}, minmax(0, 1fr))` }}
      >
        {data.grid.flatMap((row, rowIndex) => row.map((letter, columnIndex) => {
          const id = `${rowIndex}-${columnIndex}`;
          return (
            <button
              key={id}
              type="button"
              onClick={() => select(rowIndex, columnIndex)}
              className={`grid place-items-center rounded-md text-lg font-black ${
                data.grid.length > 8
                  ? "h-[clamp(30px,9.5vw,40px)] w-[clamp(30px,9.5vw,40px)]"
                  : "h-[clamp(34px,10.5vw,44px)] w-[clamp(34px,10.5vw,44px)]"
              } ${
                path.includes(id) ? "bg-yellow" : foundCells.has(id) ? "bg-green" : "bg-navy/5"
              }`}
            >
              {letter}
            </button>
          );
        }))}
      </div>
      <button type="button" onClick={() => { setPath([]); setDirection(null); }} className="mt-3 min-h-10 w-full rounded-xl bg-navy/10 text-sm font-black">
        Limpar seleção
      </button>
    </div>
  );
}

function MazeChallenge({ item, onSolved }: ChallengeCallbacks & { item: MazeItem }) {
  const start = useMemo(() => {
    let value = { row: 0, column: 0 };
    item.grid.forEach((line, row) => [...line].forEach((cell, column) => {
      if (cell === "S") value = { row, column };
    }));
    return value;
  }, [item]);
  const goal = useMemo(() => {
    let value = { row: 0, column: 0 };
    item.grid.forEach((line, row) => [...line].forEach((cell, column) => {
      if (cell === "G") value = { row, column };
    }));
    return value;
  }, [item]);
  const [position, setPosition] = useState(start);
  const columns = item.grid[0].length;
  const goalIcon: Record<string, string> = {
    "Árvore": "🌳",
    Casa: "🏠",
    Escola: "🏫",
    Destino: "🏁",
    "Resposta correta": "✅",
    "Lugar seguro": "🛡️",
  };

  const move = (rowStep: number, columnStep: number) => {
    const row = position.row + rowStep;
    const column = position.column + columnStep;
    if (row < 0 || column < 0 || row >= item.grid.length || column >= columns || item.grid[row][column] === "#") return;
    setPosition({ row, column });
    if (row === goal.row && column === goal.column) onSolved();
  };

  return (
    <div className="w-full text-center">
      <div className="mx-auto grid w-fit gap-0.5 rounded-2xl bg-white p-2 shadow-sm" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 2.25rem))` }}>
        {item.grid.flatMap((line, row) => [...line].map((cell, column) => {
          const isPlayer = position.row === row && position.column === column;
          const isGoal = goal.row === row && goal.column === column;
          return (
            <span key={`${row}-${column}`} className={`grid h-9 w-9 place-items-center rounded-md text-lg ${cell === "#" ? "bg-navy/70" : isGoal ? "bg-yellow/50" : "bg-green/15"}`}>
              {isPlayer ? (
                item.playerEmoji ?? (item.prompt.toLowerCase().includes("casa até") ? "🏠" : (
                  <img src={assetUrl("characters/dixi.png")} alt="Dixi" className="h-8 w-8 object-contain" />
                ))
              ) : isGoal ? (goalIcon[item.goalLabel ?? ""] ?? "⭐") : ""}
            </span>
          );
        }))}
      </div>
      <p className="mt-2 text-sm font-bold text-navy/60">Destino: {item.goalLabel ?? "estrela"}</p>
      <div className="mx-auto mt-3 grid w-40 grid-cols-3 gap-2">
        <span />
        <button type="button" onClick={() => move(-1, 0)} className="h-11 rounded-xl bg-white text-xl font-black">↑</button>
        <span />
        <button type="button" onClick={() => move(0, -1)} className="h-11 rounded-xl bg-white text-xl font-black">←</button>
        <button type="button" onClick={() => move(1, 0)} className="h-11 rounded-xl bg-white text-xl font-black">↓</button>
        <button type="button" onClick={() => move(0, 1)} className="h-11 rounded-xl bg-white text-xl font-black">→</button>
      </div>
    </div>
  );
}

export function SpecialActivity({
  exercise,
  itemIndex,
  onSolved,
  onMistake,
}: ChallengeCallbacks & { exercise: Exercise; itemIndex: number }) {
  switch (exercise.type) {
    case "matching":
      return <MatchingChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "dragdrop":
      return <DragDropChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "memory":
      return <MemoryChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "unscramble":
      return <UnscrambleChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "sequence":
      return <SequenceChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "crossword":
      return <CrosswordChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "wordsearch":
      return <WordSearchChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    case "maze":
      return <MazeChallenge item={exercise.items[itemIndex]} onSolved={onSolved} onMistake={onMistake} />;
    default:
      return null;
  }
}
