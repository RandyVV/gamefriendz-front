// == Import
import './search.scss';
import { useEffect } from 'react';
import Card from 'src/components/Card';
import PlayerCard from 'src/components/PlayerCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeValue,
  fetchGames,
  searchGame,
  fetchPlatform,
} from '../../actions/games';
import {
  fetchPlayers,
  searchPlayer,
} from '../../actions/players';
import Forbidden from '../Forbidden';

// == Composant
function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const players = useSelector((state) => state.players.allPlayers);
  const gameLoading = useSelector((state) => state.games.gameLoading);
  const platformLoading = useSelector((state) => state.games.platformLoading);
  const loadingPlayers = useSelector((state) => state.players.loadingPlayer);
  const platforms = useSelector((state) => state.games.allPlatforms);
  const route = window.location.pathname;
  const isLogged = useSelector((state) => state.user.isLogged);

  /** useEffect qui fait la requete a l'api pour récuperer les
   *  jeux, les joueurs et platforms au montage du composant */
  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPlayers());
    dispatch(fetchPlatform());
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

  if (route === '/games') {
    return (
      <div className="search">
        <div className="form-wrapper">
          <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="floating_name" className="search-form-label">Jeux:
              <input className="search-form-input" type="text" name="searchedGame" onChange={handleChange} />
            </label>
            <label htmlFor="platform_select" className="search-form-selector">Plateforme:
              <select name="platform" className="search-form-platform" onChange={handleChange}>
                <option className="search-form-options" value="">Choisis une plateforme</option>
                {!platformLoading && (
                  platforms.map((platform) => <option className="search-form-options" key={platform.id} value={platform.name}>{platform.name}</option>)
                )}
              </select>
            </label>
            <button className="search-form-button" type="submit"> Rechercher </button>
            <p class="my-3 text-center">
              {
                (gameLoading || games.length === 0)
                  ? "Désolé, il n'y a aucun résultat"
                  : `Il y a ${games.length} résultat${games.length > 1 ? 's' : ''}`
              }
            </p>
          </form>
        </div>
        {!gameLoading && (
        <div className="game-cards">
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
        <div className="form-wrapper-players">
          <form className="search-form" onSubmit={handleSubmitPlayers}>
            <label htmlFor="floating_name" className="search-form-label">Joueur:
              <input className="search-form-input" type="text" name="searchedPlayer" onChange={handleChange} />
            </label>
            <button className="search-form-button" type="submit"> Rechercher </button>
            <p class="my-3 text-center">
              {
                (loadingPlayers || players.length === 0)
                  ? "Désolé, il n'y a aucun résultat"
                  : `Il y a ${players.length} résultat${players.length > 1 ? 's' : ''}`
              }
            </p>
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
      <Forbidden />
    );
  }
}

// == Export
export default Search;
