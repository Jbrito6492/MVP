import { SET_HASHTAG } from "../actions/index.js";

export default (state = null, action) => {
  switch (action.type) {
    case SET_HASHTAG:
      return {
        ...state, ...action.payload.data
      };
    default:
      return state;
  };
};