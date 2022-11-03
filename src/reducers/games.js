import {
  CHANGE_SELECT_VALUE,
  CHANGE_VALUE,
  SAVE_GAMES,
  TOGGLE_MENU,
} from '../actions/games';
import datas from '../datas/gamesDatas';

const initialState = {
  allGames: datas,
  platform: '',
  player: '',
  games: '',
  isMenuOpen: false,
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
        platform: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
