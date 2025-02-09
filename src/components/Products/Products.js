import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import './Products.css';

const ProductsWrapper = styled.div`
  min-height: 100vh;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: transparent !important;
  color: #335da9;

  &:after {
    content: none;
  }
`;

const ProductSection = styled.section`
  margin-bottom: 120px;
  background: transparent !important;
`;

const Title = styled(Typography)`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  color: transparent;
  background: linear-gradient(
    135deg,
    #335da9,
    #8BC34A,
    #335da9
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  text-shadow: 
    2px 2px 4px rgba(51, 93, 169, 0.2),
    -2px -2px 4px rgba(139, 195, 74, 0.2);
  
  &::before {
    content: 'DROPSHIP INDIA';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 45%,
      rgba(139, 195, 74, 0.5) 50%,
      transparent 55%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: -1;
    animation: shine 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #335da9, #8BC34A);
    border-radius: 2px;
    box-shadow: 
      0 0 10px rgba(51, 93, 169, 0.5),
      0 0 20px rgba(139, 195, 74, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  border-radius: 20px;
  padding: 20px;
  background: transparent !important;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(51, 93, 169, 0.3), rgba(51, 93, 169, 0.1));
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  background: transparent !important;
`;

const FeatureGrid = styled(Grid)`
  margin-top: 100px;
`;

const FeatureBox = styled(Box)`
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  border: 1px solid rgba(51, 93, 169, 0.3);
  background: transparent !important;
`;

const FeatureTitle = styled(Typography)`
  color: #335da9;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FeatureDescription = styled(Typography)`
  color: #335da9;
  font-size: 1rem;
  line-height: 1.6;
`;

const Products = () => {
  return (
    <ProductsWrapper className="products-wrapper">
      <Container maxWidth="lg">
        <ProductSection>
          <Title variant="h1">
            DROPSHIP INDIA
          </Title>
          <ImageContainer className="image-container">
            <ProductImage 
              src="/images/products.png" 
              alt="Dropship India Products" 
            />
          </ImageContainer>
          <FeatureGrid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureBox>
                <FeatureTitle>Automated Sourcing</FeatureTitle>
                <FeatureDescription>
                  AI-powered product sourcing that automatically finds the best suppliers with competitive prices and reliable shipping times.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox>
                <FeatureTitle>Smart Inventory</FeatureTitle>
                <FeatureDescription>
                  Real-time inventory management system with predictive analytics to prevent stockouts and optimize your product lineup.
                </FeatureDescription>
              </FeatureBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureBox>
                <FeatureTitle>Seamless Integration</FeatureTitle>
                <FeatureDescription>
                  Easy integration with major e-commerce platforms and marketplaces for streamlined order processing.
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
