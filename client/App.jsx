import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { Redirect } from "react-router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { startSession } from "./store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./css/app.css";

function App({ route }) {
  const dispatch = useDispatch();
  const { isAuthenticated, theme } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      theme: state.theme,
    }),
    shallowEqual
  );

  return (
    <div style={theme} className={s.body}>
      {renderRoutes(route.routes)}
      {!isAuthenticated ? <Redirect to="/login" /> : null}
    </div>
  );
}

export default withStyles(s)(App);
