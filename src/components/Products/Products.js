import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import HandshakeIcon from '@mui/icons-material/Handshake';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PaymentsIcon from '@mui/icons-material/Payments';
import LanguageIcon from '@mui/icons-material/Language';
import SellIcon from '@mui/icons-material/Sell';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';





const ServiceSection = styled(Box)`
  padding: 80px 0;
  background: #1976D2;
  color: white;
  position: relative;
  z-index: 1;
`;

const ServiceTitle = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
  
  svg {
    font-size: 2.5rem;
  }
`;

const FeatureCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled(Box)`
  svg {
    font-size: 2rem;
    color: white;
  }
`;

const FeatureCardTitle = styled(Typography)`
  font-weight: 500;
  font-size: 1.1rem;
  color: white;
`;

const Products = () => {
  return (
    <>


      <ServiceSection>
        <Container>
          <ServiceTitle variant="h2">
            <LocalShippingIcon /> Shipping
          </ServiceTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <HandshakeIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Trusted Delivery partners
                </FeatureCardTitle>
                <Typography variant="body2">
                  DELHIVERY, BLUE DART, EKART
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <LocalShippingIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Road, Rail & Air Freight
                </FeatureCardTitle>
                <Typography variant="body2">
                  capabilities for reducing delivery TATs
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <CheckCircleIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Best in class delivery %
                </FeatureCardTitle>
                <Typography variant="body2">
                  with 95% orders delivered in less than 5 days
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <WarehouseIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Own supply chain
                </FeatureCardTitle>
                <Typography variant="body2">
                  with 5 lac+ sq. ft warehouse space
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <PaymentsIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Pan India COD Remittance
                </FeatureCardTitle>
                <Typography variant="body2">
                  with coverage across 27000+ pincodes
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </ServiceSection>

      <ServiceSection style={{ background: '#1565C0' }}>
        <Container>
          <ServiceTitle variant="h2">
            <SearchIcon /> Sourcing
          </ServiceTitle>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <LanguageIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  48-hours quick sourcing
                </FeatureCardTitle>
                <Typography variant="body2">
                  for new products at unbeatable prices
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <InventoryIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  60K+ High Quality Products
                </FeatureCardTitle>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <HandshakeIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Sourced from 8,500+
                </FeatureCardTitle>
                <Typography variant="body2">
                  top manufacturers, importers and sellers
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <SellIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Minimum 30% better pricing
                </FeatureCardTitle>
                <Typography variant="body2">
                  for products vs all other platforms
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard>
                <FeatureIcon>
                  <CardGiftcardIcon />
                </FeatureIcon>
                <FeatureCardTitle>
                  Custom packaging options
                </FeatureCardTitle>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </ServiceSection>
    </>
  );
};

export default Products;
