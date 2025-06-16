import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function Contact() {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMessage('');
      }, 3000); // Сброс через 3 сек
    }
  };

  return (
    <div className="page">
      <main className="content">
        <h2>{t('nav.contact')}</h2>
        <p>{t('contactPhone')}</p>
        <p>Email: krivopust@sfedu.ru</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="wish">{t('contactWishLabel')}</label>
          <br />
          <textarea
            id="wish"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('contactWishPlaceholder')}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          ></textarea>
          <br />
          <button type="submit" style={{ marginTop: '0.5rem' }}>{t('contactSendButton')}</button>
        </form>

        {submitted && <p style={{ color: 'green' }}>{t('contactThankYou')}</p>}
      </main>
    </div>
  );
}

export default Contact;
