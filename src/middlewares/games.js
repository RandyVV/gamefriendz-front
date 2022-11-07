import axios from 'axios';
import { FETCH_GAMES, SEARCH_GAME, saveGames } from '../actions/games';

const games = (store) => (next) => (action) => {
  const URL = 'http://localhost:8000/api/';
  switch (action.type) {
    case FETCH_GAMES: {
      axios.get(`${URL}games`)
        .then((response) => {
          // Callback executée lorsque la promesse est tenue
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          // Callback executée lorsque la promesse est rompus
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
          console.log(response.data);
          // Callback executée lorsque la promesse est tenue
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          // Callback executée lorsque la promesse est rompus
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
