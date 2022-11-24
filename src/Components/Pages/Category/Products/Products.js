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
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>

          <div className="grid grid-cols-2 -m-4">

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