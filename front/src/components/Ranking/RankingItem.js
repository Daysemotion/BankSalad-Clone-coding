import React from 'react';
import cardRanking1 from '../../assets/card-image/card-ranking-1.png';
import cardRanking2 from '../../assets/card-image/card-ranking-2.png';
import cardRanking3 from '../../assets/card-image/card-ranking-3.png';
import cardRanking4 from '../../assets/card-image/card-ranking-4.png';
import cardRanking5 from '../../assets/card-image/card-ranking-5.png';
import cardRanking6 from '../../assets/card-image/card-ranking-6.png';
import cardRanking7 from '../../assets/card-image/card-ranking-7.png';
import cardRanking8 from '../../assets/card-image/card-ranking-8.png';
import cardRanking9 from '../../assets/card-image/card-ranking-9.png';
import cardRanking10 from '../../assets/card-image/card-ranking-10.png';

const RankingItem = () => {
  return (
    <>
      <li>
        <span>1</span>
        <h1>삼성카드 taptap O</h1>
        <img src={cardRanking1} alt="" />
      </li>
      <li>
        <span>2</span>
        <h1>신한카드 후불하이패스+(하이패스 전용)</h1>
        <img src={cardRanking2} alt="" />
      </li>
      <li>
        <span>3</span>
        <h1>신한 Hi-Point 카드</h1>
        <img src={cardRanking3} alt="" />
      </li>
      <li>
        <span>4</span>
        <h1>신한카드 YOLO ⓘ (미니언즈)</h1>
        <img src={cardRanking4} alt="" />
      </li>
      <li>
        <span>5</span>
        <h1>청춘대로 톡톡카드</h1>
        <img src={cardRanking5} alt="" />
      </li>
      <li>
        <span>6</span>
        <h1>탄탄대로 올쇼핑 티타늄카드</h1>
        <img src={cardRanking6} alt="" />
      </li>
      <li>
        <span>7</span>
        <h1>삼성카드 taptap S</h1>
        <img src={cardRanking7} alt="" />
      </li>
      <li>
        <span>8</span>
        <h1>신한카드 B.Big(삑)</h1>
        <img src={cardRanking8} alt="" />
      </li>
      <li>
        <span>9</span>
        <h1>삼성카드 & MILEAGE PLATINUM(스카이패스)</h1>
        <img src={cardRanking9} alt="" />
      </li>
      <li>
        <span>10</span>
        <h1>신한카드 Deep Dream</h1>
        <img src={cardRanking10} alt="" />
      </li>
    </>
  );
};

export default RankingItem;
