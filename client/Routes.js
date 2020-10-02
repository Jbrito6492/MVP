import React from 'react';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import Room from './components/room/Room.jsx';

export default [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true
      },
      {
        component: LogInPage,
        path: '/login'
      }
    ]
  }
];