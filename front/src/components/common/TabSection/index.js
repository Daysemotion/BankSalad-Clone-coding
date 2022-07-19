import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/Theme';
import SectionLayout from '../../layout/SectionLayout';
import ReviewCard from './ReviewCard';
import { useState, useEffect, useRef } from 'react';

const TabSectionTitle = styled.h3`
  display: block;
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;

const TabWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  border-top: 2px solid ${theme.border};
  ${theme.sectionMobile} {
    white-space: nowrap;
    overflow-x: scroll;
  }

  li {
    position: relative;
    width: 12.5%;
    ${theme.sectionMobile} {
      min-width: 100px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      margin: 0;
      width: 0;
      height: 0;
      opacity: 0;

      :checked + label {
        color: ${theme.hover};
        font-weight: 700;
        border-bottom: 2px solid ${theme.borderGreen};
      }
    }

    label {
      color: ${theme.primary};
      font-size: 16px;
      font-weight: 500;
      line-height: 42px;
      text-align: center;
      display: block;
      border-bottom: 2px solid ${theme.border};
      cursor: pointer;
    }

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      display: block;
      width: 2px;
      height: 24px;
      background: ${theme.border};
    }

    :last-child::after {
      display: none;
    }
  }
`;

const ReviewDataWrapper = styled.ul`
  display: block;
  margin-right: -24px;
  display: flex;
  flex-wrap: wrap;

  li {
    display: block;
    width: calc(25% - 24px);
    height: 282px;
    margin-right: 24px;
  }
`;

const TabSection = ({ data }) => {
  const [currentCategory, setCurrentCategory] = useState('reviews-01');

  const onChangeInput = (e) => {
    setCurrentCategory(e.target.id);
  };

  return (
    <SectionLayout>
      <TabSectionTitle>경제전문가의 금융리뷰</TabSectionTitle>
      <TabWrapper>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-01"
            defaultChecked
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-01">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-02"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-02">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-03"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-03">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-04"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-04">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-05"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-05">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-06"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-06">카드</label>
        </li>
        <li>
          <input
            type="radio"
            name="reviews"
            id="reviews-07"
            onChange={onChangeInput}
          />
          <label htmlFor="reviews-07">카드</label>
        </li>
      </TabWrapper>
      <ReviewDataWrapper>
        {data.map((category) =>
          category.id === currentCategory
            ? category.items.map((item, i) => (
                <li key={i}>
                  <ReviewCard
                    title={item.title}
                    subTitle={item.subTitle}
                    img={item.img}
                  ></ReviewCard>
                </li>
              ))
            : '',
        )}
      </ReviewDataWrapper>
    </SectionLayout>
  );
};

export default TabSection;
