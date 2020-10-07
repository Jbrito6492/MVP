import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logIn } from "../store/actions/index.js";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/header/Header.jsx";

const LogIn = (props) => {
  const [state, setState] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="center-align">Log In</h1>
          <input
            placeholder="username"
            name="name"
            type="text"
            onChange={handleChange}
            required
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          <div className="center-align">
            <button
              onClick={handleSubmit}
              className="btn waves-effect waves-light grey lighten-1"
              type="submit"
              name="action"
            >
              Join
            </button>
            {props.auth ? <Redirect to="/" /> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;