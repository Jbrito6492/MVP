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
        component: HomePage,
        path: '/',
        exact: true
      },
      {
        component: LogInPage,
        path: '/login'
      },
      // {
      //   component: Map,
      //   path: '/map'
      // }
    ]
  }
];