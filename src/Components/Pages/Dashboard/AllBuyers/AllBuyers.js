import { useQuery } from '@tanstack/react-query';
import React from 'react';

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

                {/* {
                  sellers.map(seller => <SellerItem
                    key={seller._id}
                    seller={seller}
                    refetch={refetch}
                  ></SellerItem>)
                } */}

              </tbody>
            </table>
          </div>
          : ' No Sellers Added'
      }
    </div>
  );
};

export default AllBuyers;