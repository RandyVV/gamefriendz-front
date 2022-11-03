// == Import
import './contact.scss';

// == Composant
function Contact() {
  return (
    <div className="formulaire">
      <h1 className="home-title">Contactez-nous !</h1>
      <form className="home-title">
        <div className="mb-2 w-full">
          <label htmlFor="email" className="block text-lg font-medium text-white">Votre email
            <input type="email" id="email" className="bg-darkbg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="nom@gmail.com" required="" />
          </label>
        </div>
        <div className="mb-2 w-full">
          <label htmlFor="text" className="block text-lg font-medium text-white">Votre pseudo
            <input type="text" id="text" className="bg-darkbg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
          </label>
        </div>
        <div className="mb-2 w-full">
          <label htmlFor="text" className="block mb-2 text-lg font-medium text-white">Motif de contact
            <input type="text" id="text" className="bg-darkbg shadow-sm bg-gray-50 border border-gray-300 text-gray text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
          </label>
          <label htmlFor="message" className="block mb-2 mb-40 text-lg font-medium text-white">Votre message
            <textarea id="message" rows="4" className="bg-darkbg block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Votre message..." />
            <button type="submit" className="mt-10 py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-altprimary focus:ring-2 focus:outline-none focus:ring-lightblue">Envoyer</button>
          </label>
        </div>
      </form>
    </div>
  );
}

// == Export
export default Contact;
