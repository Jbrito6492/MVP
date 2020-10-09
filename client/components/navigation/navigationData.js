import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaMoon } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SiOpenstreetmap } from "react-icons/si";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiFillHome />,
    cName: 'navText'
  },
  {
    title: 'Map',
    path: '/',
    icon: <SiOpenstreetmap />,
    cName: 'navText'
  },
  {
    title: 'Log Out',
    path: '/',
    exact: true,
    icon: <HiOutlineLogout />,
    cName: 'navText'
  },
  {
    title: 'Light Mode',
    path: '/',
    icon: <RiLightbulbFlashLine />,
    cName: 'navText'
  },
  {
    title: 'Dark Mode',
    path: '/',
    icon: <FaMoon />,
    cName: 'navText'
  },
]
