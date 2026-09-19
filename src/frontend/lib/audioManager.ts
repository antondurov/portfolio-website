/**
 * Tracks which single <audio> element is allowed to play at a time across
 * the whole site (track players + the background soundtrack included).
 */
let activeAudio: HTMLAudioElement | null = null;

export function playExclusively(audio: HTMLAudioElement) {
  if (activeAudio && activeAudio !== audio) {
    activeAudio.pause();
  }
  activeAudio = audio;
  return audio.play();
}
