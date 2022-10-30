// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// == Export
export default App;
