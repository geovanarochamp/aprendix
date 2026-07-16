import { motion } from "framer-motion";
import { useState } from "react";

type WorldIslandProps = {
  /** nome do mundo (o rótulo visual já vem embutido na imagem) */
  name: string;
  image: string;
  /** atraso do flutuar, pra ilhas não subirem todas juntas */
  delay?: number;
  className?: string;
  onClick?: () => void;
};

export function WorldIsland({
  name,
  image,
  delay = 0,
  className = "",
  onClick,
}: WorldIslandProps) {
  const [broken, setBroken] = useState(false);

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
    </motion.button>
  );
}
