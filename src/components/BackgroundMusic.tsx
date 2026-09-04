import { useRef, useState, useEffect } from "react";

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
    if (autoPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.warn("Playback blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="music-btn fixed bottom-5 right-5 z-1000 px-4 py-2.5 text-xs shadow-md cursor-pointer transition-colors"
      >
        {isPlaying ? "🔊 Pause Soundtrack" : "🔇 Play Soundtrack"}
      </button>
    </>
  );
}