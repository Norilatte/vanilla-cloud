import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <h3>🎂 Специальное предложение!</h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/banner1.jpg`}
        alt="Баннер 1"
        className="banner-img"
      />
      <p>-20% на выпечку каждую пятницу!</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/banner2.jpg`}
        alt="Баннер 2"
        className="banner-img"
      />
      <p>Новые кофейные зёрна в продаже!</p>
    </div>
  );
}

export default Banner;