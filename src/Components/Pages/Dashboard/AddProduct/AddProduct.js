import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const hanleAddProduct = (data) => {

    const newProduct = {
      category: data.category,
      location: data.location,
      phone: data.phone,
      price: data.price,
      title: data.title,
      description: data.description,
      email: user?.email,
      purchaseyear: data.purchaseyear,
      originalprice: data.originalprice,
    }


    fetch('http://localhost:5000/addproducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast.success('Product added Successfull')
        navigate('/dashboard/myproducts')
      })







  }


  return (
    <section className="bg-gray-100">

      <div className="rounded-lg p-10 bg-white  shadow-lg">


        <form
          onSubmit={handleSubmit(hanleAddProduct)}
          className="space-y-4">

          {/*  name */}
          <div className="grid grid-cols-1 gap-4">

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
                placeholder='Item Name'
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
                placeholder='Item Name'
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
                placeholder='Year of Purchase'
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
                placeholder='Original Price'
              />
            </div>
          </div>


          {/* conditions============================ */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-1 block text-sm text-gray-600" htmlFor="condition">
                Condition Type
              </label>
              <select
                {...register("category")}
                name='category'
                className="py-3  px-3 rounded-md select-bordered border w-full ">
                <option selected value={'laptops'}>laptops</option>
                <option value={'Phones'}>Phones</option>
                <option value={'fragrances'}>fragrances</option>
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
                placeholder='Your Location'
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
              id="description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span className="font-medium">Send Enquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>


      </div>


    </section >
  );
};

export default AddProduct;