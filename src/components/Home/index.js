// == Import
import './home.scss';
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';

// == Composant
function Home() {
  const games = useSelector((state) => state.games.games);
  console.log(games);
  return (
    <div className="home">
      <h1>Accueil</h1>
      <div className="home-cards">
        {games.map((game) => <Card key={game.id} {...game} />)}
      </div>
    </div>
  );
}

// == Export
export default Home;
