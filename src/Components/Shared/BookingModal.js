import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContexts/Contexts/AuthProvider';
import { MdOutlineClose } from 'react-icons/md';


const BookingModal = ({ product, setModalitems, handleBookItem }) => {
  const { user } = useContext(AuthContext)
  const { title, _id, price, category } = product;

  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleBookedItem = (data) => {
    const phone = data.phone;
    const location = data.location;

    const item = {
      title: title,
      itemId: _id,
      price: price,
      category: category,
      email: user?.email,
      buyerName: user?.displayName,
      phone: phone,
      buyerLocation: location
    }


    fetch('http://localhost:5000/bookItem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast.success('Item successfully booked ')
        setModalitems(null)
      })

  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">

        <div className="modal-box w-11/12 max-w-2xl relative">
          <label htmlFor="booking-modal" className="absolute z-10 text-center right-4 top-4 rounded-full bg-black p-2.5  cursor-pointer text-sm text-white"><MdOutlineClose className='text-lg' /></label>

          <div>



            <section>
              <h1 className="sr-only">Checkout</h1>

              <div className="relative mx-auto max-w-screen-2xl">
                <div className="py-0">
                  <div className="mx-auto max-w-lg px-4 lg:px-8">

                    <form
                      onSubmit={handleSubmit(handleBookedItem)}
                      className="grid grid-cols-6 gap-4">
                      {/* name */}
                      <div className="col-span-6 ">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="first_name">
                          Full Name
                        </label>

                        <input

                          className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                          type="text"
                          id="first_name"
                          defaultValue={user?.displayName}
                          disabled
                        />
                      </div>
                      {/* email */}
                      <div className="col-span-6">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="email">
                          Email
                        </label>

                        <input
                          className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                          type="email"
                          id="email"
                          defaultValue={user?.email}
                          disabled
                        />
                      </div>
                      {/* item name */}

                      <div className="col-span-6">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="itemName">
                          Item Name
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                          type="text"
                          defaultValue={product?.title}
                          disabled
                          id="itemName"
                        />
                      </div>
                      {/* item price */}

                      <div className="col-span-6">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="itemName">
                          Price
                        </label>
                        <input
                          className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                          type="text"
                          defaultValue={`${product?.price} $`}
                          disabled
                          id="itemName"
                        />
                      </div>


                      {/* phone */}

                      <div className="col-span-6">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                          Your Phone Number
                        </label>

                        <input
                          {...register("phone")}
                          className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                          type="tel"
                          id="phone"
                          required
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="mb-1 block text-sm text-gray-600" htmlFor="location">
                          Meeting Location
                        </label>

                        <input
                          {...register("location")}
                          className="w-full rounded-lg border border-gray-200 p-2.5 text-sm shadow-sm"
                          type="text"
                          id="location"
                          required
                        />
                      </div>


                      <div className="col-span-6">
                        <div className="modal-action ">


                          <button
                            type='submit'
                            onClick={handleBookItem}
                            className='block text-center w-full rounded-lg bg-black p-2.5 text-sm text-white'
                          >
                            Pay Now
                          </button>


                        </div>
                      </div>



                    </form>
                  </div>
                </div>

              </div>
            </section>


          </div>



        </div>
      </div>
    </div>
  );
};

export default BookingModal;