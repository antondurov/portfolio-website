import { useTranslation } from "react-i18next";
import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import LevelMeter from "@/components/ui/LevelMeter";

function CV() {
  const { t } = useTranslation();

  return (
    <Page eyebrow="Resume" title={t("cv")}>
      <div className="space-y-8">
        <Panel label="01 — Certifications">
          <ul className="space-y-2">
            <li>
              <a
                className="text-accent hover:underline"
                href="https://coursera.org/share/aa1ced7804288295e5fb6b302bdfc007"
                target="_blank"
                rel="noreferrer noopener"
              >
                IBM Full Stack Software Developer
              </a>
            </li>
            <li>
              <a
                className="text-accent hover:underline"
                href="https://certificates.cs50.io/91597d90-e00d-4e0a-bde9-4d3490d27602.pdf?size=letter"
                target="_blank"
                rel="noreferrer noopener"
              >
                CS50x — Harvard
              </a>
            </li>
          </ul>
        </Panel>

        <Panel label="02 — Experience">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold">
                Music &amp; Audio
              </h3>
              <p className="mt-2 text-text-muted">
                7+ years of music production and audio engineering
                experience, including mixing, mastering, and sound design.
                Made countless remixes and original tracks, some of which
                have been released on various record labels — see{" "}
                <a href="#accomplishments" className="text-accent hover:underline">
                  accomplishments
                </a>{" "}
                below.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Software Development
              </h3>
              <p className="mt-2 text-text-muted">
                Various personal projects, including web applications — see{" "}
                <a href="/projects" className="text-accent hover:underline">
                  projects
                </a>
                . Finished a variety of courses, see certificates above.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Human Resources
              </h3>
              <p className="mt-2 text-text-muted">
                10 months of experience in human resources, including
                employee relations and performance management, at a
                government manufacturing facility.
              </p>
            </div>
          </div>
        </Panel>

        <Panel label="03 — Education">
          <p className="text-text-muted">
            Finished 12 years of school, including high school, at the
            Democratic School Kanaf.
          </p>
        </Panel>

        <div id="accomplishments">
          <Panel label="04 — Accomplishments">
            <div className="space-y-4 text-text-muted">
              <p>
                First breakthrough came via TikTok in 2022, when my remix of
                "Tek It" by Cafuné went viral — used in over 20,000 videos
                and reaching over 4 million streams on SoundCloud.
              </p>
              <p>
                I went on to release more remixes and original tracks,
                including hardstyle remixes like the "Tek It" remix, totaling
                over 14 million streams on SoundCloud.
              </p>
              <p>
                After moving on from hardstyle, I started releasing music
                under a new identity, with a new sound and style. Currently
                working on new tracks and planning to release them soon,
                with the main focus on building a brand around this new
                identity.
              </p>
            </div>
          </Panel>
        </div>
      </div>

      <LevelMeter seed={3} />
    </Page>
  );
}

export default CV;
