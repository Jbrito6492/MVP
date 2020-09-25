import React from 'react';
import App from './components/app/App.jsx';
import UserList, { loadData } from './components/user_list/UserList.jsx';

export default [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UserList.component
  }
];