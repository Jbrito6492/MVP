import React, { useState } from "react";
import classes from "../../css/loginForm.css";
import { createUser, startSession } from "../../store/actions";
import withStyles from "isomorphic-style-loader/withStyles";

const AuthForm = ({
  handleSubmit,
  isAuthenticated,
  customText,
  buttonText,
  children,
}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={`container-fluid ${classes.container}`}>
        <form
          className={classes.chatform}
          onSubmit={(e) => {
            e.preventDeafault();
            handleSubmit(state);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              required
            />
            <div id="emailHelp" className="form-text">
              <p>{customText}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.buttoncontainer}>{children}</div>
        </form>
      </div>
    </>
  );
};

export default withStyles(classes)(AuthForm);
