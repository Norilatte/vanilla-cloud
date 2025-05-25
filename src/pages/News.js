import { useTranslation } from 'react-i18next';

function News() {
  const { t, i18n } = useTranslation();

  return (
    <div className="page">
      <h2>{t('nav.news')}</h2>
      <article>
        <h3>{i18n.language === 'ru' ? 'Мы готовимся к открытию!' : 'We are preparing to open!'}</h3>
        <p>{i18n.language === 'ru' ? 'Кондитерская "Ванильное облако" скоро откроет свои двери. Мы находимся на финальном этапе подготовки и с нетерпением ждём встречи с вами!' : 'The Vanilla Cloud pastry shop is getting ready to open. We are in the final stage of preparation and can’t wait to meet you!'}</p>

        <h3>{i18n.language === 'ru' ? 'Придумана концепция' : 'Concept is ready'}</h3>
        <p>{i18n.language === 'ru' ? 'Мы создаём уютное место с натуральной выпечкой, кофе и атмосферой, как дома. Название "Ванильное облако" отражает лёгкость и сладость каждого десерта.' : 'We are creating a cozy place with homemade pastries, coffee and a homelike atmosphere. The name "Vanilla Cloud" reflects the lightness and sweetness of each dessert.'}</p>

        <h3>{i18n.language === 'ru' ? 'Сайт уже готов' : 'The website is ready'}</h3>
        <p>{i18n.language === 'ru' ? 'Вы находитесь на нашем официальном сайте! Здесь вы сможете ознакомиться с меню, следить за новостями и скоро — оформлять заказы онлайн.' : 'You are on our official website! Here you can view our menu, follow the news and soon — place orders online.'}</p>

        <h3>{i18n.language === 'ru' ? 'Меню — в разработке' : 'Menu — coming soon'}</h3>
        <p>{i18n.language === 'ru' ? 'Планируемое меню включает: эклеры, макаруны, капкейки, кофе и авторские десерты. Мы делаем акцент на свежести и вкусе.' : 'The planned menu includes: eclairs, macarons, cupcakes, coffee and signature desserts. We focus on freshness and taste.'}</p>

        <br />
        <a href="/files/vanilla-cloud-guide.pdf" download>
        {i18n.language === 'ru' ? 'Скачать инструкцию по сайту' : 'Download user guide'}
        </a>

      </article>
    </div>
  );
}

export default News;
