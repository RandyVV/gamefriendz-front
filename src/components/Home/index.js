// == Import
import './home.scss';
import Card from 'src/components/Card';

// == Composant
function Home() {
  return (
    <div className="home">
      <div className="container mx-auto mt-8 mb-8">
        <p className="text-center text-xl">Texte d'introdution/explication du site. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est mauris, porta id rutrum nec, rutrum eget metus. Nullam venenatis nisl vehicula quam interdum, tincidunt elementum risus laoreet. Fusce sagittis egestas placerat. Curabitur ultricies vulputate est.</p>
      </div>
      <div className="container mx-auto mb-8 flex content-center justify-center">
        <p className="text-xl"> Nous rejoindre ?</p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type="button">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Inscription
          </span>
        </button>
      </div>
      <div className="container mx-auto mb-8 flex-col">
        <p className="text-center text-xl"> Trouve des mates sur tous types de jeux et sur toutes les plateformes</p>
      </div>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl">Les jeux du moments</h1>
        <Card />
      </div>
    </div>
  );
}

// == Export
export default Home;
