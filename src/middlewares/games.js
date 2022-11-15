import axios from 'axios';
import {
  FETCH_GAMES,
  SEARCH_GAME,
  saveGames,
  savePlatform,
  ADD_GAME,
  REMOVE_GAME,
  ADD_WANTED_GAME,
  REMOVE_WANTED_GAME,
  FETCH_PLATFORM,
} from '../actions/games';

const games = (store) => (next) => (action) => {
  const URL = 'http://randyvv-server.eddi.cloud/api/';
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
    case FETCH_PLATFORM: {
      axios.get(`${URL}platforms`)
        .then((response) => {
          store.dispatch(savePlatform(response.data));
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

    // Owned Games
    case ADD_GAME: {
      const { games: { gameIdToAdd } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const { user: { token } } = store.getState();
      axios.post(
        `${URL}players/${id}/addownedgames`,
        {
          id: gameIdToAdd,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case REMOVE_GAME: {
      const { games: { gameIdToRemove } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const { user: { token } } = store.getState();
      console.log(gameIdToRemove);
      axios.delete(
        `${URL}players/${id}/removeownedgames`,
        {
          data: {
            id: gameIdToRemove,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    // Wanted Games
    case ADD_WANTED_GAME: {
      const { games: { gameIdToAdd } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const { user: { token } } = store.getState();
      axios.post(
        `${URL}players/${id}/addwantstoplay`,
        {
          id: gameIdToAdd,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case REMOVE_WANTED_GAME: {
      const { games: { gameIdToRemove } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const { user: { token } } = store.getState();
      console.log(gameIdToRemove);
      axios.delete(
        `${URL}players/${id}/removewantstoplay`,
        {
          data: {
            id: gameIdToRemove,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
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
