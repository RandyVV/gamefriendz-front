// == Import
import './search.scss';
import { useEffect } from 'react';
import Card from 'src/components/Card';
import PlayerCard from 'src/components/PlayerCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSelectValue,
  changeValue,
  fetchGames,
  searchGame,
} from '../../actions/games';

// == Composant
function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const loading = useSelector((state) => state.games.loading);
  const route = window.location.pathname;

  /** useEffect qui fait la requete a l'api pour récuperer les jeux au montage du composant */
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchGame());
  };

  const handelChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleSelect = (event) => {
    dispatch(changeSelectValue(event.target.value));
  };

  if (route === '/games') {
    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="floating_name" className="form-label">Jeux:
              <input className="form-input" type="text" name="searchedGame" onChange={handelChange} />
            </label>
            <label htmlFor="platform_select" className="form-selector">Plateforme:
              <select name="platform" className="form-platform" onChange={handleSelect}>
                <option className="form-options" value="">Choisis une plateforme</option>
                <option className="form-options" value="PC">PC</option>
                <option className="form-options" value="Playstation 4">PS4</option>
                <option className="form-options" value="Playstation 5">PS5</option>
                <option className="form-options" value="Xbox One">Xbox One</option>
                <option className="form-options" value="Xbox Series X">Xbox Series</option>
                <option className="form-options" value="Nintendo Switch">Switch</option>
                <option className="form-options" value="Mobile">Mobile</option>
              </select>
            </label>
            <button className="form-button" type="submit"> Rechercher </button>
          </form>
        </div>

        {!loading && (
        <div className="home-cards">
          {games.map((game) => <Card key={game.id} {...game} />)}
        </div>
        )}
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
        {/* <div className="home-cards">
          {games.map((game) => <Card key={game.id} {...game} />)}
        </div> */}
        <div className="player-cards">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    );
  }
}

// == Export
export default Search;

// http://randy-venant-valery.vpnuser.lan:8080/api/games/149
