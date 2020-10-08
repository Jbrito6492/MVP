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
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #060b26;
  height: 80px
  display: flex;
  justify-content: start;
  align-items: center;
`;

const MenuBars = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

const NavMenu = styled.div`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
`;

const Navigation = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let nav = (
    <div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu hidden"}>
        <ul className={"nav-menu-items"}>
          <li>
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.className}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
  return <div className="navbar">{nav}</div>;
};

export default Navigation;
