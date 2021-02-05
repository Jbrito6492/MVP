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
import { ChakraProvider } from "@chakra-ui/react";
import StyleContext from "isomorphic-style-loader/StyleContext";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  compose(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

ReactDOM.hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <div>{renderRoutes(Routes)}</div>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>,
  document.querySelector("#root")
);
