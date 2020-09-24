import { LOG_IN } from '../actions/index.js';

export default (state = [], action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload.data;
    default:
      return state;
  }
}