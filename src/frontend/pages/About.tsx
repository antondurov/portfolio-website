import { useTranslation } from "react-i18next";
import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import KeyValueRow from "@/components/ui/KeyValueRow";

function About() {
  const { t } = useTranslation();

  return (
    <Page eyebrow="About" title={t("about")}>
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="space-y-4 text-text-muted">
          <p>
            Anton, 21 years old, based in Israel. I work as a software
            developer, and I've been producing and writing music for over
            seven years.
          </p>
          <p>
            I had some programming experience before formalizing it with
            CS50 and IBM's Full Stack Software Developer course, and I've
            been building on that ever since.
          </p>
          <p>
            Right now I'm splitting my time between a few personal projects
            and learning new tools — you can see what I'm currently working
            on over on the{" "}
            <a href="/projects" className="text-accent hover:underline">
              projects page
            </a>
            .
          </p>
        </div>

        <Panel label="Quick facts" className="w-full sm:w-64">
          <div className="space-y-0">
            <KeyValueRow label="Based in:">Israel</KeyValueRow>
            <KeyValueRow label="Roles:">Dev / Producer</KeyValueRow>
            <KeyValueRow label="Producing since:">2017</KeyValueRow>
          </div>
        </Panel>
      </div>
    </Page>
  );
}

export default About;
