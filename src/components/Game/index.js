/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// == Import
// import PropTypes from 'prop-types';
import './game.scss';
import windowspic from 'src/assets/images/platform/windows.png';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Composant
function Game() {
  // picture,
  // title,
  // description,
  // has_multiplayer_mode,
  // releases,

  function findGame(games, searchedId) {
    const game = games.find((testedGame) => {
      return testedGame.id === searchedId;
    });
    return game;
  }

  const { id } = useParams;

  const game = useSelector((state) => findGame(state.games.games, id));

  return (
    <div className="game">
      <div className="max-w-4xl mb-8 bg-darkbg rounded-lg border border-gray-200 shadow-md">
        <a href="#">
          <img className="rounded-t-lg" src={game.picture} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl text-white font-bold tracking-tight flex justify-center">{game.title}</h5>
          </a>
          <p className="mb-3 font-normal text-white">{game.description}</p>
          <p className="mb-3 font-normal text-white">Disponible sur :</p>
          <ul>
            <li><img className="w-7 h-7" src={windowspic} alt="" /></li>
          </ul>
          <p className="mb-3 font-normal text-white">Date de sortie :</p>
          <p className="mb-3 font-normal text-white">{game.release.release_date}</p>
          <p className="mb-3 font-normal text-white">Multijoueurs :</p>
          <p className="mb-3 font-normal text-white">{game.has_multiplayer_mode}</p>
          <div className="flex flex-row-reverse">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-r from-alt-color to-pink group-hover:from-alt-color group-hover:to-pink hover:text-white focus:ring-4 focus:outline-none focus:ring-primary" type="button">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ajouter à mes Jeux
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*  Game.propTypes = {
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
