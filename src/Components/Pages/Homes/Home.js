import React from 'react';
import Banner from './Banner';
import './Home.css';
import HomeCard from './Homecard';

const Home = () => {
  return (
    <div className=' primary-bg' >

      <Banner></Banner>
      <HomeCard></HomeCard>

    </div>
  );
};

export default Home;