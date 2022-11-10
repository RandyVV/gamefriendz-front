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
      <button className="ml-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={handleMenuClick}> Menu </button>
      <div className="header-logo">
        <span className="header-title">Game</span>
        <Link to="/"><img className="header-img" src={logoDesktop} alt="Logo du site" /></Link>
        <span className="header-title">FriendZ</span>
      </div>
      <div className={!isLogged ? 'unlogged' : 'logged'}>
        <button className="mr-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={handleLoginClick}>Connexion</button>
        <button className="py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={navigateToSignup}>S'inscrire</button>
      </div>
      <div className={isLogged ? 'unlogged' : 'logged'}>
        <button className="py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={handleLogout}>Deconnexion</button>
      </div>
    </div>
  );
}

// == Export
export default Header;
