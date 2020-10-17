import { INCREMENT_HASHTAG, DECREMENT_HASHTAG } from "../actions/index.js";

export default (state = null, action) => {
  switch (action.type) {
    case INCREMENT_HASHTAG:
      return {
        ...state, ...action.payload.data
      };
    case DECREMENT_HASHTAG:
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  };
};