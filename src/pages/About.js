import { useTranslation } from 'react-i18next';

function About() {
  const { i18n } = useTranslation();

  return (
    <div className="page">
      <h2>{i18n.language === 'ru' ? 'Об авторе' : 'About'}</h2>
      <p>{i18n.language === 'ru' ? 'Нас зовут Карпушина Виктория и Кривопуст Александра, мы студенты Южного Федерального Университета. Этот сайт является нашим макетом для открытия собственной пекарни "Ванильное облако" в Ростове-на-Дону в будущем.' : 'We are Viktoria Karpushina and Aleksandra Krivopust, students of Southern Federal University. This website is our prototype for opening a future bakery "Vanilla Cloud" in Rostov-on-Don.'}</p>
      <p>{i18n.language === 'ru' ? 'Мы стремимся создать тёплое и уютное место, где каждый сможет насладиться качественной выпечкой, натуральным кофе и душевной атмосферой.' : 'We aim to create a warm and cozy place where everyone can enjoy high-quality pastries, natural coffee, and a soulful atmosphere.'}</p>
    </div>
  );
}

export default About;