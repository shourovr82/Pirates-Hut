import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCategories from './ProductsCategories';

const Category = () => {

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('http://localhost:5000/categories')
      .then(res => res.json())
  })




  return (
    <div>
      <section className="text-gray-600 body-font">
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