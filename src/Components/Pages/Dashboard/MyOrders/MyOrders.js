import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import MyOrderItem from './MyOrderItem';
import spinner from '../../../../Assets/loading.svg'

const MyOrders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (user?.email && accessToken) {

      fetch(`http://localhost:5000/myorders?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            logOut();
          }
          return res.json()
        })
        .then(data => {
          if (data) {
            setMyOrders(data)
            setLoading(false)
          }
        })
    }



  }, [user?.email, loading])




  return (

    <div>
      {loading &&
        <div className='flex justify-center '>
          <img src={spinner} alt="" />
        </div>
      }
      {
        myOrders.length > 0 &&
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead className='text-center'>
              <tr>
                <th>Photo</th>
                <th>Price</th>
                <th>Product Title</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {myOrders &&
                myOrders.map(myorder => <MyOrderItem
                  key={myorder._id}
                  setLoading={setLoading}
                  myorder={myorder}
                ></MyOrderItem>)
              }

            </tbody>
          </table>
        </div>
      }
      {myOrders.length === 0 && <h1 className='text-center font-bold text-green-800 text-2xl mt-10'>No Orders Added</h1>}
    </div >

  );
};

export default MyOrders;