import React, { useState } from "react";
import classes from "../../css/loginForm.css";
import { createUser, startSession } from "../../store/actions";
import withStyles from "isomorphic-style-loader/withStyles";
import { Link } from "react-router-dom";

const AuthForm = ({
  handleSubmit,
  isAuthenticated,
  customText,
  buttonText,
  page,
}) => {
  const { token } = isAuthenticated;
  const [state, setState] = useState({
    username: "",
    email: "",
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
            e.preventDefault();
            handleSubmit(state);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              name="email"
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
          {page === "signup" && (
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
            </div>
          )}
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
          <div className={classes.buttoncontainer}>
            <Link
              to={page === "login" ? "/main" : "/login"}
              onClick={() => handleSubmit(state)}
            >
              <p className={`btn btn-primary ${classes.buttontext}`}>
                {buttonText}
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default withStyles(classes)(AuthForm);
