import { motion } from "framer-motion";
import { useState } from "react";

type WorldIslandProps = {
  /** nome do mundo; a maioria das artes já traz esse rótulo embutido */
  name: string;
  image: string;
  /** atraso do flutuar, pra ilhas não subirem todas juntas */
  delay?: number;
  className?: string;
  showLabel?: boolean;
  onClick?: () => void;
};

export function WorldIsland({
  name,
  image,
  delay = 0,
  className = "",
  showLabel = false,
  onClick,
}: WorldIslandProps) {
  const [broken, setBroken] = useState(false);
  const [title, subject] = name.split(" — ");

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Abrir ${name}`}
      className={[
        "group block w-full rounded-3xl focus:outline-none",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow",
        className,
      ].join(" ")}
      whileHover={{ scale: 1.12, transition: { type: "spring", stiffness: 300, damping: 18 } }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative block">
        {broken ? (
          <span className="text-6xl">🏝️</span>
        ) : (
          <img
            src={image}
            alt={name}
            draggable={false}
            onError={() => setBroken(true)}
            className="w-full object-contain drop-shadow-[0_14px_14px_rgba(30,31,63,0.28)]"
          />
        )}
        {showLabel && (
          <span className="absolute bottom-[3%] left-1/2 min-w-[55%] -translate-x-1/2 rounded-full bg-cream/95 px-3 py-1 text-center text-[11px] font-black leading-tight text-navy shadow-[0_3px_0_rgba(30,31,63,0.16)] sm:text-xs">
            <span className="block">🔤 {title}</span>
            <span className="block text-[9px] text-orange sm:text-[10px]">{subject}</span>
          </span>
        )}
      </span>
    </motion.button>
  );
}
