import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { startSession } from "./store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./css/app.css";

function App(props) {
  const dispatch = useDispatch();
  const { auth, theme } = useSelector(
    (state) => ({
      auth: state.auth,
      theme: state.theme,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(startSession());
  }, []);

  return (
    <div style={theme} className={s.body}>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default withStyles(s)(App);
