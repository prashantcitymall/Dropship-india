import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import styled from 'styled-components';

const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
`;

const HeroTitle = styled(Typography)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const ExploreButton = styled(Button)`
  background-color: white;
  color: #1a73e8;
  padding: 12px 40px;
  font-size: 1.2rem;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle variant="h1">
          INDIA's LARGEST
        </HeroTitle>
        <HeroSubtitle variant="h2">
          DIGITAL DROPSHIPPING PLATFORM
        </HeroSubtitle>
        <ExploreButton variant="contained" href="/products">
          Explore Now
        </ExploreButton>
      </Container>
    </HeroSection>
  );
};

export default Hero;
