import React, { useState } from "react";
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
  incrementHashtag,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";
import {
  toDarkMode,
  toLightMode,
  showNavigation,
  hideNavigation,
} from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/header.css";

const Header = ({ showNavMenu, isAuthenticated }) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementHashtag(search));
    setSearch("");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <div className={classes.searchContainer}>
          {isAuthenticated && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="search"
                name="hashtag"
                onChange={handleChange}
              />
            </form>
          )}
        </div>
        <div className={classes.header}>
          <span></span>
          <div className={classes.headerIconContainer}>
            <div className={classes.headerIcon}>
              {isAuthenticated && (
                <Link
                  to="#"
                  onClick={() =>
                    showNavMenu
                      ? dispatch(hideNavigation())
                      : dispatch(showNavigation())
                  }
                >
                  <FaBars size={34} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default withStyles(classes)(Header);
