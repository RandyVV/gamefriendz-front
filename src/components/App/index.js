// == Import
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Modale from './Modale';
import './app.scss';
import Menu from './Menu';
import Contact from './Contact';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Modale />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
