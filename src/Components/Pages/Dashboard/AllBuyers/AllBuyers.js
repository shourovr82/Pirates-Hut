import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import AllBuyerItem from './AllBuyerItem';

const AllBuyers = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const { data: buyers = [], isLoading, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: () => fetch('http://localhost:5000/allbuyers', {
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
        buyers.length > 0 ?
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>

                <tr>
                  <th>Photo</th>
                  <th>Seller Name</th>
                  <th>Account Type</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                {
                  buyers.map(buyer =>
                    <AllBuyerItem
                      key={buyer._id}
                      buyer={buyer}
                      refetch={refetch}
                    >


                    </AllBuyerItem>


                  )

                }

              </tbody>
            </table>
          </div>
          : ' No Buyers  Added'
      }
    </div>
  );
};

export default AllBuyers;