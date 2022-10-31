import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './menu.scss';

function Menu() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const isMenuOpen = useSelector((state) => state.games.isMenuOpen);

  return (
    <div className={`toggler ${!isMenuOpen ? 'toggler--closed' : ''}`}>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/"
        >
          Accueil
        </NavLink>

        {isLogged && (
          <NavLink
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/profile"
          >
            Profil
          </NavLink>
        )}

        <NavLink
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/games"
        >
          Jeux
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
          end
          to="/player"
        >
          Recherche de Joueur
        </NavLink>

        {/* {recipes.map((recipe) => (
          <NavLink
            key={recipe.id}
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to={`/recipe/${recipe.slug}`}
          >
            {recipe.title}
          </NavLink>
        ))} */}
      </nav>
    </div>
  );
}

export default Menu;
