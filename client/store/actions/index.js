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

export const START_SESSION = 'start_session';
export const logIn = (creds) => async (dispatch, getState, api) => {
  const res = await api.post('/login', creds);
  dispatch({
    type: START_SESSION,
    payload: creds
  })
}

export const END_SESSION = 'end_session';
export const logOut = () => async (dispatch, getState, api) => {
  const res = await api.post('/logout');
  dispatch({
    type: END_SESSION,
    payload: res
  })
}

// export const CONNECT_SOCKET = 'connect_socket':
// export const connectToSocket = () async (dispatch) => {
//   const res = await io.connect('http://localhost:5000');
//   dispatch({
//     type: CONNECT_SOCKET,
//     payload: res
//   })
// }