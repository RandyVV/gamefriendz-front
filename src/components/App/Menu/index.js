import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from '../../../actions/games';

import './menu.scss';

function Menu() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const isMenuOpen = useSelector((state) => state.games.isMenuOpen);
  const profileId = useSelector((state) => state.user.id);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`toggler ${!isMenuOpen ? 'toggler--closed' : ''}`}>
      <nav className="menu">
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/"
        >
          Accueil
        </NavLink>

        {isLogged && (
          <NavLink
            onClick={handleMenuClick}
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to={`/profile/${profileId}`}
          >
            Profil
          </NavLink>
        )}

        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/games"
        >
          Recherche de Jeux
        </NavLink>

        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/players"
        >
          Recherche de Joueur
        </NavLink>
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/login"
        >
          Se connecter
        </NavLink>
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/signup"
        >
          S'inscrire
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
