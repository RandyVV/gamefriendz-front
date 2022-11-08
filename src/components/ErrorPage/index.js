// == Import
import { useNavigate } from 'react-router-dom';

// == Composant
function ErrorPage() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/');
  };
  return (
    <section className="flex items-center h-full sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img src="https://cdn.discordapp.com/attachments/1035619848081915954/1039128888187555840/sonic_foot_tap.gif" alt="" />
        <p className="text-4xl">On dirait que vous êtes perdu ?</p>
        <button
          type="button"
          className="mt-10 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary"
          onClick={navigateToLogin}
        >
          Revenir en lieu sûr
        </button>
      </div>
    </section>
  );
}

// == Export
export default ErrorPage;
