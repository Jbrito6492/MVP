import React from 'react';
import App from './components/app/App.jsx';
import UserList, { loadData } from './components/user_list/UserList.jsx';

export default [
  {
    ...App,
    path: '/',
    exact: true
  },
  {
    ...UserList,
    loadData,
    path: '/users',
  }
];