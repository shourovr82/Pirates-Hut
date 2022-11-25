import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../Assets/navlogo.png'
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { ImCross } from 'react-icons/im';
import './Navbar.css'
import { AuthContext } from '../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [backgroundnav, setBackgroundNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);




  const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.success('Successfully Logged Out')
        localStorage.removeItem('accessToken')
      })
      .catch(e => console.log(e))
  }






  const navMenu = [
    { id: 'home', title: 'Home', path: '/' },
    { id: 'features', title: 'Features', path: '/features' },
    { id: 'dashboard', title: 'Dashboard', path: '/dashboard' },
    { id: 'clients', title: 'Clients', path: '/clients' },
  ]

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundNav(true);
    }
    else {
      setBackgroundNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={`w-full flex transparent  ${backgroundnav ? 'newnavbar ' : 'bg-[#015469]'} py-2 justify-between items-center navbar`}>
      <img src={navlogo} alt="rexrox" className='w-[100px] h-[20px]' />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-10  '>
        {navMenu.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer  text-white `}
          >


            <Link to={`${nav.path}`}> {nav.title}</Link>

          </li>
        ))}
      </ul>

      {/* auth */}

      <ul className='list-none sm:flex hidden justify-end items-center  gap-3 mr-10 '>


        {user ? <button
          onClick={handleLogOut}
          className='text-white border px-2 rounded-md '>Log Out</button> : <li className='text-white'><Link to='/login'>Sign In</Link></li>}

      </ul>



      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className='w-[28px] h-[28px]'>{toggle ? < ImCross className='text-white text-3xl' /> : <TbAdjustmentsHorizontal className='text-white text-3xl' />}</button>
        <div className={`${toggle ? 'flex' : 'hidden mt-100'} p-6 bg-gradient-to-r from-[#08a6e4] to-[#020d27f3] absolute  top-20 right-0 mx-4 px-20 py-10 my-2 min-w[140px] rounded-xl menu `}>

          {/* mobile menu list */}

          <ul className='list-none flex flex-col justify-end items-center flex-1  '>
            {navMenu.map((nav, index) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer  text-white   ${index === navMenu.length - 1 ? 'mr-0' : 'mb-4'}`}
              >

                <Link to={`/${nav.id}`}> {nav.title}</Link>
              </li>
            ))}
            <div className='flex  rounded  py-2 gap-10'>
              <li onClick={() => setToggle((prev) => !prev)}>
                <Link to='/login' className='font-poppins font-normal  rounded-md cursor-pointer  text-white   mr-0 bg-red-600 px-5 py-3'> Login</Link>
              </li>
              <li
              ><Link className={`font-poppins font-normal cursor-pointer  border  bg-[#1d40dd65] px-5 py-3 text-white   mr-0`}> Profile</Link></li>

            </div>


          </ul>
        </div>
      </div>

    </div >
  );
};

export default Navbar;