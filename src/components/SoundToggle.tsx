import { playSound } from "../lib/sounds";
import { useGameStore } from "../store/useGameStore";

type SoundToggleProps = {
  className?: string;
};

export function SoundToggle({ className = "" }: SoundToggleProps) {
  const sound = useGameStore((state) => state.sound);
  const toggleSound = useGameStore((state) => state.toggleSound);

  return (
    <button
      type="button"
      onClick={() => {
        toggleSound();
        if (!sound) playSound("tap", true);
      }}
      aria-label={sound ? "Desativar sons" : "Ativar sons"}
      aria-pressed={sound}
      className={`fixed z-40 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-xl shadow-[0_4px_0_rgba(30,31,63,0.18)] backdrop-blur-sm transition-transform active:translate-y-[4px] active:shadow-none sm:h-12 sm:w-12 sm:text-2xl ${className}`}
    >
      {sound ? "🔊" : "🔇"}
    </button>
  );
}
