import { Link } from "react-router-dom";
import '@/components/Navbar.css'
import { useTranslation } from "react-i18next";
import React from "react";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = React.useState(false);
  
  const toggleDropdown = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar" role="navbar">
        <Link className="navbar-page" to="/">{t('Home')}</Link>
        <Link className="navbar-page" to="/about">{t('About')}</Link>
        <Link className="navbar-page" to="/contact">{t('Contact')}</Link>
        <Link className="navbar-page" to="/projects">{t('Projects')}</Link>
        <Link className="navbar-page" to="/cv">{t('CV')}</Link>
        <div className="dropdown navbar-page">
          <button className="dropdown-button" onClick={toggleDropdown}>
            {t('More')}
          </button>
          <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <Link className="dropdown-item" to="/music">{t('Music')}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
