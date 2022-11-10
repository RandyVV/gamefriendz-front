import axios from 'axios';
import {
  FETCH_GAMES,
  SEARCH_GAME,
  saveGames,
  ADD_GAME,
} from '../actions/games';

const games = (store) => (next) => (action) => {
  const URL = 'http://randyvv-server.eddi.cloud/projet-02-game-friendz-back/public/api/';
  switch (action.type) {
    case FETCH_GAMES: {
      axios.get(`${URL}games`)
        .then((response) => {
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case SEARCH_GAME: {
      const { games: { searchedGame, platform } } = store.getState();
      console.log(searchedGame, platform);
      axios.post(`${URL}games/search`, {
        title: searchedGame,
        platform: platform,
      })
        .then((response) => {
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case ADD_GAME: {
      const { games: { gameIdToAdd } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      axios.post(`${URL}players/${id}/addownedgames`, {
        id: gameIdToAdd,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default games;
