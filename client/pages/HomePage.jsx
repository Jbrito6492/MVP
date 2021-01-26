import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import ConversationList from "../components/room/ConversationList.jsx";
import Footer from "../components/footer/Footer.jsx";
import Carousel from "../components/carousel/Carousel.jsx";

import classes from "../css/app.css";
import withStyles from "isomorphic-style-loader/withStyles";

function HomePage(props) {
  const { isAuthenticated } = useSelector((state) => state.auth);
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
}

function loadData() {
  console.log("load data");
}

export default { component: withStyles(classes)(HomePage), loadData };
