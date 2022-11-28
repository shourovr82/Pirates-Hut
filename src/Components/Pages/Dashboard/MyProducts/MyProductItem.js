import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';


const MyProductItem = ({ product, setDeleteConfirm }) => {
  const [advertisedItem, setAdvertisedItem] = useState('')
  const { title, price, category, email, availibility, paymentStatus } = product;
  const handleAddToAdvertise = (advertiseitem) => {
    fetch(`https://pirates-hut-server.vercel.app/addtoadvertise?id=${advertiseitem._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(advertiseitem)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Products Successfully added to Advertisement')
      })

  }

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {title}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {email}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">${price}</td>
      <td className="whitespace-nowrap px-4 py-2">
        <strong
          className="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700"
        >
          {product?.paymentStatus ? 'Sold' : availibility}
        </strong>
      </td>
      <td className="whitespace-nowrap px-4 py-2">
        <strong
          onClick={() => handleAddToAdvertise(product)}
          className="rounded  cursor-pointer hover:bg-green-700 bg-green-800 px-3 py-1.5 text-xs font-medium text-white"
        >{advertisedItem?.advertise ? advertisedItem.advertise : 'Add to Advertise'}
        </strong>
      </td>

      <td className="whitespace-nowrap px-2 py-2">
        <label
          onClick={() => setDeleteConfirm(product)}
          htmlFor="my-modal-3" className="  
      btn btn-sm hover:bg-red-600 btn-circle btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
      </td>
    </tr>

  );
};

export default MyProductItem;