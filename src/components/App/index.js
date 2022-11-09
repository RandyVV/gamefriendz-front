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
import Login from './Login';
import Signup from './Signup';
import Cgu from './Cgu';
import Profile from '../Profile';
import ErrorPage from '../ErrorPage';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
