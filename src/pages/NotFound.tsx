import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/ui/Eyebrow";

function NotFound() {
  const { t } = useTranslation();

  return (
    <main
      role="not-found"
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-28 text-center"
    >
      <Eyebrow>Error</Eyebrow>
      <h1 className="mt-4 font-display text-6xl font-semibold text-text-muted">
        404
      </h1>
      <p className="mt-3 text-text-muted">{t("not-found")}</p>
      <Link
        to="/"
        className="mt-6 rounded-sm border border-line-strong px-4 py-2 font-mono text-xs tracking-widest text-text uppercase transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </main>
  );
}

export default NotFound;
