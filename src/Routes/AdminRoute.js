import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import spinner from '../Assets/adminLoading.svg'

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div><img className='w-20' src={spinner} alt="" />
      <p className='text-green-700 font-bold animate-pulse'>Verifying Admin</p>
    </div>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;