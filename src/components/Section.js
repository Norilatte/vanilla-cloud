import './Section.css';
import { Link } from 'react-router-dom';

function Section() {
  return (
    <div className="section">
      <nav className="section-nav">
        <p><Link to="/news">Новости</Link></p>
        <p><Link to="/about">Об авторе</Link></p>
        <p><Link to="/contact">Обратная связь</Link></p>
        <p><Link to="/services">Продукты и услуги</Link></p>
      </nav>
      <div className="section-banner">
        <img src="/images/banner1.jpg" alt="Баннер 1" className="section-img" />
        <img src="/images/banner2.jpg" alt="Баннер 2" className="section-img" />
      </div>
    </div>
  );
}

export default Section;