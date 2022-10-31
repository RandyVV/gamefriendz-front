// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Modale from './Modale';
import './app.scss';
import Menu from './Menu';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Modale />
      <div className="app-content">
        <Menu />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;
