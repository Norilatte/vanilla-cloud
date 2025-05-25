import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TagCloud from './components/TagCloud';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="main">
          <aside className="left"><Banner /></aside>
          <section className="center">
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </section>
          <aside className="right"><TagCloud /></aside>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
