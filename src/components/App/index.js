// == Import
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Modale from './Modale';
import './app.scss';
import Menu from './Menu';
<<<<<<< HEAD
import Search from '../Search';
=======
import Contact from './Contact';
>>>>>>> 91806f2afe3e97b45b595940227e4441431f7f49

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
<<<<<<< HEAD
        <Route path="/games" element={<Search />} />
=======
        <Route path="/contact" element={<Contact />} />
>>>>>>> 91806f2afe3e97b45b595940227e4441431f7f49
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
