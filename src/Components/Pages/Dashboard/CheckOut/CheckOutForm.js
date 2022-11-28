import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import spinner from '../../../../Assets/loading.svg'
import toast from 'react-hot-toast';


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
  useEffect(() => {

    // Create PaymentIntent as soon as the page loads
    fetch("https://pirates-hut-server.vercel.app/create-payment-intent", {
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
      fetch('https://pirates-hut-server.vercel.app/payments', {
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
            toast.success('Congrats ! Your Payment Completed')
          }
        })
    }
    setProcessing(false)
  }

  return (

    <>
      <h1 className='py-2 text-2xl text-green-800'>Your Payment Card Info</h1>
      <form onSubmit={handleSubmit}>
        <CardElement className='py-5 border px-3'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#000',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='block text-center  rounded-lg bg-gradient-to-r from-green-700 to-[#030850] w-1/2 p-2.5 text-sm text-white mt-2 ' disabled={!stripe || !clientSecret || processing}>
          Pay Now
        </button>

        <p className='text-red-600 text-2xl'>{cardError}</p>
        {success && <p className='text-green-600 text-2xl'>{success} <span>Your Transaction Id : {transactionId}</span>  </p>
        }</form>

      {processing && <div><img src={spinner} alt="" /></div>}
    </>




  );
};

export default CheckOutForm;