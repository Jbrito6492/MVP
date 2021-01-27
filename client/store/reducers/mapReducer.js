import { SHOW_MAP, HIDE_MAP, SET_RADIUS_IN_MILES } from '../actions/index.js';

const initialState = {
  showMap: false,
  radius: 20
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MAP:
      return { ...state, showMap: true }
    case HIDE_MAP:
      return { ...state, showMap: false }
    case SET_RADIUS_IN_MILES:
      return { ...state, ...action.payload.data }
    default:
      return state;
  }
}