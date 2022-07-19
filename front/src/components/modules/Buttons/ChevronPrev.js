import React from 'react';
import styled from 'styled-components';
import prevButton from '../../../assets/button/prevButton.svg';
import theme from '../../../styles/Theme';

const ChevronPrevButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${theme.border};
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 26%);
  img {
    width: 12px;
    height: 12px;
  }
`;

const ChevronPrev = () => {
  return (
    <ChevronPrevButtonStyled>
      <img src={prevButton} alt="button" />
    </ChevronPrevButtonStyled>
  );
};

export default ChevronPrev;
