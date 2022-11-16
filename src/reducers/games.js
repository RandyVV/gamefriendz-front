import {
  CHANGE_SELECT_VALUE,
  CHANGE_VALUE,
  SAVE_GAMES,
  TOGGLE_MENU,
  CATCH_GAME_ID,
  SAVE_PLATFORM,
} from '../actions/games';

const initialState = {
  allGames: '',
  allPlatforms: '',
  searchedGame: '',
  platform: '',
  gameIdToAdd: [],
  gameIdToRemove: [],
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
    case SAVE_PLATFORM:
      return {
        ...state,
        allPlatforms: action.platform,
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
    case CATCH_GAME_ID:
      return {
        ...state,
        gameIdToRemove: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
