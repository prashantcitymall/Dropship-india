import React from 'react';
import styled from '@emotion/styled';

const GraphsSection = styled.section`
  padding: 60px 0;
  background: #1a237e;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #4CAF50;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 15px;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #4CAF50;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  color: white;
`;

const Graphs = () => {
  return (
    <GraphsSection>
      <ContentWrapper>
        <Title>Analytics Dashboard</Title>
        {/* Add your graphs and charts here */}
      </ContentWrapper>
    </GraphsSection>
  );
};

export default Graphs;
