/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// == Import
// import PropTypes from 'prop-types';
import './game.scss';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSelectValue,
  fetchGame,
  addGame,
  addWantedGame,
} from '../../actions/games';

// == Composant
function Game() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const intId = parseInt(id, 10);

  const addToOwnedGamesRef = useRef(null);
  const addToWantsToPlayRef = useRef(null);

  const game = useSelector((state) => {
    const allGames = state?.games?.allGames;
    if (allGames) {
      return allGames.find((storedGame) => (storedGame.id === intId));
    }
    return null;
  });

  useEffect(() => {
    if (!game) {
      dispatch(fetchGame(intId));
    }
  }, []);

  if (!game) {
    return (
      <div className="game">
        Loading...
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter === addToOwnedGamesRef.current) {
      // on ajoute à ownedgames
      // console.log('owned games');
      dispatch(addGame());
    }
    else if (event.nativeEvent.submitter === addToWantsToPlayRef.current) {
      // on ajoute à wantstoplay
      // console.log('wanted games');
      dispatch(addWantedGame());
    }
  };

  const handleSelect = (event) => {
    dispatch(changeSelectValue(event.target.name, event.target.value));
  };

  const currentReleases = game.releases;
  return (
    <div className="game">
      <div className="max-w-4xl mb-8 bg-darkbg rounded-lg border border-gray-200 shadow-md">
        <a href="#">
          <img className="rounded-t-lg w-full" src={game.picture} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl text-lightblue font-bold tracking-tight flex justify-center">{game.title}</h5>
          </a>
          <p className="mb-3 font-normal text-lg text-white">{game.description}</p>
          <div className="releases">
            <div className="releases-platform">
              <p className="mb-3 font-normal text-xl text-lightblue">Disponible sur :</p>
              <ul className="text-primary">
                {game.releases.map((release) => <li key={`${release.id}-platform`}><p className="mb-3 font-normal text-lg text-white">{release.platform.name}</p></li>)}
              </ul>
            </div>
            <div className="releases-dates">
              <p className="mb-3 font-normal text-xl text-lightblue">Date de sortie :</p>
              <ul className="text-primary">
                {game.releases.map((release) => <li key={`${release.id}-date`}><p className="mb-3 font-normal text-lg text-white">{release.release_date.substring(0, 10)}</p></li>)}
              </ul>
            </div>
            <div className="releases-multi">
              <p className="mb-3 font-normal text-xl text-lightblue">Multijoueurs :</p>
              <p className="mb-3 font-normal text-lg text-white">{game.has_multiplayer_mode ? 'Oui' : 'Non'}</p>
            </div>
            <div className="add-game-form">
              <form className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="platform_select" className="add-form_selector">Plateforme:
                  <select name="gameIdToAdd" className="add-form_selector__platform" onChange={handleSelect}>
                    <option className="game-form-options" value="">Choisis une plateforme</option>
                    {currentReleases.map((release) => <option className="game-form-options" key={`${release.id}-platform-option`} value={release.id}>{release.platform.name}</option>)}
                  </select>
                </label>
                <div className="buttons">
                  <div className="flex flex-row-reverse">
                    <button ref={addToOwnedGamesRef} name="owned" className="mr-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="submit">
                      Ajouter à mes Jeux
                    </button>
                  </div>
                  <div className="flex flex-row-reverse">
                    <button ref={addToWantsToPlayRef} name="want" className="mr-2 py-2 px-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-altprimary" type="submit">
                      Ajouter à mes Envies
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

// == Export
export default Game;
