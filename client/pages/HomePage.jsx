import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { startSession } from "../store/actions/index.js";
import Room from "../components/room/Room.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Redirect } from "react-router-dom";
import Navigation from "../components/navigation/Navigation.jsx";

const HomePage = (props) => {
  const renderView = () => {
    return (
      <div>
        <div>
          <Header show={false} />
        </div>
        <Navigation />
        <div className="container">
          <Room />
        </div>
      </div>
    );
  };
  return <div>{renderView()}</div>;
};

export default HomePage;
