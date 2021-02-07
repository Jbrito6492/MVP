import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import Room from "../components/room/Room.jsx";
import Footer from "../components/footer/Footer.jsx";
import Loadable from "react-loadable";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../css/app.css";

const AsyncConversationList = Loadable({
  loader: () => import("../components/room/ConversationList.jsx"),
  loading() {
    return <Navigation />;
  },
});

const UserPage = (props) => {
  const showNavigation = useSelector((state) => state.nav);
  const { isAuthenticated, username } = useSelector((state) => state.user);
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
          <AsyncConversationList />
        )}
        {isAuthenticated && <Room username={username} />}
      </div>
    </>
  );
};


export default withStyles(classes)(UserPage);
