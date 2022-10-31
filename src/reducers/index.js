import { combineReducers } from 'redux';

import recipesReducer from './games';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
