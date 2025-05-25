import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t('footer')}</p>
      <p>Южный федеральный университет, 2025</p>
    </footer>
  );
}

export default Footer;
