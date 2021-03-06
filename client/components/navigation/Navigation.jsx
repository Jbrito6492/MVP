import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { BsChatQuote } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SiOpenstreetmap } from "react-icons/si";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { endSession } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/navbar.css";

const Navigation = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const { room } = useSelector((state) => state.hashtags);
  const nav = (
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <nav>
          {isAuthenticated && (
            <ul>
              <li className={`${classes.navText} ${classes.navRow}`}>
                <Link to="/">
                  <div className={classes.reactIcon}>
                    <AiFillHome size={35} color={"#C38FFF"} />
                  </div>
                  <div>Home</div>
                </Link>
              </li>

              {room && (
                <li className={`${classes.navText} ${classes.navRow}`}>
                  <Link to="/main">
                    <div className={classes.reactIcon}>
                      <BsChatQuote size={35} color={"#C38FFF"} />
                    </div>
                    <div>Chat</div>
                  </Link>
                </li>
              )}

              <li className={`${classes.navText} ${classes.navRow}`}>
                <Link to="/" onClick={() => dispatch(endSession())}>
                  <div className={classes.reactIcon}>
                    <HiOutlineLogout size={35} color={"#C38FFF"} />
                  </div>
                  <div>Log Out</div>
                </Link>
              </li>
            </ul>
          )}
          {!isAuthenticated && (
            <ul>
              <li className={`${classes.navText} ${classes.navRow}`}>
                <Link to="/signup">
                  <div className={classes.reactIcon}>
                    <IoMdCreate size={35} color={"#C38FFF"} />
                  </div>
                  <div>Sign Up</div>
                </Link>
              </li>
              <li className={`${classes.navText} ${classes.navRow}`}>
                <Link to="/login">
                  <div className={classes.reactIcon}>
                    <BiLogIn size={35} color={"#C38FFF"} />
                  </div>
                  <div>Log In</div>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </IconContext.Provider>
    </>
  );
  return <div className={classes.navContainer}>{nav}</div>;
};

export default withStyles(classes)(Navigation);
