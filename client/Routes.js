import React from 'react';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import ChatRoom from './components/chatroom/ChatRoom.jsx';

export default [
  {
    component: App,
    routes: [
      {
        ...HomePage,
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