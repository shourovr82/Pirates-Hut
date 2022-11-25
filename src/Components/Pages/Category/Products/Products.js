import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

  const data = useLoaderData();
  const { category } = data;


  const { data: products = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(`http://localhost:5000/products/${category}`)
      .then(res => res.json())
  })





  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex  justify-start w-full mb-20">

            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className=" text-xl font-medium title-font mb-2 text-gray-600">{products.length ? `${products.length} results Found In 40ms` : 'no Item Found'}</h1>
              <div className="h-1 w-20 bg-green-900 rounded"></div>
            </div>
            <div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-end text-gray-500">Choose Your Favourite Product and buy now</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 -m-4">

            {products?.map(product => <Product
              key={product._id}
              product={product}
            ></Product>)}






          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;