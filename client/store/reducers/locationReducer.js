import { GET_LOCATION } from '../actions/index.js';

export default (state = { lng: 40.7, lat: 54 }, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  }
}