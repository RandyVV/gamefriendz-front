// == Import
import { Link } from 'react-router-dom';
import './footer.scss';

// == Composant
function Footer() {
  return (
    <div className="footer">
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
