import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
  <div className="header-inner">
    <div className="logo-block">
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" className="logo-img" />
      </Link>
    </div>
    <nav className="nav">
      <Link to="/news">{t('nav.news')}</Link>
      <Link to="/about">{t('nav.about')}</Link>
      <Link to="/contact">{t('nav.contact')}</Link>
      <Link to="/services">{t('nav.services')}</Link>
      <select onChange={handleLanguageChange} value={i18n.language}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </nav>
  </div>
</header>
  );
}

export default Header;