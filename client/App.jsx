import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { startSession } from "./store/actions/index.js";

function App({ route }) {
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

  return <div style={theme}>{renderRoutes(route.routes)}</div>;
}

export default App;
