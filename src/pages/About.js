import React from 'react';
import AboutTiles from '../components/AboutTiles/AboutTiles';
import AboutAnalytics from '../components/AboutAnalytics/AboutAnalytics';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 40px 0 30px;
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

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const AboutTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  margin-bottom: 15px;
`;

const AboutDescription = styled.div`
  max-width: 900px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  padding: 0 20px;
`;

const DescriptionParagraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: left;
  opacity: 0.9;
  padding-left: 40px;
  position: relative;

  &:last-child {
    margin-bottom: 40px;
  }

  &::before {
    content: "•";
    position: absolute;
    left: 20px;
    color: #8BC34A;
  }
`;

const HighlightText = styled.span`
  color: #8BC34A;
  font-weight: 600;
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
