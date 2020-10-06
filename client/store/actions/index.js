export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}

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
/////////////////////////////////////
/////////  AUTHENTICATION  /////////
////////////////////////////////////
export const LOGIN_REQUEST = 'login_request';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILURE = 'login_failure';
const requestLogIn = (credentials) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: true,
    isAuthenticated: false,
  }
};
const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const loginUser = (credentials) => {
  const { username, password } = credentials;
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${username}&password=${password}`
  }
  return dispatch => {
    dispatch(requestLogIn(credentials))
    axios.post('/auth', config)
      .then(response => ({ user, response }))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginFailure(user.message))
        } else {
          localStorage.setItem('id_token', user.id_token)
          localStorage.setItem('id_token', user.access_token)
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("error ", err))
  }
}

export const END_SESSION = 'end_session';
export const logOut = () => async (dispatch, getState, api) => {
  const res = await api.post('/logout');
  dispatch({
    type: END_SESSION,
    payload: res
  });
}