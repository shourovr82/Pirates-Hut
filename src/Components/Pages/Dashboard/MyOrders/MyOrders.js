import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import MyOrderItem from './MyOrderItem';

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
      {
        myOrders.length > 0 ?
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
          : ' No Orders  Added'
      }
    </div >

  );
};

export default MyOrders;