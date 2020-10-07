import { combineReducers } from 'redux';
import users from './usersReducer.js';
import authReducer from './authReducer.js';
import auth from './authorization.js';
import coords from './locationReducer.js';

export default combineReducers({
  users,
  auth,
  coords
});