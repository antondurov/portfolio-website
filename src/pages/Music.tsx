import React from "react";
import { musicData } from "@/data/musicData";

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

const MusicShowcase: React.FC = () => {
  const { antvn, toja, about } = musicData;

  const renderProfile = (profile: Profile) => (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4">{profile.name}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Top Songs (ANTVN)</h2>
        <ul className="space-y-2">
          {profile.topSongs.map((song, index) => (
            <li key={index} className="mt-4 items-center space-x-4">
              <span className="font-bold underline">{song.title}</span>
              <iframe
                width="100%"
                height="150"
                src={song.soundcloudUrl}
              ></iframe>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Personal Favorites (ANTVN)</h2>
        <ul className="space-y-2">
        {profile.favorites.map((song, index) => (
            <li key={index} className="mt-4 items-center space-x-4">
              <span className="font-bold underline">{song.title}</span>
              <iframe
                width="100%"
                height="150"
                src={song.soundcloudUrl}
              ></iframe>
            </li>
          ))}
        </ul>`
      </div>
    </div>
  );

  const renderAbout = (about: About) => (
    <div>
      <h2 className="text-2xl font-bold mb-4">About My Music</h2>
      <p className="mb-4">
        <strong>Inspirations:</strong> {about.inspirations}
      </p>
      <p className="mb-4">
        <strong>Future Goals:</strong> {about.futureGoals}
      </p>
      <p>
        <strong>Philosophy:</strong> {about.philosophy}
      </p>
    </div>
  );

  return (
    <div className="p-8">
      {renderProfile(antvn)}
      {renderProfile(toja)}
      {renderAbout(about)}
    </div>
  );
};

export default MusicShowcase;