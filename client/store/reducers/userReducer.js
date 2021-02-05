import {
  START_SESSION,
  END_SESSION,
  CREATE_USER,
  FETCH_USERS
} from '../actions/index.js';

const initialState = {
  isAuthenticated: false,
  username: null,
  email: null,
  location: { lng: -34.397, lat: 150.644 },
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_SESSION:
      return {
        ...state, ...action.payload.data
      };
    case END_SESSION:
      return {
        isAuthenticated: false,
        username: null,
        email: null
      };
    case CREATE_USER:
      return {
        ...state, ...action.payload.data
      };
    case FETCH_USERS:
      return {
        ...state, ...action.payload, data
      }
    default:
      return state;
  }
}