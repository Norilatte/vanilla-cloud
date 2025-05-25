import { useTranslation } from 'react-i18next';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.jpg" alt="Vanilla Cloud Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <Link to="/news">{t('nav.news')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <div className="lang-switch">
            <label htmlFor="lang-select">🌐</label>
            <select
              id="lang-select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
