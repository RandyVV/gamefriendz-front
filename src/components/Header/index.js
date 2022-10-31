// == Import
import './header.scss';
import { useDispatch } from 'react-redux';
import logoDesktop from '../../assets/images/LogoManette.png';
import { toggleLoginForm } from '../../actions/user';


// == Composant
function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('[UTILISATEUR] : Je veux cacher/afficher le formulaire de connexion');
    dispatch(toggleLoginForm());
  };

  return (
    <div className="header">
      <button className="header-button" type="button"> Menu </button>
      <div className="header-logo">
        <span className="header-title">Game</span>
        <img className="header-img" src={logoDesktop} alt="Logo du site" />
        <span className="header-title">FriendZ</span>
      </div>
      <button className="header-button" type="button" onClick={handleClick}> Login </button>
    </div>
  );
}

// == Export
export default Header;
