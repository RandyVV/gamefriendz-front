// == Import
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logoDesktop from '../../assets/images/LogoManette.png';
import { toggleLoginForm } from '../../actions/user';
import { toggleMenu } from '../../actions/games';

// == Composant
function Header() {
  const dispatch = useDispatch();

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

  return (
    <div className="header">
      <button className="ml-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={handleMenuClick}> Menu </button>
      <div className="header-logo">
        <span className="header-title">Game</span>
        <Link to="/"><img className="header-img" src={logoDesktop} alt="Logo du site" /></Link>
        <span className="header-title">FriendZ</span>
      </div>
      <div className="buttons mr-2">
        <button className="mr-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={handleLoginClick}>Connexion</button>
        <button className="py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="button" onClick={navigateToSignup}>S'inscrire</button>
      </div>
    </div>
  );
}

// == Export
export default Header;
