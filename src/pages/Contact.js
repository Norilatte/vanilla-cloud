import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <main className="content">
        <h2>{t('nav.contact')}</h2>
        <p>{t('contactPhone')}</p>
        <p>Email: krivopust@sfedu.ru</p>
      </main>
    </div>
  );
}

export default Contact;