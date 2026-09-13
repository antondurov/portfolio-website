import { useRef, useState } from "react";

interface TrackPlayerProps {
  title: string;
  /** Direct audio file to play in-page. Leave unset until tracks are hosted. */
  audioSrc?: string;
  /** Fallback link (e.g. SoundCloud) shown while no audioSrc is wired up. */
  externalUrl?: string;
}

/**
 * Skeleton for a self-hosted track player, replacing the old SoundCloud
 * iframe embeds. Plays audioSrc directly when provided; otherwise renders a
 * disabled control with a link out. Progress bar is a placeholder -- wire it
 * up to real playback position once audioSrc lands.
 */
function TrackPlayer({ title, audioSrc, externalUrl }: TrackPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  }

  return (
    <div className="flex items-center gap-4 rounded-(--radius-sm) border border-line bg-bg p-4">
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
        {/* Placeholder progress track -- swap for real playback position later */}
        <div className="mt-2 h-1 w-full rounded-full bg-line">
          <div className="h-full w-0 rounded-full bg-accent" />
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
        <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
      )}
    </div>
  );
}

export default TrackPlayer;
