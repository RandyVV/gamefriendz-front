import axios from 'axios';
import {
  AVAILABLE,
  connectUser,
  foundUserDatas,
  FOUND_USER_DATAS,
  loadDatas,
  LOGIN,
  MODIFIER_PROFILE,
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
          store.dispatch(connectUser(
            response.data.data.roles,
            response.data.token,
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
      const { user: { currentUser: { id } } } = store.getState();
      const { user: { token } } = store.getState();
      axios.get(`${URL}players/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(loadDatas(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case AVAILABLE: {
      const { user: { currentUser: { available, id } } } = store.getState();
      const { user: { token } } = store.getState();
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
          token,
          currentUser: { id },
        },
      } = store.getState();

      const requestData = {};

      if (pseudo) {
        requestData.nickname = pseudo;
      }

      if (discord) {
        requestData.discord_tag = discord;
      }

      axios.put(
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
