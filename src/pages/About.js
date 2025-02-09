import React from 'react';
import AboutTiles from '../components/AboutTiles/AboutTiles';
import AboutAnalytics from '../components/AboutAnalytics/AboutAnalytics';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 40px 0 30px;
  min-height: 100vh;
  background: linear-gradient(135deg, #0466c8, #023e7d, #002855);
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
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const AboutTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #8BC34A, transparent);
  }
`;

const AboutDescription = styled.div`
  max-width: 1188px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* Futuristic corner accents */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border: 2px solid #8BC34A;
    opacity: 0.8;
  }

  &::before {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
    border-radius: 15px 0 0 0;
  }

  &::after {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 15px 0;
  }

  /* Glowing effect */
  animation: glow 3s infinite alternate;
  @keyframes glow {
    from {
      box-shadow: 0 0 20px rgba(139, 195, 74, 0.1);
    }
    to {
      box-shadow: 0 0 30px rgba(139, 195, 74, 0.3);
    }
  }
`;

const DescriptionParagraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 25px;
  text-align: left;
  opacity: 0.9;
  padding-left: 30px;
  position: relative;
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "›";
    position: absolute;
    left: 0;
    color: #8BC34A;
    font-size: 1.4rem;
    font-weight: bold;
    transform: translateY(-2px);
  }

  &:hover {
    transform: translateX(5px);
    opacity: 1;
  }
`;

const HighlightText = styled.span`
  color: #8BC34A;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8BC34A, transparent);
    opacity: 0.5;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AboutTitle>About Dropship India</AboutTitle>
        <AboutDescription>
          <DescriptionParagraph>
            Dropship India, a <HighlightText>Citymall subsidiary</HighlightText> is India&apos;s fastest-growing dropshipping platform & the smart choice for all eCommerce entrepreneurs.
          </DescriptionParagraph>
          
          <DescriptionParagraph>
            Built by professionals, Dropship India currently works with <HighlightText>150+ dropshippers</HighlightText> & <HighlightText>&gt;40,000 orders daily</HighlightText>.
          </DescriptionParagraph>

          <DescriptionParagraph>
            <HighlightText>Wide range of products</HighlightText> with highest profit margins
          </DescriptionParagraph>

          <DescriptionParagraph>
            <HighlightText>End to end order delivery</HighlightText> and fulfilment
          </DescriptionParagraph>

          <DescriptionParagraph>
            <HighlightText>Transparency & Trust</HighlightText>
          </DescriptionParagraph>
        </AboutDescription>
      </AboutHeader>
      <ContentSection>
        <AboutTiles />
      </ContentSection>
      <ContentSection>
        <AboutAnalytics />
      </ContentSection>
    </AboutContainer>
  );
};

export default About;
