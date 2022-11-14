import {
  CHANGE_SELECT_VALUE,
  CHANGE_VALUE,
  REMOVE_GAME,
  SAVE_GAMES,
  TOGGLE_MENU,
} from '../actions/games';

const initialState = {
  allGames: '',
  searchedGame: '',
  platform: '',
  gameIdToAdd: [],
  gameIdToRemove: '',
  isMenuOpen: false,
  loading: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case SAVE_GAMES:
      return {
        ...state,
        loading: false,
        allGames: action.games,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case CHANGE_SELECT_VALUE:
      return {
        ...state,
        gameIdToAdd: action.value,
      };
    case REMOVE_GAME:
      return {
        ...state,
        gameIdToRemove: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
