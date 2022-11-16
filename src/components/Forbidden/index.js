// == Import
import './forbidden.scss';
import forbidden from 'src/assets/images/forbidden.png';
import { useNavigate } from 'react-router-dom';

// == Composant
function Forbidden() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/');
  };

  return (
    <section className="flex items-center h-full sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img className="forbidden-img" src={forbidden} alt="" />
        <button
          type="button"
          className="sm:mr-2 sm:py-2 sm:px-3 sm:text-base sm:font-medium sm:text-white sm:bg-primary sm:rounded-lg sm:hover:bg-altprimary max-[640px]:hidden"
          onClick={navigateToLogin}
        >
          Revenir en lieu sûr
        </button>
      </div>
    </section>
  );
}

// == Export
export default Forbidden;
