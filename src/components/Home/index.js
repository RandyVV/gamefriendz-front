// == Import
import './home.scss';
import Card from 'src/components/Card';

// == Composant
function Home() {
  return (
    <div className="home">
      <div className="container mx-auto">
        <p className="text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est mauris, porta id rutrum nec, rutrum eget metus. Nullam venenatis nisl vehicula quam interdum, tincidunt elementum risus laoreet. Fusce sagittis egestas placerat. Curabitur ultricies vulputate est.</p>
        <h1 className="text-center text-2xl">Les jeux du moments</h1>
        <Card />
      </div>
    </div>
  );
}

// == Export
export default Home;
