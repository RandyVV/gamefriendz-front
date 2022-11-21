import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleMenu } from '../../../actions/games';
import { logout, foundUserDatas } from '../../../actions/user';

import './menu.scss';

function Menu() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const loading = useSelector((state) => state.user.loading);
  const isMenuOpen = useSelector((state) => state.games.isMenuOpen);

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

        {isLogged && !loading && (
          <NavLink
            onClick={(event) => {
              handleMenuClick(event); dispatch(foundUserDatas());
            }}
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/profile"
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

        {isLogged && (
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/players"
        >
          Recherche de Joueurs
        </NavLink>
        )}

        {!isLogged && (
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/login"
        >
          Se connecter
        </NavLink>
        )}

        {isLogged && (
        <NavLink
          onClick={(event) => {
            handleMenuClick(event); dispatch(logout());
          }}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/logout"
        >
          Déconnexion
        </NavLink>
        )}

        {!isLogged && (
        <NavLink
          onClick={handleMenuClick}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/signup"
        >
          S'inscrire
        </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Menu;
