import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import spinner from '../Assets/loading.svg'

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <img src={spinner} className='w-60' alt="" />
        <p className='text-green-700 font-bold animate-pulse'>Verifying User</p>
      </div>
    )
  }
  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;