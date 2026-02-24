"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/governed-ambient.mp3";
const TARGET_VOLUME = 0.15;
const FADE_DURATION = 500;
const FADE_STEPS = 20;

export default function SoundToggle() {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "none";
    audio.addEventListener("error", () => setHasError(true));
    audioRef.current = audio;

    return () => {
      if (fadeRef.current) clearInterval(fadeRef.current);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, []);

  const fadeVolume = useCallback(
    (from: number, to: number, onComplete?: () => void) => {
      if (fadeRef.current) clearInterval(fadeRef.current);
      const audio = audioRef.current;
      if (!audio) return;

      const step = (to - from) / FADE_STEPS;
      const interval = FADE_DURATION / FADE_STEPS;
      let current = from;

      fadeRef.current = setInterval(() => {
        current += step;
        const done = step > 0 ? current >= to : current <= to;
        audio.volume = Math.max(0, Math.min(1, done ? to : current));

        if (done) {
          if (fadeRef.current) clearInterval(fadeRef.current);
          fadeRef.current = null;
          onComplete?.();
        }
      }, interval);
    },
    []
  );

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (playing) {
      fadeVolume(audio.volume, 0, () => {
        audio.pause();
      });
      setPlaying(false);
    } else {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          fadeVolume(0, TARGET_VOLUME);
          setPlaying(true);
        })
        .catch(() => {
          setHasError(true);
        });
    }
  }, [playing, hasError, fadeVolume]);

  const tooltipText = hasError
    ? "Audio coming soon"
    : playing
      ? "Pause"
      : "Listen to GOVERNED";

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-ge-gold/20 whitespace-nowrap"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span className="text-xs text-ge-secondary">{tooltipText}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
        whileHover={{
          scale: 1.08,
          borderColor: "rgba(201,168,76,1)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={toggle}
        aria-label={tooltipText}
      >
        {playing ? (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-ge-gold" />
        ) : (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-ge-gold" />
        )}
      </motion.button>
    </div>
  );
}
