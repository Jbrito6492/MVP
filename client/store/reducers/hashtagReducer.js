import { INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS } from "../actions/index.js";

const initialState = { hashtags: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HASHTAG:
      const hashtags = state.hashtags.concat(action.payload.data);
      return {
        ...state, hashtags
      };
    case DECREMENT_HASHTAG:
      return {
        ...state, hashtags: action.payload.data
      };
    case FETCH_HASHTAGS:
      return {
        ...state, hashtags: action.payload.data
      };
    default:
      return state;
  };
};