import React, { useState, useEffect } from "react";
import classes from "../../css/loginForm.css";
import withStyles from "isomorphic-style-loader/withStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createUser, startSession } from "../../store/actions/index.js";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    password: "",
    isMember: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(createUser(state)).then(() => {
      setState({ ...state, isMember: true });
    });
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
          onSubmit={state.isMember ? handleLogin : handleSignUp}
        >
          <h1>Login</h1>
          <div className={classes.inputContainer}>
            <input
              placeholder="username"
              name="username"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.inputContainer}>
            <input
              placeholder="password"
              name="password"
              type="password"
              autoComplete="on"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {state.isMember ? (
              <button onClick={handleLogin} type="submit">
                LogIn
              </button>
            ) : (
              <button onClick={handleSignUp} type="submit">
                SignUp
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
