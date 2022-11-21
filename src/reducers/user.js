import {
  TOGGLE_LOGIN_FORM,
  UNLOAD_DATA,
  CONNECT_USER,
  CHANGE_FIELD_VALUE,
  CHANGE_SIGNUP_FIELD_VALUE,
  LOAD_DATAS,
} from '../actions/user';

const initCurrentUser = () => {
  const localUserRawData = localStorage.getItem('USER_DATA');
  if (localUserRawData) {
    return JSON.parse(localUserRawData);
  }
  return null;
};

const currentUser = initCurrentUser();

const initialState = {
  email: '',
  pseudo: '',
  discord: '',
  password: '',
  currentUser,
  role: '',
  loading: (currentUser == null),
  isLogged: (currentUser != null),
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
    case UNLOAD_DATA:
      return {
        ...state,
        currentUser: '',
        role: '',
        loading: true,
        isLogged: false,
      };
    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        role: action.role,
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
