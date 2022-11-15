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
import {
  fetchPlayers,
  searchPlayer,
} from '../../actions/players';
import ErrorPage from '../ErrorPage';

// == Composant
function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const players = useSelector((state) => state.players.allPlayers);
  const loading = useSelector((state) => state.games.loading);
  const loadingPlayers = useSelector((state) => state.players.loadingPlayer);
  const route = window.location.pathname;
  const isLogged = useSelector((state) => state.user.isLogged);

  /** useEffect qui fait la requete a l'api pour récuperer les
   *  jeux et les joueurs au montage du composant */
  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPlayers());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchGame());
  };

  const handleSubmitPlayers = (event) => {
    event.preventDefault();
    dispatch(searchPlayer());
  };

  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleSelect = (event) => {
    dispatch(changeSelectValue(event.target.name, event.target.value));
  };

  // eslint-disable-next-line consistent-return
  // function filteredPlayers(status, loadedPlayers) {
  //  if (status === false) {
  //    const results = loadedPlayers.filter((loadedPlayer) => loadedPlayer.id <= 27);
  //    return results;
  //  }
  // }

  // const results = filteredPlayers(loadingPlayers, players);

  if (route === '/games') {
    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="floating_name" className="form-label">Jeux:
              <input className="form-input" type="text" name="searchedGame" onChange={handleChange} />
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
  else if (route === '/players' && isLogged === true) {
    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmitPlayers}>
            <label htmlFor="floating_name" className="form-label">Joueur:
              <input className="form-input" type="text" name="searchedPlayer" onChange={handleChange} />
            </label>
            <button className="form-button" type="submit"> Rechercher </button>
          </form>
        </div>
        {!loadingPlayers && (
        <div className="player-cards">
          {players.map((player) => <PlayerCard key={player.id} {...player} />)}
        </div>
        )}
      </div>
    );
  }
  // eslint-disable-next-line no-else-return
  else if (route === '/players' && isLogged === false) {
    return (
      <ErrorPage />
    );
  }
}

// == Export
export default Search;
