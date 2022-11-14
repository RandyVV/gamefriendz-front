import axios from 'axios';
import {
  FETCH_PLAYERS,
  SEARCH_PLAYER,
  savePlayers,
  savePlayerData,
  FETCH_PLAYER_DATA,
} from '../actions/players';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const randomPlayer = getRandomInt(21, 42);

const players = (store) => (next) => (action) => {
  const URL = 'http://randyvv-server.eddi.cloud/api/';
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
      const { user: { token } } = store.getState();
      axios.post(
        `${URL}players/search`,
        {
          nickname: searchedPlayer,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(savePlayers(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case FETCH_PLAYER_DATA: {
      const { players: { searchedPlayerId } } = store.getState();
      const { user: { token } } = store.getState();
      axios.get(`${URL}players/${searchedPlayerId}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(savePlayerData(response.data));
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
