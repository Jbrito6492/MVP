import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { renderRoutes } from "react-router-config";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import Routes from "./Routes.js";
import reducers from "./store/reducers/index.js";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  compose(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
