import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItems from './AdvertiseItems';

const Advertise = () => {
  const { data: advertiseItems = [], isLoading, refetch } = useQuery({
    queryKey: ['advertiseItems'],
    queryFn: () => fetch(`http://localhost:5000/advertisedItem`)
      .then(res => res.json())
  })
  console.log(advertiseItems);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className=" ">

            {advertiseItems.length > 0 &&
              advertiseItems.map(advertise =>
                <AdvertiseItems
                  key={advertise._id}
                  items={advertise}
                ></AdvertiseItems>
              )
            }

          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;