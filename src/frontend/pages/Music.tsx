import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import LevelMeter from "@/components/ui/LevelMeter";
import Eyebrow from "@/components/ui/Eyebrow";
import TrackPlayer from "@/components/ui/TrackPlayer";
import { musicData } from "../data/musicData";

type Song = {
  title: string;
  soundcloudUrl?: string;
  audioSrc?: string;
};

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  /** Representative tracks for this era, showcasing how the sound evolved. */
  tracks?: Song[];
};

function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute top-1 bottom-1 left-1.25 w-px bg-line-strong"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {events.map((event, index) => (
          <li key={index} className="relative">
            <span
              className="absolute top-1.5 -left-8 h-2.75 w-2.75 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <Eyebrow>{event.year}</Eyebrow>
            <h3 className="mt-2 font-display text-lg font-semibold">
              {event.title}
            </h3>
            <p className="mt-2 text-text-muted">{event.description}</p>
            {event.tracks && event.tracks.length > 0 && (
              <div className="mt-4 space-y-3">
                {event.tracks.map((track, trackIndex) => (
                  <TrackPlayer
                    key={trackIndex}
                    title={track.title}
                    audioSrc={track.audioSrc}
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function TimelinePanel({ events }: { events: TimelineEvent[] }) {
  return (
    <Panel label="Timeline">
      <Timeline events={events} />
    </Panel>
  );
}

function ThankYouPanel() {
  return (
    <Panel>
      <p>
        Thank you for taking the time to listen to my music and read about my
        journey as a producer and artist. Feel free to reach out to me on 
        social media or via email if you have any questions, feedback, or 
        just want to connect. I appreciate your support and hope you enjoyed
        my journey!
      </p>
    </Panel>
  );
}

function AboutPagePanel() {
  return (
    <Panel label="Feedback">
      <p>
        This page is a work in progress. I am still working on adding more
        content, including more tracks, stories, and insights into my music
        journey. Please check back later for updates!
      </p>
      <br/>
      <p>
        If you have any feedback or suggestions for this page, please feel free
        to reach out to me. I would love to hear your thoughts and ideas on how
        to improve this page and make it more engaging for visitors.
      </p>
    </Panel>
  );
}

function VolumeWarning() {
  return (
    <p className="border-l-2 border-danger bg-danger-dim/10 py-2 pl-4 text-sm text-text-muted">
      The music tracks have different volume levels in the early years, be
      careful before jumping from one track to the other. It is caused from
      lack of mastering/leveling knowledge in early years.
    </p>
  );
}

function Music() {
  const { timeline } = musicData;

  return (
    <Page
      eyebrow="Discography"
      title="Music"
      intro="My journey as a producer and artist over the years."
    >
      <div className="space-y-8">
        <VolumeWarning />
        <TimelinePanel events={timeline} />
        <ThankYouPanel />
        <LevelMeter seed={4} />
        <AboutPagePanel />
      </div>
    </Page>
  );
}

export default Music;

/*
 * Coming Soon placeholder -- kept around in case the page needs to fall
 * back to this while real content is still missing. Not currently used.
 *
 * import RotatingText from "../components/ui/LoadingScreenText";
 *
 * function ComingSoon() {
 *   return (
 *     <div className="flex flex-col items-center justify-center space-y-4 rounded-sm border border-line-strong bg-bg p-6 text-center">
 *       <h3 className="font-display text-lg font-semibold">Coming Soon</h3>
 *       <p className="text-text-muted">
 *         <RotatingText />
 *       </p>
 *     </div>
 *   );
 * }
 *
 * function ComingSoonPage() {
 *   return (
 *     <Page
 *       eyebrow="Discography"
 *       title="Music"
 *       intro="My journey as a producer and artist over the years."
 *     >
 *       <div className="space-y-8">
 *         <ComingSoon />
 *       </div>
 *     </Page>
 *   );
 * }
 */
