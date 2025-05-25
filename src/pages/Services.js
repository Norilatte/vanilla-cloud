import { useTranslation } from 'react-i18next';
import './Services.css';

function Services() {
  const { t } = useTranslation();

  const products = [
    { name: 'Эклер', price: '120₽' },
    { name: 'Капучино', price: '160₽' },
    { name: 'Тирамису', price: '190₽' },
    { name: 'Макарун (набор)', price: '250₽' },
    { name: 'Торт «Наполеон»', price: '850₽' },
    { name: 'Американо', price: '120₽' },
    { name: 'Чизкейк', price: '210₽' },
    { name: 'Круассан с шоколадом', price: '130₽' }
  ];

  return (
    <div className="services-page">
      <h2>{t('nav.services')}</h2>
      <p><em>Ниже представлено планируемое меню, которое будет доступно после открытия:</em></p>
      <table className="services-table">
        <thead>
          <tr>
            <th>{t('tableHeader.product')}</th>
            <th>{t('tableHeader.price')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;