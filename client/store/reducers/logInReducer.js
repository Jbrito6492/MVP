import { SET_USER } from '../actions/index.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
        isAuthenticated: true
      }
    default:
      return state;
  }
}
