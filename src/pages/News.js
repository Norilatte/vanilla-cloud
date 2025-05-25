import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function News() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <main className="content">
        <h2>{t('nav.news')}</h2>
        <h3>{t('news.title1')}</h3>
        <p>{t('news.text1')}</p>

        <h3>{t('news.title2')}</h3>
        <p>{t('news.text2')}</p>

        <h3>{t('news.title3')}</h3>
        <p>{t('news.text3')}</p>

        <h3>{t('news.title4')}</h3>
        <p>{t('news.text4')}</p>
      </main>
    </div>
  );
}

export default News;
