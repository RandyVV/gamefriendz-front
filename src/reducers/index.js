import { combineReducers } from 'redux';

import gamesReducer from './games';
import userReducer from './user';
import playersReducer from './players';

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  players: playersReducer,
});

export default rootReducer;
