import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgPin } from "react-icons/cg";
import { FaMoon, FaBars } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash2 } from "react-icons/bs";
import {
  startSession,
  createUser,
  endSession,
  getLocation,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";
import { toDarkMode, toLightMode } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import h from "../../css/header.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={h.headerContainer}>
      <div className={h.searchContainer}>
        <input type="text" placeholder="search" />
      </div>
      <div className={h.header}>
        <span>Example Room</span>
        <div className={h.titleIconContainer}>
          <BsTrash2 className={h.chatTitleIcon} />
        </div>
      </div>
      <ul>
        <li className={h.headerText}>
          <Link to="#" className={h.menuBars}>
            <FaBars onClick={showSidebar} />
          </Link>
        </li>
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
  );
};

export default withStyles(h)(Header);
