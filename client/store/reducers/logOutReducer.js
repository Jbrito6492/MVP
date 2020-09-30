import { END_SESSION } from '../actions/index.js';

export default (state = null, action) => {
  switch (action.type) {
    case END_SESSION:
      return action.payload.data
    default:
      return state;
  }
}