import React, { useContext } from 'react';
import errorphoto from '../../Assets/error1.png'
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.success('Successfully Logged Out')
        localStorage.removeItem('accessToken')
        navigate('/')
      })
      .catch(e => console.log(e))
  }



  return (
    <div className='bg-gradient-to-r from-green-700 to-[#030850] h-[100vh]'>
      <br />
      <br />
      <br />
      <div className='grid grid-cols-2 justify-center  items-center '>
        <img src={errorphoto} className='w-[800px]' alt="" />
        <div>
          <h2 className='text-9xl font-bold text-white '>404</h2>
          <h2 className='text-4xl font-bold text-slate-300 '>Not Found </h2>
          <h2 className='text-4xl font-bold text-white pb-10 '>Something Went Wrong</h2>

          <div className=''>
            <button onClick={handleLogOut} type="submit" className=" flex gap-2 items-center mt-2 py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-700 to-[#030850] border-0 px-10 hover:from-green-800 button-shadow button-color hover:to-[#050614fb]">
              Click Here To Log Out   <FaArrowRight />
            </button>
          </div>

        </div>

      </div>
    </div >
  );
};

export default ErrorPage;