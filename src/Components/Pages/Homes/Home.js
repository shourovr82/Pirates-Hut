import React from 'react';
import Category from '../Category/Category';
import ProductsCategories from '../Category/ProductsCategories';
import Banner from './Banner';
import './Home.css';
import HomeCard from './Homecard';

const Home = () => {





  return (
    <div className=' primary-bg' >

      <Banner></Banner>
      <Category></Category>
      <HomeCard></HomeCard>

    </div>
  );
};

export default Home;