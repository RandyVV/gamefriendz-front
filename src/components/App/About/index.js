/* eslint-disable max-len */
// == Import
import avatarHomme from 'src/assets/images/avatars/avatar-homme.png';
import avatarFemme from 'src/assets/images/avatars/avatar-femme.png';

// == Composant
function About() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="home-title">A Propos</h1>
      <p className="text-xl text-center font-semibold">Développé avec amour par des gamers, pour des gamers.</p>
      <div className="flex justify-center md:items-center space-x-10 mt-10">
        <div className="flex flex-col md:items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Randy" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Randy</h5>
          <span className="text-sm text-gray-500 italic">Product Owner</span>
        </div>
        <div className="flex flex-col md:items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Quentin" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Quentin</h5>
          <span className="text-sm text-gray-500 italic">Scrum Master</span>
        </div>
        <div className="flex flex-col md:items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Corentin" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Corentin</h5>
          <span className="text-sm text-gray-500 italic">Lead Dev Front</span>
        </div>
        <div className="flex flex-col md:items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Nathan" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Nathan</h5>
          <span className="text-sm text-gray-500 italic">Lead Dev Back</span>
        </div>
        <div className="flex flex-col md:items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarFemme} alt="Célia" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Célia</h5>
          <span className="text-sm text-gray-500 italic">Git Master & Dev Front</span>
        </div>
      </div>
      <p className="text-xl m-20 text-center">"En tant que passionnés de jeux vidéos sur toutes plateformes, notre objéctif était clair: créer une application permettant de fusionner toutes les communautés en une, et vous permettre de trouver des coéquipiers sur n'importe quel jeu et n'importe quelle plateforme !"</p>
    </div>
  );
}

// == Composant
export default About;
