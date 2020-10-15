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
  setHashtag,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";
import { toDarkMode, toLightMode } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import h from "../../css/header.css";

const Header = ({ setShowNavigation, showNavigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);
  const [search, setSearch] = useState({});

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setHashtag(search));
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <div className={h.searchContainer}>
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
        <div className={h.header}>
          <span></span>
          <div className={h.headerIconContainer}>
            <div className={h.headerIcon}>
              {isAuthenticated && (
                <Link to="#" onClick={() => setShowNavigation(!showNavigation)}>
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

export default withStyles(h)(Header);
