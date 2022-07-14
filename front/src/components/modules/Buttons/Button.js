import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 18px;
  color: ${(props) => {
    if (props.color === theme.buttonWhite) {
      return theme.buttonGreen;
    }
    if (props.color === theme.buttonMustard) {
      return '#111';
    } else {
      return theme.buttonWhite;
    }
  }};
  background-color: ${(props) => props.color || 'white'};
  border-radius: 41px;
  border: ${(props) =>
    props.color === theme.buttonWhite
      ? `solid 1px ${theme.buttonGreen}`
      : 'none'};
  box-shadow: 0 4px 9px rgb(0 0 0 / 15%);
`;

const Button = ({ color, children }) => {
  console.log(color);
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export default Button;
