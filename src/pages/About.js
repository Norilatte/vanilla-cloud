import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <main className="content">
        <h2>{t('nav.about')}</h2>
        <p>{t('about.intro')}</p>
        <p>{t('about.goal')}</p>
      </main>
    </div>
  );
}

export default About;
