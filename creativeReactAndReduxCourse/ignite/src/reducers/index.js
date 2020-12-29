import { combineReducers } from 'redux';

import gamesReducer from '../reducers/gamesReducer.js';

const initState = {
  name: '',
  isLogged: false,
};

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
