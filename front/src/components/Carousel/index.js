import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import CarouselBank from './CarouselBank';
import CarouselLoan from './CarouselLoan';
import CarouselNavigation from './CarouselNavigation';
import { useState, useEffect } from 'react';

const CarouselStyled = styled.section`
  overflow: hidden;
  position: relative;
`;
const CarouselWrapper = styled.div`
  display: flex;
  width: 300vw;
  div {
    width: 100vw;
  }
`;
const Carousel = () => {
  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const onClick = useCallback((id) => {
    setCurrentSlide(parseInt(id));
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (currentSlide >= totalSlide) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transition = 'all .5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }, [currentSlide, onClick]);

  return (
    <CarouselStyled>
      <CarouselWrapper ref={slideRef}>
        <CarouselBank />
        <CarouselLoan />
        <CarouselCard />
      </CarouselWrapper>
      <CarouselNavigation
        active={currentSlide}
        onClick={onClick}
      ></CarouselNavigation>
    </CarouselStyled>
  );
};

export default Carousel;
