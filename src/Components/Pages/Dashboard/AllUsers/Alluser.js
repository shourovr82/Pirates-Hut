import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';

const Alluser = ({ refetch, users, setDeleteConfirm }) => {
  const { accountType, name, photoURL, verification, _id, email } = users;



  const handleUserVerify = () => {
    console.log(users);
    fetch(`http://localhost:5000/setaccounttype/${users?._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        toast.success('User Promoted to Admin')
        refetch()
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
          disabled={accountType === 'Admin'}
          className='flex disabled:cursor-not-allowed disabled:bg-white disabled:text-black disabled:pr-3 disabled:w-10/12 pr-3  gap-3  pl-3 items-center hover:bg-emerald-900 cursor-pointer    border  py-1 rounded bg-emerald-700 text-white  justify-center'  >

          {accountType === 'Admin' ? accountType : 'Make Admin'}

          <RiAdminFill className='text-2xl' /></button></td>

      <td>{accountType}</td>

      <td>
        <label disabled={accountType === 'Admin'}
          onClick={() => setDeleteConfirm(users)}
          htmlFor="my-modal-3" className="
      btn btn-sm hover:bg-red-600 btn-circle btn-outline
          "><MdOutlineClose className='text-2xl' /></label>
      </td>
      <td>{email}</td>


      <>
      </>





    </tr >
  );
};

export default Alluser;