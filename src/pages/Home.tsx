import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{t('welcome')}</h1>
    </div>
  );
}

export default Home;
