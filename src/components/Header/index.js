// == Import
import './header.scss';
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

  return (
    <div className="header">
      <button className="header-button" type="button" onClick={handleMenuClick}> Menu </button>
      <div className="header-logo">
        <span className="header-title">Game</span>
        <img className="header-img" src={logoDesktop} alt="Logo du site" />
        <span className="header-title">FriendZ</span>
      </div>
      <button className="header-button" type="button" onClick={handleLoginClick}> Login </button>
    </div>
  );
}

// == Export
export default Header;
