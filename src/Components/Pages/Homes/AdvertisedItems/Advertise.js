import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItems from './AdvertiseItems';

const Advertise = () => {

  const { data: advertiseItems = [], isLoading, refetch } = useQuery({
    queryKey: ['advertiseItems'],
    queryFn: () => fetch(`https://pirates-hut-server.vercel.app/advertisedItem`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json()
      )
  })
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container md:px-5 py-24 mx-auto">
          <div className=" ">
            {advertiseItems.length > 0 &&

              <>
                <div>
                  <div className='flex justify-center'>
                    <img src="https://i.ibb.co/qBG7hvN/360-F-117638965-ial9r-AQOoso-S8-Kim-B829rf-Gzpump-ILWr-removebg-preview.png" alt="" />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  '>
                    {
                      advertiseItems.map(advertise =>
                        <AdvertiseItems
                          key={advertise._id}
                          items={advertise}
                        ></AdvertiseItems>
                      )
                    }
                  </div>

                </div>

              </>






            }

          </div>
        </div>
      </section >
    </div >
  );
};

export default Advertise;