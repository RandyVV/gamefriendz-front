export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const SAVE_GAMES = 'SAVE_GAMES';
export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games: games,
});

export const FETCH_PLATFORM = 'FETCH_PLATFORM';
export const fetchPlatform = () => ({
  type: FETCH_PLATFORM,
});

export const SAVE_PLATFORM = 'SAVE_PLATFORM';
export const savePlatform = (platform) => ({
  type: SAVE_PLATFORM,
  platform,
});

export const CATCH_GAME_ID = 'CATCH_GAME_ID';
export const catchGameId = (value) => ({
  type: CATCH_GAME_ID,
  value,
});

export const ADD_GAME = 'ADD_GAME';
export const addGame = (games) => ({
  type: ADD_GAME,
  games,
});

export const ADD_WANTED_GAME = 'ADD_WANTED_GAME';
export const addWantedGame = (games) => ({
  type: ADD_WANTED_GAME,
  games,
});

export const REMOVE_GAME = 'REMOVE_GAME';
export const removeGame = (games) => ({
  type: REMOVE_GAME,
  games,
});

export const REMOVE_WANTED_GAME = 'REMOVE_WANTED_GAME';
export const removeWantedGame = () => ({
  type: REMOVE_WANTED_GAME,
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
export const changeSelectValue = (field, value) => ({
  type: CHANGE_SELECT_VALUE,
  field,
  value,
});

export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = () => ({
  type: SEARCH_GAME,
});
