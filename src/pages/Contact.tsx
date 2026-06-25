import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('contact')}</h1>
      <p>This is the contact page.</p>
    </div>
  );
}

export default Contact;