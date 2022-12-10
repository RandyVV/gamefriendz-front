import axios from 'axios';
import {
  FETCH_GAMES,
  FETCH_GAME,
  SEARCH_GAME,
  saveGames,
  savePlatform,
  ADD_GAME,
  REMOVE_GAME,
  ADD_WANTED_GAME,
  REMOVE_WANTED_GAME,
  FETCH_PLATFORM,
} from '../actions/games';
import { foundUserDatas } from '../actions/user';

const games = (store) => (next) => (action) => {
  const URL = '//back.gamefriendz.com/api/';
  switch (action.type) {
    case FETCH_GAMES: {
      axios.get(`${URL}games`)
        .then((response) => {
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      next(action);
      break;
    }
    case FETCH_GAME: {
      const { gameId } = action;
      axios.get(`${URL}games/${gameId}`)
        .then((response) => {
          store.dispatch(saveGames([response.data]));
        })
        .catch((error) => {
          // console.log(error);
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
          // console.log(error);
        });

      next(action);
      break;
    }
    case SEARCH_GAME: {
      const { games: { searchedGame, platform } } = store.getState();
      axios.post(`${URL}games/search`, {
        title: searchedGame,
        platform: platform,
      })
        .then((response) => {
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          // console.log(error);
        });

      next(action);
      break;
    }

    // Owned Games
    case ADD_GAME: {
      const token = localStorage.getItem('USER_TOKEN');
      const { games: { gameIdToAdd } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      axios.post(
        `${URL}players/${id}/ownedgames`,
        {
          id: gameIdToAdd,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          // console.log(response.data);
          alert('Le jeu a bien été ajouté à la liste !');
        })
        .catch((error) => {
          // console.log(error);
          alert('Malheureusement une erreur c\'est produite...');
        });

      next(action);
      break;
    }
    case REMOVE_GAME: {
      const token = localStorage.getItem('USER_TOKEN');
      const { games: { gameIdToRemove } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      // console.log(gameIdToRemove);
      axios.delete(
        `${URL}players/${id}/ownedgames`,
        {
          data: {
            id: gameIdToRemove,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          // console.log(response.data);
          store.dispatch(foundUserDatas());
          alert('Le jeu a bien été supprimé de la liste !');
        })
        .catch((error) => {
          // console.log(error);
          alert('Malheureusement une erreur c\'est produite...');
        });

      next(action);
      break;
    }

    // Wanted Games
    case ADD_WANTED_GAME: {
      const { games: { gameIdToAdd } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const token = localStorage.getItem('USER_TOKEN');
      axios.post(
        `${URL}players/${id}/wantstoplay`,
        {
          id: gameIdToAdd,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          // console.log(response.data);
          alert('Le jeu a été ajouté à la liste d\'envies !');
        })
        .catch((error) => {
          // console.log(error);
          alert('Malheureusement une erreur c\'est produite...');
        });

      next(action);
      break;
    }
    case REMOVE_WANTED_GAME: {
      const { games: { gameIdToRemove } } = store.getState();
      const { user: { currentUser: { id } } } = store.getState();
      const token = localStorage.getItem('USER_TOKEN');
      // console.log(gameIdToRemove);
      axios.delete(
        `${URL}players/${id}/wantstoplay`,
        {
          data: {
            id: gameIdToRemove,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          // console.log(response.data);
          store.dispatch(foundUserDatas());
          alert('Le jeu a bien été retiré de la liste !');
        })
        .catch((error) => {
          // console.log(error);
          alert('Malheureusement une erreur c\'est produite...');
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
