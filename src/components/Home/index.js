// == Import
import './home.scss';
import Card from 'src/components/Card';

// == Composant
function Home() {
  return (
    <div className="home">
      <h1>Accueil</h1>
      <Card />
    </div>
  );
}

// == Export
export default Home;
