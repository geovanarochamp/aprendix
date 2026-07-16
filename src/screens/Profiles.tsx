import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { assetUrl } from "../lib/assetUrl";
import { useGameStore, type PlayerProfile } from "../store/useGameStore";

type ProfilesProps = {
  onBack: () => void;
  onPlay: () => void;
};

const AVATARS = [
  "🦊",
  "🐼",
  "🐯",
  "🐸",
  "🦁",
  "🐰",
  "🐨",
  "🐵",
  "🦄",
  "🦋",
  "🐱",
];
const COLORS = ["#D8C2FF", "#B9DEFF", "#BDEBB9", "#FFD0A3", "#FFC1DD"];

const totalStars = (profile: PlayerProfile) =>
  Object.values(profile.lessonStars).reduce((total, stars) => total + stars, 0);

export function Profiles({ onBack, onPlay }: ProfilesProps) {
  const profiles = useGameStore((state) => state.profiles);
  const selectProfile = useGameStore((state) => state.selectProfile);
  const addProfile = useGameStore((state) => state.addProfile);
  const updateProfile = useGameStore((state) => state.updateProfile);
  const deleteProfile = useGameStore((state) => state.deleteProfile);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [color, setColor] = useState(COLORS[0]);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const openNew = () => {
    setEditingId(null);
    setName("");
    setAvatar(AVATARS[profiles.length % AVATARS.length]);
    setColor(COLORS[profiles.length % COLORS.length]);
    setConfirmDelete(false);
    setFormOpen(true);
  };

  const openEdit = (profile: PlayerProfile) => {
    setEditingId(profile.id);
    setName(profile.name);
    setAvatar(profile.avatar);
    setColor(profile.color);
    setConfirmDelete(false);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setConfirmDelete(false);
  };

  const chooseProfile = (id: string) => {
    selectProfile(id);
    onPlay();
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    if (editingId) {
      updateProfile(editingId, { name: cleanName, avatar, color });
      closeForm();
      return;
    }
    const id = addProfile({ name: cleanName, avatar, color });
    if (id) chooseProfile(id);
  };

  const removeProfile = () => {
    if (!editingId) return;
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    deleteProfile(editingId);
    closeForm();
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-blue bg-cover bg-center font-sans text-navy"
      style={{ backgroundImage: `url('${assetUrl("background.png")}')` }}
    >
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 py-4 sm:px-8 sm:py-10">
        <div className="flex w-full items-center">
          <button
            type="button"
            onClick={onBack}
            aria-label="Voltar"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl font-black shadow-[0_4px_0_rgba(30,31,63,0.18)] transition-transform active:translate-y-1 active:shadow-none sm:h-12 sm:w-12 sm:text-3xl"
          >
            ‹
          </button>
        </div>

        <div className="mt-2 text-center sm:mt-0">
          <h1 className="text-3xl font-black text-navy drop-shadow-[0_3px_0_rgba(255,255,255,0.7)] sm:text-6xl">
            Quem vai jogar?
          </h1>
          <p className="mt-1 text-base font-extrabold text-navy/75 sm:mt-2 sm:text-xl">
            Escolha seu explorador
          </p>
        </div>

        <div className="mt-5 grid w-full max-w-3xl grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-5">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                type="button"
                onClick={() => chooseProfile(profile.id)}
                className="group flex min-h-24 w-full flex-row items-center justify-start gap-3 rounded-2xl border-[3px] border-white/80 bg-white/90 px-3 py-3 pr-14 text-left shadow-[0_6px_0_rgba(30,31,63,0.18)] transition-transform hover:-translate-y-1 active:translate-y-2 active:shadow-none sm:min-h-52 sm:flex-col sm:justify-center sm:gap-0 sm:rounded-[2rem] sm:border-4 sm:px-5 sm:py-6 sm:pr-5 sm:text-center sm:shadow-[0_9px_0_rgba(30,31,63,0.18)]"
              >
                <span
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-full text-4xl ring-4 ring-white shadow-[0_4px_0_rgba(30,31,63,0.16)] transition-transform group-hover:scale-105 sm:h-24 sm:w-24 sm:text-6xl sm:shadow-[0_6px_0_rgba(30,31,63,0.16)]"
                  style={{ backgroundColor: profile.color }}
                  aria-hidden="true"
                >
                  {profile.avatar}
                </span>
                <span className="min-w-0 sm:text-center">
                  <span className="block max-w-full truncate text-lg font-black sm:mt-4 sm:text-2xl">
                    {profile.name}
                  </span>
                  <span className="mt-1 inline-flex rounded-full bg-yellow/35 px-2.5 py-1 text-xs font-bold sm:px-3 sm:text-sm">
                    ⭐ {totalStars(profile)} estrelas
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => openEdit(profile)}
                aria-label={`Editar perfil de ${profile.name}`}
                className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy/10 text-sm transition-colors hover:bg-navy/20 sm:right-3 sm:top-3 sm:h-10 sm:w-10 sm:translate-y-0 sm:text-lg"
              >
                ✏️
              </button>
            </motion.div>
          ))}

          {profiles.length < 3 && (
            <motion.button
              type="button"
              onClick={openNew}
              className="flex min-h-24 w-full flex-row items-center justify-start gap-3 rounded-2xl border-[3px] border-dashed border-white/80 bg-white/45 px-3 py-3 text-left text-navy shadow-[0_6px_0_rgba(30,31,63,0.12)] transition-colors hover:bg-white/65 sm:min-h-52 sm:flex-col sm:justify-center sm:gap-0 sm:rounded-[2rem] sm:border-4 sm:px-5 sm:py-6 sm:text-center sm:shadow-[0_7px_0_rgba(30,31,63,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/75 text-4xl font-light sm:h-24 sm:w-24 sm:text-6xl">
                +
              </span>
              <span>
                <span className="block text-lg font-black sm:mt-4 sm:text-xl">
                  Novo perfil
                </span>
                <span className="mt-1 block text-sm font-bold text-navy/60">
                  {profiles.length + 1} de 3
                </span>
              </span>
            </motion.button>
          )}
        </div>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-navy/45 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-form-title"
        >
          <motion.form
            onSubmit={submit}
            className="my-auto w-full max-w-lg rounded-[2rem] border-4 border-white bg-cream p-5 shadow-[0_12px_0_rgba(30,31,63,0.25)] sm:p-7"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center justify-between gap-3">
              <h2
                id="profile-form-title"
                className="text-2xl font-black sm:text-3xl"
              >
                {editingId ? "Editar explorador" : "Novo explorador"}
              </h2>
              <button
                type="button"
                onClick={closeForm}
                aria-label="Fechar"
                className="grid h-10 w-10 place-items-center rounded-full bg-navy/10 text-2xl font-black"
              >
                ×
              </button>
            </div>

            <label
              className="mt-5 block text-sm font-black"
              htmlFor="profile-name"
            >
              Nome da criança
            </label>
            <input
              id="profile-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={20}
              autoFocus
              placeholder="Digite o nome"
              className="mt-2 h-14 w-full rounded-2xl border-4 border-navy/10 bg-white px-4 text-xl font-black outline-none transition-colors focus:border-blue"
            />

            <p className="mt-5 text-sm font-black">Escolha um personagem</p>
            <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-7">
              {AVATARS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setAvatar(item)}
                  className={`grid aspect-square place-items-center rounded-2xl text-3xl transition-transform ${avatar === item ? "scale-105 bg-yellow ring-4 ring-orange" : "bg-white hover:scale-105"}`}
                  aria-label={`Escolher ${item}`}
                  aria-pressed={avatar === item}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="mt-5 text-sm font-black">Escolha uma cor</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {COLORS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setColor(item)}
                  className={`h-11 w-11 rounded-full border-4 border-white shadow-[0_3px_0_rgba(30,31,63,0.18)] ${color === item ? "ring-4 ring-navy" : ""}`}
                  style={{ backgroundColor: item }}
                  aria-label={`Escolher cor ${item}`}
                  aria-pressed={color === item}
                />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {editingId && (
                <button
                  type="button"
                  onClick={removeProfile}
                  className={`min-h-12 rounded-2xl px-4 font-black ${confirmDelete ? "bg-pink text-white" : "bg-pink/15 text-pink"}`}
                >
                  {confirmDelete
                    ? "Confirmar: apagar progresso"
                    : "Apagar perfil e progresso"}
                </button>
              )}
              <button
                type="submit"
                disabled={!name.trim()}
                className="ml-auto min-h-12 rounded-2xl bg-green px-6 font-black text-navy shadow-[0_5px_0_#3E9F42] active:translate-y-[5px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                {editingId ? "Salvar" : "Salvar e jogar"}
              </button>
            </div>
          </motion.form>
        </div>
      )}
    </main>
  );
}
