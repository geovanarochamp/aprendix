export type SoundEffect = "tap" | "scroll" | "open" | "correct" | "wrong" | "complete";

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextConstructor = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  audioContext ??= new AudioContextConstructor();
  return audioContext;
}

function tone(
  context: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  options: {
    endFrequency?: number;
    type?: OscillatorType;
    volume?: number;
  } = {},
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const volume = options.volume ?? 0.08;

  oscillator.type = options.type ?? "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  if (options.endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(
      options.endFrequency,
      start + duration,
    );
  }

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function schedule(context: AudioContext, effect: SoundEffect) {
  const now = context.currentTime + 0.01;
  if (effect === "tap") {
    tone(context, 520, now, 0.07, { endFrequency: 650, volume: 0.045 });
  } else if (effect === "scroll") {
    tone(context, 360, now, 0.07, { endFrequency: 460, type: "triangle", volume: 0.04 });
    tone(context, 520, now + 0.04, 0.08, { endFrequency: 620, type: "triangle", volume: 0.035 });
  } else if (effect === "open") {
    tone(context, 330, now, 0.1, { endFrequency: 440, type: "triangle", volume: 0.06 });
    tone(context, 520, now + 0.08, 0.12, { endFrequency: 660, type: "triangle", volume: 0.05 });
  } else if (effect === "correct") {
    [523, 659, 784].forEach((frequency, index) =>
      tone(context, frequency, now + index * 0.075, 0.16, {
        type: "triangle",
        volume: 0.07,
      }),
    );
  } else if (effect === "wrong") {
    tone(context, 240, now, 0.14, { endFrequency: 185, type: "sine", volume: 0.065 });
    tone(context, 180, now + 0.12, 0.17, { endFrequency: 145, type: "sine", volume: 0.055 });
  } else {
    [523, 659, 784, 1047].forEach((frequency, index) =>
      tone(context, frequency, now + index * 0.09, 0.24, {
        type: "triangle",
        volume: 0.075,
      }),
    );
  }
}

export function playSound(effect: SoundEffect, enabled = true) {
  if (!enabled) return;
  try {
    const context = getAudioContext();
    if (!context) return;
    if (context.state === "suspended") {
      void context.resume().then(() => schedule(context, effect));
    } else {
      schedule(context, effect);
    }
  } catch {
    // O jogo continua normalmente em navegadores sem suporte a áudio.
  }
}
