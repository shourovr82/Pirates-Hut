import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Alluser from './Alluser';
import { MdOutlineClose } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import useAdmin from '../../../../hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const { data: allusers = [], isLoading, refetch } = useQuery({
    queryKey: ['allusers'],
    queryFn: () => fetch('https://pirates-hut-server.vercel.app/allusers', {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  })

  if (isAdminLoading) {
    return <p>Loading</p>
  }

  if (!isAdmin) {
    navigate('/')
  }



  const handleDeleteUser = (deleteuser) => {

    fetch(` https://pirates-hut-server.vercel.app/deleteuser/${deleteuser._id}`, {
      method: 'DELETE',
      headers: {},
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDeleteConfirm(null)
        refetch();
      })

  }

  return (
    <div>
      {
        allusers.length > 0 ?
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>

                <tr className='text-center'>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Make Admin</th>
                  <th>Account Type</th>
                  <th>Delete</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className='text-center'>

                {
                  allusers.map(users => <Alluser
                    key={users._id}
                    setDeleteConfirm={setDeleteConfirm}
                    users={users}
                    refetch={refetch}
                  ></Alluser>)
                }

              </tbody>
            </table>
          </div>
          : ' No Users Added'
      }
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
                onClick={() => handleDeleteUser(deleteConfirm)}
                className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
              >
                Delete Seller
              </button>
            </div>
          </div></>
      }
    </div>
  );
};

export default AllUsers;