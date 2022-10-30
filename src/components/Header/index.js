// == Import
import './header.scss';
import logoDesktop from '../../assets/images/LogoManette.png';

// == Composant
function Header() {
  return (
    <div className="header">
      <button className="header-button" type="button"> Menu </button>
      <img className="header-img" src={logoDesktop} alt="Logo du site" />
      <button className="header-button" type="button"> Login </button>
    </div>
  );
}

// == Export
export default Header;
