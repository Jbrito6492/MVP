import { INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS } from "../actions/index.js";

const initialState = { activeHashtags: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HASHTAG:
      return {
        ...state, ...action.payload.data
      };
    case DECREMENT_HASHTAG:
      return {
        ...state, ...action.payload.data
      };
    case FETCH_HASHTAGS:
      return {
        ...state, ...action.payload.data
      };
    default:
      return state;
  };
};