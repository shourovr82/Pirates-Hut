import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Pages/Homes/Home';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;