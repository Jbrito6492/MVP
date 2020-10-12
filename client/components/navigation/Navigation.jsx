import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { FaBars } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { CgPin } from "react-icons/cg";
import Map from "../map/Map.jsx";
import Slider from "../slider/Slider.jsx";
import { Link } from "react-router-dom";
import { SidebarData } from "../navigation/navigationData.js";
import { IconContext } from "react-icons";
import styled from "styled-components";
import withStyles from "isomorphic-style-loader/withStyles";
import n from "../../css/navbar.css";

const Navigation = (props) => {
  let nav = (
    <>
      <IconContext.Provider
        value={{ color: "#C38FFF" }}
      >
        <nav>
          <ul>
            {SidebarData.map((item, index) => (
              <li key={index} className={`${n[item.cName]} ${n.navRow}`}>
                <Link to={item.path}>
                  <div className={n.reactIcon}>{item.icon}</div>
                  <div>{item.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
  return <div className={n.navContainer}>{nav}</div>;
};

export default withStyles(n)(Navigation);
