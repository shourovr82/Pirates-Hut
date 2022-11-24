import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import MyProductItem from './MyProductItem';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setMyProducts(result)
      })
  }, [user?.email])





  return (
    <div>


      <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>

              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div class="flex items-center gap-2">
                  Product Name

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div class="flex items-center gap-2">
                  Email

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                <div class="flex items-center gap-2">
                  Price
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Status
              </th>
            </tr>
          </thead>





          <tbody class="divide-y divide-gray-200">

            {
              myProducts.map(myProduct => <MyProductItem
                key={myProduct._id}
                product={myProduct}
              ></MyProductItem>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyProducts;