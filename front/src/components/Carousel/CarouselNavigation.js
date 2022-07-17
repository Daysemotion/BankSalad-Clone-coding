import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.ul`
  position: absolute;
  bottom: 8px;
  display: flex;
  vertical-align: top;
  justify-content: center;
  width: 100%;
  height: 22px;

  li:nth-child(n + 2) {
    button {
      margin-left: 12px;
    }
  }
`;

const NavigationRadio = styled.button`
  width: ${(props) => (props.active ? '36px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: #fff;
  color: transparent;
  display: block;
  padding: 0;
  transition: width 0.3s ease;
`;

const CarouselNavigation = ({ active, onClick }) => {
  const onClickButton = (e) => {
    onClick(e.target.id);
  };
  return (
    <NavigationWrapper>
      <li>
        <NavigationRadio
          id="0"
          onClick={onClickButton}
          active={active === 0 ? true : false}
          type="button"
        ></NavigationRadio>
      </li>
      <li>
        <NavigationRadio
          id="1"
          onClick={onClickButton}
          active={active === 1 ? true : false}
          type="button"
        ></NavigationRadio>
      </li>
      <li>
        <NavigationRadio
          id="2"
          onClick={onClickButton}
          active={active === 2 ? true : false}
          type="button"
        ></NavigationRadio>
      </li>
    </NavigationWrapper>
  );
};

export default CarouselNavigation;
