import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import KeyValueRow from "@/components/ui/KeyValueRow";
import LevelMeter from "@/components/ui/LevelMeter";
import Eyebrow from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import TrackPlayer from "@/components/ui/TrackPlayer";
import { musicData } from "../data/musicData";

type Song = {
  title: string;
  soundcloudUrl: string;
  audioSrc?: string;
};

type Profile = {
  name: string;
  topSongs: Song[];
  favorites: Song[];
};

type About = {
  inspirations: string;
  futureGoals: string;
  philosophy: string;
};

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  tags?: string[];
};

function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute top-1 bottom-1 left-[5px] w-px bg-line-strong"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {events.map((event, index) => (
          <li key={index} className="relative">
            <span
              className="absolute top-1.5 -left-8 h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <Eyebrow>{event.year}</Eyebrow>
            <h3 className="mt-2 font-display text-lg font-semibold">
              {event.title}
            </h3>
            <p className="mt-2 text-text-muted">{event.description}</p>
            {event.tags && event.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
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

function SongList({ title, songs }: { title: string; songs: Song[] }) {
  if (songs.length === 0) return null;
  return (
    <div>
      <h3 className="font-mono text-xs tracking-[0.15em] text-text-muted uppercase">
        {title}
      </h3>
      <ul className="mt-3 space-y-3">
        {songs.map((song, index) => (
          <li key={index}>
            <TrackPlayer
              title={song.title}
              audioSrc={song.audioSrc}
              externalUrl={song.soundcloudUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfilePanel({ profile }: { profile: Profile }) {
  return (
    <Panel label={profile.name}>
      <div className="space-y-6">
        <SongList title="Top Songs" songs={profile.topSongs} />
        <SongList title="Personal Favorites" songs={profile.favorites} />
        {profile.topSongs.length === 0 && profile.favorites.length === 0 && (
          <p className="text-text-muted">Tracks coming soon.</p>
        )}
      </div>
    </Panel>
  );
}

function AboutPanel({ about }: { about: About }) {
  return (
    <Panel label="About the music">
      <KeyValueRow label="Inspirations">{about.inspirations}</KeyValueRow>
      <KeyValueRow label="Future goals">{about.futureGoals}</KeyValueRow>
      <KeyValueRow label="Philosophy">{about.philosophy}</KeyValueRow>
    </Panel>
  );
}

function Music() {
  const { antvn, toja, about, timeline } = musicData;

  return (
    <Page
      eyebrow="Discography"
      title="Music"
      intro="My journey as a producer and artist over the years."
    >
      <div className="space-y-8">
        <TimelinePanel events={timeline} />
        <ProfilePanel profile={antvn} />
        <ProfilePanel profile={toja} />
        <LevelMeter seed={4} />
        <AboutPanel about={about} />
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
