import { START_SESSION, END_SESSION } from '../actions/index.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_SESSION:
      return {
        ...initialState,
        user: action.payload.user,
        isAuthenticated: true
      }
    case END_SESSION:
      return {
        ...initialState,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state;
  }
}
