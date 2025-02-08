import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const glowText = keyframes`
  0% { text-shadow: 0 0 10px rgba(65, 105, 225, 0.3), 0 0 20px rgba(65, 105, 225, 0.3); }
  50% { text-shadow: 0 0 20px rgba(65, 105, 225, 0.5), 0 0 30px rgba(65, 105, 225, 0.5); }
  100% { text-shadow: 0 0 10px rgba(65, 105, 225, 0.3), 0 0 20px rgba(65, 105, 225, 0.3); }
`;

const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled(Box)`
  color: white;
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${slideUp} 0.8s ease-out;
  text-align: center;

  span {
    color: #1976D2;
    -webkit-text-fill-color: #1976D2;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #333;
  line-height: 1.4;
  animation: ${slideUp} 0.8s ease-out 0.2s backwards;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const GetStartedButton = styled(Button)`
  && {
    background: #4CAF50;
    color: white;
    padding: 12px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    text-transform: none;
    transition: all 0.3s ease;
    height: 48px;
    line-height: 1;
    display: flex;
    align-items: center;
    margin: 0;

    &:hover {
      background: #43A047;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
    }
  }
`;

const PremiumButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #FF4081 0%, #E91E63 100%);
    color: white;
    padding: 12px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    text-transform: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    height: 48px;
    line-height: 1;
    display: flex;
    align-items: center;
    margin: 0;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: 0.5s;
    }

    &:hover {
      background: linear-gradient(135deg, #E91E63 0%, #D81B60 100%);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);

      &:before {
        left: 100%;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  animation: ${slideUp} 0.8s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 15px;
  }
`;

const IntegrationSection = styled.div`
  margin-top: 60px;
  animation: ${slideUp} 0.8s ease-out 0.6s backwards;

  h3 {
    color: #666;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 15px;

  img {
    height: 40px;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;

const LogoText = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    ${LogoText} {
      opacity: 1;
    }
    img {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <ContentWrapper>
        <MainTitle>
          Make Drop<span>shipping</span> Easy
        </MainTitle>
        <SubTitle>
          Revolutionize eCommerce with AI-Powered<br />
          Automation and Digital Product Creation
        </SubTitle>
        <ButtonGroup>
          <GetStartedButton 
            variant="contained"
            onClick={() => navigate('/services')}
          >
            Our Services
          </GetStartedButton>
          <PremiumButton
            variant="contained"
            onClick={() => window.open('https://apps.shopify.com/dropship-india', '_blank')}
          >
            Unlock Premium Benefits Now
          </PremiumButton>
        </ButtonGroup>
        <IntegrationSection>
          <h3>Dropship India INTEGRATES WITH...</h3>
          <LogoGrid>
            <LogoContainer>
              <img src="/images/shopify.png" alt="Shopify" />
              <LogoText>Shopify</LogoText>
            </LogoContainer>
          </LogoGrid>
        </IntegrationSection>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
