import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';



const SellerItem = ({ seller, refetch }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const { name, photoURL, accountType } = seller;


  const handleDeleteSeller = () => {
    console.log(seller);

    fetch(`http://localhost:5000/deleteseller/${seller._id}`, {
      method: 'DELETE',
      headers: {}
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        toast.success('Successfully deleted Seller')
      })
  }

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL ? photoURL : ''} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}
        <br />
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>{accountType}</td>
      <th>

        <label
          onClick={() => setDeleteConfirm(seller)}
          htmlFor="my-modal-3" className="  
      btn btn-circle btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
      </th>
      <>
        {/* The button to open modal */}


        {deleteConfirm &&
          <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Are you sure want to delete ?</h3>
                <p className="py-4">if you delete you will never undo</p>
                <button
                  type='submit'
                  onClick={handleDeleteSeller}
                  className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
                >
                  Delete Seller
                </button>
              </div>


            </div></>

        }


      </>





    </tr>


  );
};

export default SellerItem;