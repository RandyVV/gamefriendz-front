import axios from 'axios';
import {
  AVAILABLE,
  connectUser,
  foundUserDatas,
  FOUND_USER_DATAS,
  loadDatas,
  unloadData,
  LOGIN,
  LOGOUT,
  MODIFIER_PROFILE,
  SIGNUP,
} from '../actions/user';

const user = (store) => (next) => (action) => {
  const URL = 'https://randyvv-server.eddi.cloud/api/';
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();
      axios.post(`${URL}login`, {
        username: email,
        password: password,
      })
        .then((response) => {
          localStorage.setItem('USER_TOKEN', response.data.token);
          store.dispatch(connectUser(
            response.data.data,
          ));
          store.dispatch(foundUserDatas());
          alert('Connexion réussie !');
        })
        .catch((error) => {
          console.log(error);
          alert('Identifiants incorrects');
        });

      next(action);
      break;
    }
    case LOGOUT: {
      localStorage.removeItem('USER_TOKEN');
      localStorage.removeItem('USER_DATA');
      store.dispatch(unloadData());
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

      axios.post(`${URL}players`, {
        email: email,
        discord_tag: discord,
        nickname: pseudo,
        password: password,
      })
        .then((response) => {
          console.log(response.data.pseudo);
          alert('Votre compte a bien été créé');
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case FOUND_USER_DATAS: {
      const { user: { currentUser: { id, roles } } } = store.getState();
      const token = localStorage.getItem('USER_TOKEN');
      axios.get(`${URL}players/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const currentUser = { ...response.data, roles };
          localStorage.setItem('USER_DATA', JSON.stringify(currentUser));
          store.dispatch(loadDatas(currentUser));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case AVAILABLE: {
      const { user: { currentUser: { available, id } } } = store.getState();
      const token = localStorage.getItem('USER_TOKEN');
      axios.put(
        `${URL}players/${id}/available`,
        {
          available: !available,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(foundUserDatas());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case MODIFIER_PROFILE: {
      const {
        user: {
          pseudo,
          discord,
          currentUser: { id },
        },
      } = store.getState();
      const token = localStorage.getItem('USER_TOKEN');

      const requestData = {};

      if (pseudo) {
        requestData.nickname = pseudo;
      }

      if (discord) {
        requestData.discord_tag = discord;
      }

      axios.patch(
        `${URL}players/${id}`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(foundUserDatas());
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
