import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { incrementHashtag, fetchHashtags } from "../../store/actions/index.js";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { showNavigation, hideNavigation } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/header.css";

const Header = ({ showNavMenu, isAuthenticated }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const { room } = useSelector((state) => state.hashtags);
  const { lng: longitude, lat: latitude } = useSelector(
    (state) => state.user.location
  );
  const [search, setSearch] = useState({ hashtag: "" });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      incrementHashtag({ search, email, location: { longitude, latitude } })
    )
      .then(() => {
        dispatch(fetchHashtags());
      })
      .catch((err) => console.log(err.message));

    setSearch({ ...search, hashtag: "" });
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <div className={classes.searchContainer}>
          {isAuthenticated && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={search.hashtag}
                placeholder="search"
                name="hashtag"
                onChange={handleChange}
              />
            </form>
          )}
        </div>
        <div className={classes.header}>
          <span>{room && <div>{`#${room}`}</div>}</span>
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
