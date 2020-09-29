import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import authReducer from './authReducer.js';
import logInReducer from './logInReducer.js';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  user: logInReducer
});