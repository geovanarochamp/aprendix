import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { Dixi } from "../components/Dixi";
import {
  getWorld,
  lessonsForWorld,
  type Lesson,
  type WorldColor,
} from "../data/worlds";
import { useGameStore } from "../store/useGameStore";

type LessonsProps = {
  worldId: string;
  onBack: () => void;
  onOpenLesson: (worldId: string, lessonId: string) => void;
};

type Status = "done" | "current" | "locked";

const nodeColor: Record<WorldColor, string> = {
  green: "bg-green text-navy shadow-[0_5px_0_#3E9F42]",
  blue: "bg-blue text-navy shadow-[0_5px_0_#2E76B8]",
  purple: "bg-purple text-white shadow-[0_5px_0_#7346C4]",
  orange: "bg-orange text-navy shadow-[0_5px_0_#D3771B]",
  pink: "bg-pink text-white shadow-[0_5px_0_#C94A83]",
};

// Geometria da trilha rolável (em px, dentro de um container max-w-md).
// No desktop, os seis deslocamentos acompanham um ciclo da estrada de fundo.
const MOBILE_STEP = 128;
const MOBILE_TOP_PAD = 128;
const MOBILE_BOTTOM_PAD = 130;
const MOBILE_X_OFFSETS = [0, -6, 0, 6];
const DESKTOP_STEP = 150;
const DESKTOP_TOP_PAD = 130;
const DESKTOP_BOTTOM_PAD = 160;
const DESKTOP_X_OFFSETS = [7, -1, -4, 5, 6, 1, -4, 1, 5];

function Stars({ earned }: { earned: number }) {
  return (
    <span
      className="flex gap-0.5 drop-shadow-[0_1px_1px_rgba(30,31,63,0.5)]"
      aria-label={`${earned} de 3 estrelas`}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`text-[13px] leading-none ${i < earned ? "" : "opacity-30 grayscale"}`}
        >
          ⭐
        </span>
      ))}
    </span>
  );
}

