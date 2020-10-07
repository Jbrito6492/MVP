import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startSession } from "../store/actions/index.js";
import Room from "../components/room/Room.jsx";
import UserList from "../components/user_list/UserList.jsx";
import Header from "../components/header/Header.jsx";
import { Redirect } from "react-router-dom";

const HomePage = (props) => {
  const renderView = () => {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <Room />
        </div>
      </div>
    );
  };
  return <div>{renderView()}</div>;
};

export default HomePage;
