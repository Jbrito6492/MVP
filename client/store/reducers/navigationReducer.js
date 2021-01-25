import { SHOW_NAV, HIDE_NAV } from '../actions/index.js';

export default (state = false, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return true;
    case HIDE_NAV:
      return false;
    default:
      return state;
  }
}