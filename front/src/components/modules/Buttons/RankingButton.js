import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.mobile ? `11px 10px` : `20px 10px`)};
  margin-left: 16px;
  border-radius: 2px;
  background-color: #91b5be;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
`;

const RankingButton = ({ mobile }) => {
  return <ButtonStyled mobile={mobile}>인기카드 더보기</ButtonStyled>;
};

export default RankingButton;
