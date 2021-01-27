import React from "react";
import { renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "./css/app.css";

function App({ route }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme);

  return (
    <div style={theme} className={classes.body}>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default {
  component: withStyles(classes)(App),
};
