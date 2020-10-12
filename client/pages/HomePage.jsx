import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startSession } from "../store/actions/index.js";
import Room from "../components/room/Room.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Redirect } from "react-router-dom";
import Navigation from "../components/navigation/Navigation.jsx";
import ConversationList from "../components/room/ConversationList.jsx";

import ReactCSSTransitionGroup from "react-transition-group";

import r from "../css/app.css";
import withStyles from "isomorphic-style-loader/withStyles";

const HomePage = (props) => {
  const renderView = () => {
    return (
      <>
        <div className={r.appContainer}>
          <Header />
          <ConversationList />
          <Room />
        </div>
      </>
    );
  };
  return <div>{renderView()}</div>;
};

export default withStyles(r)(HomePage);
