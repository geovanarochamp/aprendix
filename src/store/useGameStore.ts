import { create } from "zustand";

const STORAGE_KEY = "aprendix-data-v2";
const MAX_PROFILES = 3;
const REMOVED_LESSON_IDS = new Set([
  "mt-numero",
  "mt-dezenas",
  "geo-embaixo",
  "geo-longe",
  "geo-fora",
]);

export type PlayerProfile = {
  id: string;
  name: string;
  avatar: string;
  color: string;
  createdAt: string;
  lessonStars: Record<string, number>;
};

type StoredData = {
  version: 2;
  activeProfileId: string | null;
  profiles: PlayerProfile[];
  settings: { sound: boolean };
};

type ProfileInput = Pick<PlayerProfile, "name" | "avatar" | "color">;

type GameStore = {
  sound: boolean;
  profiles: PlayerProfile[];
  activeProfileId: string | null;
  playerName: string;
  lessonStars: Record<string, number>;
  stars: number;
  selectProfile: (id: string) => void;
  addProfile: (profile: ProfileInput) => string | null;
  updateProfile: (id: string, profile: ProfileInput) => void;
  deleteProfile: (id: string) => void;
  toggleSound: () => void;
  setPlayerName: (name: string) => void;
  completeLesson: (lessonId: string, earned: number) => void;
};

const sum = (scores: Record<string, number>) =>
  Object.values(scores).reduce((total, value) => total + value, 0);

const sanitizeLessonStars = (scores: Record<string, number> = {}) =>
  Object.fromEntries(
    Object.entries(scores).filter(([id]) => !REMOVED_LESSON_IDS.has(id)),
  );

const emptyData = (): StoredData => ({
  version: 2,
  activeProfileId: null,
  profiles: [],
  settings: { sound: true },
});

function makeId() {
  return globalThis.crypto?.randomUUID?.() ?? `perfil-${Date.now()}`;
}

function readStoredData(): StoredData {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (parsed?.version === 2 && Array.isArray(parsed.profiles)) {
      return {
        version: 2,
        activeProfileId: parsed.activeProfileId ?? null,
        profiles: parsed.profiles
          .slice(0, MAX_PROFILES)
          .map((profile: PlayerProfile) => ({
            ...profile,
            lessonStars: sanitizeLessonStars(profile.lessonStars),
          })),
        settings: { sound: parsed.settings?.sound !== false },
      };
    }
  } catch {
    // Dados inválidos são ignorados; a migração abaixo ainda pode recuperá-los.
  }

  const legacyName = localStorage.getItem("aprendix-player");
  const legacyScores = localStorage.getItem("aprendix-lesson-stars");
  if (!legacyName && !legacyScores) return emptyData();

  let lessonStars: Record<string, number> = {};
  try {
    lessonStars = JSON.parse(legacyScores || "{}");
  } catch {
    lessonStars = {};
  }

  const profile: PlayerProfile = {
    id: makeId(),
    name: legacyName?.trim() || "Explorador",
    avatar: "🦊",
    color: "#A06AFF",
    createdAt: new Date().toISOString(),
    lessonStars: sanitizeLessonStars(lessonStars),
  };
  const migrated: StoredData = {
    version: 2,
    activeProfileId: profile.id,
    profiles: [profile],
    settings: { sound: true },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
  return migrated;
}

function persist(data: StoredData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const useGameStore = create<GameStore>((set) => {
  const stored = readStoredData();
  const active = stored.profiles.find(
    (profile) => profile.id === stored.activeProfileId,
  );

  return {
    sound: stored.settings.sound,
    profiles: stored.profiles,
    activeProfileId: active?.id ?? null,
    playerName: active?.name ?? "Explorador",
    lessonStars: active?.lessonStars ?? {},
    stars: sum(active?.lessonStars ?? {}),

    selectProfile: (id) =>
      set((state) => {
        const profile = state.profiles.find((item) => item.id === id);
        if (!profile) return state;
        persist({
          version: 2,
          activeProfileId: id,
          profiles: state.profiles,
          settings: { sound: state.sound },
        });
        return {
          activeProfileId: id,
          playerName: profile.name,
          lessonStars: profile.lessonStars,
          stars: sum(profile.lessonStars),
        };
      }),

    addProfile: (input) => {
      let createdId: string | null = null;
      set((state) => {
        if (state.profiles.length >= MAX_PROFILES) return state;
        const profile: PlayerProfile = {
          id: makeId(),
          name: input.name.trim().slice(0, 20),
          avatar: input.avatar,
          color: input.color,
          createdAt: new Date().toISOString(),
          lessonStars: {},
        };
        createdId = profile.id;
        const profiles = [...state.profiles, profile];
        persist({
          version: 2,
          activeProfileId: state.activeProfileId,
          profiles,
          settings: { sound: state.sound },
        });
        return { profiles };
      });
      return createdId;
    },

    updateProfile: (id, input) =>
      set((state) => {
        const profiles = state.profiles.map((profile) =>
          profile.id === id
            ? {
                ...profile,
                name: input.name.trim().slice(0, 20),
                avatar: input.avatar,
                color: input.color,
              }
            : profile,
        );
        const active = profiles.find(
          (profile) => profile.id === state.activeProfileId,
        );
        persist({
          version: 2,
          activeProfileId: state.activeProfileId,
          profiles,
          settings: { sound: state.sound },
        });
        return {
          profiles,
          playerName: active?.name ?? state.playerName,
        };
      }),

    deleteProfile: (id) =>
      set((state) => {
        const profiles = state.profiles.filter((profile) => profile.id !== id);
        const removedActive = state.activeProfileId === id;
        const activeProfileId = removedActive ? null : state.activeProfileId;
        persist({
          version: 2,
          activeProfileId,
          profiles,
          settings: { sound: state.sound },
        });
        return {
          profiles,
          activeProfileId,
          ...(removedActive
            ? {
                playerName: "Explorador",
                lessonStars: {},
                stars: 0,
              }
            : {}),
        };
      }),

    setPlayerName: (name) =>
      set((state) => {
        if (!state.activeProfileId) return state;
        const profiles = state.profiles.map((profile) =>
          profile.id === state.activeProfileId
            ? { ...profile, name: name.trim().slice(0, 20) }
            : profile,
        );
        persist({
          version: 2,
          activeProfileId: state.activeProfileId,
          profiles,
          settings: { sound: state.sound },
        });
        return { profiles, playerName: name.trim().slice(0, 20) };
      }),

    completeLesson: (lessonId, earned) =>
      set((state) => {
        if (!state.activeProfileId) return state;
        const best = Math.max(state.lessonStars[lessonId] ?? 0, earned);
        const lessonStars = { ...state.lessonStars, [lessonId]: best };
        const profiles = state.profiles.map((profile) =>
          profile.id === state.activeProfileId
            ? { ...profile, lessonStars }
            : profile,
        );
        persist({
          version: 2,
          activeProfileId: state.activeProfileId,
          profiles,
          settings: { sound: state.sound },
        });
        return { profiles, lessonStars, stars: sum(lessonStars) };
      }),

    toggleSound: () =>
      set((state) => {
        const sound = !state.sound;
        persist({
          version: 2,
          activeProfileId: state.activeProfileId,
          profiles: state.profiles,
          settings: { sound },
        });
        return { sound };
      }),
  };
});
