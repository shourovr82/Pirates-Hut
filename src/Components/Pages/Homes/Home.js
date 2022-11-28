import React from 'react';
import Category from '../Category/Category';
import ProductsCategories from '../Category/ProductsCategories';
import Advertise from './AdvertisedItems/Advertise';
import Banner from './Banner';
import './Home.css';
import HomeCard from './Homecard';

const Home = () => {


  return (
    <div className='primary-bg  mt-[-100px] ' >

      <Banner></Banner>
      <Category></Category>
      <Advertise></Advertise>
      <HomeCard></HomeCard>


    </div>
  );
};

export default Home;