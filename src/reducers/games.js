import { TOGGLE_MENU } from '../actions/games';
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
    default:
      return state;
  }
}

export default reducer;
