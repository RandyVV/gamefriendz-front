// == Import
import './login.scss';

// == Composant
function Login() {
  return (
    <div className="login">
      <h1 className="home-title">Se Connecter</h1>

      <form className="home-title">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Email
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
          </label>

        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">Mot de passe
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
          </label>

        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <label htmlFor="remember" className="ml-2 text-lg font-medium text-gray-900">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required="" />
              Se souvenir de moi
            </label>
          </div>
        </div>
        <button type="submit" className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">Envoyer</button>
      </form>
    </div>

  );
}

// == Export
export default Login;
