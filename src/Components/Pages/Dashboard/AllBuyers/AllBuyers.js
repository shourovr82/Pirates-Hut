import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyerItem from './AllBuyerItem';

const AllBuyers = () => {


  const { data: buyers = [], isLoading, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: () => fetch('http://localhost:5000/allbuyers')
      .then(res => res.json())
  })


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