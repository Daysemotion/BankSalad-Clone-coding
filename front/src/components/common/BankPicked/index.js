import React from 'react';
import SectionLayout from '../../layout/SectionLayout';
import theme from '../../../styles/Theme';
import styled from 'styled-components';
import data from './data';
import PickedCard from '../../modules/Card/PickedCard';

const BankPickedTitle = styled.h3`
  display: block;
  margin-top: 32px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;

const BankPickedList = styled.ul`
  width: 100%;
  margin: 24px -16px 0 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0 16px 16px 0;
    width: calc(25% - 16px);

    ${theme.sectionMobile} {
      width: calc(50% - 16px);
    }
  }
`;

const BankPicked = () => {
  console.log(data);
  return (
    <SectionLayout>
      <BankPickedTitle>뱅크샐러드 Pick!</BankPickedTitle>
      <BankPickedList>
        {data.map((data) => (
          <li key={data.id}>
            <PickedCard
              title={data.title}
              category={data.category}
              img={data.img}
            />
          </li>
        ))}
      </BankPickedList>
    </SectionLayout>
  );
};

export default BankPicked;
