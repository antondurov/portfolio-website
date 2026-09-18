import { useEffect, useRef, useState } from "react";
import { playExclusively } from "@/lib/audioManager";

interface TrackPlayerProps {
  title: string;
  audioSrc?: string;
  externalUrl?: string;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function TrackPlayer({ title, audioSrc, externalUrl }: TrackPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setCurrentTime(0);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioSrc]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      playExclusively(audio).catch(() => {});
    } else {
      audio.pause();
    }
  }

  function handleSeek(event: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(event.target.value);
    setCurrentTime(audio.currentTime);
  }

  return (
    <div className="flex items-center gap-4 rounded-sm border border-line bg-bg p-4">
      <button
        type="button"
        onClick={togglePlay}
        disabled={!audioSrc}
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-accent disabled:cursor-not-allowed disabled:opacity-40 not-disabled:hover:bg-accent not-disabled:hover:text-bg"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{title}</p>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            disabled={!audioSrc}
            aria-label={`Seek ${title}`}
            className="h-1 w-full accent-accent disabled:cursor-not-allowed disabled:opacity-40"
          />
          {audioSrc && (
            <span className="shrink-0 font-mono text-[0.65rem] text-text-muted tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          )}
        </div>
      </div>

      {!audioSrc && externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 font-mono text-[0.65rem] tracking-widest text-text-muted uppercase hover:text-accent"
        >
          Listen ↗
        </a>
      )}

      {audioSrc && (
        <audio ref={audioRef} src={audioSrc} preload="metadata" />
      )}
    </div>
  );
}

export default TrackPlayer;
