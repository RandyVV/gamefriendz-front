import axios from 'axios';
import { FETCH_PLAYERS, SEARCH_PLAYER, savePlayers } from '../actions/players';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const randomPlayer = getRandomInt(21, 42);

const players = (store) => (next) => (action) => {
  const URL = 'http://randyvv-server.eddi.cloud/projet-02-game-friendz-back/public/api/';
  switch (action.type) {
    case FETCH_PLAYERS: {
      axios.get(`${URL}players`)
        .then((response) => {
          store.dispatch(savePlayers(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case SEARCH_PLAYER: {
      const { players: { searchedPlayer } } = store.getState();
      axios.post(`${URL}players/search`, {
        nickname: searchedPlayer,
      })
        .then((response) => {
          store.dispatch(savePlayers(response.data));
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

export default players;
