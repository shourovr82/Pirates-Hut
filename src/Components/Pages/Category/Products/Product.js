import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import BookingModal from '../../../Shared/BookingModal';

const Product = ({ product }) => {
  const [modalitems, setModalitems] = useState(null)
  const { user } = useContext(AuthContext);
  const { category, description, discountPercentage, price, title, } = product;
  const [bookedItem, setBookedItem] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleBookItem = (data) => {
    const phone = data.phone;
    const location = data.location;

    // setModalitems(null)
  }


  return (
    <div className=" p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <label
          onClick={() => setModalitems(product)}
          htmlFor="booking-modal" className="btn">Book Now</label>


      </div>

      <div>

        {modalitems &&

          <BookingModal
            product={modalitems}
            setModalitems={setModalitems}
            register={register}
            handleSubmit={handleSubmit}
            setBookedItem={setBookedItem}
          ></BookingModal>
        }


      </div>







    </div >

  );
};

export default Product;