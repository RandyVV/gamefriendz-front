export const SAVE_PLAYERS = 'SAVE_PLAYERS';
export const savePlayers = (players) => ({
  type: SAVE_PLAYERS,
  players: players,
});

export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const fetchPlayers = () => ({
  type: FETCH_PLAYERS,
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

export const SEARCH_PLAYER = 'SEARCH_PLAYER';
export const searchPlayer = () => ({
  type: SEARCH_PLAYER,
});
