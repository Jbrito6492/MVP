import { SHOW_MAP, HIDE_MAP } from '../actions/index.js';

export default (state = false, action) => {
  switch (action.type) {
    case SHOW_MAP:
      return true;
    case HIDE_MAP:
      return false;
    default:
      return state;
  }
}