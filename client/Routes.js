import React from 'react';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import Map from './components/map/Map.jsx';

export default [
  {
    component: App,
    routes: [
      {
        component: LogInPage,
        path: '/login'
      },
      {
        component: HomePage,
        path: '/home'
      }
    ]
  }
];