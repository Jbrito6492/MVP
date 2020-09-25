import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/users')
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState) => {
  const res = await axios.get('http://localhost:5000/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}