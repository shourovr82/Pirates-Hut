import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';


const WishlistItem = ({ wishlist, setDeleteConfirm }) => {

  const { email, price, title, _id, productId, category, paymentStatus } = wishlist;



  return (
    <>
      <tr className='text-center'>
        <td>$ {price}
        </td>
        <td>{title}
        </td>
        <td>

          {
            paymentStatus ? <button disabled={paymentStatus} className='block disabled:bg-slate-400 text-center disabled:cursor-not-allowed w-full rounded-lg bg-black p-2.5 text-sm text-white' title='Paid'>
              Paid
            </button> : <Link className='block disabled:bg-slate-400 text-center disabled:cursor-context-menu w-full rounded-lg bg-black p-2.5 text-sm text-white' to={`/dashboard/checkout/${_id}`}
              type='submit'
            >

              {paymentStatus ? 'Paid' : 'Pay Now'}
            </Link>
          }

        </td>
        <th>

          <label
            onClick={() => setDeleteConfirm(wishlist)}
            htmlFor="my-modal-3" className="  
      btn btn-circle btn-sm btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
        </th>
        <>
          {/* The button to open modal */}

        </>

      </tr>
    </>
  );
};

export default WishlistItem;