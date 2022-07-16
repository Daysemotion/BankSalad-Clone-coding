import React from 'react';
import styled from 'styled-components';
import { MdOutlineMenu } from 'react-icons/md';
import { BsChevronRight } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import theme from '../../styles/Theme';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
  ${theme.desktop} {
    padding: 0 16px;
    display: flex;
    border-bottom: solid 2px ${theme.border};
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 12%);
  }
`;

const HeaderLeft = styled.div`
  display: flex;

  ${theme.mobile} {
    padding: 0 16px;
  }
`;

const MenuButton = styled(MdOutlineMenu)`
  color: ${theme.borderGreen};
  font-size: 22px;
  margin: 17px 16px 17px 0px;

  ${theme.desktop} {
    display: none;
  }
`;

const Logo = styled.div`
  img {
    display: block;
    width: 100%;
  }

  ${theme.mobile} {
    width: 150px;
    height: auto;
    padding: 15px 0 17px 0;
  }

  ${theme.desktop} {
    width: 165px;
    height: auto;
    padding: 13px 0 14px 0;
  }
`;

const HeaderRight = styled.div`
  ${theme.mobile} {
    position: relative;
    height: 51px;
  }

  ${theme.desktop} {
    display: block;
    margin-left: 37px;
  }
`;

const HeaderNavbar = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${theme.mobile} {
    border: 2px solid ${theme.border};
    overflow-x: scroll;
  }

  li {
    font-size: 16px;
    transition: color 200ms ease;
    ${theme.mobile} {
      font-weight: 500;
      line-height: 48px;
      padding: 0 26px;
      color: ${theme.blackLight};
      white-space: nowrap;
      text-align: center;
    }

    ${theme.desktop} {
      font-weight: 400;
      line-height: 56px;
      display: inline-block;
      color: ${theme.secondary};
      padding: 0 12px;
      letter-spacing: 0;

      &:hover {
        color: ${theme.borderGreen};
      }

      &.is-active {
        color: ${theme.borderGreen};
        font-weight: 700;
      }
    }
  }
`;

const MenuScroll = styled.button`
  ${theme.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    width: 38px;
    height: 100%;
    border: 2px solid ${theme.border};
    background-color: #ffffff;
    color: ${theme.blackLight};
  }
  ${theme.desktop} {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLeft>
        <MenuButton />
        <h1>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
        </h1>
      </HeaderLeft>
      <HeaderRight>
        <HeaderNavbar>
          <li className="is-active">
            <Link to="/">
              <span>카드</span>
            </Link>
          </li>
          <li>
            <Link to="/bank">
              <span>은행</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>투자</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>대출</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>연금</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>핀테크</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>매거진</span>
            </Link>
          </li>
        </HeaderNavbar>
        <MenuScroll>
          <BsChevronRight />
        </MenuScroll>
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;
