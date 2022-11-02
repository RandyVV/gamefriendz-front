// == Import
import { Link } from 'react-router-dom';
import './footer.scss';
import logo from 'src/assets/images/logodefinitif.png';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <h5>Game FriendZ</h5>
      <ul className="footer-legals">
        <Link className="legals-link" to="/contact">Contact</Link>
        <Link className="legals-link" to="/legals">Mentions légales</Link>
        <Link className="legals-link" to="/cgu">CGU</Link>
        <Link className="legals-link" to="/about">A propos</Link>
      </ul>
      <p className="footer-content">text SEO</p>
    </div>
  );
}

// == Export
export default Footer;
