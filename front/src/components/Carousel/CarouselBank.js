import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import carouselBankImage from '../../assets/carousel-bank.svg';
import CarouselButton from '../modules/Buttons/CarouselButton';

const CarouselWrapper = styled.div`
  position: relative;
  background: #eafaf3;
  overflow: hidden;
  ::before {
    z-index: 0;
    background: url(${carouselBankImage}) no-repeat;
  }
  ${theme.carouselMobileSm} {
    ::before {
      content: '';
      position: absolute;
      right: 50%;
      top: auto;
      bottom: 0;
      left: auto;
      width: 1250px;
      height: 1248px;
      transform: translate(50%, 34%);
    }
  }
  ${theme.carouselMobileMd} {
    ::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: auto;
      left: auto;
      width: 1858px;
      height: 1855px;
      transform: translate(66%, -50%);
    }
  }
`;

const CarouselStyled = styled.div`
  position: relative;
  font-weight: 700;
  color: ${theme.strong};

  ${theme.carouselMobileSm} {
    height: 600px;
    padding: 34px 20px 0 20px;
    h1 {
      font-size: 36px;
      line-height: 41px;
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #ededed;
      line-height: 25px;
    }
  }

  ${theme.carouselMobileMd} {
    max-width: 946px;
    width: 100%;
    height: 480px;
    padding: 130px 20px 0;
    margin: 0 auto;
    h1 {
      font-size: 48px;
      line-height: 55px;
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #ededed;
      line-height: 25px;
    }
  }
`;

const CarouselButtonWrapper = styled.div`
  margin-top: 25px;
`;

const CarouselBank = () => {
  return (
    <CarouselWrapper>
      <CarouselStyled>
        <h1>
          금융을 내편으로
          <br />
          뱅크샐러드
        </h1>
        <CarouselButtonWrapper>
          <CarouselButton color={theme.buttonGreen}>
            뱅크샐러드 사용해보기
          </CarouselButton>
          <CarouselButton color={theme.buttonWhite} style={{ marginTop: 14 }}>
            서비스 더 알아보기
          </CarouselButton>
        </CarouselButtonWrapper>
      </CarouselStyled>
    </CarouselWrapper>
  );
};

export default CarouselBank;
