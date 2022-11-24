import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import MyOrderItem from './MyOrderItem';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyOrders(data)
      })

  }, [user?.email])




  return (
    <div>
      <section className="text-gray-600 body-font">



        <div className="grid grid-cols-2 -m-4">

          {
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