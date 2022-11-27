import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import CheckoutProduct from './CheckoutProduct';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckOut = () => {
  const data = useLoaderData();
  console.log(data);
  const product = data[0]
  return (
    <div>

      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-emerald-700"></span>
                  <span className="h-10  w-10 rounded-full bg-emerald-700"></span>

                  <h2 className="ml-4 font-medium">Check Out</h2>
                </div>

                <div className="mt-8">
                  <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      {data.map((item, index) => <CheckoutProduct
                        key={index}
                        item={item}
                      ></CheckoutProduct>)}


                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Elements stripe={stripePromise}>
              <CheckOutForm product={product} />
            </Elements>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CheckOut;