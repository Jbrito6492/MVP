import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logIn } from "../store/actions/index.js";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/header/Header.jsx";

@connect((store) => {
  return {
    startSession: store.startSession,
  };
})
export default class LogIn extends React.Component {
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
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.dispatch(logIn(this.state));
  }

  render() {
    return (
      <div>
        <Header />
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
              <button
                className="btn waves-effect waves-light grey lighten-1"
                type="submit"
                name="action"
              >
                Join
              </button>
              {this.props.startSession.isAuthenticated ? (
                <Redirect to="/" />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
