import { TOGGLE_LOGIN_FORM } from '../actions/user';

const initialState = {
  isLogged: false,
  isOpen: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state;
  }
}

export default reducer;
