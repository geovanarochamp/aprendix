import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { WorldIsland } from "../components/WorldIsland";
import { assetUrl } from "../lib/assetUrl";
import { useGameStore } from "../store/useGameStore";

type World = {
  id: string;
  name: string;
  image: string;
  /** posição no mar (apenas lg+) */
  spot: string;
  size: string;
  delay: number;
};

// Duas fileiras orgânicas no mar, preenchendo o desktop sem sobrepor as ilhas.
const worldLayout: World[] = [
  {
    id: "portugues",
    name: "Ilha das Palavras — Português",
    image: assetUrl("words.png"),
    spot: "left-[28%] top-[46%] -translate-x-1/2",
    size: "w-60 xl:w-72",
    delay: 0,
  },
  {
    id: "logica",
    name: "Castelo dos Desafios — Lógica",
    image: assetUrl("logic.png"),
    spot: "left-[50%] top-[38%] -translate-x-1/2",
    size: "w-64 xl:w-80",
    delay: 0.5,
  },
  {
    id: "geografia",
    name: "Exploradores do Mundo — Geografia",
    image: assetUrl("geography.png"),
    spot: "left-[72%] top-[46%] -translate-x-1/2",
    size: "w-60 xl:w-72",
    delay: 1,
  },
  {
    id: "matematica",
    name: "Vale dos Números — Matemática",
    image: assetUrl("numbers.png"),
    spot: "left-[50%] top-[68%] -translate-x-1/2",
    size: "w-64 xl:w-80",
    delay: 0.8,
  },
  {
    id: "palavras",
    name: "Ateliê das Palavras — Jogos de palavras",
    image: assetUrl("art.png"),
    spot: "left-[17%] top-[63%] -translate-x-1/2",
    size: "w-52 xl:w-60",
    delay: 0.2,
  },
  {
    id: "ciencias",
    name: "Laboratório da Descoberta — Ciências",
    image: assetUrl("science.png"),
    spot: "left-[71%] top-[70%] -translate-x-1/2",
    size: "w-60 xl:w-72",
    delay: 1.3,
  },
];

const worldOrder = [
  "portugues",
  "matematica",
  "logica",
  "geografia",
  "ciencias",
  "palavras",
];
const worlds = worldOrder.map(
  (id) => worldLayout.find((world) => world.id === id)!,
);

type WorldsProps = {
  onBack: () => void;
  onSwitchProfile: () => void;
  onSelect?: (worldId: string) => void;
};

const slide = {
  enter: (dir: number) => ({ x: dir > 0 ? 240 : -240, opacity: 0, scale: 0.9 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -240 : 240, opacity: 0, scale: 0.9 }),
};

export function Worlds({ onBack, onSwitchProfile, onSelect }: WorldsProps) {
  // carrossel do mobile: índice atual + direção do movimento
  const [[index, dir], setPage] = useState<[number, number]>([0, 0]);
  const activeProfile = useGameStore((state) =>
    state.profiles.find((profile) => profile.id === state.activeProfileId),
  );
  const current = worlds[index];
  const paginate = (d: number) =>
    setPage([(index + d + worlds.length) % worlds.length, d]);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-blue bg-cover bg-center bg-no-repeat font-sans text-navy"
      style={{ backgroundImage: `url('${assetUrl("background.png")}')` }}
    >
      {/* cabeçalho: voltar + título */}
      <div className="relative z-20 flex items-center gap-3 px-4 pt-4 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          aria-label="Voltar"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-navy shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <h1 className="rounded-full bg-white/85 px-5 py-2 text-xl font-black text-navy shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm sm:text-2xl">
          Escolha um mundo
        </h1>
        <button
          type="button"
          onClick={onSwitchProfile}
          aria-label="Trocar perfil"
          className="ml-auto flex h-12 items-center gap-2 rounded-full bg-white/90 p-1.5 pr-3 text-navy shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow sm:pr-4"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-2xl ring-2 ring-white"
            style={{ backgroundColor: activeProfile?.color ?? "#A06AFF" }}
            aria-hidden="true"
          >
            {activeProfile?.avatar ?? "👤"}
          </span>
          <span className="hidden max-w-28 truncate text-sm font-black sm:block">
            {activeProfile?.name ?? "Trocar perfil"}
          </span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m8 9 4-4 4 4M16 15l-4 4-4-4" />
          </svg>
        </button>
      </div>

      {/* arquipélago em telas grandes */}
      <div className="worlds-desktop absolute inset-0 z-0 hidden lg:block">
        {worlds.map((world) => (
          // wrapper comum cuida do posicionamento/centralização (transform via CSS);
          // o motion.div interno cuida das animações (que também usam transform)
          <div
            key={world.id}
            data-world-id={world.id}
            className={`world-island-slot absolute z-0 translate-y-[10px] transition-[z-index] hover:z-20 ${world.spot} ${world.size}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.05 + world.delay * 0.12, type: "spring", stiffness: 220, damping: 18 }}
            >
              <WorldIsland
                name={world.name}
                image={world.image}
                delay={world.delay}
                showLabel={world.id === "palavras"}
                onClick={() => onSelect?.(world.id)}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* carrossel em telas pequenas — uma ilha por vez */}
      <div className="worlds-mobile relative z-10 flex min-h-[calc(100dvh-5rem)] items-center justify-center px-2 pb-6 lg:hidden">
        <div className="relative flex h-[96vw] max-h-[520px] w-full max-w-md items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.div
              key={current.id}
              className="absolute w-[92%] max-w-[440px]"
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) paginate(1);
                else if (info.offset.x > 60) paginate(-1);
              }}
            >
              <WorldIsland
                name={current.name}
                image={current.image}
                delay={0}
                showLabel={current.id === "palavras"}
                onClick={() => onSelect?.(current.id)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <ArrowButton dir="prev" onClick={() => paginate(-1)} className="absolute left-1 top-[62%] z-20 -translate-y-1/2" />
        <ArrowButton dir="next" onClick={() => paginate(1)} className="absolute right-1 top-[62%] z-20 -translate-y-1/2" />
      </div>
    </main>
  );
}

function ArrowButton({
  dir,
  onClick,
  className = "",
}: {
  dir: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Mundo anterior" : "Próximo mundo"}
      className={[
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/85 text-navy shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-yellow",
        className,
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}
