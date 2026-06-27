import { useTranslation } from "react-i18next";

function CV() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('cv')}</h1>
      <p>This is the CV page.</p>
    </div>
  );
}

export default CV;
