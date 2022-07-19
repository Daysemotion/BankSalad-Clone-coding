import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';
import ChevronPrev from '../Buttons/ChevronPrev';
import ChevronNext from '../Buttons/ChevronNext';
import DummyImage from '../../../assets/picked/picked-1.jpeg';

const PickedCardWrapper = styled.div`
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 26%);
`;

const PickedCardImage = styled.div`
  width: 100%;
  height: 130px;
  ${theme.carouselMobileSm} {
    height: 56px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const PickedCardDesc = styled.div`
  padding: 16px 12px;
  position: relative;
  height: 154px;

  h2 {
    color: ${theme.hover};
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -1px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -1px;
    margin-top: 10px;

    ${theme.sectionMobile} {
      font-size: 16px;
      line-height: 24px;
      margin-top: 8px;
    }
  }
`;

const PickedButtonWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const PickedCard = ({ title, category, img }) => {
  return (
    <PickedCardWrapper>
      <PickedCardImage>
        <img src={img} alt="" />
      </PickedCardImage>
      <PickedCardDesc>
        <h2>{category}</h2>
        <h3>{title}</h3>
        <PickedButtonWrapper>
          <ChevronPrev />
          <ChevronNext />
        </PickedButtonWrapper>
      </PickedCardDesc>
    </PickedCardWrapper>
  );
};

export default PickedCard;
