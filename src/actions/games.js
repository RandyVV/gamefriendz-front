export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const SAVE_GAMES = 'SAVE_GAMES';
export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games: games,
});

export const FETCH_GAMES = 'FETCH_GAMES';
export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (field, value) => ({
  type: CHANGE_VALUE,
  field,
  value,
});

export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const changeSelectValue = (value) => ({
  type: CHANGE_SELECT_VALUE,
  value,
});

export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = () => ({
  type: SEARCH_GAME,
});
