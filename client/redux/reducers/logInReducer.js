import { SET_USER } from '../actions/index.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
      }
    default:
      return state;
  }
}
