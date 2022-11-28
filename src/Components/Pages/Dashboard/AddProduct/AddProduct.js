import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import useSeller from '../../../../hooks/useSeller';
import spinner from '../../../../Assets/adminLoading.svg'

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [photolink, setPhotoLink] = useState('');
  const imgbbHostKey = process.env.REACT_APP_imgbb_key;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSeller, isSellerLoading] = useSeller(user?.email)





  const hanleAddProduct = (data) => {
    const image = data.image[0];
    //  host photo
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      if (formData) {
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`;
        if (image) {
          fetch(url, {
            method: 'POST',
            body: formData
          })
            .then(res => res.json())
            .then(imgData => {
              const photoURL = imgData.data?.url;
              const newProduct = {
                category: data.category,
                location: data.location,
                phone: data.phone,
                price: data.price,
                title: data.title,
                sellername: user?.displayName,
                description: data.description,
                email: user?.email,
                purchaseyear: data.purchaseyear,
                originalprice: data.originalprice,
                condition: data.condition,
                postdate: new Date().toLocaleString(),
                availibility: 'available',
                image: photoURL,
                brand: data?.brand,
                color: data?.color,
              }

              fetch('https://pirates-hut-server.vercel.app/addproducts', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
                .then(res => res.json())
                .then(result => {
                  toast.success('Product added Successfull')
                  navigate('/dashboard/myproducts')
                })
            })
        }

      }
    }

  }

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('https://pirates-hut-server.vercel.app/categories')
      .then(res => res.json())
  })

  if (isSellerLoading) {
    return <div><img className='w-20' src={spinner} alt="" />
      <p className='text-green-700 font-bold animate-pulse'>Verifying Seller</p>
    </div>
  }
  if (!isSeller) {
    Navigate('/')
  }




  return (
    <section className="bg-gray-100 ">
      <div className="rounded-lg p-10 bg-white  shadow-lg ">
        <form
          onSubmit={handleSubmit(hanleAddProduct)}
          className="space-y-4">

          {/*  name */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="name">
                Product Name
              </label>
              <input
                {...register("title")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                placeholder="Product Name"
                type="text"
                id="name"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="condition">
                Condition Type
              </label>
              <input
                {...register("condition")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                placeholder="Condition Type"
                type="text"
                id="condition" required
              />
            </div>

          </div>

          {/*  price */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="price">
                Re Sale Price
              </label>
              <input
                {...register("price")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="number"
                id="price"
                placeholder='Resale Price' required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                Mobile Number
              </label>
              <input
                {...register("phone")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="number"
                id="phone"
                placeholder='Your Phone Number' required
              />
            </div>
          </div>

          {/*  year of purchase */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="purchase">
                Year of Purchase
              </label>
              <input
                {...register("purchaseyear")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="text"
                id="purchase"
                placeholder='Year of Purchase' required
              />
            </div>


            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="originalprice">
                Original Price
              </label>
              <input
                {...register("originalprice")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="number"
                id="originalprice"
                placeholder='Original Price' required
              />
            </div>
          </div>
          {/*  brand, color */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="brand">
                Product Brand
              </label>
              <input
                {...register("brand")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="text"
                id="brand"
                placeholder='Product Brand' required
              />
            </div>


            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="color">
                Product Color
              </label>
              <input
                {...register("color")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="text"
                id="color"
                placeholder='Product Color' required
              />
            </div>
          </div>
          {/*  Product Image */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="mb-1  block text-sm text-gray-600" htmlFor="image">
                Product Photo
              </label>

              <input
                {...register("image")}
                type="file" id='image' className='w-11/12 input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' required />
              Upload Photo
            </div>

          </div>





          {/* conditions============================ */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="condition">
                Select Category
              </label>

              <select
                {...register("category")}
                name='category'
                className="py-3  px-3 rounded-md select-bordered border w-full ">
                {
                  categories.map(((category, index) =>
                    <option
                      key={index}
                    >{category.category}</option>
                  ))
                }
              </select>

            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="location">
                Location
              </label>
              <input
                {...register("location")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="text"
                id="location"
                placeholder='Your Location' required
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-600" htmlFor="description">
              Your Product Descriptions
            </label>
            <textarea
              {...register("description")}
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
              placeholder="description"
              rows="8"
              id="description" required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className=" flex items-center gap-2 mt-2 py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-700 to-[#030850] border-0 px-10 hover:from-green-800 button-shadow button-color hover:to-[#050614fb]"
            >
              <span className="font-medium">Add Product </span>



              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>


      </div >
      <br />
      <br />
      <br />
      <br />

    </section >
  );
};

export default AddProduct;