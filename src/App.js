import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TagCloud from './components/TagCloud';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
  <Header />
  <div className="main">
    <div className="left"><Banner /></div>
    <div className="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
    <div className="right"><TagCloud /></div>
  </div>
  <Footer />
</div>
  );
}

export default App;
