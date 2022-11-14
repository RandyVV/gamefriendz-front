// == Import
import './header.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logoDesktop from '../../assets/images/LogoManette.png';
import { toggleLoginForm, logout } from '../../actions/user';
import { toggleMenu } from '../../actions/games';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const isMenuOpen = useSelector((state) => state.games.isMenuOpen);

  const handleLoginClick = () => {
    dispatch(toggleLoginForm());
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <button className="m-2 w-10 h-10 py-2 px-2 flex flex-nowrap space-y-1.5 flex-col focus:outline-none rounded-lg" type="button" onClick={handleMenuClick}>
        <span className={isMenuOpen ? 'line line1' : 'line'} />
        <span className={isMenuOpen ? 'line line2' : 'line'} />
        <span className={isMenuOpen ? 'line line3' : 'line'} />
      </button>
      <div className="header-logo">
        <span className="header-title">Game</span>
        <Link to="/"><img className="header-img" src={logoDesktop} alt="Logo du site" /></Link>
        <span className="header-title">FriendZ</span>
      </div>
      <div className={!isLogged ? 'unlogged' : 'logged'}>
        <button className="sm:mr-2 sm:py-2 sm:px-3 sm:text-base sm:font-medium sm:text-white sm:bg-primary sm:rounded-lg sm:hover:bg-altprimary max-[640px]:hidden" type="button" onClick={handleLoginClick}>Connexion</button>
        <button className="sm:py-2 sm:px-3 sm:text-base sm:font-medium sm:text-white sm:bg-primary sm:rounded-lg sm:hover:bg-altprimary max-[640px]:hidden" type="button" onClick={navigateToSignup}>S'inscrire</button>
      </div>
      <div className={isLogged ? 'unlogged' : 'logged'}>
        <button className="sm:py-2 sm:px-3 sm:text-base sm:font-medium sm:text-white sm:bg-primary sm:rounded-lg sm:hover:bg-altprimary max-[640px]:hidden" type="button" onClick={handleLogout}>Deconnexion</button>
      </div>
    </div>
  );
}

// == Export
export default Header;
