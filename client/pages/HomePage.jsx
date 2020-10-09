import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startSession } from "../store/actions/index.js";
import Room from "../components/room/Room.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Redirect } from "react-router-dom";
import Navigation from "../components/navigation/Navigation.jsx";
import s from "../css/app.css";
import withStyles from "isomorphic-style-loader/withStyles";

const HomePage = (props) => {
  const renderView = () => {
    return (
      <>
        <div>
          <div>
            <Navigation />
          </div>
          <div className={s.chatContainer}>
            <Room />
          </div>
        </div>
      </>
    );
  };
  return <div>{renderView()}</div>;
};

export default withStyles(s)(HomePage);
