import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const ProductsCategories = ({ category }) => {
  const { image, _id, category: categoryName, description } = category;
  return (
    <div className="p-4 lg:w-1/3">

      {/* Category Details  */}

      <div className="h-full bg-white  px-5  pt-5 pb-10 rounded-lg overflow-hidden text-center relative">
        <img className='w-full h-[250px] shadow-xl rounded-lg mb-4' src={image} alt="" />
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{categoryName}</h1>
        <p className="leading-relaxed mb-3">{description?.slice(0, 120)}</p>
        <Link to={`/category/${_id}`} className="flex justify-center">
          <button type="submit" className=" flex items-center gap-2 mt-2 py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-700 to-[#030850] border-0 px-10 hover:from-green-800 button-shadow button-color hover:to-[#050614fb]">
            <span>See Items</span> <FaArrowRight />
          </button>
        </Link>



      </div>
    </div>
  );
};

export default ProductsCategories;