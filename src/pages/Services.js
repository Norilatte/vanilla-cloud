import { useTranslation } from 'react-i18next';
import './PageLayout.css';

function Services() {
  const { t } = useTranslation();

  const products = [
    { name: 'Эклер', price: '190₽' },
    { name: 'Капучино', price: '260₽' },
    { name: 'Тирамису', price: '250₽' },
    { name: 'Макарун (набор)', price: '500₽' },
    { name: 'Торт «Наполеон»', price: '950₽' },
    { name: 'Американо', price: '160₽' },
    { name: 'Чизкейк', price: '250₽' },
    { name: 'Круассан с шоколадом', price: '160₽' }
  ];

  return (
    <div className="page">
      <main className="content">
        <h2>{t('nav.services')}</h2>
        <p className="note"><em>{t('plannedMenuNote')}</em></p>
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
      </main>
    </div>
  );
}

export default Services;
