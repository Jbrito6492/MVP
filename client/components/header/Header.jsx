import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { incrementHashtag } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { showNavigation, hideNavigation } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/header.css";

const Header = ({ showNavMenu, isAuthenticated }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  const { lng: longitude, lat: latitude } = useSelector(
    (state) => state.coords
  );
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      incrementHashtag({ search, email, location: { longitude, latitude } })
    );
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
              <Link
                to="#"
                onClick={() =>
                  showNavMenu
                    ? dispatch(hideNavigation())
                    : dispatch(showNavigation())
                }
              >
                <FaBars size={35} color="#C38FFF" />
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default withStyles(classes)(Header);
