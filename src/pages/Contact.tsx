import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{t('contact')}</h1>
      <p className="text-2xl text-center mt-1">email: antondurov05@gmail.com</p>
      <p className="text-2xl text-center mt-1">linkedIn: linkedin.com/in/anton-durov</p>
      <p className="text-2xl text-center mt-1">instagram: @antvndurov</p>
    </div>
  );
}

export default Contact;
