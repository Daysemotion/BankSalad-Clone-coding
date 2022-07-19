import React from 'react';
import Carousel from '../components/Carousel/index';
import Ranking from '../components/Ranking';
import SectionLayout from '../components/layout/SectionLayout';
import Feature from '../components/Feature';
import BankPicked from '../components/common/BankPicked';
import TabSection from '../components/common/TabSection';
import reviewData from '../components/common/TabSection/reviewData';

const Home = () => {
  return (
    <main>
      <Ranking />
      <Carousel />
      <SectionLayout>
        <Feature />
      </SectionLayout>
      <BankPicked />
      <TabSection data={reviewData} />
    </main>
  );
};

export default Home;
