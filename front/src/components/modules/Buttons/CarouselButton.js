import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';

const ButtonStyled = styled.button`
  position: relative;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
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
  span {
    font-weight: 500;
    font-size: 18px;
  }
`;

const Button = ({ color, style, children }) => {
  return (
    <ButtonStyled color={color} style={style}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;
