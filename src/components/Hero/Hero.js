import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  z-index: -1;
`;

const HeroSection = styled(Box)`
  color: white;
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: transparent;
  will-change: transform;
`;

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

const TextContainer = styled.div`
  text-align: center;
  margin-top: 120px;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MainTitle = styled(Typography)`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #4169E1 50%, #00ff88 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  opacity: 0;
  animation: 
    ${slideUp} 0.8s ease forwards,
    ${gradientMove} 8s ease infinite;
  text-align: center;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const SubTitle = styled(Typography)`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin: 30px 0;
  opacity: 0;
  animation: 
    ${slideUp} 0.8s ease forwards ${props => props.delay}s,
    ${glowText} 3s ease-in-out infinite ${props => props.delay + 0.8}s;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const Description = styled(Typography)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 60px auto;
  opacity: 0;
  animation: ${slideUp} 0.8s ease forwards ${props => props.delay}s;
  line-height: 1.5;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const HeroSubtitle = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-align: center;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  left: 50%;
  top: 82%;
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
    will-change: transform;
    transform: translateZ(0);

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
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <HeroSection>

      <Overlay />
      <Container>
        <TextContainer>
          <MainTitle variant="h1" className={isVisible ? 'visible' : ''}>
            Dropship India
          </MainTitle>
          <SubTitle variant="h2" delay={0.3} className={isVisible ? 'visible' : ''}>
            Source Anything,
          </SubTitle>
          <SubTitle variant="h2" delay={0.6} className={isVisible ? 'visible' : ''}>
            Ship Everything
          </SubTitle>

        </TextContainer>
        <ButtonWrapper>
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 500,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Become a part of India's fastest growing dropshipping platform!
          </Typography>
          <ExploreButton 
            variant="contained"
            onClick={() => navigate('/explore')}
            sx={{ marginLeft: '25%' }}
          >
            Explore Now
            <span className="arrow">→</span>
          </ExploreButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
