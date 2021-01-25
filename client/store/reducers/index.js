import { combineReducers } from 'redux';
import users from './usersReducer.js';
import auth from './authReducer.js';
import coords from './locationReducer.js';
import theme from './themeReducer.js';
import map from './mapReducer.js';
import hashtag from './hashtagReducer.js';
import date from './dateReducer.js';
import nav from './navigationReducer.js'

export default combineReducers({
  users,
  auth,
  coords,
  theme,
  map,
  hashtag,
  date,
  nav
});