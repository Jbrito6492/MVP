import { combineReducers } from 'redux';
import user from './userReducer.js';
import theme from './themeReducer.js';
import hashtags from './hashtagReducer.js';
import date from './dateReducer.js';
import nav from './navigationReducer.js'

export default combineReducers({
  user,
  theme,
  hashtags,
  date,
  nav
});