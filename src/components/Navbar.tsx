import { Link } from "react-router-dom";
import '@/components/Navbar.css'
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="navbar" role="navbar">
        <Link className="navbar-page" to="/">{t('Home')}</Link>
        <Link className="navbar-page" to="/about">{t('About')}</Link>
        <Link className="navbar-page" to="/contact">{t('Contact')}</Link>
        <Link className="navbar-page" to="/projects">{t('Projects')}</Link>
        <Link className="navbar-page" to="/cv">{t('CV')}</Link>
      </div>
    </>
  );
}

export default Navbar;
