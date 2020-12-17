import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createUser, startSession } from "../store/actions/index.js";
// import { Link, Redirect, Route } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../css/app.css";

const LogInPage = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className={classes.appContainer}>
      <Header />
      <LoginForm isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default withStyles(classes)(LogInPage);
