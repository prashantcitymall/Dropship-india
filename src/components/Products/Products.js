import React, { useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import './Products.css';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(0, 245, 160, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 245, 160, 0.5); }
  100% { box-shadow: 0 0 20px rgba(0, 245, 160, 0.3); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const ProductsWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000, #0A0A0A, #141414);
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00F5A0, #00D9F5);
    opacity: 0.5;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0, 245, 160, 0.1), transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(0, 217, 245, 0.1), transparent 25%);
    pointer-events: none;
  }
`;

const HeroSection = styled.div`
  position: relative;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(Typography)`
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00F5A0, #00D9F5);
  }

  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  border-radius: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${glowPulse} 4s infinite;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #00F5A0, #00D9F5);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(0, 245, 160, 0.1) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  animation: ${float} 6s ease-in-out infinite;
  transform-origin: center center;
`;

const FeatureGrid = styled(Grid)`
  margin-top: 100px;
`;

const FeatureBox = styled(Box)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 245, 160, 0.3);
  }
`;

const FeatureTitle = styled(Typography)`
  color: #00F5A0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FeatureDescription = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.6;
`;

const Products = () => {
  useEffect(() => {
    // Add cyber grid effect
    const grid = document.createElement('div');
    grid.className = 'cyber-grid';
    document.querySelector('.products-wrapper')?.appendChild(grid);

    // Add scanline effect to image container
    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    document.querySelector('.image-container')?.appendChild(scanline);

    return () => {
      grid.remove();
      scanline.remove();
    };
  }, []);

  return (
    <ProductsWrapper className="products-wrapper">
      <Container maxWidth="lg">
        <HeroSection className="products-enter">
          <Title variant="h1" className="text-glow">
            Our Products
          </Title>
          <Subtitle variant="h5">
            Discover our cutting-edge dropshipping solutions designed to revolutionize your e-commerce business
          </Subtitle>
        </HeroSection>

        <ImageContainer className="image-container hover-scale">
          <ProductImage 
            src="/images/products.png" 
            alt="Dropship India Products" 
          />
        </ImageContainer>

        <FeatureGrid container spacing={4} className="feature-grid">
          <Grid item xs={12} md={4}>
            <FeatureBox className="feature-box-hover feature-highlight">
              <FeatureTitle className="text-glow">Automated Sourcing</FeatureTitle>
              <FeatureDescription>
                AI-powered product sourcing that automatically finds the best suppliers with competitive prices and reliable shipping times.
              </FeatureDescription>
            </FeatureBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <FeatureBox className="feature-box-hover feature-highlight">
              <FeatureTitle className="text-glow">Smart Inventory</FeatureTitle>
              <FeatureDescription>
                Real-time inventory management system with predictive analytics to prevent stockouts and optimize your product lineup.
              </FeatureDescription>
            </FeatureBox>
          </Grid>

          <Grid item xs={12} md={4}>
            <FeatureBox className="feature-box-hover feature-highlight">
              <FeatureTitle className="text-glow">One-Click Integration</FeatureTitle>
              <FeatureDescription>
                Seamlessly connect with popular e-commerce platforms and manage all your stores from a single dashboard.
              </FeatureDescription>
            </FeatureBox>
          </Grid>
        </FeatureGrid>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
