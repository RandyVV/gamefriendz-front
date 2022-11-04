// == Import
import './signup.scss';
import { useNavigate } from 'react-router-dom';

// == Composant

function Signup() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };
  return (
    <div className="register">
      <h1 className="home-title">S'enregistrer</h1>

      <form className="home-title">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">
            Email
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gamefriendz.com" required="true" />
          </label>
          <div className="mb-6">
            <label htmlFor="pseudo" className="block mb-2 text-lg font-medium text-gray-900">
              Pseudo
              <input type="pseudo" id="pseudo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pseudo" required="true" />
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="discord" className="block mb-2 text-lg font-medium text-gray-900">
            Pseudo Discord
            <input type="text" id="discord" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="GameFriendZ#1234" required="true" />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">
            Votre mot de passe
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mot de passe" required="true" />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="repeat-password" className="block mb-2 text-lg font-medium text-gray-900">
            Confirmez le mot de passe
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Confirmez le mot de passe" required="true" />
          </label>
        </div>
        <div className="flex items-start mb-6">
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required="true" />
            J'accepte les conditions d'utilisation
          </label>
        </div>
        <button type="submit" className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">Créer un compte</button>
        <div className="flex items-start mb-6">
          <label htmlFor="registered" className="ml-2 text-sm font-medium text-gray-900">
            Déjà inscrit ?
            <button
              type="button"
              className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary"
              onClick={navigateToLogin}
            >
              Se Connecter
            </button>
          </label>
        </div>
      </form>
    </div>

  );
}

// == Export
export default Signup;
