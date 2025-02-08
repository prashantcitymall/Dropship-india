import React from 'react';
import AboutTiles from '../components/AboutTiles/AboutTiles';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
  position: relative;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  padding: 80px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 15px rgba(139, 195, 74, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 40px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const About = () => {
  return (
    <AboutContainer>
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>About Dropship India</Title>
        <Subtitle>
          We're revolutionizing e-commerce fulfillment with cutting-edge technology
          and seamless integration. Our platform empowers businesses to scale efficiently
          while maintaining quality and reliability.
        </Subtitle>
      </Header>
      <ContentWrapper>
        <AboutTiles />
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
