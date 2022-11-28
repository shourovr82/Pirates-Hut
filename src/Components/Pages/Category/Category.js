import { useQuery } from '@tanstack/react-query';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsCategories from './ProductsCategories';
import spinner from '../../../Assets/loading.svg'
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);


  useEffect(() => {
    setDataLoading(true)
    axios.get('http://localhost:5000/categories')
      .then((res) => {
        setCategories(res?.data)
        setDataLoading(false)
      })
  }, [])


  return (
    <div className=''>
      <section className="text-gray-600 body-font">
        {dataLoading &&
          <div className='flex justify-center '><img src={spinner} alt="" /></div>
        }
        <h2 className='text-white text-center text-3xl'>Browse items by category</h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">


            {
              categories.map(category => <ProductsCategories
                key={category._id}
                category={category}
              ></ProductsCategories>)
            }



          </div>
        </div>
      </section>







    </div>
  );
};

export default Category;