import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgPin } from "react-icons/cg";
import { FaMoon, FaBars } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {
  startSession,
  createUser,
  endSession,
  getLocation,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";
import { toDarkMode, toLightMode } from "../../store/actions/index.js";
import Navigation from "../navigation/Navigation.jsx";

import { SidebarData } from "../navigation/navigationData.js";

const Header = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="brand-logo">
            #<CgPin />
          </div>
          <ul id="nav-desktop" className="right hide-on-med-and-down">
            <li onClick={() => dispatch(toDarkMode())}>
              <a href="#">
                <FaMoon />
              </a>
            </li>
            <li onClick={() => dispatch(toLightMode())}>
              <a href="#">
                <RiLightbulbFlashLine />
              </a>
            </li>
            {!isAuthenticated && (
              <li>
                <Link to="/home" onClick={() => dispatch(startSession())}>
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/" onClick={() => dispatch(endSession())}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
