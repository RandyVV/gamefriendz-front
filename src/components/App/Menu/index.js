import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './menu.scss';

function Menu() {
//   const recipes = useSelector((state) => state.recipes.list);
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
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
        to="/games"
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
  );
}

export default Menu;
