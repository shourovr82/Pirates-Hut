import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import spinner from '../Assets/loading.svg'

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center'>
        <img src={spinner} className='w-80' alt="" />
      </div>
    )
  }
  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;