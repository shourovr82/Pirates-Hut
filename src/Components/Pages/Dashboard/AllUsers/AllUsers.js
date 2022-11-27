import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Alluser from './Alluser';
import { MdOutlineClose } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

const AllUsers = () => {


  const { data: allusers = [], isLoading, refetch } = useQuery({
    queryKey: ['allusers'],
    queryFn: () => fetch('http://localhost:5000/allusers', {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  })
  console.log(allusers);




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
                    users={users}
                    refetch={refetch}
                  ></Alluser>)
                }

              </tbody>
            </table>
          </div>
          : ' No Users Added'
      }
    </div>
  );
};

export default AllUsers;