import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useSeller from '../../../../hooks/useSeller';
import DeleteMyProductModal from './DeleteMyProductModal';
import MyProductItem from './MyProductItem';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [myProducts, setMyProducts] = useState([])
  const [reload, setReload] = useState(false)
  const [isSeller, isSellerLoading] = useSeller(user?.email)

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
        .then(res => res.json())
        .then(result => {
          setMyProducts(result)
          setReload(false)
        })
    }


  }, [user?.email, reload])

  if (isSellerLoading) {
    return <p>Laoding</p>
  }
  if (!isSeller) {
    Navigate('/')
  }


  //  delete my product


  const handleDeleteProduct = (deleteConfirm) => {
    console.log(deleteConfirm);

    fetch(`http://localhost:5000/deletemyproduct/${deleteConfirm._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Successfully deleted Seller')
        setDeleteConfirm(null)
        setReload(true)
        // fetch
        if (data?.acknowledged) {
          fetch(`http://localhost:5000/deleteadvertiseproduct/${user?.email}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
            })
        }


      })
  }



  return (
    <div>

      {
        myProducts?.length > 0 &&
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>

                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    Product Name

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    Email

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    Price
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Status
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Advertisement
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                >
                  Delete
                </th>
              </tr>
            </thead>





            <tbody className="divide-y divide-gray-200">

              {
                myProducts.map(myProduct => <MyProductItem
                  key={myProduct._id}
                  setDeleteConfirm={setDeleteConfirm}
                  product={myProduct}
                ></MyProductItem>)
              }


            </tbody>
          </table>
          {
            deleteConfirm && <DeleteMyProductModal
              deleteConfirm={deleteConfirm}
              setDeleteConfirm={setDeleteConfirm}
              handleDeleteProduct={handleDeleteProduct}
            ></DeleteMyProductModal>
          }
        </div>
      }

    </div>
  );
};

export default MyProducts;