// == Import
import './header.scss';
import logoDesktop from '../../assets/images/logodéfinitif.png';

// == Composant
function Header() {
  return (
    <div className="header">
      <button type="button"> Menu </button>
      <img src={logoDesktop} alt="Logo du site" />
      <button type="button"> Login </button>
    </div>
  );
}

// == Export
export default Header;
