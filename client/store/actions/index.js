/////////////////////////////////////
/////////  AUTHENTICATION  /////////
////////////////////////////////////

export const START_SESSION = 'start_session';
export const startSession = (credentials) => async (dispatch, getState, api) => {
  const res = await api.post('/login', credentials)
  dispatch({
    type: START_SESSION,
    payload: res
  });
};

export const CREATE_USER = 'create_user';
export const createUser = (credentials) => async (dispatch, getState, api) => {
  const res = await api.post('/register', credentials)
  dispatch({
    type: CREATE_USER,
    payload: res
  });
};

export const END_SESSION = 'end_session';
export const endSession = () => async (dispatch, getState, api) => {
  const res = await api.post('/logout');
  dispatch({ type: END_SESSION });
};

/////////////////////////////////////
///////////////  User  /////////////
///////////////////////////////////

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

//////////////////////////////////////
//////////////// Map  ////////////////
/////////////////////////////////////
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
};

export const FIND_USERS = 'find_users';
export const findUsers = (coords) => async (dispatch, getState, api) => {

}

export const GET_DISTANCE_BETWEEN_USERS = 'get_distance_between_users';
export const getDistanceBetweenUsers = () => async (dispatch, getState, api) => {
  dispatch({
    type: GET_DISTANCE_BETWEEN_USERS,
    payload: res
  });
}

export const HIDE_MAP = 'hide_map';
export const SHOW_MAP = 'show_map';
export const showMap = () => async (dispatch, getState, api) => {
  dispatch({ type: SHOW_MAP });
};
export const hideMap = () => async (dispatch, getState, api) => {
  dispatch({ type: HIDE_MAP });
};

export const SET_RADIUS_IN_MILES = 'set_radius_in_miles';
export const setRadiusInMiles = (obj) => async (dispatch, getState, api) => {
  const res = await api.post('/mapradius', obj);
  dispatch({
    type: SET_RADIUS_IN_MILES,
    payload: res
  })
}
/////////////////////////////////////
////////////  Hashtags  ////////////
////////////////////////////////////
export const INCREMENT_HASHTAG = 'increment_hashtag';
export const DECREMENT_HASHTAG = 'decrement_hashtag';
export const FETCH_HASHTAGS = 'fetch_hashtags'
export const incrementHashtag = (hashtag) => async (dispatch, getState, api) => {
  const res = await api.post('/hashtag', hashtag);
  dispatch({
    type: INCREMENT_HASHTAG,
    payload: res
  });
};
export const decrementHashtag = () => async (dispatch, getState, api) => {
  const res = await api.patch('/hashtag');
  dispatch({
    type: DECREMENT_HASHTAG,
    payload: res
  });
};
export const fetchHashtags = () => async (dispatch, getState, api) => {
  const res = await api.get('/hashtag');
  dispatch({
    type: FETCH_HASHTAGS,
    payload: res
  });
};

//////////////////////////////////////
/////////////// Date  ////////////////
/////////////////////////////////////
export const GET_DATE = 'get_date';
export const getDate = () => (dispatch, getState, api) => {
  dispatch({ type: GET_DATE });
};

//////////////////////////////////////
/////////////// Theme  ///////////////
/////////////////////////////////////
export const CHANGE_THEME_DARK = 'change_theme_dark';
export const CHANGE_THEME_LIGHT = 'change_theme_light';
export const toDarkMode = () => (dispatch, getState, api) => {
  dispatch({ type: CHANGE_THEME_DARK });
}
export const toLightMode = () => (dispatch, getState, api) => {
  dispatch({ type: CHANGE_THEME_LIGHT });
}

///////////////////////////////////
//////////  Navigation  //////////
//////////////////////////////////
export const SHOW_NAV = 'show_nav';
export const HIDE_NAV = 'hide_nav';
export const showNavigation = () => (dispatch, getState, api) => {
  dispatch({ type: SHOW_NAV });
}
export const hideNavigation = () => (dispatch, getState, api) => {
  dispatch({ type: HIDE_NAV });
}