import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { useSelector, useDispatch } from "react-redux";
import { startSession } from "./store/actions/index.js";

function App({ route }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startSession());
  }, []);

  return <div>{renderRoutes(route.routes)}</div>;
}

export default App;
