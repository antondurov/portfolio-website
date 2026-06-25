import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('not-found')}</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default NotFound;