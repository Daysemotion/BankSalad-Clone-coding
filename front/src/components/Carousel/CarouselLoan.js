import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import CarouselButton from '../modules/Buttons/CarouselButton';
import carouselLoan from '../../assets/carousel-loan.svg';

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #cbf8e7;
  ::before {
    content: '';
    position: absolute;
    background: url(${carouselLoan});
  }
  ${theme.carouselMobileSm} {
    ::before {
      top: 50%;
      right: 50%;
      bottom: auto;
      left: auto;
      width: 990px;
      height: 300px;
      transform: translate(75%, -19%);
    }
  }
  ${theme.carouselMobileMd} {
    ::before {
      top: 50%;
      right: 50%;
      bottom: auto;
      left: auto;
      width: 740px;
      height: 444px;
      transform: translate(84%, -47%);
    }
  }
`;

const CarouselStyled = styled.div`
  position: relative;
  font-weight: 700;
  color: #fafafa;

  ${theme.carouselMobileSm} {
    height: 600px;
    padding: 34px 20px 0 20px;
    h1 {
      font-size: 36px;
      line-height: 41px;
      color: ${theme.strong};
      small {
        font-weight: 500;
      }
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #111;
      line-height: 25px;
      font-weight: 400;
    }
  }

  ${theme.carouselMobileMd} {
    max-width: 946px;
    width: 100%;
    height: 480px;
    padding: 130px 20px 0;
    margin: 0 auto;
    font-weight: 700;
    .onlyMobile {
      display: none;
    }

    h1 {
      font-size: 52px;
      line-height: 60px;
      color: ${theme.strong};

      small {
        font-weight: 500;
      }
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #111;
      line-height: 25px;
      font-weight: 400;
    }
  }
`;

const Carousel = () => {
  return (
    <CarouselWrapper>
      <CarouselStyled>
        <h1>
          <small>대출 앞에 작아질 때!</small> <br />
          뱅크샐러드 금융매칭
        </h1>
        <p>
          1분만에, 은행 방문 없이, <br className="onlyMobile" /> 신용점수 영향
          없이
        </p>
        <CarouselButton style={{ marginTop: 25 }} color={theme.buttonViolet}>
          내 최저금리 조회하기
        </CarouselButton>
      </CarouselStyled>
    </CarouselWrapper>
  );
};

export default Carousel;
