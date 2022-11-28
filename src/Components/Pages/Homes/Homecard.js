import React from 'react';

const HomeCard = () => {
  return (
    <section className="m-4 md:m-8  text-gray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Built to empower every team</h2>
        <p className="text-gray-400">Libero minima optio qui</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Valentines' day sale</p>
            <p>Pirates flash sale</p>
            <p>Electronic Weak Sale</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Mega Deals</p>
            <p>Hot Deals</p>
            <p>Eid Shopping Fest</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Mobile Phones</p>
            <p>Camera</p>
            <p>Mobile accessories</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Earphone</p>
            <p>Laptops</p>
            <p>Led Tv</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Home appliance</p>
            <p>FANS</p>
            <p>Bikes</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Medicines</p>
            <p>Popular stores</p>
            <p>Trending Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;