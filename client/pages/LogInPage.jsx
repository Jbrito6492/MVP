import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/Header.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import AuthForm from "../components/form/AuthForm.jsx";
import Footer from "../components/footer/Footer.jsx";
import { startSession } from "../store/actions";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../css/app.css";

const LogInPage = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [customText, setCustomText] = useState(
    "Thank you for being a part of our community."
  );
  const [buttonText, setButtonText] = useState("Sign In");

  const handleSignin = () => {
    dispatch(startSession());
  };

  return (
    <div className={classes.appContainer}>
      <Header />
      <AuthForm
        isAuthenticated={isAuthenticated}
        customText={customText}
        buttonText={buttonText}
        handleSubmit={handleSignin}
      >
        <Link to="/main">
          <button className="btn btn-primary">Sign In</button>
        </Link>
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
  component: withStyles(classes)(LogInPage),
  loadData,
};
