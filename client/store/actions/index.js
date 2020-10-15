export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
};

export const GET_LOCATION = 'get_location';
export function getLocation() {
  return dispatch => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition((position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      dispatch({
        type: GET_LOCATION,
        payload: { lat, lng }
      });
    });
  };
}


export const HIDE_MAP = 'hide_map';
export const SHOW_MAP = 'show_map';
export const showMap = () => async (dispatch, getState, api) => {
  dispatch({ type: SHOW_MAP });
};
export const hideMap = () => async (dispatch, getState, api) => {
  dispatch({ type: HIDE_MAP });
};




export const CHANGE_THEME_DARK = 'change_theme_dark';
export const CHANGE_THEME_LIGHT = 'change_theme_light';
export const toDarkMode = () => (dispatch, getState, api) => {
  dispatch({ type: CHANGE_THEME_DARK });
}
export const toLightMode = () => (dispatch, getState, api) => {
  dispatch({ type: CHANGE_THEME_LIGHT });
}
/////////////////////////////////////
/////////  AUTHENTICATION  /////////
////////////////////////////////////
export const START_SESSION = 'start_session';
export const startSession = () => async (dispatch, getState, api) => {
  const res = await api.get('/authenticate')
  dispatch({
    type: START_SESSION,
    payload: res
  })
}

export const CREATE_USER = 'create_user';
export const createUser = (credentials) => async (dispatch, getState, api) => {
  const res = await api.post('/authenticate', credentials)
  dispatch({
    type: CREATE_USER,
    payload: res
  })
}

export const END_SESSION = 'end_session';
export const endSession = () => (dispatch, getState, api) => {
  dispatch({ type: END_SESSION });
}