import React from 'react';

const MyOrderItem = ({ myorder }) => {
  console.log(myorder);
  const { buyerName, category, phone, price, title, _id } = myorder;
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Price : ${price}</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
      <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      <div>
        <button
          type='submit'
          className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
        >
          Pay Now
        </button>
      </div>

    </div>
  );
};

export default MyOrderItem;