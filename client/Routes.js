import React from 'react';
import App from './components/app/App.jsx';
import UserList from './components/user_list/UserList.jsx';
import Home from './components/home/Home.jsx';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UserList,
        path: '/users'
      }
    ]
  }
];