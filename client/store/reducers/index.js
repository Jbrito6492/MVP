import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import authReducer from './authReducer.js';
import logInOutReducer from './logInOutReducer.js';
import locationReducer from './locationReducer.js';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  startSession: logInOutReducer,
  endSession: logInOutReducer,
  coords: locationReducer
});