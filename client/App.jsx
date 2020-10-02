import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./store/actions/index.js";

@connect((store) => {
  return { auth: store.auth};
})
export default class App extends React.Component {
  render() {
    console.log(this.props.auth)
    return <div>{renderRoutes(this.props.route.routes)}</div>;
  }
}
