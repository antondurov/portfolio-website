import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/ui/Eyebrow";
import LevelMeter from "@/components/ui/LevelMeter";

function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-28">
      <Eyebrow>Developer | Music Producer</Eyebrow>

      <h1 role="welcome" className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
        {t("welcome")}
      </h1>

      <p className="mt-6 max-w-xl text-lg text-text-muted">
        I make software and sounds on my laptop. Based in Israel. <br/>
        Building personal projects and writing music.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="rounded-sm) border border-accent px-4 py-2 font-mono text-xs tracking-widest text-accent uppercase transition-colors hover:bg-accent hover:text-bg"
        >
          See the code
        </Link>
        <Link
          to="/music"
          className="rounded-sm border border-line-strong px-4 py-2 font-mono text-xs tracking-widest text-text-muted uppercase transition-colors hover:border-text-muted hover:text-text"
        >
          Hear the music
        </Link>
      </div>

      <LevelMeter seed={1} />
    </main>
  );
}

export default Home;
