import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const products = [
    { name: 'eclair', price: '120₽' },
    { name: 'cappuccino', price: '260₽' },
    { name: 'tiramisu', price: '250₽' },
    { name: 'macaronSet', price: '500₽' },
    { name: 'napoleonCake', price: '950₽' },
    { name: 'americano', price: '160₽' },
    { name: 'cheesecake', price: '250₽' },
    { name: 'chocolateCroissant', price: '160₽' }
  ];

  return (
    <div className="services-page">
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
              <td>{t(`products.${item.name}`)}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;
