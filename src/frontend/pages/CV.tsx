import { useTranslation } from "react-i18next";
import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import LevelMeter from "@/components/ui/LevelMeter";

function CV() {
  const { t } = useTranslation();

  return (
    <Page eyebrow="curriculum vitae" title={t("cv")}>
      <div className="space-y-8">
        <div id="certifications">
        <Panel label="Certifications">
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
        </div>

        <Panel label="Experience">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold">
                Music &amp; Audio
              </h3>
              <p className="mt-2 text-text-muted">
                7+ years of music production and audio engineering
                experience, including mixing, mastering, and sound design.
                Made countless remixes and original tracks, some of which
                have been released on various record labels and reched
                millions of plays. <br/>
                see{" "}
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
                Various personal projects, including web applications and 
                the portfolio you are currently viewing. see{" "}
                <a href="/projects" className="text-accent hover:underline">
                  projects
                </a>.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Human Resources
              </h3>
              <p className="mt-2 text-text-muted">
                10 months of experience in human resources, including
                employee relations and performance management, at a
                government facility.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Shift Supervisor at Roladin - Current
              </h3>
              <p className="mt-2 text-text-muted">
                2 months and going, managing a shift of employees, 
                overseeing daily operations, coffee making, time management, 
                problem-solving, real time prioritization, 
                store look, and leadership skills. While 
                ensuring high-quality service and customer satisfaction.
              </p>
            </div>
          </div>
        </Panel>

        <Panel label="Education">
          <p className="text">
            Finished 12 years of school, including high school, at the
            Democratic School Kanaf.
          </p>
          <br/>
              { 
                // TO DO: ADD CLICKABLE LINK TO CERTIFICATES
              }
              <p className="text">
                Finished a variety of courses, see certificates above.
              </p>
        </Panel>

        <div id="accomplishments">
          <Panel label="Accomplishments | Software">
            <div className="space-y-4 text-text-muted">
              <p>
                Developed a variety of personal projects, including web
                applications and the portfolio you are currently viewing.
              </p>
              <p>
                Completed the IBM Full Stack Software Developer
                certification, which included a variety of projects and
                assignments in web development, databases, and cloud
                computing.
              </p>
              <p>
                Completed the CS50x course from Harvard University, which
                covered a variety of topics in computer science and
                programming, including algorithms, data structures, and
                web development.
              </p>
              <p>
                Learned problem solving, time management, and 
                critical thinking skills through various projects and assignments, 
                as well as collaboration and communication skills through projects.
              </p>
            </div>
            <div className="space-y-4 text-text-muted">
            </div>
          </Panel>
          <Panel label="Accomplishments | Music">
            <div className="space-y-4 text-text-muted">
              <p>
                First breakthrough came via TikTok in 2022, when my remix of
                "Tek It" by Cafuné went viral, used in over 20,000 videos
                and reaching over 4 million streams on SoundCloud.
              </p>
              <p>
                I went on to release more remixes and original tracks,
                including hardstyle remixes like the "Tek It" remix, totaling
                over 14 million streams on SoundCloud.
              </p>
              <p>
                Signed multiple records with various record labels, 
                released on Spotify, Apple Music, and other platforms.
                Continuing to develop my sound and grow as an artist, 
                while also exploring new genres and styles.
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
