// == Import
import './signup.scss';

// == Composant

function Signup() {
  return (
    <div className="register">
      <h1 className="home-title">S'enregistrer</h1>

      <form className="home-title">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">
            Email
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gamefriendz.com" required="" />
          </label>
          <div className="mb-6">
            <label htmlFor="pseudo" className="block mb-2 text-lg font-medium text-gray-900">
              Pseudo
              <input type="pseudo" id="pseudo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pseudo" required="" />
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
            Votre mot de passe
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mot de passe" required="" />
          </label>

        </div>
        <div className="mb-6">
          <label htmlFor="repeat-password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
            Confirmez le mot de passe
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Mot de passe" required="" />
          </label>

        </div>
        <div className="flex items-start mb-6">
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
            J'accepte les conditions d'utilisation
          </label>
        </div>
        <button type="submit" className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">Créer un compte</button>
      </form>
    </div>

  );
}

// == Export
export default Signup;
