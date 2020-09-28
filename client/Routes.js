import React from 'react';
import App from './components/app/App.jsx';
import UserList from './components/user_list/UserList.jsx';
import Home from './components/home/Home.jsx';
import LogIn from './components/log_in/LogIn.jsx';

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
        ...LogIn,
        path: '/login'
      },
      {
        ...UserList,
        path: '/users'
      }
    ]
  }
];