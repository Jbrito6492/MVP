import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "./store/actions";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "./css/app.css";

function App({ route }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  return (
    <div style={theme} className={classes.body}>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default {
  component: withStyles(classes)(App),
};
