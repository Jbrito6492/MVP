import {
  START_SESSION,
  END_SESSION,
  CREATE_USER
} from '../actions/index.js';

const initialState = {
  token: null,
  isAuthenticated: false,
  username: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_SESSION:
      return {
        ...state, ...action.payload.data, isAuthenticated: true
      };
    case END_SESSION:
      return {
        token: null,
        isAuthenticated: false,
        usename: null
      };
    case CREATE_USER:
      return {
        ...state, ...action.payload.data
      }
    default:
      return state;
  }
}