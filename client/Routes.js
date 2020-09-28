import React from 'react';
import App from './components/app/App.jsx';
import Home from './components/home/Home.jsx';
import LogIn from './components/log_in/LogIn.jsx';
import ChatRoom from './components/chatroom/ChatRoom.jsx';

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
        component: ChatRoom,
        path: '/chat'
      }
    ]
  }
];