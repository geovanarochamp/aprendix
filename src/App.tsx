import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home } from "./screens/Home";
import { Profiles } from "./screens/Profiles";
import { Worlds } from "./screens/Worlds";
import { Lessons } from "./screens/Lessons";
import { Activity } from "./screens/Activity";

type Route =
  | { screen: "home" }
  | { screen: "profiles" }
  | { screen: "worlds" }
  | { screen: "lessons"; worldId: string }
  | { screen: "activity"; worldId: string; lessonId: string };

function readRoute(): Route {
  const hash = window.location.hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean); // ex.: ["mundo","portugues","licao","pt-inicial"]
  if (parts[0] === "mundo" && parts[1]) {
    if (parts[2] === "licao" && parts[3]) {
      return { screen: "activity", worldId: parts[1], lessonId: parts[3] };
    }
    return { screen: "lessons", worldId: parts[1] };
  }
  if (parts[0] === "worlds") return { screen: "worlds" };
  if (parts[0] === "profiles") return { screen: "profiles" };
  return { screen: "home" };
}

function App() {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const sync = () => setRoute(readRoute());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const goHome = () => (window.location.hash = "");
  const goProfiles = () => (window.location.hash = "profiles");
  const goWorlds = () => (window.location.hash = "worlds");
  const goLessons = (worldId: string) =>
    (window.location.hash = `mundo/${worldId}`);
  const goActivity = (worldId: string, lessonId: string) =>
    (window.location.hash = `mundo/${worldId}/licao/${lessonId}`);

  const key =
    route.screen === "lessons"
      ? `lessons-${route.worldId}`
      : route.screen === "activity"
        ? `activity-${route.worldId}-${route.lessonId}`
        : route.screen;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {route.screen === "home" && <Home onPlay={goProfiles} />}
        {route.screen === "profiles" && (
          <Profiles onBack={goHome} onPlay={goWorlds} />
        )}
        {route.screen === "worlds" && (
          <Worlds
            onBack={goHome}
            onSwitchProfile={goProfiles}
            onSelect={goLessons}
          />
        )}
        {route.screen === "lessons" && (
          <Lessons worldId={route.worldId} onBack={goWorlds} onOpenLesson={goActivity} />
        )}
        {route.screen === "activity" && (
          <Activity
            worldId={route.worldId}
            lessonId={route.lessonId}
            onBack={() => goLessons(route.worldId)}
            onOpenLesson={goActivity}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
