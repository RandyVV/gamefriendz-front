import axios from 'axios';
import { FETCH_GAMES, SEARCH_GAME, saveGames } from '../actions/games';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES: {
      axios.get('8080/api/games')
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
    // case SEARCH_GAME: {
    //   const { games, platform } = store.getState();
    //   axios.post('8080/api/games/search', {
    //     games: games,
    //     platform: platform,
    //   })
    //     .then((response) => {
    //       console.log(response.data);
    //       // Callback executée lorsque la promesse est tenue
    //       store.dispatch(saveGames(response.data));
    //     })
    //     .catch((error) => {
    //       // Callback executée lorsque la promesse est rompus
    //       console.log(error);
    //     });

    //   next(action);
    //   break;
    // }
    default:
      next(action);
      break;
  }
};

export default games;
