import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('')
      .then(res => res.json())
  })



  return (
    <div>

    </div>
  );
};

export default MyProducts;