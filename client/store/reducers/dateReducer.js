import dayjs from 'dayjs';
import { GET_DATE } from '../actions/index.js';

let now = dayjs();

export default (state = Date.now(), action) => {
  switch (action.type) {
    case GET_DATE:
      return now.format("h:mm:ss a");
    default:
      return state;
  }
};