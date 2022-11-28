import React from 'react';

const AdvertiseItems = ({ items }) => {

  const { advertise, availibility, category, condition, description, email, location, originalprice, phone, postdate, price, purchaseyear, title, image
  } = items;
  console.log(items);
  return (
    <div className="p-4 flex  mx-auto">
      <div className="h-full border-2 border-gray-200 border-opacity-60 bg-slate-50 rounded-lg overflow-hidden">
        <img className="h-72 w-[400px] object-cover object-center" src={image} alt="blog" />


        <div className="p-6 ">

          <div className="flex items-center  justify-between  ">
            <h1>Product Name : </h1>
            <span className="text-green-700 ">
              {title}
            </span>
          </div>
          <div className='flex justify-between'>

            <h2>Category : </h2>
            <h2> {category} </h2>

          </div>

          <div className='flex justify-between'>
            <h1>Price : </h1>      <p className="text-green-700  font-bold text-lg">
              $ {price}
            </p>
          </div>


          <div className='flex items-center justify-between'>
            <p className='text-xs'>       Post Date : </p>
            <p className='text-xs'>  {postdate}</p>
          </div>
          <div>
            <p className="leading-relaxed mt-2 border-t">{description}</p>
          </div>

        </div>
      </div>


    </div >

  );
};

export default AdvertiseItems;