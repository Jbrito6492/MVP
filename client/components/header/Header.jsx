import React from "react";
import { connect } from "react-redux";
import {
  fetchCurrentUser,
  logOut,
  getLocation,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";

@connect((store) => {
  return {
    auth: store.auth,
  };
})
// change this to functional component with hooks and use withRouter
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.header = this.header.bind(this);
    this.loading = this.loading.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidUpdate() {
    this.props.dispatch(fetchCurrentUser());
  }

  header(button) {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a className="brand-logo">#Whats The Move?</a>
          <ul id="nav-desktop" className="right hide-on-med-and-down">
            <li>
              <Link
                to="/map"
                onClick={() => this.props.dispatch(getLocation())}
              >
                Map
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => this.props.dispatch(logOut())}>
                {button}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  loading() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="" className="brand-logo">
            #Whats The Move?
          </a>
          <ul id="nav-desktop" className="right hide-on-med-and-down">
            <li>
              <a>...Loading</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  renderView() {
    const { auth } = this.props;
    if (auth === null) {
      return this.loading();
    } else if (auth === false) {
      return this.header("LogIn");
    } else {
      console.log(auth);
      return this.header("LogOut");
    }
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}
