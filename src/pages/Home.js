import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <main className="content">
        <h2>{t('home.welcomeTitle')}</h2>
        <p>{t('home.welcomeText')}</p>

        <p>
          <a
            href={`${process.env.PUBLIC_URL}/files/vanilla-cloud-guide.pdf`}
            download
            className="download-link"
          >
            📥 Скачать инструкцию по сайту
          </a>
        </p>
      </main>
    </div>
  );
}

export default Home;