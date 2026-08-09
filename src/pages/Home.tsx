import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/ui/Eyebrow";
import LevelMeter from "@/components/ui/LevelMeter";

function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-28">
      <Eyebrow>Music Producer | Developer</Eyebrow>

      <h1 role="welcome" className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
        {t("welcome")}
      </h1>
      <h2 className="mt-2 font-display text-2xl font-medium text-text-muted sm:text-3xl">
        My name is Anton.
      </h2>

      <p className="mt-6 max-w-xl text-lg text-text-muted">
        I make sounds and software. Based in Israel, currently
        splitting my time between music and personal projects.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/music"
          className="rounded-[var(--radius-sm)] border border-accent px-4 py-2 font-mono text-xs tracking-[0.1em] text-accent uppercase transition-colors hover:bg-accent hover:text-bg"
        >
          Hear the music
        </Link>
        <Link
          to="/projects"
          className="rounded-[var(--radius-sm)] border border-line-strong px-4 py-2 font-mono text-xs tracking-[0.1em] text-text-muted uppercase transition-colors hover:border-text-muted hover:text-text"
        >
          See the code
        </Link>
      </div>

      <LevelMeter seed={1} />
    </main>
  );
}

export default Home;
