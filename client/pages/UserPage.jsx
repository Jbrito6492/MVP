import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import ConversationList from "../components/room/ConversationList.jsx";
import Room from "../components/room/Room.jsx";
import Footer from "../components/footer/Footer.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../css/app.css";

const UserPage = (props) => {
  const showNavigation = useSelector((state) => state.nav);
  const { showMap } = useSelector((state) => state.map);
  const { isAuthenticated, username } = useSelector((state) => state.auth);
  return (
    <>
      <div className={classes.appContainer}>
        <Header
          showNavMenu={showNavigation}
          isAuthenticated={isAuthenticated}
        />
        {showNavigation ? (
          <Navigation isAuthenticated={isAuthenticated} />
        ) : (
          <ConversationList />
        )}
        {isAuthenticated && <Room username={username} />}
      </div>
    </>
  );
};

function loadData() {
  console.log("data from user page loading");
}

export default { component: withStyles(classes)(UserPage), loadData };
