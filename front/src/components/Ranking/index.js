import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import RankingButton from '../modules/Buttons/RankingButton';
import RankingItem from './RankingItem';
import { useState } from 'react';

const RankingStyled = styled.section`
  padding: 16px 0px 10px;
  background: #fbfbfb;
`;

const RankingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 60px;
  ${theme.mobile} {
    padding: 0 20px;
  }

  ${theme.desktop} {
    padding: 0 20px;
    max-width: 946px;
    margin: 0 auto;
  }

  ${theme.carouselMobileSm} {
    height: 32px;
  }
`;

const RankingContainer = styled.div`
  left: 20px;
  width: calc(100% - 163px);
  height: 100%;
  border-radius: 2px;
  border: solid 1px ${theme.border};
  overflow: hidden;
  z-index: 3;
  flex: 1;

  :hover {
    overflow: visible;

    ul {
      transform: translateY(0) !important;
      transition: none !important;
    }
  }
`;

const RankingItems = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;

  li {
    position: relative;
    padding: 0px 16px;
    z-index: 3000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #fff;

    ${theme.carouselMobileSm} {
      height: 32px;
    }

    span {
      color: #fd8700;
      font-size: 18px;
      font-weight: 700;
      line-height: 56px;

      ${theme.carouselMobileSm} {
        line-height: 32px;
      }
    }

    h1 {
      padding-left: 28px;
      font-size: 16px;
      line-height: 56px;
      color: ${theme.secondary};
      white-space: nowrap;
      overflow: hidden;
    }

    img {
      display: block;
      position: absolute;
      right: 16px;
      width: 52px;
      height: 32px;

      ${theme.carouselMobileSm} {
        display: none;
      }
    }
  }
`;

const Ranking = () => {
  let totalCurrent = 9;
  const [currentRank, setCurrentRank] = useState(0);
  const rankRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('resize',() => {
  //     window.innerWidth
  //   })
  // },[])

  useEffect(() => {
    const rankSlide = setInterval(() => {
      if (currentRank >= totalCurrent) {
        setCurrentRank(0);
      } else {
        setCurrentRank(currentRank + 1);
      }
    }, 4000);
    return () => {
      clearInterval(rankSlide);
    };
  }, [currentRank, totalCurrent]);

  useEffect(() => {
    rankRef.current.style.transition = `transform .5s ease`;
    if (window.innerWidth < 426) {
      rankRef.current.style.transform = `translateY(-${currentRank * 32}px)`;
    } else {
      rankRef.current.style.transform = `translateY(-${currentRank * 60}px)`;
    }
  }, [currentRank]);

  return (
    <RankingStyled>
      <RankingWrapper>
        <RankingContainer>
          <RankingItems ref={rankRef}>
            <RankingItem />
          </RankingItems>
        </RankingContainer>
        <RankingButton moblie={true} />
      </RankingWrapper>
    </RankingStyled>
  );
};

export default Ranking;
