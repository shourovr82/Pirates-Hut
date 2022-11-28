import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import toast from 'react-hot-toast';

const MyOrderItem = ({ myorder, setLoading }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const {
    availability,
    buyerName,
    category,
    email,
    image,
    itemId,
    price,
    productId,
    sellername,
    title,
    paymentStatus
  } = myorder;
  console.log('inside my orderitem', myorder);

  const handleDeleteOrder = () => {
    fetch(`https://pirates-hut-server.vercel.app/deleteorder/${myorder._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        toast.success('Successfully deleted Seller')
      })
  }

  return (
    <>
      <tr className='text-center'>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image ? image : ''} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>$ {price}
        </td>
        <td>{title}
        </td>
        <td>

          {
            paymentStatus ? <button disabled={paymentStatus} className='block disabled:bg-slate-400 text-center disabled:cursor-not-allowed w-full rounded-lg bg-black p-2.5 text-sm text-white' title='Paid'>
              Paid
            </button> : <Link className=' disabled:bg-slate-400 text-center disabled:cursor-context-menu  flex cursor-pointer justify-center items-center w-full gap-2 mt-2 py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-700 to-[#030850] border-0 hover:from-green-800 button-shadow button-color hover:to-[#050614fb]' to={`/dashboard/checkout/${myorder.productId}`}
              type='submit'
            >

              {paymentStatus ? 'Paid' : 'Pay Now'}
            </Link>
          }

        </td>
        <th>

          <label
            onClick={() => setDeleteConfirm(myorder)}
            htmlFor="my-modal-3" className="  
      btn btn-circle btn-sm btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
        </th>
        <>
          {/* The button to open modal */}

        </>

      </tr>
      {
        deleteConfirm &&
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Are you sure want to delete ?</h3>
              <p className="py-4">if you delete you will never undo</p>
              <button
                type='submit'
                onClick={handleDeleteOrder}
                className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
              >
                Delete Order
              </button>
            </div>

          </div></>
      }
    </>


  );
};

export default MyOrderItem;