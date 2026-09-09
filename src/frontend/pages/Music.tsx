import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import KeyValueRow from "@/components/ui/KeyValueRow";
import LevelMeter from "@/components/ui/LevelMeter";
import { musicData } from "../data/musicData";
import RotatingText from "../components/ui/LoadingScreenText";

type Song = {
  title: string;
  soundcloudUrl: string;
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

function SongList({ title, songs }: { title: string; songs: Song[] }) {
  if (songs.length === 0) return null;
  return (
    <div>
      <h3 className="font-mono text-xs tracking-[0.15em] text-text-muted uppercase">
        {title}
      </h3>
      <ul className="mt-3 space-y-4">
        {songs.map((song, index) => (
          <li key={index}>
            <span className="font-medium">{song.title}</span>
            <iframe
              className="mt-2 w-full rounded-sm"
              width="100%"
              height="150"
              src={song.soundcloudUrl}
              title={song.title}
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

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-sm border border-line-strong bg-bg p-6 text-center">
      <h3 className="font-display text-lg font-semibold">Coming Soon</h3>
      <p className="text-text-muted">
        <RotatingText />
      </p>
    </div>
  )
}

function ComingSoonPage() {

  return (
    <Page
      eyebrow="Discography"
      title="Music"
      intro="My journey as a producer and artist over the years."
    >
      <div className="space-y-8">
      {/* 
        <ProfilePanel profile={antvn} />
        <ProfilePanel profile={toja} />
        <LevelMeter seed={4} />
        <AboutPanel about={about} />
      */}
        <ComingSoon />
      </div>
    </Page>
  );
}

export function MusicShowcase() {
  const { antvn, toja, about } = musicData;
  return (
    <Page
      eyebrow="Discography"
      title="Music"
      intro="My journey as a producer and artist over the years."
      >
      <ProfilePanel profile={antvn} />
      <ProfilePanel profile={toja} />
      <LevelMeter seed={4} />
      <AboutPanel about={about} />
    </Page>
  );
}
export default ComingSoonPage;
