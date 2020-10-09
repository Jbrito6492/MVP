import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { FaMoon, FaBars } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { CgPin } from "react-icons/cg";
import Map from "../map/Map.jsx";
import Slider from "../slider/Slider.jsx";
import { Link } from "react-router-dom";
import { SidebarData } from "../navigation/navigationData.js";
import withStyles from "isomorphic-style-loader/withStyles";
import { IconContext } from "react-icons";
import styled from "styled-components";
import n from "../../css/navbar.css";

const Navigation = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((preState) => !preState);
  };

  let nav = (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={n.navbar}>
          <ul>
            <li className={n.headerText}>
              <Link to="#" className={n.menuBars}>
                <FaBars onClick={showSidebar} />
              </Link>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? `${n.navMenu} ${n.active}` : `${n.navMenu}`}>
          <ul className={n.navMenuItems} onClick={showSidebar}>
            <li className={`${n.headerText} ${n.navbarToggle}`}>
              <Link to="#" className={n.menuBars}>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={n[item.cName]}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
  return <div>{nav}</div>;
};

export default withStyles(n)(Navigation);
