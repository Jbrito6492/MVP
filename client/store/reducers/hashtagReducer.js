import { INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS } from "../actions/index.js";

export default (state = {}, action) => {
  switch (action.type) {
    case INCREMENT_HASHTAG:
      return {
        ...state, ...action.payload
      };
    case DECREMENT_HASHTAG:
      return {
        ...state, ...action.payload
      };
    case FETCH_HASHTAGS:
      return {
        ...state, ...action.payload.data
      };
    default:
      return state;
  };
};