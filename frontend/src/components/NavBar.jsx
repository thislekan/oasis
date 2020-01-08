import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeNav from './navigation/HomeNav';
import AuthNav from './navigation/AuthNav';

const NavBar = () => {
  const { pathname } = useLocation();

  if (pathname === '/login' || pathname === '/signup') return <AuthNav />;
  return <HomeNav hide={pathname.startsWith('/me') && true} />;
};

export default NavBar;
