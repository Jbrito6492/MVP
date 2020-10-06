import React from "react";
import { renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";
import { fetchCurrentUser } from "./store/actions/index.js";

function App({ route }) {
  return <div>{renderRoutes(route.routes)}</div>;
}

export default App;
