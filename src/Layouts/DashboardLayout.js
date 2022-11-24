import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col  gap-10 px-10 justify-center">

          <Outlet></Outlet>


          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>



        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  w-80 text-base-content bg-red-400">
            <ul className="menu p-4 w-80 text-base-content">
              <li><Link to="/dashboard/myorders">My Orders</Link></li>
              <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
              <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
              <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
              <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
            </ul>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;