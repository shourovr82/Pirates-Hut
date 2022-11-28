import React from 'react';

const Banner = () => {
  return (
    <div className='  h-[105vh]'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex  justify-center items-center mt-28 text-center'>


        <div className='flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-6xl font-bold  text-[#0dc167]'>Experience Personalized  <br />Online Shopping in Bangladesh </h2>
          <h2 className='text-5xl text-white  font-semibold'>for Second Hand Products</h2>
          <p className='text-2xl text-slate-400 '>Fully Trustable with money back guraantee with our Trustable Seller</p>
          <button type="button" className=" px-10 py-2 rounded-full bg-gradient-to-r from-green-400 to-black/0 hover:from-black/10 hover:to-green-700 text-white font-semibold text-lg button-color button-shadow ">
            See Products
          </button>
        </div>

      </div>

    </div>
  );
};

export default Banner;