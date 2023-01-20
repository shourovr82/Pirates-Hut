import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import Navbar from '../Components/Shared/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {

    if (user?.email) {
      fetch(`https://pirates-hut-server.vercel.app/users?email=${user?.email}`)
        .then(res => res.json())
        .then(result => {
          setCurrentUser(result)
        })
    }

  }, [user?.email])



  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-end mt-2 mr-2'>
        <label htmlFor="my-drawer-2" className="btn border-emerald-700 text-black btn-outline  hover:bg-emerald-700   lg:hidden">Show Menu</label>
      </div>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col  gap-10 px-5 md:px-10 mt-10">
          {/* for load all components */}
          <Outlet></Outlet>


        </div>


        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu   w-80 md:bg-transparent bg-white text-base-content border-r-2 border-[#03250942]  ">
            <ul className="menu flex gap-3 justify-center  flex-col items-center   p-4 w-80 text-base-content">
              {
                currentUser[0]?.accountType === 'Buyer' && <>
                  <li><NavLink to="/dashboard/myorders"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }
                  >My Orders</NavLink></li>
                  <li><NavLink to="/dashboard/wishlist"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }

                  >My Wishlist</NavLink></li>
                </>
              }
              {
                currentUser[0]?.accountType === 'Seller' && <>
                  <li><NavLink to="/dashboard/myproducts"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }
                  >My Products</NavLink></li>
                  <li><NavLink to="/dashboard/addProduct"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }
                  >Add Product</NavLink></li>
                </>
              }
              {
                currentUser[0]?.accountType === 'Admin' && <>

                  <li>
                    <NavLink to="/dashboard/allsellers"

                      style={({ isActive }) =>
                        isActive
                          ? {
                            color: '#fff',
                            background: '#064e3b',
                          }
                          : { color: '#545e6f', background: '#f0f0f0' }
                      }
                    >All Sellers</NavLink></li>



                  <li><NavLink to="/dashboard/allbuyers"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }

                  >All Buyers</NavLink></li>
                  <li><NavLink to="/dashboard/allusers"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#fff',
                          background: '#064e3b',
                        }
                        : { color: '#545e6f', background: '#f0f0f0' }
                    }
                  >All Users</NavLink></li>
                </>
              }



            </ul>
          </ul>
        </div>
      </div>

    </div >
  );
};

export default DashboardLayout;