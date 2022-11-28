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
    <div className={`w-full flex transparent  ${backgroundnav ? 'newnavbar ' : 'bg-gradient-to-r from-green-700 to-[#030850]'} py-2 justify-between items-center navbar`}>
      <div className='w-[98%] mx-auto'>
        <Link to='/'>
          <img src={navlogo} alt="rexrox" className='w-[200px] h-[50px]  px-2' />
        </Link>
        <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-10  '>


          <li><Link className={`font-poppins font-normal cursor-pointer  text-white `} to='/'>Home</Link></li>
          <li><Link className={`font-poppins font-normal cursor-pointer  text-white `} to='/blogs'>Blogs</Link></li>
          {user?.email && <li><Link className={`font-poppins font-normal cursor-pointer  text-white `} to='/dashboard'>Dashboard</Link></li>}


        </ul>

        <ul className='list-none sm:flex hidden  justify-end items-center  gap-3 mr-10 '>


          {user ? <button
            onClick={handleLogOut}
            className='text-white bg-emerald-900 border-[#f5f8f613] border px-2 rounded-md py-0.5  '>Log Out</button> : <li className='text-white'><Link to='/login'>Sign In</Link></li>}

        </ul>

        <div className='sm:hidden  flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className='w-[28px] h-[28px]'>{toggle ? < ImCross className='text-white text-3xl' /> : <TbAdjustmentsHorizontal className='text-white text-3xl' />}</button>
          <div className={`${toggle ? 'flex' : 'hidden mt-100'} p-6 bg-gradient-to-r from-[#01531d] to-[#030d24f3] absolute  top-20 right-0 mx-4 px-28 z-10  py-10 my-2 min-w[140px] rounded-xl menu `}>

            {/* mobile menu list */}



            <ul className='list-none  sm:hidden flex flex-col justify-center items-center flex-1 gap-10  '>
              <li><Link className={`font-poppins font-normal cursor-pointer  border text-white `} to='/'>Home</Link></li>
              <li><Link className={`font-poppins font-normal cursor-pointer  border text-white `} to='/blogs'>Blogs</Link></li>
              {user?.email && <li cl><Link className={`font-poppins font-normal border cursor-pointer  text-white `} to='/dashboard'>Dashboard</Link></li>}
              {user ? <button
                onClick={handleLogOut}
                className='text-white bg-emerald-900 border-[#f5f8f613] border px-2 rounded-md py-0.5  '>Log Out</button> : <li className='text-white border rounded-full'><Link to='/login'>Sign In</Link></li>}



            </ul>




          </div>
        </div>


      </div>





      {/* auth */}


    </div >
  );
};

export default Navbar;