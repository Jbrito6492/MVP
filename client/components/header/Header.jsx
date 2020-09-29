import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../store/actions/index.js";

const Header = ({ auth }) => {
  const renderView = () => {
    if (auth === null) {
      return (
        <div>...Loading</div>
      )
    } else if (auth === false) {
      return <button>LogIn</button>
    } else {
      return <button>LogOut</button>
    }
  }
return <div>{renderView()}</div>;
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}

export { loadData };
export default connect(mapStateToProps, { fetchCurrentUser })(Header);
