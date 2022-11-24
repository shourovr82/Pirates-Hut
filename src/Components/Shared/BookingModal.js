import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContexts/Contexts/AuthProvider';

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-6xl">


          {/* <h3 className="font-bold text-lg">Congratulations random Internet user!</h3> */}
          <div>



            <section>
              <h1 class="sr-only">Checkout</h1>

              <div class="relative mx-auto max-w-screen-2xl">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="bg-gray-50 py-12 ">
                    <div class="mx-auto max-w-lg px-4 lg:px-8">
                      <div class="flex items-center">
                        <span class="h-10 w-10 rounded-full bg-blue-900"></span>

                        <h2 class="ml-4 font-medium">BambooYou</h2>
                      </div>

                      <div class="mt-8">
                        <p class="text-2xl font-medium tracking-tight">$99.99</p>
                        <p class="mt-1 text-sm text-gray-500">For the purchase of</p>
                      </div>

                      <div class="mt-12">
                        <div class="flow-root">
                          <ul class="-my-4 divide-y divide-gray-200">
                            <li class="flex flex-col  gap-3 py-4">
                              <div class="flex items-start">
                                <img
                                  alt="Trainer"
                                  src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                  class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                />

                                <div class="ml-4">
                                  <p class="text-sm">Vibrant Trainers</p>

                                  <dl class="mt-1 space-y-1 text-xs text-gray-500">
                                    <div>
                                      <dt class="inline">Color:</dt>
                                      <dd class="inline">Blue</dd>
                                    </div>

                                    <div>
                                      <dt class="inline">Size:</dt>
                                      <dd class="inline">UK 10</dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>

                              <div>
                                <p class="text-sm">
                                  $49.99
                                  <small class="text-gray-500">x1</small>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* On clicking the Book now button, if the user is not modal will have a form with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked. */}

                  <div class="bg-white py-12">
                    <div class="mx-auto max-w-lg px-4 lg:px-8">
                      <form class="grid grid-cols-6 gap-4">
                        {/* name */}
                        <div class="col-span-6 ">
                          <label class="mb-1 block text-sm text-gray-600" for="first_name">
                            Full Name
                          </label>

                          <input
                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm border"
                            type="text"
                            id="first_name"
                            value={user?.displayName}
                            disabled
                          />
                        </div>

                        <div class="col-span-6">
                          <label class="mb-1 block text-sm text-gray-600" for="email">
                            Email
                          </label>

                          <input
                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                            type="email"
                            id="email"
                            value={user?.email}
                            disabled
                          />
                        </div>

                        <div class="col-span-6">
                          <label class="mb-1 block text-sm text-gray-600" for="phone">
                            Phone
                          </label>

                          <input
                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                            type="tel"
                            id="phone"
                          />
                        </div>

                        <fieldset class="col-span-6">
                          <legend class="mb-1 block text-sm text-gray-600">
                            Card Details
                          </legend>

                          <div class="-space-y-px rounded-lg bg-white shadow-sm">
                            <div>
                              <label class="sr-only" for="card-number">Card Number</label>

                              <input
                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                type="text"
                                name="card-number"
                                id="card-number"
                                placeholder="Card number"
                              />
                            </div>

                            <div class="flex -space-x-px">
                              <div class="flex-1">
                                <label class="sr-only" for="card-expiration-date">
                                  Expiration Date
                                </label>

                                <input
                                  class="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                  type="text"
                                  name="card-expiration-date"
                                  id="card-expiration-date"
                                  placeholder="MM / YY"
                                />
                              </div>

                              <div class="flex-1">
                                <label class="sr-only" for="card-cvc">CVC</label>

                                <input
                                  class="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                  type="text"
                                  name="card-cvc"
                                  id="card-cvc"
                                  placeholder="CVC"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset class="col-span-6">
                          <legend class="mb-1 block text-sm text-gray-600">
                            Billing Address
                          </legend>

                          <div class="-space-y-px rounded-lg bg-white shadow-sm">
                            <div>
                              <label class="sr-only" for="country">Country</label>

                              <select
                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                id="country"
                                name="country"
                                autocomplete="country-name"
                              >
                                <option>England</option>
                                <option>Wales</option>
                                <option>Scotland</option>
                                <option>France</option>
                                <option>Belgium</option>
                                <option>Japan</option>
                              </select>
                            </div>

                            <div>
                              <label class="sr-only" for="postal-code">
                                ZIP/Post Code
                              </label>

                              <input
                                class="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autocomplete="postal-code"
                                placeholder="ZIP/Post Code"
                              />
                            </div>
                          </div>
                        </fieldset>

                        <div class="col-span-6">
                          <button
                            class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                            type="submit"
                          >
                            Pay Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>


          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;