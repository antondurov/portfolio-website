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
        See my accomplishments and achievments in the music industry, 
        see Accomplishments. 
        {/* TODO: Add anchor to accomlishments section */} <br/>
      </p>
      <h3>Software Development</h3>
      <p>
        Various personal projects, including web applications, see projects {/* TODO: Add anchor to projects page */} <br/>
        Finished a variety of courses, see certificates {/* TODO: Add anchor to certficate sections */} <br/>
      </p>
      <h3>Human Resources</h3>
      <p>
        10 months of experience in human resources, including 
        employee relations, and performance management. 
        In a government manufacturing facility. <br/>
      </p>
      <h2>Education</h2>
      <p>
        Finished 12 years of school, including high school, 
        in the Democratic School Kanaf. <br/>
      </p>
      <h2>Accomplishments</h2>
      { /* TODO: Add accomplishments in the music industry:
            - Released tracks on various record labels
            - Remixes
            - Collaborated with other artists
            - Showcase the millions of streams
          Options:
          #1 Maybe create different component for this section,
          and add a link to it in the CV page.
          #2 Embedde the accomplishments in the CV page, but make it collapsible,
             so the user can choose to see it or not.
             With addded links and info
      */ }
      <p>
        First breakthrough came with tiktok in 2022, 
        when my remix of "Tek it" by Cafune went viral. <br/>
        The remix was used in over 20k videos, and reached over 
        4 million streams on SoundCloud. <br/>
        Later on I released a few more remixes and original tracks,
        some of which are hardstyle remixes like the "Tek it" remix,  
        and some of which are original tracks. Totalling 
        over 14 million streams on SoundCloud. <br/>
        After moving on from hardstyle, I started releasing music 
        under a new identity, with a new sound and style. <br/>
        Currently working on a few new tracks, and planning 
        to release them in the near future. <br/>
        With the main focus currently on releasing music 
        under my new identity, and building a brand around it. <br/>
      </p>
    </div>
  );
}

export default CV;
