import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "../../css/authform.css";
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
      <Container className={classes.container} fixed>
        <form
          className={classes.chatform}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(state);
          }}
        >
          <Typography className={classes.label} component="h1" variant="h5">
            Email
          </Typography>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />

          {page === "signup" && (
            <>
              <Typography className={classes.label} component="h1" variant="h5">
                Username
              </Typography>
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                autoFocus
                onChange={handleChange}
                required
              />
            </>
          )}
          <Typography className={classes.label} component="h1" variant="h5">
            Password
          </Typography>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
            required
            fullWidth
          />
          <div className={classes.buttoncontainer}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                type="reset"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.buttontext}
              >
                Back
              </Button>
            </Link>
            <Link
              to={
                page === "login" ? (isAuthenticated ? "/main" : "/") : "/login"
              }
              onClick={() => handleSubmit(state)}
              style={{ textDecoration: "none" }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.buttontext}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </form>
      </Container>
    </>
  );
};

export default withStyles(classes)(AuthForm);
