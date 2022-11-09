import {
  TOGGLE_LOGIN_FORM,
  LOGOUT,
  CONNECT_USER,
  CHANGE_FIELD_VALUE,
  CHANGE_SIGNUP_FIELD_VALUE,
} from '../actions/user';
import userDatas from '../datas/userDatas';

const initialState = {
  email: '',
  password: '',
  currentUser: userDatas,
  token: '',
  isLogged: false,
  isOpen: false,
  signup: [
    {
      email: '',
      pseudo: '',
      discord: '',
      password: '',
      confirmPassword: '',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case LOGOUT:
      return {
        ...state,
        pseudo: '',
        id: '',
        token: '',
        isLogged: false,
      };
    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        pseudo: action.pseudo,
        id: action.id,
        token: action.token.token,
        isLogged: true,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case CHANGE_SIGNUP_FIELD_VALUE:
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
}

export default reducer;
