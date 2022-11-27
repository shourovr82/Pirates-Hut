import React from 'react';

const AdvertiseItems = ({ items }) => {

  const { advertise, availibility, category, condition, description, email, location, originalprice, phone, postdate, price, purchaseyear, title, image
  } = items;
  return (
    <div className="p-4 md:w-3/4 mx-auto">
      <div className="h-full border-2 border-gray-200 border-opacity-60 bg-slate-50 rounded-lg overflow-hidden">
        <img className="h-72 w-full object-cover object-center" src={image} alt="blog" />


        <div className="p-6 ">
          {/* <div className='flex justify-between'> */}
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category : {category}</h2> */}
          {/* <h1 className="title-font text-end text-lg font-medium text-gray-900 mb-3">{title}</h1> */}
          <p className="leading-relaxed mb-3">{description}</p>
          {/* </div> */}

          <div className="flex items-center  justify-between  ">

            <div>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category : {category}</h2>

            </div>


            <div className='flex justify-center flex-col items-center'>
              <h1 className="title-font text-end text-lg font-medium text-gray-900 ">Product Name : {title}</h1>
            </div>


          </div>

          <div className="flex items-center  justify-between  ">

            <div>
              <a className="text-indigo-500 border py-2 px-2 rounded inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>


            <div className='flex justify-center flex-col items-center'>
              <span className="text-green-700  inline-flex items-center lg:ml-auto md:ml-0 text-xl ml-auto leading-none  pr-3 py-1 ">
                Price : $ {price}
              </span>
              <span>
                Post Date : {postdate}
              </span>
            </div>


          </div>


        </div>
      </div>
    </div>

  );
};

export default AdvertiseItems;