// == Import
import './home.scss';
import Card from 'src/components/Card';

// == Composant
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex suscipit faucibus.</p>
      <Card />
    </div>
  );
}

// == Export
export default Home;
