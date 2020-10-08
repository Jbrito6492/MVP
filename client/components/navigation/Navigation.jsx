import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaMoon } from "react-icons/fa";

const Navigation = (props) => {
  useEffect(() => {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      const instances = M.Sidenav.init(elems, {});
    });
  }, []);

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
        <li>
          <a href="#!">
            <FaMoon /> Dark Mode
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
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
