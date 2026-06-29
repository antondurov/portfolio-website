import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation()

  return (
    <div role="not-found">
      <h1 className="text-5xl font-bold text-center">{t('not-found')}</h1>
    </div>
  );
}

export default NotFound;
