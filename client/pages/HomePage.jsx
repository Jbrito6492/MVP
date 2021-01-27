import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import ConversationList from "../components/room/ConversationList.jsx";
import Footer from "../components/footer/Footer.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Room from "../components/room/Room.jsx";
import Map from "../components/map/Map.jsx";
import classes from "../css/app.css";
import withStyles from "isomorphic-style-loader/withStyles";

const HomePage = (props) => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);
  const showMap = useSelector((state) => state.map);
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
          {showMap && <Map />}
          {!showMap && isAuthenticated && <Room username={username} />}
          {!showMap && !isAuthenticated && <Carousel />}
          {!isAuthenticated && <Footer />}
        </div>
      </>
    );
  };
  return <div>{renderView()}</div>;
};

export default {
  component: withStyles(classes)(HomePage),
};
