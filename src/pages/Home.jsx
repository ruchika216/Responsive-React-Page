import React from 'react';
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Hero/Banner';
import Hero from '../components/Hero/Hero';
import Services from '../components/Hero/Services';

// style={{
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '90vh'
// }}

const Home = () => {
  return (
    <div>
      
      <Hero>
        <Banner
          title="Adventure Awaits"
          subtitle="Travel with no regrets."
        >
          <Link to="/destination" className="btn-primary">
            Explore
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;