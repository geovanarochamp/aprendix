import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { assetUrl } from "../lib/assetUrl";

type DixiPose = "idle" | "wave" | "celebrate" | "hint" | "thinking";

type DixiProps = {
  pose?: DixiPose;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
};

// Hoje só existe /characters/dixi.png — por isso é o primeiro caminho.
// Ao adicionar artes por pose em /public/dixi, coloque-as antes do genérico.
const poseSources: Record<DixiPose, string[]> = {
  idle: [assetUrl("characters/dixi.png"), assetUrl("dixi/dixi-parado.png")],
  wave: [assetUrl("characters/dixi.png"), assetUrl("dixi/dixi-aceno.png")],
  celebrate: [assetUrl("characters/dixi.png"), assetUrl("dixi/dixi-comemorando.png")],
  hint: [assetUrl("characters/dixi.png"), assetUrl("dixi/dixi-quase-la.png")],
  thinking: [assetUrl("characters/dixi.png"), assetUrl("dixi/dixi-pensando.png")],
};

const sizes = {
  sm: "h-24 w-24",
  md: "h-36 w-36",
  lg: "h-52 w-52",
  xl: "h-64 w-64",
  "2xl": "h-80 w-80",
};

export function Dixi({
  pose = "idle",
  size = "md",
  className = "",
}: DixiProps) {
  const sources = useMemo(() => poseSources[pose], [pose]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const src = sources[sourceIndex];

  return (
    <div
      className={[sizes[size], "relative", className].join(" ")}
      aria-label={`Dixi ${pose}`}
    >
      <AnimatePresence mode="wait">
        {showPlaceholder ? (
          <motion.div
            key={`${pose}-placeholder`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{
              opacity: { duration: 0.18 },
              scale: { duration: 0.18 },
              y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="flex h-full w-full items-center justify-center rounded-[32px] border-4 border-orange bg-yellow text-5xl shadow-[0_8px_0_#D39F18]"
          >
            {/* TODO: remover placeholder quando os PNGs finais de Dixi estiverem em /public/dixi. */}
            D
          </motion.div>
        ) : (
          <motion.img
            key={`${pose}-${src}`}
            src={src}
            alt={`Dixi em pose ${pose}`}
            draggable={false}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{
              opacity: { duration: 0.18 },
              scale: { duration: 0.18 },
              y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="h-full w-full object-contain drop-shadow-[0_8px_0_rgba(30,31,63,0.16)]"
            onError={() => {
              if (sourceIndex < sources.length - 1) {
                setSourceIndex((current) => current + 1);
                return;
              }

              setShowPlaceholder(true);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
