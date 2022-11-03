// == Import
import './search.scss';
import Card from 'src/components/Card';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectValue, changeValue, fetchGames } from '../../actions/games';

// == Composant
function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const route = window.location.pathname;

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch();
  };

  const handelChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleSelect = (event) => {
    dispatch(changeSelectValue(event.target.value));
  };

  if (route === '/games') {
    /** useEffect qui fait la requete a l'api pour récuperer les jeux au montage du composant */
    // useEffect(() => {
    // dispatch(fetchGames());
    // }, []);

    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="floating_name" className="form-label">Jeux:
              <input className="form-input" type="text" name="games" onChange={handelChange} required />
            </label>
            <label htmlFor="platform_select" className="form-selector">Plateforme:
              <select name="platform" className="form-platform" onChange={handleSelect}>
                <option className="form-options" value="">Choisis une plateforme</option>
                <option className="form-options" value="151">PC</option>
                <option className="form-options" value="148">PS4</option>
                <option className="form-options" value="149">PS5</option>
                <option className="form-options" value="153">Xbox One</option>
                <option className="form-options" value="154">Xbox Series</option>
                <option className="form-options" value="150">Switch</option>
                <option className="form-options" value="152">Mobile</option>
              </select>
            </label>
            <button className="form-button" type="submit"> Rechercher </button>
          </form>
        </div>

        <div className="home-cards">
          {games.map((game) => <Card key={game.id} {...game} />)}
        </div>
      </div>
    );
  }
  // eslint-disable-next-line no-else-return
  else if (route === '/players') {
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(event);
    //   // dispatch();
    // };
    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="floating_name" className="form-label">Joueur:
              <input className="form-input" type="text" name="player" onChange={handelChange} required />
            </label>
            <button className="form-button" type="submit"> Rechercher </button>
          </form>
        </div>
        <div className="home-cards">
          {games.map((game) => <Card key={game.id} {...game} />)}
        </div>
      </div>
    );
  }
}

// == Export
export default Search;

// http://randy-venant-valery.vpnuser.lan:8080/api/games/149
