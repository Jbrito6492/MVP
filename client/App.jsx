import React from "react";
import { renderRoutes } from "react-router-config";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "./css/app.css";

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
    <div style={theme} className={classes.body}>
      {renderRoutes(route.routes)}
    </div>
  );
}

function loadData() {
  console.log("data loading");
}

export default {
  component: withStyles(classes)(App),
  loadData,
};
