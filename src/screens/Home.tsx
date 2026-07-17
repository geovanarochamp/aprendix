import { motion } from "framer-motion";
import { Dixi } from "../components/Dixi";
import { assetUrl } from "../lib/assetUrl";
import { playSound } from "../lib/sounds";
import { useGameStore } from "../store/useGameStore";

type HomeProps = {
  onPlay: () => void;
};

export function Home({ onPlay }: HomeProps) {
  const sound = useGameStore((state) => state.sound);
  const toggleSound = useGameStore((state) => state.toggleSound);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-blue bg-cover bg-center bg-no-repeat font-sans text-navy"
      style={{ backgroundImage: `url('${assetUrl("background.png")}')` }}
    >
      <button
        type="button"
        onClick={() => {
          toggleSound();
          if (!sound) playSound("tap", true);
        }}
        aria-label={sound ? "Desativar sons" : "Ativar sons"}
        aria-pressed={sound}
        className="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-2xl shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none sm:right-6 sm:top-6"
      >
        {sound ? "🔊" : "🔇"}
      </button>
      <div className="home-content relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-10">
        <Dixi
          pose="wave"
          size="2xl"
          className="home-dixi drop-shadow-[0_12px_18px_rgba(30,31,63,0.25)]"
        />

        <h1 className="home-title mt-2 select-none text-center text-6xl font-black leading-none tracking-tight text-navy drop-shadow-[0_4px_0_rgba(255,255,255,0.75)] sm:text-8xl lg:text-9xl">
          aprendi<span className="text-green">x</span>
        </h1>

        <div className="mt-5 text-center">
          <p className="home-greeting text-3xl font-extrabold leading-tight text-navy drop-shadow-[0_2px_0_rgba(255,255,255,0.7)] sm:text-4xl">
            Olá, Explorador!
          </p>
          <p className="mt-2 text-lg font-bold text-navy/80 sm:text-xl">
            Que aventura você vai explorar hoje?
          </p>
        </div>

        {/* botão play grande */}
        <motion.button
          type="button"
          onClick={() => {
            playSound("open", sound);
            onPlay();
          }}
          aria-label="Jogar"
          className={[
            "home-play",
            "mt-4 flex h-20 w-20 items-center justify-center rounded-full",
            "bg-green text-navy shadow-[0_7px_0_#3E9F42] hover:bg-[#79DD76] sm:h-24 sm:w-24",
            "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow",
          ].join(" ")}
          whileTap={{ y: 7, boxShadow: "0 0 0 #3E9F42" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-10 w-10 sm:h-11 sm:w-11"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
      </div>
    </main>
  );
}
