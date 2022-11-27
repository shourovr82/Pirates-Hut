import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import SellerItem from './SellerItem';

const AllSellers = () => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);


  const { data: sellers = [], isLoading, refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: () => fetch('http://localhost:5000/allseller', {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  })

  if (isAdminLoading) {
    return <p>Loading</p>
  }

  if (!isAdmin) {
    navigate('/')
  }

  return (
    <div>
      {
        sellers.length > 0 ?
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>

                <tr className='text-center'>
                  <th>Photo</th>
                  <th>Seller Name</th>
                  <th>Verify</th>
                  <th>Account Type</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className='text-center'>

                {
                  sellers.map(seller => <SellerItem
                    key={seller._id}
                    seller={seller}
                    refetch={refetch}
                  ></SellerItem>)
                }

              </tbody>
            </table>
          </div>
          : ' No Sellers Added'
      }
    </div>
  );
};

export default AllSellers;