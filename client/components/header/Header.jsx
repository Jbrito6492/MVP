import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgPin } from "react-icons/cg";
import { FaMoon, FaBars } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash2 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IconContext } from "react-icons";
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
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <div className={h.searchContainer}>
          <input type="text" placeholder="search" />
        </div>
        <div className={h.header}>
          <span>Example Room</span>
          <ul className={h.headerIconContainer}>
            <li className={h.headerIcon}>
              <Link to="#">
                <BsTrash2 />
              </Link>
            </li>
            <li className={h.headerIcon} onClick={() => dispatch(toDarkMode())}>
              <Link to="#">
                <FaMoon />
              </Link>
            </li>
            <li
              className={h.headerIcon}
              onClick={() => dispatch(toLightMode())}
            >
              <Link to="#">
                <RiLightbulbFlashLine />
              </Link>
            </li>
            {!isAuthenticated && (
              <li className={h.headerIcon}>
                <Link to="/home" onClick={() => dispatch(startSession())}>
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className={h.headerIcon}>
                <Link to="/" onClick={() => dispatch(endSession())}>
                  <HiOutlineLogout />
                </Link>
              </li>
            )}
            <li className={h.headerIcon}>
              <Link to="#">
                <FaBars onClick={showSidebar} />
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default withStyles(h)(Header);
