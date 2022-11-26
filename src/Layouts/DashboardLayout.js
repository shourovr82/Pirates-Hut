import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import Navbar from '../Components/Shared/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {

    if (user?.email) {
      fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(result => {
          setCurrentUser(result)
        })
    }

  }, [user?.email])



  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col  gap-10 px-10 mt-10">

          <Outlet></Outlet>

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>


        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  w-80 text-base-content bg-red-400">
            <ul className="menu flex flex-col items-center   p-4 w-80 text-base-content">
              {
                currentUser[0]?.accountType === 'Buyer' && <>
                  <li><Link to="/dashboard/myorders">My Orders</Link></li>
                </>
              }
              {
                currentUser[0]?.accountType === 'Seller' && <>
                  <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                  <li><Link to="/dashboard/myproducts">My Products</Link></li>
                </>
              }
              {
                currentUser[0]?.accountType === 'Admin' && <>
                  <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                  <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                  <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                  <li><Link to="/dashboard/allusers">All Users</Link></li>
                </>
              }



            </ul>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;