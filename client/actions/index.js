import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/auth');
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}