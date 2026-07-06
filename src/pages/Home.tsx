import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center underline">{t('welcome')}</h1>
      <h2 className="text-4xl text-center font-bold underline">My name is Anton.</h2>
    </div>
  );
}

export default Home;