function LessonNode({
  lesson,
  index,
  color,
  status,
  earned,
  onClick,
}: {
  lesson: Lesson;
  index: number;
  color: WorldColor;
  status: Status;
  earned: number;
  onClick?: () => void;
}) {
  const locked = status === "locked";
  const mobileLeft = 50 + MOBILE_X_OFFSETS[index % MOBILE_X_OFFSETS.length];
  const desktopLeft = 50 + DESKTOP_X_OFFSETS[index % DESKTOP_X_OFFSETS.length];
  const nodePosition = {
    "--lesson-left-mobile": `${mobileLeft}%`,
    "--lesson-left-desktop": `${desktopLeft}%`,
    "--lesson-top-mobile": `${MOBILE_TOP_PAD + index * MOBILE_STEP}px`,
    "--lesson-top-desktop": `${DESKTOP_TOP_PAD + index * DESKTOP_STEP}px`,
  } as CSSProperties;

  return (
    <div
      className="lesson-node absolute w-max -translate-x-1/2 -translate-y-1/2"
      style={nodePosition}
    >
      <motion.button
        type="button"
        disabled={locked}
        onClick={onClick}
        aria-label={`Lição ${index + 1}: ${lesson.title}${locked ? " (bloqueada)" : status === "done" ? " (concluída)" : ""}`}
        className="flex flex-col items-center gap-2 focus:outline-none disabled:cursor-not-allowed"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
        whileHover={locked ? undefined : { scale: 1.12 }}
        whileTap={locked ? undefined : { scale: 0.92 }}
      >
        <span
          className={[
            "relative flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black ring-[3px] ring-white",
            locked
              ? "bg-navy/40 text-white/90 shadow-[0_5px_0_rgba(30,31,63,0.3)]"
              : nodeColor[color],
          ].join(" ")}
        >
          {locked ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm3 8H9V7a3 3 0 0 1 6 0v3z" />
            </svg>
          ) : (
            <span className="text-xl leading-none">{lesson.icon}</span>
          )}

          {/* número da lição no cantinho */}
          {!locked && (
            <span className="absolute -bottom-1 -right-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-xs font-black text-navy ring-2 ring-navy/10">
              {index + 1}
            </span>
          )}

          {status === "current" && (
            <motion.span
              className="absolute inset-0 rounded-full ring-[3px] ring-yellow"
              animate={{ scale: [1, 1.4, 1], opacity: [0.9, 0, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </span>

        {/* título curto + estrelas */}
        <span className="max-w-[128px] rounded-full bg-white/90 px-2.5 py-1 text-center text-[11px] font-black leading-tight text-navy shadow-[0_2px_0_rgba(30,31,63,0.12)]">
          {lesson.title}
        </span>
        {status === "done" && <Stars earned={earned} />}
      </motion.button>
    </div>
  );
}

export function Lessons({ worldId, onBack, onOpenLesson }: LessonsProps) {
  const world = getWorld(worldId);
  const lessons = lessonsForWorld(worldId);
  const lessonStars = useGameStore((s) => s.lessonStars);
  const color = world?.color ?? "green";

  const isDone = (id: string) => id in lessonStars;
  const statusOf = (i: number): Status => {
    if (isDone(lessons[i].id)) return "done";
    const unlocked = i === 0 || isDone(lessons[i - 1].id);
    return unlocked ? "current" : "locked";
  };

  const trackSize = {
    "--track-height-mobile": `${MOBILE_TOP_PAD + (lessons.length - 1) * MOBILE_STEP + MOBILE_BOTTOM_PAD}px`,
    "--track-height-desktop": `${DESKTOP_TOP_PAD + (lessons.length - 1) * DESKTOP_STEP + DESKTOP_BOTTOM_PAD}px`,
  } as CSSProperties;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#8ccf6f] font-sans text-navy">
      {/* cabeçalho flutuante sobre o fundo: voltar + mundo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center gap-2 px-3 pb-2 pt-3 sm:gap-3 sm:px-6 sm:pb-3 sm:pt-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Voltar aos mundos"
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-navy shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow sm:h-12 sm:w-12"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm sm:gap-2 sm:px-5 sm:py-2">
          <span className="text-xl sm:text-2xl" aria-hidden="true">
            {world?.icon}
          </span>
          <div className="leading-tight">
            <p className="text-base font-black text-navy sm:text-xl">
              {world?.title}
            </p>
            <p className="text-[10px] font-bold text-navy/60 sm:text-xs">
              {world?.subject}
            </p>
          </div>
        </div>
      </div>

      {lessons.length === 0 ? (
        <div className="relative z-10 mx-auto mt-[20vh] flex max-w-sm flex-col items-center gap-3 px-6 text-center">
          <div className="w-40">
            <Dixi pose="hint" size="lg" />
          </div>
          <div className="rounded-3xl bg-white/90 px-6 py-5 shadow-[0_8px_0_rgba(30,31,63,0.18)] backdrop-blur-sm">
            <p className="text-2xl font-black text-navy">Em breve! 🚧</p>
            <p className="mt-1 text-base font-bold text-navy/70">
              As lições de {world?.subject} estão chegando.
            </p>
          </div>
        </div>
      ) : (
        /* trilha rolável (serpentina) — fundo de grama/caminho cobre a tela toda e repete no scroll */
        <div className="trail-bg absolute inset-0 z-10 overflow-y-auto overscroll-contain">
          <div
            className="trail-bg-art trail-track-height min-h-full"
            style={trackSize}
            aria-hidden="true"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <div className="trail-bg-tile" key={i} />
            ))}
          </div>
          <div
            className="trail-track-height relative z-10 mx-auto w-full max-w-md"
            style={trackSize}
          >
            {lessons.map((lesson, i) => {
              const status = statusOf(i);
              return (
                <LessonNode
                  key={lesson.id}
                  lesson={lesson}
                  index={i}
                  color={color}
                  status={status}
                  earned={lessonStars[lesson.id] ?? 0}
                  onClick={
                    status === "locked"
                      ? undefined
                      : () => onOpenLesson(worldId, lesson.id)
                  }
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Dixi fixo no rodapé */}
      <div className="pointer-events-none absolute bottom-0 left-1 z-20 origin-bottom-left scale-[0.65] sm:scale-100">
        <Dixi pose="wave" size="md" />
      </div>
    </main>
  );
}
