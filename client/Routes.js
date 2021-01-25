import React from 'react';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import UserPage from './pages/UserPage.jsx';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...LogInPage,
        path: '/login'

      },
      {
        ...SignUpPage,
        path: '/signup'
      },
      {
        ...UserPage,
        path: '/main'
      }
    ]
  }
];