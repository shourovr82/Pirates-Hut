import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import useSeller from '../hooks/useSeller';
import spinner from '../Assets/adminLoading.svg'

const SellerRoute = ({ children }) => {
  const { user, laoding } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (laoding || isSellerLoading) {
    return <div><img className='w-20' src={spinner} alt="" />
      <p className='text-green-700 font-bold animate-pulse'>Verifying Seller</p>
    </div>
  }
  if (user && isSeller) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;