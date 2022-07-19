import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../styles/Theme';

const ReviewCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 160px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.24);
    transition: opacity 0.3s ease;
  }
`;

const ReviewTitle = styled.h3`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 2.68em;
  margin-top: 12px;
  color: ${theme.secondary};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.34;
  text-overflow: ellipsis;
`;

const ReviewSubTitle = styled.span`
  display: block;
  overflow: hidden;
  height: 1em;
  margin-top: 12px;
  color: ${theme.tertiary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-overflow: ellipsis;
`;

const LinkStyled = styled(Link)`
  display: block;
  width: 100%;
  :hover {
    div {
      ::after {
        opacity: 1;
      }
    }

    h3 {
      color: ${theme.hover};
    }
  }
`;

const ReviewCard = ({ title, subTitle, img }) => {
  return (
    <LinkStyled to="/">
      <ReviewCardImage>
        <img src={img} alt="thumbnail" />
      </ReviewCardImage>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewSubTitle>{subTitle}</ReviewSubTitle>
    </LinkStyled>
  );
};

export default ReviewCard;
