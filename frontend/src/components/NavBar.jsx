import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeNav from './navigation/HomeNav';
import AuthNav from './navigation/AuthNav';
import LoggedInStudentNav from './navigation/LoggedInStudentNavbar';

const NavBar = () => {
  const { pathname } = useLocation();

  if (pathname === '/login' || pathname === '/signup') return <AuthNav />;
  if (pathname.startsWith('/me')) return <LoggedInStudentNav />;
  return <HomeNav />;
};

export default NavBar;
