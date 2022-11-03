// == Import
import './about.scss';
import avatarHomme from 'src/assets/images/avatars/avatar-homme.png';
import avatarFemme from 'src/assets/images/avatars/avatar-femme.png';

// == Composant
function About() {
  return (
    <div className="apropos">
      <h1 className="home-title">A Propos</h1>
      <blockquote className="text-xl text-center font-semibold">
        <p>Développé avec amour par des gamers, pour des gamers.</p>
      </blockquote>
      <div className="flex justify-center items-center space-x-10 mt-10">
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Randy" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Randy</h5>
          <span className="text-sm text-gray-500">Product Owner</span>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Quentin" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Quentin</h5>
          <span className="text-sm text-gray-500">Scrum Master</span>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Corentin" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Corentin</h5>
          <span className="text-sm text-gray-500">Lead Dev Front</span>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarHomme} alt="Nathan" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Nathan</h5>
          <span className="text-sm text-gray-500">Lead Dev Back</span>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatarFemme} alt="Célia" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Célia</h5>
          <span className="text-sm text-gray-500">Git Master & Dev Front</span>
        </div>
      </div>
      <blockquote className="text-xl text-center mb-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exerci.</p>
      </blockquote>
    </div>
  );
}

// == Composant
export default About;
