import React from 'react';
import App from './App.jsx';
import loadable from "@loadable/component";
import HomePage from './pages/HomePage.jsx';

const AsyncLogInPage = loadable(() =>
  import("./pages/LogInPage.jsx")
);

const AsyncSignUpPage = loadable(() =>
  import("./pages/SignUpPage.jsx")
);

const AsyncUserPage = loadable(() =>
  import("./pages/UserPage.jsx")
);

export default [
  {
    ...App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true
      },
      {
        component: AsyncLogInPage,
        path: '/login'

      },
      {
        component: AsyncSignUpPage,
        path: '/signup'
      },
      {
        component: AsyncUserPage,
        path: '/main'
      }
    ]
  }
];