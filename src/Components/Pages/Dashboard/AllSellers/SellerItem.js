import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';


const SellerItem = ({ seller, refetch }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const { name, photoURL, accountType, verification } = seller;


  const handleDeleteSeller = () => {

    fetch(`https://pirates-hut-server.vercel.app/deleteseller/${seller._id}`, {
      method: 'DELETE',
      headers: {}
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        toast.success('Successfully deleted Seller')
      })
  }

  const handleUserVerify = () => {
    fetch(`https://pirates-hut-server.vercel.app/verifyuser/${seller._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        fetch(`https://pirates-hut-server.vercel.app/verifyuserproducts/${seller?.email}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Veified')
          })

      })




  }

  return (
    <tr>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL ? photoURL : 'https://i.ibb.co/CMCR0zs/images.png'} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}
      </td>
      <td
        className='flex justify-center  items-center mt-2'
      >
        <button
          onClick={handleUserVerify}
          disabled={verification}
          className='flex disabled:cursor-not-allowed w-2/3 gap-3  pl-3 items-center hover:bg-emerald-900 cursor-pointer    border  py-1 rounded bg-emerald-700 text-white  justify-center'  >{verification ? verification : 'Verify Now'}  <RiAdminFill className='text-2xl' /></button></td>

      <td>{accountType}</td>

      <th>

        <label
          onClick={() => setDeleteConfirm(seller)}
          htmlFor="my-modal-3" className="  
      btn btn-sm hover:bg-red-600 btn-circle btn-outline
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