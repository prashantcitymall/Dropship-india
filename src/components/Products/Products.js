import React, { useEffect } from 'react';
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

const ProductSection = styled.section`
  margin-bottom: 120px;
  opacity: 0;
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

const MainTitle = styled(Typography)`
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

const CategoryTitle = styled(Typography)`
  color: #ffffff;
  font-size: 2rem;
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
    font-size: 1.5rem;
  }
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

    return () => {
      grid.remove();
    };
  }, []);

  return (
    <ProductsWrapper className="products-wrapper">
      <Container maxWidth="lg">
        <ProductSection delay={0}>
          <Typography variant="h1" className="text-glow main-title">
            Our Products
          </Typography>
          <ImageContainer className="image-container">
            <ProductImage 
              src="/images/products.png" 
              alt="Dropship India Products" 
            />
          </ImageContainer>
          <FeatureGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Automated Sourcing</FeatureTitle>
                <FeatureDescription>
                  AI-powered product sourcing that automatically finds the best suppliers with competitive prices and reliable shipping times.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Smart Inventory</FeatureTitle>
                <FeatureDescription>
                  Real-time inventory management system with predictive analytics to prevent stockouts and optimize your product lineup.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">One-Click Integration</FeatureTitle>
                <FeatureDescription>
                  Seamlessly connect with popular e-commerce platforms and manage all your stores from a single dashboard.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
          </FeatureGrid>
        </ProductSection>

        <ProductSection delay={0.2}>
          <Typography variant="h2" className="text-glow category-title">
            Kitchen Essentials
          </Typography>
          <ImageContainer className="image-container">
            <ProductImage 
              src="/images/kitchen.png" 
              alt="Kitchen Products" 
            />
          </ImageContainer>
          <FeatureGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Premium Quality</FeatureTitle>
                <FeatureDescription>
                  High-grade materials and expert craftsmanship ensure long-lasting durability and performance.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Modern Design</FeatureTitle>
                <FeatureDescription>
                  Contemporary aesthetics meet functionality, perfect for modern kitchen spaces.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Easy Maintenance</FeatureTitle>
                <FeatureDescription>
                  Designed for easy cleaning and maintenance, saving time and effort.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
          </FeatureGrid>
        </ProductSection>

        <ProductSection delay={0.4}>
          <Typography variant="h2" className="text-glow category-title">
            Fresh Products
          </Typography>
          <ImageContainer className="image-container">
            <ProductImage 
              src="/images/fresh.png" 
              alt="Fresh Products" 
            />
          </ImageContainer>
          <FeatureGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Farm Fresh</FeatureTitle>
                <FeatureDescription>
                  Direct from farms to your doorstep, ensuring maximum freshness and quality.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Quality Assured</FeatureTitle>
                <FeatureDescription>
                  Rigorous quality checks and premium selection process for the best products.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Express Delivery</FeatureTitle>
                <FeatureDescription>
                  Swift delivery system to ensure products reach you at their freshest.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
          </FeatureGrid>
        </ProductSection>

        <ProductSection delay={0.6}>
          <Typography variant="h2" className="text-glow category-title">
            Electronics
          </Typography>
          <ImageContainer className="image-container">
            <ProductImage 
              src="/images/electronics.png" 
              alt="Electronics Products" 
            />
          </ImageContainer>
          <FeatureGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Latest Technology</FeatureTitle>
                <FeatureDescription>
                  Cutting-edge electronics with advanced features and specifications.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Warranty Covered</FeatureTitle>
                <FeatureDescription>
                  Extended warranty and reliable after-sales service for peace of mind.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox className="feature-box-hover">
                <FeatureTitle className="text-glow">Smart Features</FeatureTitle>
                <FeatureDescription>
                  IoT-enabled devices with smart connectivity and automation capabilities.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
          </FeatureGrid>
        </ProductSection>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
