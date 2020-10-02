import { START_SESSION } from '../actions/index.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_SESSION:
      return {
        user: action.payload.user,
        isAuthenticated: true
      }
    default:
      return state;
  }
}
