import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import games from '../middlewares/games';
import user from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(games, user),
);

const store = createStore(reducer, enhancers);

export default store;
