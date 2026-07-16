import { motion } from "framer-motion";
import { useState } from "react";
import { assetUrl } from "../lib/assetUrl";

const oceanSources = [assetUrl("background/mar.png"), assetUrl("ocean.png")];
const islandSources = [
  assetUrl("ilhas/vila-das-palavras.png"),
  assetUrl("ilhas/palavras.png"),
  assetUrl("words.png"),
];

function useImageFallback(sources: string[]) {
  const [index, setIndex] = useState(0);
  const [missing, setMissing] = useState(false);

  return {
    src: sources[index],
    missing,
    onError: () => {
      if (index < sources.length - 1) {
        setIndex((current) => current + 1);
        return;
      }

      setMissing(true);
    },
  };
}

export function FloatingIslandScene() {
  const ocean = useImageFallback(oceanSources);
  const island = useImageFallback(islandSources);

  return (
    <section className="relative isolate min-h-[360px] overflow-hidden rounded-[28px] border-4 border-white bg-blue shadow-[0_10px_0_rgba(30,31,63,0.18)]">
      {ocean.missing ? (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#4EA8FF,#A06AFF)]" />
      ) : (
        <motion.img
          src={ocean.src}
          alt="Mar do arquipélago Aprendix"
          className="absolute inset-[-4%] h-[108%] w-[108%] object-cover"
          animate={{
            scale: [1, 1.025, 1],
            x: ["-1%", "1%", "-1%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          onError={ocean.onError}
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.24),transparent_34%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 w-[min(52vw,290px)] -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {island.missing ? (
          <div className="aspect-[4/3] rounded-[42%] border-4 border-white bg-pink shadow-[0_10px_0_rgba(30,31,63,0.18)]">
            {/* TODO: remover placeholder quando a ilha final estiver em /public/ilhas. */}
          </div>
        ) : (
          <img
            src={island.src}
            alt="Vila das Palavras"
            draggable={false}
            className="w-full object-contain drop-shadow-[0_14px_0_rgba(30,31,63,0.14)]"
            onError={island.onError}
          />
        )}
        <div className="mx-auto -mt-3 w-fit rounded-2xl bg-cream px-5 py-2 text-center text-lg font-bold text-navy shadow-[0_5px_0_rgba(30,31,63,0.16)]">
          Vila das Palavras
        </div>
      </motion.div>
    </section>
  );
}
