import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/Contexts/AuthProvider';
import BookingModal from '../../../Shared/BookingModal';

const Product = ({ product }) => {
  const [modalitems, setModalitems] = useState({})
  const { user } = useContext(AuthContext);
  const { category, description, discountPercentage, price, title, } = product;

  return (
    <div className=" p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <label
          onClick={() => setModalitems(product)}
          htmlFor="my-modal-5" className="btn">Book Now</label>


      </div>

      <div>

        {modalitems &&

          <BookingModal
            product={modalitems}
          ></BookingModal>
        }


      </div>







    </div >

  );
};

export default Product;