import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavButton = styled(Button)`
  color: #333;
  margin: 0 10px;
  &:hover {
    background-color: rgba(0,0,0,0.05);
  }
`;

const Logo = styled(Typography)`
  color: #1a73e8;
  font-weight: bold;
  flex-grow: 1;
`;

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Container>
        <Toolbar>
          <Logo variant="h6" component={Link} to="/" style={{ textDecoration: 'none' }}>
            Dropship India
          </Logo>
          <NavButton component={Link} to="/products">Products</NavButton>
          <NavButton component={Link} to="/about">About Us</NavButton>
          <NavButton component={Link} to="/team">Team</NavButton>
          <NavButton component={Link} to="/contact">Contact</NavButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
