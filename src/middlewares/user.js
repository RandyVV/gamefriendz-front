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
  const URL = 'http://randyvv-server.eddi.cloud/api/';
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();

      axios.post(`${URL}login`, {
        username: email,
        password: password,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(connectUser(response.data.token, response.data.data));
          store.dispatch(foundUserDatas());
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
      const { user: { token } } = store.getState();
      console.log(token);
      axios.get(`${URL}players/${id}`/*, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }*/)
        .then((response) => {
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
