import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import featureImage1 from '../../assets/feature/feature1.svg';
import featureImage2 from '../../assets/feature/feature2.svg';
import featureImage3 from '../../assets/feature/feature3.svg';

const FeatureTitle = styled.h1`
  display: block;
  color: ${theme.primary};
  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  strong {
    display: block;
    margin: 12px 0 0;
    color: ${theme.strong};
    font-size: 28px;
    letter-spacing: -2px;
    font-weight: 500;
  }
`;

const Features = styled.ul`
  display: block;
  margin: 42px 0;

  li {
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;

    ${theme.sectionDesktop} {
      flex-direction: column;
    }
  }

  li:nth-child(n + 2) {
    ${theme.sectionMobile} {
      margin-top: 16px;
    }
  }

  ${theme.sectionDesktop} {
    display: flex;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 0;
  vertical-align: middle;

  img {
    width: 90px;
    height: 87px;
  }
`;

const DescWrapper = styled.div`
  h1 {
    font-weight: 500;
    color: #434444;
    letter-spacing: -1px;

    ${theme.sectionMobile} {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 6px;
    }
  }

  h3 {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -1px;
    color: ${theme.primary};
    ${theme.sectionMobile} {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Feature = () => {
  return (
    <>
      <FeatureTitle>
        내게 맞는 금융상품, 비교하기 힘드시죠?
        <strong>뱅크샐러드는 쉽고 정확하게 비교합니다.</strong>
      </FeatureTitle>
      <Features>
        <li>
          <ImageWrapper>
            <img src={featureImage1} alt="" />
          </ImageWrapper>
          <DescWrapper>
            <h1>국내 최대 금융상품 데이터</h1>
            <h3>
              금융 상품 데이터뿐만 아니라, 전월 실적, 한도 조건 등 복잡하고
              어려운 금융상품의 각종 조건 데이터까지 모두 챙겼습니다.
            </h3>
          </DescWrapper>
        </li>
        <li>
          <ImageWrapper>
            <img src={featureImage2} alt="" />
          </ImageWrapper>
          <DescWrapper>
            <h1>나만을 위한 금융매칭</h1>
            <h3>
              수백만가지 경우의 수를 계산하는 추천 알고리즘이 나를 위한 맞춤
              상품을 찾아드립니다.
            </h3>
          </DescWrapper>
        </li>
        <li>
          <ImageWrapper>
            <img src={featureImage3} alt="" />
          </ImageWrapper>
          <DescWrapper>
            <h1>광고나 홍보 없음</h1>
            <h3>
              뱅크샐러드의 추천에는 광고도, 홍보도 없습니다. 오직 객관적인
              데이터만을 활용합니다.
            </h3>
          </DescWrapper>
        </li>
      </Features>
    </>
  );
};

export default Feature;
