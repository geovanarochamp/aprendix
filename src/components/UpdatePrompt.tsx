import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const UPDATE_INTERVAL = 60 * 60 * 1000;

export function UpdatePrompt() {
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration>();
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW: (_swUrl, currentRegistration) => {
      setRegistration(currentRegistration);
    },
  });

  useEffect(() => {
    if (!registration) return;

    const checkForUpdate = () => {
      if (document.visibilityState === "visible") {
        void registration.update();
      }
    };
    const interval = window.setInterval(checkForUpdate, UPDATE_INTERVAL);
    window.addEventListener("focus", checkForUpdate);
    document.addEventListener("visibilitychange", checkForUpdate);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", checkForUpdate);
      document.removeEventListener("visibilitychange", checkForUpdate);
    };
  }, [registration]);

  return (
    <AnimatePresence>
      {needRefresh ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/45 p-4 backdrop-blur-[2px] sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="update-title"
        >
          <motion.div
            className="w-full max-w-sm rounded-[2rem] bg-cream p-5 text-center text-navy shadow-[0_10px_0_rgba(30,31,63,0.22)] sm:p-6"
            initial={{ y: 36, scale: 0.94 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div
              className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-yellow text-3xl shadow-[0_5px_0_#D99A20]"
              aria-hidden="true"
            >
              ✨
            </div>
            <h2 id="update-title" className="text-2xl font-black">
              Nova versão disponível!
            </h2>
            <p className="mt-2 font-bold text-navy/65">
              Atualize para receber as novidades do Aprendix.
            </p>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => void updateServiceWorker(true)}
                className="min-h-14 rounded-2xl bg-green px-5 text-lg font-black text-navy shadow-[0_5px_0_#3E9F42] transition-transform active:translate-y-[5px] active:shadow-none"
              >
                Atualizar agora
              </button>
              <button
                type="button"
                onClick={() => setNeedRefresh(false)}
                className="min-h-12 rounded-2xl border-4 border-navy/10 bg-white px-5 font-black text-navy/65"
              >
                Agora não
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
