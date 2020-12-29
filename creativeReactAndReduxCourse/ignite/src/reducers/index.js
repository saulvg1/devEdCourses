import { combineReducers } from 'redux';

import gamesReducer from '../reducers/gamesReducer.js';

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
