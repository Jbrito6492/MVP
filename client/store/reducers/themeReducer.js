import { CHANGE_THEME_DARK, CHANGE_THEME_LIGHT } from '../actions/index.js';

const initialTheme = {
  backgroundColor: '#FFF',
  color: '#333'
}

export default (state = initialTheme, action) => {
  switch (action.type) {
    case CHANGE_THEME_DARK:
      return {
        ...state, backgroundColor: '#333',
        color: '#FFF'

      };
    case CHANGE_THEME_LIGHT:
      return {
        ...state, backgroundColor: '#FFF',
        color: '#333'
      }
    default:
      return state;
  }
}
