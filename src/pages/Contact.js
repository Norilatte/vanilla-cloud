// === src/pages/Contact.js ===
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div className="page">
      <h2>{i18n.language === 'ru' ? 'Обратная связь' : 'Contact'}</h2>
      <p>{t('contactPhone')}</p>
      <p>{i18n.language === 'ru' ? 'Электронная почта: ' : 'Email: '}krivopust@sfedu.ru</p>
    </div>
  );
}

export default Contact;
