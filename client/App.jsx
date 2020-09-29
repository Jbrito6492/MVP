import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./store/actions/index.js";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}

export { loadData };
export default {
  component: connect(mapStateToProps, { fetchCurrentUser })(App),
};
