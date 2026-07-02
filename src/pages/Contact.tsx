import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{t('contact')}</h1>
      <p className="text-1xl text-center mt-2">email: antondurov05@gmail.com</p>
      <p className="text-1xl text-center mt-2">linkedIn: linkedin.com/in/anton-durov</p>
      <p className="text-1xl text-center mt-2">instagram: @antvndurov</p>
    </div>
  );
}

export default Contact;
