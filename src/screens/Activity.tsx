import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Dixi } from "../components/Dixi";
import { SpecialActivity } from "../components/activities/SpecialActivity";
import { getExercise } from "../data/exercises";
import { getWorld, lessonsForWorld, worldCategory, type WorldColor } from "../data/worlds";
import { playSound } from "../lib/sounds";
import { useGameStore } from "../store/useGameStore";

type ActivityProps = {
  worldId: string;
  lessonId: string;
  onBack: () => void;
  onOpenLesson: (worldId: string, lessonId: string) => void;
};

const accent: Record<WorldColor, { sel: string; solid: string }> = {
  green: { sel: "border-green bg-green/15 text-navy", solid: "bg-green text-navy shadow-[0_6px_0_#3E9F42]" },
  blue: { sel: "border-blue bg-blue/15 text-navy", solid: "bg-blue text-navy shadow-[0_6px_0_#2E76B8]" },
  purple: { sel: "border-purple bg-purple/15 text-navy", solid: "bg-purple text-white shadow-[0_6px_0_#7346C4]" },
  orange: { sel: "border-orange bg-orange/15 text-navy", solid: "bg-orange text-navy shadow-[0_6px_0_#D3771B]" },
  pink: { sel: "border-pink bg-pink/15 text-navy", solid: "bg-pink text-white shadow-[0_6px_0_#C94A83]" },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Activity({ worldId, lessonId, onBack, onOpenLesson }: ActivityProps) {
  const world = getWorld(worldId);
  const category = worldCategory[worldId];
  const exercise = category ? getExercise(category, lessonId) : undefined;
  const completeLesson = useGameStore((s) => s.completeLesson);
  const sound = useGameStore((s) => s.sound);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | number | null>(null);
  const [checked, setChecked] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);

  // 3 estrelas sem erros; 2 com poucos; 1 concluindo mesmo com vários
  const ratingFor = (wrongs: number) => (wrongs === 0 ? 3 : wrongs <= 2 ? 2 : 1);

  const color = world?.color ?? "green";
  const item = exercise?.items[index];

  // embaralha as opções uma vez por pergunta
  const choices = useMemo(
    () => (exercise?.type === "choice" && item ? shuffle((item as { choices: string[] }).choices) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise, index],
  );

  if (!exercise || !item) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 font-sans text-navy">
        <p className="text-xl font-bold">Exercício não encontrado.</p>
        <button type="button" onClick={onBack} className="rounded-2xl bg-green px-6 py-3 font-black text-navy shadow-[0_6px_0_#3E9F42]">
          Voltar
        </button>
      </main>
    );
  }

  const total = exercise.items.length;
  const answer = "answer" in item ? item.answer : null;
  const isStandard = exercise.type === "choice" || exercise.type === "count";

  // O campo `emoji` às vezes traz uma sequência/expressão (padrões de lógica,
  // contagem, contas de matemática) em vez de um único emoji. Nesses casos
  // mostramos os tokens em uma faixa horizontal que quebra linha, em vez de
  // espremer tudo dentro do círculo (que estourava o layout).
  const visualTokens = (item.emoji ?? "").trim().split(/\s+/).filter(Boolean);
  const isSequence = visualTokens.length > 1;

  const pick = (value: string | number) => {
    if (checked) return;
    playSound("tap", sound);
    setSelected(value);
    setWrong(false);
  };

  const onPrimary = () => {
    if (checked) {
      // avançar
      if (index < total - 1) {
        playSound("tap", sound);
        setIndex((i) => i + 1);
        setSelected(null);
        setChecked(false);
        setWrong(false);
      } else {
        playSound("complete", sound);
        const earned = ratingFor(wrongCount);
        completeLesson(exercise.id, earned);
        setEarnedStars(earned);
        setFinished(true);
      }
      return;
    }
    // conferir
    if (selected === answer) {
      playSound("correct", sound);
      setChecked(true);
      setWrong(false);
    } else {
      playSound("wrong", sound);
      setWrong(true);
      setWrongCount((c) => c + 1);
    }
  };

  // próxima lição do mundo (pra tela final)
  const lessons = lessonsForWorld(worldId);
  const pos = lessons.findIndex((l) => l.id === exercise.id);
  const next = pos >= 0 && pos < lessons.length - 1 ? lessons[pos + 1] : undefined;

  if (finished) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-cream px-6 py-10 font-sans text-navy">
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 240, damping: 16 }} className="w-48">
          <Dixi pose="celebrate" size="xl" />
        </motion.div>
        <h1 className="text-center text-4xl font-black">Muito bem! 🎉</h1>
        <p className="text-center text-lg font-bold text-navy/70">
          Você concluiu <span className="text-navy">{exercise.title}</span>
        </p>
        <div className="my-1 flex gap-2" aria-label={`${earnedStars} de 3 estrelas`}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`text-5xl ${i < earnedStars ? "" : "opacity-25 grayscale"}`}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 300, damping: 12 }}
            >
              ⭐
            </motion.span>
          ))}
        </div>

        <div className="mt-4 flex w-full max-w-xs flex-col gap-3">
          {next && (
            <button
              type="button"
              onClick={() => onOpenLesson(worldId, next.id)}
              className={["min-h-14 rounded-2xl px-6 text-lg font-black", accent[color].solid].join(" ")}
            >
              Próxima: {next.title}
            </button>
          )}
          <button
            type="button"
            onClick={onBack}
            className="min-h-14 rounded-2xl border-4 border-navy/15 bg-white px-6 text-lg font-black text-navy shadow-[0_5px_0_rgba(30,31,63,0.12)]"
          >
            Voltar às lições
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-cream px-4 pb-8 pt-4 font-sans text-navy sm:px-6">
      {/* topo: voltar + progresso */}
      <div className="flex w-full max-w-2xl items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Voltar às lições"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-[0_4px_0_rgba(30,31,63,0.15)] transition-transform active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex min-w-0 items-center justify-between text-sm font-black text-navy/60">
            <span className="min-w-0 truncate pr-2">{world?.subject} · {exercise.title}</span>
            <span className="shrink-0 whitespace-nowrap">{index + 1} de {total}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-navy/10">
            <motion.div
              className="h-full rounded-full bg-green"
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* pergunta */}
      <div className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.22 }}
          >
            {isStandard && !exercise.context && isSequence ? (
              <div className="my-4 flex w-full max-w-lg flex-wrap items-center justify-center gap-2 rounded-[2.25rem] bg-gradient-to-br from-yellow to-orange/70 px-4 py-6 shadow-[inset_0_0_0_8px_rgba(255,255,255,0.6)] sm:gap-3 sm:px-6">
                {visualTokens.map((token, i) => {
                  const blank = token === "__";
                  return (
                    <span
                      key={i}
                      className={[
                        "grid h-14 min-w-[3.25rem] place-items-center rounded-2xl px-2 font-black leading-none sm:h-16 sm:min-w-[3.75rem]",
                        visualTokens.length > 6 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl",
                        blank
                          ? "border-4 border-dashed border-navy/30 bg-white/40 text-navy/50"
                          : "bg-white/85 text-navy shadow-[0_3px_0_rgba(30,31,63,0.1)]",
                      ].join(" ")}
                    >
                      {blank ? "?" : token}
                    </span>
                  );
                })}
              </div>
            ) : isStandard && !exercise.context ? (
              <div className="my-4 grid h-48 w-48 place-items-center rounded-full bg-gradient-to-br from-yellow to-orange/70 text-8xl shadow-[inset_0_0_0_8px_rgba(255,255,255,0.6)]">
                {item.emoji}
              </div>
            ) : null}

            {exercise.context ? (
              <div className="mb-4 mt-3 w-full max-w-lg rounded-3xl border-4 border-purple/15 bg-white px-5 py-4 text-left shadow-[0_5px_0_rgba(30,31,63,0.1)]">
                <p className="text-center text-sm font-black uppercase tracking-wide text-purple">📖 Leia o texto</p>
                <p className="mt-2 text-base font-bold leading-relaxed text-navy sm:text-lg">{exercise.context}</p>
              </div>
            ) : null}

            <p className={`${isStandard ? "mb-5" : "mb-3 mt-3"} text-center text-2xl font-black leading-snug`}>{item.prompt}</p>

            {"hint" in item && item.hint ? (
              <div className="mb-5 rounded-2xl border-4 border-dashed border-purple/30 bg-white px-5 py-3 text-center text-2xl font-black tracking-wide text-navy shadow-[0_4px_0_rgba(30,31,63,0.1)] sm:text-3xl">
                {checked
                  ? item.hint.replace(/_{2,}/, String(answer))
                  : item.hint}
              </div>
            ) : null}

            {/* respostas */}
            <div className="w-full max-w-lg">
              {exercise.type === "count" ? (
                <div className="grid grid-cols-5 gap-3">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const on = typeof selected === "number" && n <= selected;
                    return (
                      <button
                        key={n}
                        type="button"
                        disabled={checked}
                        onClick={() => pick(n)}
                        aria-label={`${n}`}
                        className={[
                          "aspect-square rounded-full border-4 text-xl font-black transition",
                          on ? "border-green bg-green text-navy" : "border-navy/15 bg-white text-navy/40",
                        ].join(" ")}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
              ) : exercise.type === "choice" ? (
                <div className="grid grid-cols-2 gap-3">
                  {choices.map((ch) => {
                    const isSel = selected === ch;
                    const isRight = checked && ch === answer;
                    return (
                      <button
                        key={ch}
                        type="button"
                        disabled={checked}
                        onClick={() => pick(ch)}
                        className={[
                          "min-h-16 rounded-2xl border-4 text-2xl font-black transition",
                          isRight
                            ? "border-green bg-green text-navy"
                            : isSel
                              ? accent[color].sel
                              : "border-navy/10 bg-white text-navy",
                        ].join(" ")}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <SpecialActivity
                  key={`${exercise.id}-${index}`}
                  exercise={exercise}
                  itemIndex={index}
                  onSolved={() => {
                    playSound("correct", sound);
                    setChecked(true);
                    setWrong(false);
                  }}
                  onMistake={() => {
                    playSound("wrong", sound);
                    setWrong(true);
                    setWrongCount((count) => count + 1);
                  }}
                />
              )}
            </div>

            {/* feedback */}
            <div className="mt-4 min-h-[56px] w-full max-w-lg">
              {checked ? (
                <div className="grid place-items-center rounded-2xl bg-green/15 px-4 py-3 text-center text-base font-black text-green">
                  Muito bem! 🎉{"explain" in item && item.explain ? <span className="block text-navy/70">{item.explain}</span> : null}
                </div>
              ) : wrong ? (
                <div className="grid place-items-center rounded-2xl bg-yellow/40 px-4 py-3 text-center text-base font-black text-orange">
                  Quase! Observe com calma e tente de novo 😊
                </div>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* botão conferir/próximo */}
      {(isStandard || checked) && (
        <button
          type="button"
          disabled={isStandard && selected === null}
          onClick={onPrimary}
          className={[
            "min-h-14 w-full max-w-lg rounded-2xl px-6 text-lg font-black transition",
            isStandard && selected === null ? "cursor-not-allowed bg-navy/15 text-navy/40" : accent[color].solid,
          ].join(" ")}
        >
          {checked ? (index === total - 1 ? "Ver resultado" : "Próximo") : "Conferir"}
        </button>
      )}
    </main>
  );
}
