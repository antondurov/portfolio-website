import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;