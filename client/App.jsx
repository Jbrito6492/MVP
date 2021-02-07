import React, { useEffect, Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getLocation, fetchHashtags } from "./store/actions";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "./css/app.css";
import isOnline from "is-online";
import Loadable from "react-loadable";

function App({ route }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  return (
    <div style={theme} className={classes.body}>
      {renderRoutes(route.routes)}
      {!isAuthenticated && <Redirect to="/" />}
    </div>
  );
}
const loadData = async () => {
  return await isOnline();
};

export default {
  component: withStyles(classes)(App),
  loadData,
};
