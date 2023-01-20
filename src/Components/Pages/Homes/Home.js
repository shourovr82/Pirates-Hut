import React from 'react';
import Category from '../Category/Category';
import Advertise from './AdvertisedItems/Advertise';
import Banner from './Banner';
import './Home.css';
import HomeCard from './Homecard';

const Home = () => {


  return (
    <div className='primary-bg  mt-[-100px] ' >
      {/* Banner Page */}
      <Banner></Banner>

      {/* All Category Section */}
      <Category></Category>

      {/* Advertised Items Section */}
      <Advertise></Advertise>

      {/* Other Section for Website */}
      <HomeCard></HomeCard>


    </div>
  );
};

export default Home;