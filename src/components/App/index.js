// == Import
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Modale from './Modale';
import './app.scss';
import Menu from './Menu';
import Search from '../Search';
import Contact from './Contact';
import Game from '../Game';
import About from './About';

// == Composant
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Header />
      <Modale />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Search />} />
        <Route path="/players" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
