import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import AllBuyerItem from './AllBuyerItem';
import spinner from '../../../../Assets/loading.svg'

const AllBuyers = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const { data: buyers = [], isLoading, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: () => fetch('https://pirates-hut-server.vercel.app/allbuyers', {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  })

  if (isAdminLoading) {
    return <div className='flex justify-center'><img src={spinner} alt="" /></div>
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
          : <h1 className='text-center text-2xl text-green-800 font-bold '>No Buyers Found !! 😐😐</h1>
      }
    </div>
  );
};

export default AllBuyers;