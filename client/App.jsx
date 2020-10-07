import React from "react";
import { renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";

function App({ route }) {
  return <div>{renderRoutes(route.routes)}</div>;
}

export default App;
