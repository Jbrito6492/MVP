import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import Footer from "../components/footer/Footer.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Room from "../components/room/Room.jsx";
import { fetchHashtags, getLocation } from "../store/actions";
import classes from "../css/app.css";
import withStyles from "isomorphic-style-loader/withStyles";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.user);
  const showNavigation = useSelector((state) => state.nav);

  const renderView = () => {
    return (
      <>
        <div className={classes.appContainer}>
          <Header
            showNavMenu={showNavigation}
            isAuthenticated={isAuthenticated}
          />
          <Navigation isAuthenticated={isAuthenticated} />
          <Carousel />
          <Footer />
        </div>
      </>
    );
  };
  return <div>{renderView()}</div>;
};

export default {
  component: withStyles(classes)(HomePage),
};
