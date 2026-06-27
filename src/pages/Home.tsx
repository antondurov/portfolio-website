import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>This is the main page.</p>
    </div>
  );
}

export default Home;
