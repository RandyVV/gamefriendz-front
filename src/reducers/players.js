import {
  CHANGE_SELECT_VALUE,
  CHANGE_VALUE,
  LOAD_SEARCHED_ID,
  SAVE_PLAYERS,
  SAVE_PLAYER_DATA,
} from '../actions/players';

const initialState = {
  allPlayers: '',
  searchedPlayer: '',
  searchedPlayerId: '',
  searchedPlayerData: '',
  laoding: true,
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
    case LOAD_SEARCHED_ID:
      return {
        ...state,
        searchedPlayerId: action.searchedId,
      };
    case SAVE_PLAYER_DATA:
      return {
        ...state,
        searchedPlayerData: action.playerData,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
