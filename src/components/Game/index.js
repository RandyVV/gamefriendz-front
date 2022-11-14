/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// == Import
// import PropTypes from 'prop-types';
import './game.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSelectValue,
  addGame,
} from '../../actions/games';

// == Composant
function Game() {
  // picture,
  // title,
  // description,
  // has_multiplayer_mode,
  // releases,
  const dispatch = useDispatch();
  const { id } = useParams();
  const intId = parseInt(id, 10);

  /**
 *  on trouve le jeu voulu dans la liste des jeux
 * @param {Array} games - tous les jeux
 * @param {string} searchedId - l'ID du jeu recherché
 * @return {Object} - Le jeu trouvé
 */

  function findGame(games, searchedId) {
    const game = games.find((testedGame) => {
      return testedGame.id === searchedId;
    });
    return game;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addGame());
  };

  const handleSelect = (event) => {
    dispatch(changeSelectValue(event.target.name, event.target.value));
    console.log(event.target.name, event.target.value);
  };

  const game = useSelector((state) => findGame(state.games.allGames, intId));
  const currentReleases = game.releases;
  return (
    <div className="game">
      <div className="max-w-4xl mb-8 bg-darkbg rounded-lg border border-gray-200 shadow-md">
        <a href="#">
          <img className="rounded-t-lg w-full" src={game.picture} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl text-white font-bold tracking-tight flex justify-center">{game.title}</h5>
          </a>
          <p className="mb-3 font-normal text-lg text-white">{game.description}</p>
          <div className="releases">
            <div className="releases-platform">
              <p className="mb-3 font-normal text-xl text-white">Disponible sur :</p>
              <ul className="text-primary">
                {game.releases.map((release) => <li><p className="mb-3 font-normal text-lg text-lightblue" key={release.platform.id}>{release.platform.name}</p></li>)}
              </ul>
            </div>
            <div className="releases-dates">
              <p className="mb-3 font-normal text-xl text-white">Date de sortie :</p>
              <ul className="text-primary">
                {game.releases.map((release) => <li><p className="mb-3 font-normal text-lg text-lightblue" key={release.id}>{release.release_date.substring(0, 10)}</p></li>)}
              </ul>
            </div>
            <div className="releases-multi">
              <p className="mb-3 font-normal text-xl text-white">Multijoueurs :</p>
              <p className="mb-3 font-normal text-lg text-lightblue">{game.has_multiplayer_mode ? 'Oui' : 'Non'}</p>
            </div>
            <div className="add-game-form">
              <form className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="platform_select" className="add-form_selector">Plateforme:
                  <select name="gameIdToAdd" className="add-form_selector__platform" onChange={handleSelect}>
                    <option className="form-options" value="">Choisis une plateforme</option>
                    {currentReleases.map((release) => <option className="form-options" value={release.id}>{release.platform.name}</option>)}
                  </select>
                </label>
                <div className="buttons">
                  <div className="flex flex-row-reverse">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-r from-alt-color to-pink group-hover:from-alt-color group-hover:to-pink hover:text-white focus:ring-4 focus:outline-none focus:ring-primary" onClick={handleSubmit} type="submit">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Ajouter à mes Jeux
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-row-reverse">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-r from-alt-color to-pink group-hover:from-alt-color group-hover:to-pink hover:text-white focus:ring-4 focus:outline-none focus:ring-primary" type="submit">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Ajouter à mes Envies
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Game.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  has_multiplayer_mode: PropTypes.bool.isRequired,
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      release_date: PropTypes.string.isRequired,
      platform: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};  */

// == Export
export default Game;
