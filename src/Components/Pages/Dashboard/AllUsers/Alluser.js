import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

const Alluser = ({ refetch, users }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const { accountType, name, photoURL, verification, _id, email } = users;

  console.log(users);
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
          // onClick={handleUserVerify}
          disabled={accountType === 'Admin'}
          className='flex disabled:cursor-not-allowed disabled:bg-white disabled:text-black disabled:pr-3 disabled:w-10/12 pr-3  gap-3  pl-3 items-center hover:bg-emerald-900 cursor-pointer    border  py-1 rounded bg-emerald-700 text-white  justify-center'  >

          {accountType === 'Admin' ? accountType : 'Make Admin'}

          <RiAdminFill className='text-2xl' /></button></td>

      <td>{accountType}</td>

      <td>
        <label
          // onClick={() => setDeleteConfirm(seller)}
          htmlFor="my-modal-3" className="  
      btn btn-sm hover:bg-red-600 btn-circle btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
      </td>
      <td>{email}</td>


      {/* <> */}
      {/* The button to open modal


      {/* {deleteConfirm &&
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

        } */}


      {/* </> */}





    </tr >
  );
};

export default Alluser;