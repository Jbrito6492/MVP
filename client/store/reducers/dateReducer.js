import dayjs from 'dayjs';
import { GET_DATE } from '../actions/index.js';

let now = dayjs();

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATE:
      return {
        ...state, date: now.format("h:mm:ss a")
      };
    default:
      return state;
  }
};