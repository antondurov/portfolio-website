import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{t('about')}</h1>
      <p className="text-center mt-8">
        My name is Anton, I'm 21 years old from israel.<br/>
        I am a software developer and audio engineer. <br/>
        I have been producing and writing music for over 7 years, <br/>
        I had some experience in programming before I took the courses
        CS50 and IBM Full Stack Software Developer.<br/>
        {
        /* TODO: Add anchor link for the certificates.
           Also add more info later on. 
        */
        }
        Currently working on a few personal projects 
        and learning new technologies.
      </p>
    </div>
  );
}

export default About;
