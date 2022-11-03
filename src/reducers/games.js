import { SAVE_GAMES, TOGGLE_MENU } from '../actions/games';
import datas from '../datas/gamesDatas';

const initialState = {
  games: datas,
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
        games: action.games,
      };
    default:
      return state;
  }
}

export default reducer;
