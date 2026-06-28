import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('contact')}</h1>
      <p>email: antondurov05@gmail.com</p>
      <p>linkedIn: linkedin.com/in/anton-durov</p>
      <p>instagram: @antvndurov</p>
    </div>
  );
}

export default Contact;
