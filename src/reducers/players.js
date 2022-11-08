import {
  CHANGE_SELECT_VALUE,
  CHANGE_VALUE,
  SAVE_PLAYERS,
} from '../actions/players';

const initialState = {
  allPlayers: '',
  searchedPlayer: '',
  isMenuOpen: false,
  loadingPlayer: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PLAYERS:
      return {
        ...state,
        loadingPlayer: false,
        allPlayers: action.players,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case CHANGE_SELECT_VALUE:
      return {
        ...state,
        platform: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
