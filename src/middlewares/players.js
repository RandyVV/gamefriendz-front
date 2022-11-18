import axios from 'axios';
import {
  FETCH_PLAYERS,
  SEARCH_PLAYER,
  savePlayers,
  savePlayerData,
  FETCH_PLAYER_DATA,
} from '../actions/players';

const players = (store) => (next) => (action) => {
  const URL = 'https://randyvv-server.eddi.cloud/api/';
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
      const token = localStorage.getItem('USER_TOKEN');
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
      const token = localStorage.getItem('USER_TOKEN');

      axios.get(`${URL}players/${searchedPlayerId}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((response) => {
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
