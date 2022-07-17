import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/Theme';

const SectionStyled = styled.section`
  display: block;
  margin-bottom: 12px;
  padding: 48px 0;
  background: #fff;
  border-bottom: 2px solid ${theme.border};
`;

const SectionContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 946px;
  margin: 0 auto;
  padding: 0 32px;

  ${theme.sectionMobile} {
    overflow: hidden;
    padding: 0 20px;
  }
`;

const SectionLayout = ({ children }) => {
  return (
    <SectionStyled>
      <SectionContainer>{children}</SectionContainer>
    </SectionStyled>
  );
};

export default SectionLayout;
