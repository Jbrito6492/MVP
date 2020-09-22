import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app/App.jsx';

export default () => {
  return (
    <div>
      <Route exact path='/' component={App} />
    </div>
  )
}