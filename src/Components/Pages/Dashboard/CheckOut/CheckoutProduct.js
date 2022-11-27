import React from 'react';

const CheckoutProduct = ({ item }) => {
  const { image, title, color, brand, price, sellername
  } = item;
  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-start">
        <img
          alt="Trainer"
          src={image}
          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
        />

        <div className="ml-4">
          <p className="text-sm">{title}</p>

          <dl className="mt-1 space-y-1 text-xs text-gray-500">
            <div>
              <dt className="inline">Color : </dt>
              <dd className="inline">{color}</dd>
            </div>

            <div>
              <dt className="inline">Brand : </dt>
              <dd className="inline">{brand}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className='text-end'>
        <p className="text-xl font-bold text-emerald-700 hover:text-2xl">
          ${price}
          <small className="text-gray-500 text-sm font-thin"> x1</small>
        </p>
        <p className="text-xs">
          Seller Name : {sellername}

        </p>
      </div>
    </li>
  );
};

export default CheckoutProduct;