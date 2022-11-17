import {
  TOGGLE_LOGIN_FORM,
  LOGOUT,
  CONNECT_USER,
  CHANGE_FIELD_VALUE,
  CHANGE_SIGNUP_FIELD_VALUE,
  LOAD_DATAS,
} from '../actions/user';

const initialState = {
  email: '',
  pseudo: '',
  discord: '',
  password: '',
  currentUser: '',
  token: '',
  loading: true,
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
        token: action.token,
        currentUser: action.currentUser,
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
    case LOAD_DATAS:
      return {
        ...state,
        currentUser: action.userDatas,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
