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
            console.log(data);
            setMyOrders(data)
          }
        })
    }



  }, [user?.email])




  return (
    <div>
      <section className="text-gray-600 body-font">



        <div className="grid grid-cols-2 -m-4">

          {myOrders &&
            myOrders.map(myorder => <MyOrderItem
              key={myorder._id}
              myorder={myorder}
            ></MyOrderItem>)
          }







        </div>
      </section>
    </div>
  );
};

export default MyOrders;