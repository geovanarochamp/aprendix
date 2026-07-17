import { exercises, type ExerciseCategory } from "./exercises";
import { assetUrl } from "../lib/assetUrl";

export type WorldColor = "green" | "blue" | "purple" | "orange" | "pink";

export type World = {
  id: string;
  /** nome fantasia da ilha (ex.: "Ilha das Palavras") */
  title: string;
  /** matéria (ex.: "Português") */
  subject: string;
  image: string;
  color: WorldColor;
  icon: string;
};

export const worlds: World[] = [
  { id: "portugues", title: "Ilha das Palavras", subject: "Português", image: assetUrl("words.png"), color: "purple", icon: "📖" },
  { id: "matematica", title: "Vale dos Números", subject: "Matemática", image: assetUrl("numbers.png"), color: "blue", icon: "🔢" },
  { id: "logica", title: "Castelo dos Desafios", subject: "Lógica", image: assetUrl("logic.png"), color: "purple", icon: "🧩" },
  { id: "geografia", title: "Exploradores do Mundo", subject: "Geografia", image: assetUrl("geography.png"), color: "blue", icon: "🌍" },
  { id: "ciencias", title: "Laboratório da Descoberta", subject: "Ciências", image: assetUrl("science.png"), color: "green", icon: "🔬" },
  { id: "palavras", title: "Ateliê das Palavras", subject: "Jogos de palavras", image: assetUrl("art.png"), color: "orange", icon: "🔤" },
];

/** mundo → categoria de exercícios (null = ainda sem exercícios) */
export const worldCategory: Record<string, ExerciseCategory | null> = {
  portugues: "portugues",
  matematica: "matematica",
  logica: "logica",
  geografia: "geografia",
  ciencias: "ciencias",
  palavras: "palavras",
};

/** uma lição referencia um exercício do arsenal */
export type Lesson = { id: string; title: string; icon: string };

/** lições de um mundo = TODOS os exercícios da sua categoria, na ordem */
export function lessonsForWorld(worldId: string): Lesson[] {
  const cat = worldCategory[worldId];
  if (!cat) return [];
  return exercises[cat].map((e) => ({ id: e.id, title: e.title, icon: e.icon }));
}

export const getWorld = (id: string): World | undefined =>
  worlds.find((w) => w.id === id);
