import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import spinner from '../../../../Assets/loading.svg'

const CheckOutForm = ({ product }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const { user } = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const { price } = product;
  console.log(product);
  useEffect(() => {

    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      });
  }, [price]);

  const handleSubmit = async (event) => {
    console.log('shafin');
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log(error);
      setCardError(error.message)
    } else {
      setCardError('')
    }
    setSuccess('');
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen',
            email: user?.email
          }
        }
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      // set details to database
      const payment = {
        price, transactionId: paymentIntent.id,
        productId: product.productId,
      }
      fetch('http://localhost:5000/payments', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            setSuccess('Congrats ! Your Payment completed');
            setTransactionId(paymentIntent.id);
          }
        })
    }
    setProcessing(false)
  }

  return (
    //   <div className="bg-white py-12 md:py-24">
    //     <div className="mx-auto max-w-lg px-4 lg:px-8">
    //       {/* <form className="grid grid-cols-6 gap-4"> */}
    //       <div className="col-span-3">
    //         <label className="mb-1 block text-sm text-gray-600" htmlFor="first_name">
    //           First Name
    //         </label>

    //         <input
    //           className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
    //           type="text"
    //           id="first_name"
    //         />
    //       </div>

    //       <div className="col-span-3">
    //         <label className="mb-1 block text-sm text-gray-600" htmlFor="last_name">
    //           Last Name
    //         </label>

    //         <input
    //           className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
    //           type="text"
    //           id="last_name"
    //         />
    //       </div>

    //       <div className="col-span-6">
    //         <label className="mb-1 block text-sm text-gray-600" htmlFor="email">
    //           Email
    //         </label>

    //         <input
    //           className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
    //           type="email"
    //           id="email"
    //         />
    //       </div>

    //       <div className="col-span-6">
    //         <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
    //           Phone
    //         </label>

    //         <input
    //           className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
    //           type="tel"
    //           id="phone"
    //         />
    //       </div>

    //       {/*  */}

    //       <fieldset className="col-span-6">

    //         <div className="-space-y-px rounded-lg bg-white shadow-sm">

    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn' disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        <p className='text-red-600 text-2xl'>{cardError}</p>
        {success && <p className='text-red-600 text-2xl'>{success} <span>Your Transaction Id : {transactionId}</span>  </p>
        }</form>
    </>

    //           </div >
    //         </fieldset >

    //         <fieldset className="col-span-6">
    //           <legend className="mb-1 block text-sm text-gray-600">
    //             Billing Address
    //           </legend>

    //           {/* <div className="-space-y-px rounded-lg bg-white shadow-sm">
    //                       <div>
    //                         <label className="sr-only" htmlFor="country">Country</label>

    //                         <select
    //                           className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
    //                           id="country"
    //                           name="country"
    //                           autoComplete="country-name"
    //                         >
    //                           <option>England</option>
    //                           <option>Wales</option>
    //                           <option>Scotland</option>
    //                           <option>France</option>
    //                           <option>Belgium</option>
    //                           <option>Japan</option>
    //                         </select>
    //                       </div>

    //                       <div>
    //                         <label className="sr-only" htmlFor="postal-code">
    //                           ZIP/Post Code
    //                         </label>

    //                         <input
    //                           className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
    //                           type="text"
    //                           name="postal-code"
    //                           id="postal-code"
    //                           autoComplete="postal-code"
    //                           placeholder="ZIP/Post Code"
    //                         />
    //                       </div>
    //                     </div>  ----------------------------------------------*/}
    //         </fieldset>

    //         <div className="col-span-6">
    //           <button
    //             className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
    //             type="submit"
    //           >
    //             Pay Now
    //           </button>
    //         </div>
    // {/* </form> */ }
    //       </div >
    //     </div >



  );
};

export default CheckOutForm;