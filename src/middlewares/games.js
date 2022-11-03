import axios from 'axios';
import { FETCH_GAMES, saveGames } from '../actions/games';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES: {
      axios.get('http://randy-venant-valery.vpnuser.lan:8080/api/games')
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
