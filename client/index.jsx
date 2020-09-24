import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'redux-thunk';
import Routes from './Routes.jsx';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const root = document.getElementById("root")

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, document.querySelector("#root"))