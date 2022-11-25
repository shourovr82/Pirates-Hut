import React from 'react';

const Banner = () => {
  return (
    <div className='  primary-bg mt-[-100px] h-[106vh]'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex  justify-center items-center mt-28 text-center'>


        <div className='flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-6xl font-bold  text-[#0dc167]'>The Ultimate Toolkit</h2>
          <h2 className='text-5xl text-white  font-semibold'>for Building Websites with WordPress</h2>
          <p className='text-2xl text-slate-400'>Made for WordPress Professionals. Perfect for Elementor. Perfect for WordPress.</p>
          <button type="button" className=" px-10 py-2 rounded-full bg-gradient-to-r from-green-400 to-black/0 hover:from-black/10 hover:to-green-700 text-white font-semibold text-lg button-color button-shadow ">
            Get Started
          </button>
        </div>

      </div>

    </div>
  );
};

export default Banner;