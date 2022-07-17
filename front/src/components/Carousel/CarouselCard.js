import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import CarouselButton from '../modules/Buttons/CarouselButton';
import CarouselCardMobile from '../../assets/carousel-card-mobile.png';
import CarouselCard from '../../assets/carousel-card.png';

const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${theme.carouselMobileSm} {
    background: linear-gradient(180deg, #09f, #ff8a84);
    ::before {
      content: '';
      position: absolute;
      right: 50%;
      bottom: 20px;
      width: 375px;
      height: 343px;
      transform: translateX(50%);
      background: url(${CarouselCardMobile});
      background-size: 375px 343px;
    }
  }
  ${theme.carouselMobileMd} {
    background: linear-gradient(91deg, #09f, #ff8a84 90%);
    ::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: auto;
      left: auto;
      width: 538px;
      height: 480px;
      transform: translate(100%, -50%);
      background: url(${CarouselCard});
      background-size: 538px 480px;
    }
  }
  ::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 158px;
    opacity: 0.1;
    background: linear-gradient(180deg, rgba(43, 43, 43, 0), #2b2b2b);
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
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #ededed;
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
    h1 {
      font-size: 48px;
      line-height: 55px;
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      color: #ededed;
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
          이벤트 응모하고
          <br />
          카드사용 하면 <br />
          최대 103만원 받아요!
        </h1>
        <p>기간 한정 이벤트이니 지금 참여하세요.</p>
        <CarouselButton style={{ marginTop: 25 }} color={theme.buttonMustard}>
          이벤트 보기
        </CarouselButton>
      </CarouselStyled>
    </CarouselWrapper>
  );
};

export default Carousel;
