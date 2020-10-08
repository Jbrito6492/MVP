import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { FaMoon } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";

const Navigation = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      const instances = M.Sidenav.init(elems, {});
    });
  }, []);

  const changeMode = () => {
    setD;
  };

  let nav = (
    <div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">example@gmail.com</span>
            </a>
          </div>
        </li>
        <li onClick={changeMode}>
          <a href="#!">
            <FaMoon /> Dark Mode
          </a>
        </li>
        <li>
          <a href="#!">
            <RiLightbulbFlashLine /> Light Mode
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
    </div>
  );
  return <div>{nav}</div>;
};

export default Navigation;
