import React from "react";
import Map from "../map/Map.jsx";
import Slider from "../slider/Slider.jsx";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SiOpenstreetmap } from "react-icons/si";
import { Link, Redirect } from "react-router-dom";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { endSession } from "../../store/actions/index.js";
import withStyles from "isomorphic-style-loader/withStyles";
import n from "../../css/navbar.css";

const Navigation = (props) => {
  const dispatch = useDispatch();

  let nav = (
    <>
      <IconContext.Provider value={{ color: "#C38FFF" }}>
        <nav>
          <ul>
            <li className={`${n.navText} ${n.navRow}`}>
              <Link to="/home">
                <div className={n.reactIcon}>
                  <AiFillHome />
                </div>
                <div>Home</div>
              </Link>
            </li>
            <li className={`${n.navText} ${n.navRow}`}>
              <Link to="/">
                <div className={n.reactIcon}>
                  <SiOpenstreetmap />
                </div>
                <div>Map</div>
              </Link>
            </li>
            <li className={`${n.navText} ${n.navRow}`}>
              <Link to="/login" onClick={() => dispatch(endSession())}>
                <div className={n.reactIcon}>
                  <HiOutlineLogout />
                </div>
                <div>Log Out</div>
              </Link>
            </li>
            <li className={`${n.navText} ${n.navRow}`}>
              <Link to="#">
                <div className={n.reactIcon}>
                  <RiLightbulbFlashLine />
                </div>
                <div>Light Mode</div>
              </Link>
            </li>
            <li className={`${n.navText} ${n.navRow}`}>
              <Link to="#">
                <div className={n.reactIcon}>
                  <FaMoon />
                </div>
                <div>Dark Mode</div>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
  return <div className={n.navContainer}>{nav}</div>;
};

export default withStyles(n)(Navigation);
