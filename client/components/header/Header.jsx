import React from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../store/actions/index.js";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
  const header = (button) => (
    <nav>
      <div className="nav-wrapper red lighten-1">
        <a className="brand-logo">#WhatsTheMove?</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">{button}</a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const loading = () => (
    <nav>
      <div className="nav-wrapper">
        <a href="" className="brand-logo">
          Whats The Move?
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">...Loading</a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const renderView = () => {
    if (auth === null) {
      return loading();
    } else if (auth === false) {
      return header("LogIn");
    } else {
      return header("LogOut");
    }
  };

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
