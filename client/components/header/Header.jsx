import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentUser,
  loginUser,
  logoutUser,
  getLocation,
} from "../../store/actions/index.js";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setAuth] = useState(true);

  // const isAuthenticated = useSelector((state) => state.auth);
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <a className="brand-logo">#Whats The Move?</a>
        <ul id="nav-desktop" className="right hide-on-med-and-down">
          <li>
            <Link to="/map">Map</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <Link to="/" onClick={() => console.log("login fn")}>
                Login
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/login" onClick={() => console.log("logout fn")}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
