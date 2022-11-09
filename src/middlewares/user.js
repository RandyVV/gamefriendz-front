import axios from 'axios';
import {
  connectUser,
  foundUserDatas,
  FOUND_USER_DATAS,
  loadDatas,
  LOGIN,
  SIGNUP,
} from '../actions/user';

const user = (store) => (next) => (action) => {
  const URL = 'http://randyvv-server.eddi.cloud/projet-02-game-friendz-back/public/api/';
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();
      console.log(email, password);

      axios.post(`${URL}login`, {
        username: email,
        password: password,
      })
        .then((response) => {
          store.dispatch(connectUser(response.data.token, response.data.data));
          console.log(store.dispatch(foundUserDatas()));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case SIGNUP: {
      const {
        user:
        {
          signup: {
            email,
            password,
            discord,
            pseudo,
          },
        },
      } = store.getState();
      console.log(email, password, discord, pseudo);

      axios.post(`${URL}new/player`, {
        email: email,
        discord_tag: discord,
        nickname: pseudo,
        password: password,
      })
        .then((response) => {
          console.log(response.data.pseudo);
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case FOUND_USER_DATAS: {
      const { user: { currentUser: { id } } } = store.getState();
      console.log(id);

      axios.get(`${URL}players/${id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(loadDatas(response.data));
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

export default user;
