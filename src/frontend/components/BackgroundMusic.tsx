import { useEffect, useRef, useState } from "react";
import { playExclusively } from "@/lib/audioManager";

interface BackgroundMusicProps {
  src: string;
  volume?: number;
  autoPlay?: boolean;
}

export default function BackgroundMusic({
  src,
  volume = 0.5,
  autoPlay = false,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (autoPlay && audio) {
      playExclusively(audio).catch(() => {
        // Autoplay blocked by the browser
      });
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      playExclusively(audio).catch((err) => console.warn("Playback blocked:", err));
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="music-btn fixed bottom-5 right-5 z-1000 px-4 py-2.5 text-xs shadow-md cursor-pointer transition-colors"
      >
        {isPlaying ? "🔊 Pause Music" : "🔇 Play Music"}
      </button>
    </>
  );
}
