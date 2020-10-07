import { combineReducers } from 'redux';
import users from './usersReducer.js';
import auth from './authReducer.js';
import coords from './locationReducer.js';

export default combineReducers({
  users,
  auth,
  coords,
});