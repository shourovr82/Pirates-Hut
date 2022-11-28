import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import SellerItem from './SellerItem';
import spinner from '../../../../Assets/loading.svg'


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
    return <div className='flex justify-center'><img src={spinner} alt="" /></div>
  }

  if (!isAdmin) {
    navigate('/')
  }

  return (
    <div className=''>
      {isLoading && <div className='flex justify-center'><img src={spinner} alt="" /></div>}
      {sellers.length === 0 && < h1 className='text-center text-3xl font-bold text-green-800'>No Seller Added </h1>}

      {
        sellers.length > 0 &&
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
      }

    </div >
  );
};

export default AllSellers;