import React, { useState } from "react";
import Header from "../components/header/Header.jsx";
import AuthForm from "../components/form/AuthForm.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Redirect } from "react-router-dom";
import { createUser } from "../store/actions";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../css/app.css";

const SignupPage = (props) => {
  const [customText, setCustomText] = useState(
    "We'll never share your info with anyone else."
  );
  const [buttonText, setButtonText] = useState("Sign Up");

  const handleSignup = (state) => {
    dispatch(createUser(state));
    <Redirect to="/login" />;
  };

  return (
    <div className={classes.appContainer}>
      <Header />
      <AuthForm
        isAuthenticated={isAuthenticated}
        customText={customText}
        buttonText={buttonText}
        handleSubmit={handleSignup}
        page="signup"
      >
        <button >Sign Up</button>
      </AuthForm>
      <Carousel />
      <Footer />
    </div>
  );
};

function loadData() {
  console.log("i am loading data");
}

export default {
  component: withStyles(classes)(SignupPage),
  loadData,
};
