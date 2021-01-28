import { GET_DISTANCE_BETWEEN_USERS } from "../actions/index.js";

export default (state = [], action) => {
  switch (action.type) {
    case GET_DISTANCE_BETWEEN_USERS:
      [...action.payload.data, ...state];
    default:
      return state;
  }
}