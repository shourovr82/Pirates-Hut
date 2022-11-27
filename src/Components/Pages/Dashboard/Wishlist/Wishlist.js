import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import WishlistItem from './WishlistItem';
import spinner from '../../../../Assets/loading.svg'

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleted, setDeleted] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true)
    if (user?.email) {
      fetch(`http://localhost:5000/wishlistitems/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setWishlistItems(data)
          setDeleted(false)
          setDataLoading(false)
        })
    }
  }, [user?.email, deleted])

  const handleDeleteWishlit = () => {
    setDataLoading(true)
    fetch(`http://localhost:5000/deletewishlist/${deleteConfirm._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        setDeleted(true)
        setDeleteConfirm(null)
        toast.success('Wishlist Deleted Successfull')
        setDataLoading(false)
      })



  }


  return (
    <div>

      <div className='flex justify-center'>
        {
          dataLoading &&
          <img src={spinner} className='w-80' alt="" />
        }
      </div>

      {
        wishlistItems.length > 0 ?
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead className='text-center'>
                <tr>
                  <th>Price</th>
                  <th>Product Title</th>
                  <th>Payment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                {wishlistItems &&
                  wishlistItems.map(wishlist => <WishlistItem
                    key={wishlist._id}
                    wishlist={wishlist}
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                  ></WishlistItem>)
                }

              </tbody>
            </table>
          </div>
          : ' No Orders  Added'

      }
      <>  {
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
                onClick={handleDeleteWishlit}
                className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
              >
                Delete Wishlist
              </button>
            </div>

          </div></>
      }</>
    </div >
  );
};

export default Wishlist;