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
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
