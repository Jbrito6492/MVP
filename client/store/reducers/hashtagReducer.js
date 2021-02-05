import { INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS, NAVIGATE_TO_ROOM } from "../actions/index.js";

const initialState = { hashtags: [], room: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HASHTAG:
      const { hashtag: room } = action.payload.data
      const hashtags = state.hashtags.concat(room);
      return {
        ...state, hashtags, room
      };
    case DECREMENT_HASHTAG:
      return {
        ...state, hashtags: action.payload.data
      };
    case FETCH_HASHTAGS:
      return {
        ...state, hashtags: action.payload.data
      };
    case NAVIGATE_TO_ROOM:
      return {
        ...state, room: action.payload.data
      }
    default:
      return state;
  };
};