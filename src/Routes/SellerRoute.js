import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/Contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({ children }) => {
  const { user, laoding } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (laoding || isSellerLoading) {
    return <p>Loading</p>
  }
  if (user && isSeller) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;