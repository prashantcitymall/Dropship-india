import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100vw + 200px);
    height: calc(100vh + 200px);
    transform: translate(-50%, -50%) scale(1.1);
    pointer-events: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: -1;
`;

const HeroSection = styled(Box)`
  color: white;
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
const HeroTitle = styled(Typography)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const HeroSubtitle = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ExploreButton = styled(Button)`
  && {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 15px 40px;
    font-size: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: none;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }

    .arrow {
      font-size: 24px;
      margin-left: 5px;
      transition: transform 0.3s ease;
    }

    &:hover .arrow {
      transform: translateX(5px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/3vVdmYz5eNY?autoplay=1&mute=1&controls=0&loop=1&playlist=3vVdmYz5eNY&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer&modestbranding=1&iv_load_policy=3&origin=https://blackbuck.com"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
        />
      </VideoWrapper>
      <Overlay />
      <Container>
        <HeroTitle variant="h1">
          INDIA's LARGEST
        </HeroTitle>
        <HeroSubtitle variant="h2">
          DIGITAL DROPSHIPPING PLATFORM
        </HeroSubtitle>
        <ButtonWrapper>
          <ExploreButton 
            variant="contained"
            onClick={() => window.location.href = '/explore'}
          >
            Explore
            <span className="arrow">→</span>
          </ExploreButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
