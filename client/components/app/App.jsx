import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../header/Header.jsx";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../redux/actions/index.js";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchCurrentUser();
  // }

  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

// function loadData(store) {
//   return store.dispatch(fetchCurrentUser());
// }

// export { loadData }
// export default {
//   component: connect(mapStateToProps, { fetchCurrentUser })(App)
// };
export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
