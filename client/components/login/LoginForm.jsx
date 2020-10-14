import React, { useState, useEffect } from "react";
import classes from "../../css/chatform.css";
import withStyles from "isomorphic-style-loader/withStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createUser, startSession } from "../../store/actions/index.js";

const LoginForm = (props) => {
  const dispatch = useDispatch();
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
    <>
      <div className={classes.chatFormContainer}>
        <form
          className={classes.chatForm}
          onSubmit={state.joined ? handleLogin : handleJoin}
        >
          <h1>Login</h1>
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
          <div>
            {state.joined ? (
              <button onClick={handleLogin} type="submit">
                LogIn
              </button>
            ) : (
              <button onClick={handleJoin} type="submit">
                Join
              </button>
            )}
            {props.isAuthenticated ? <Redirect to="/home" /> : null}
          </div>
        </form>
      </div>
      <div className={classes.footer}></div>
      <div className={classes.leftPane}></div>
    </>
  );
};

export default withStyles(classes)(LoginForm);
