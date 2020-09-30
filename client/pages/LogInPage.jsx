import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logIn } from "../store/actions/index.js";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h1 className="center-align">Log In</h1>
          <input
            placeholder="username"
            name="user"
            type="text"
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleChange}
            required
          />
          <div className="center-align">
            <Link to="/">
              <button
                className="btn waves-effect waves-light red lighten-1"
                type="submit"
                name="action"
              >
                Join
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

function loadData(store) {
  return store.dispatch(logIn(creds));
}

export { loadData };
export default {
  component: connect(mapStateToProps, { logIn })(LogIn),
};
