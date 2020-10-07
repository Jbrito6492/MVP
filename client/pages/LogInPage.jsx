import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, startSession } from "../store/actions/index.js";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/header/Header.jsx";

const LogIn = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    username: "",
    password: "",
    joined: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(createUser(state));
    setState({ ...state, joined: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startSession());
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={state.joined ? handleLogin : handleJoin} className="form">
          <h1 className="center-align">Log In</h1>
          <input
            placeholder="username"
            name="username"
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
            {state.joined ? (
              <button
                onClick={handleLogin}
                className="btn waves-effect waves-light grey lighten-1"
                type="submit"
                name="action"
              >
                LogIn
              </button>
            ) : (
              <button
                onClick={handleJoin}
                className="btn waves-effect waves-light grey lighten-1"
                type="submit"
                name="action"
              >
                Join
              </button>
            )}
            {isAuthenticated ? <Redirect to="/home" /> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
