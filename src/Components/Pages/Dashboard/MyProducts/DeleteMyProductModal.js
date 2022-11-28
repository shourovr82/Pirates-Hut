import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DeleteMyProductModal = ({ deleteConfirm, setDeleteConfirm, handleDeleteProduct }) => {
  const navigate = useNavigate()


  // const handleDeleteSeller = () => {
  //   console.log(buyer);

  //   fetch(`https://pirates-hut-server.vercel.app/deletebuyer/${}`, {
  //     method: 'DELETE',
  //     headers: {}
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       refetch();
  //       toast.success('Successfully deleted Seller')
  //     })
  // }











  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Are you sure want to delete ?</h3>
          <p className="py-4">if you delete you won't undo</p>
          <button
            type='submit'
            onClick={() => handleDeleteProduct(deleteConfirm)}
            className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
          >
            Delete Product
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteMyProductModal;