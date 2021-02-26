import React from "react";

import Layout from '../components/layout/layout';
import CustomCarousel from '../components/carousel/carousel';

import { carouselInfo } from '../data/carousel_info';


const Home = () => {
  return (
    <Layout>
      <CustomCarousel content={carouselInfo} />
    </Layout>
  )
};

export default Home;
