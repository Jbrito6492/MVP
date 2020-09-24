import React from 'react';
import App from './components/app/App.jsx';
import UserList from './components/user_list/UserList.jsx';

export default [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/users',
    component: UserList.component
  }
];