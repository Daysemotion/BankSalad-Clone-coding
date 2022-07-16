import React from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import CarouselBank from './CarouselBank';
import CarouselLoan from './CarouselLoan';

const CarouselStyled = styled.section`
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 300vw;

  div {
    width: 100vw;
  }
`;

const index = () => {
  return (
    <CarouselStyled>
      <CarouselWrapper>
        <CarouselCard />
        <CarouselBank />
        <CarouselLoan />
      </CarouselWrapper>
    </CarouselStyled>
  );
};

export default index;
