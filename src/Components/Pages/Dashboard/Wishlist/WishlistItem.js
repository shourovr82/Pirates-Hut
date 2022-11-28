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
            </button> : <Link className=' disabled:bg-slate-400 text-center disabled:cursor-context-menu w-full  flex cursor-pointer justify-center items-center  gap-2 mt-2 py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-700 to-[#030850] border-0 hover:from-green-800 button-shadow button-color hover:to-[#050614fb]' to={`/dashboard/checkout/${_id}`}
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