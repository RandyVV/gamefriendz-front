import {
  TOGGLE_LOGIN_FORM,
  LOGOUT,
  CONNECT_USER,
  CHANGE_FIELD_VALUE,
} from '../actions/user';

const initialState = {
  email: '',
  password: '',
  pseudo: '',
  id: '',
  token: '',
  isLogged: false,
  isOpen: false,
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
        token: action.token,
        isLogged: action.logged,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
