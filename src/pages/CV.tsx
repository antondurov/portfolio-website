import { useTranslation } from "react-i18next";

function CV() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('cv')}</h1>
      <h2>Certifications</h2>
      <p>
        <a href="https://coursera.org/share/aa1ced7804288295e5fb6b302bdfc007"
        target="_blank">
        IBM Full Stack Software Developer
        </a>
      </p>
      <p>
        <a href="https://certificates.cs50.io/91597d90-e00d-4e0a-bde9-4d3490d27602.pdf?size=letter"
        target="_blank">
        CS50x - Harvard
        </a>
      </p>
      <h2>Experience</h2>
      <h3>
        Music and Audio
      </h3>
      <p>
        7+ years of music production and audio engineering experience, 
        including mixing, mastering, and sound design. <br/>
        Made countless of remixes and original tracks, some of which have 
        been released on various record labels.<br/>
      </p>
      <h3>Software Development</h3>
      <p>
        Various personal projects, including web applications, see projects {/* TODO: Add anchor to projects page */} <br/>
        Finished a variety of courses, see certificates {/* TODO: Add anchor to certficate sections */} <br/>
      </p>
    </div>
  );
}

export default CV;
