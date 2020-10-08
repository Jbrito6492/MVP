import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { GrMapLocation } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Map',
    path: '/',
    icon: <GrMapLocation />,
    className: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/',
    exact: true,
    icon: <HiOutlineLogout />,
    className: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/',
    icon: <FiSettings />,
    className: 'nav-text'
  },
]
