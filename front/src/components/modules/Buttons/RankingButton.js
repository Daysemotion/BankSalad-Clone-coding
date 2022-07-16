import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 22px 10px;
  border-radius: 2px;
  background-color: #91b5be;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
`;

const RankingButton = () => {
  return <ButtonStyled>인기카드 더보기</ButtonStyled>;
};

export default RankingButton;
