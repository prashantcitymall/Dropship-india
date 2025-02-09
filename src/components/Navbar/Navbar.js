import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-left: -104px;
`;

const Logo = styled.img`
  height: 62px;
  width: auto;
  margin-right: 10px;
  object-fit: contain;
`;

const StyledAppBar = styled(AppBar)`
  background: white !important;
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  && {
    color: black;
    text-transform: none;
    font-size: 1rem;
    padding: 8px 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: transparent;
    font-weight: 500;

    &:hover {
      color: black;
      transform: translateY(-2px);
      background: rgba(0, 0, 0, 0.05);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const AuthButton = styled(Button)`
  && {
    background: transparent;
    color: black;
    border: 2px solid black;
    padding: 8px 25px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-2px);
      color: black;
      border-color: black;
      background: rgba(0, 0, 0, 0.05);
    }

    &:active {
      transform: translateY(0);
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const SignUpButton = styled(Button)`
  && {
    background: black;
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      background: #333333;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <HeaderWrapper>
      <StyledAppBar position="fixed" elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <LogoContainer>
              <Logo src="/images/dropship logo.png" alt="Dropship Logo" />
            </LogoContainer>

            <NavContainer>
              <StyledButton component={Link} to="/">
                Home
              </StyledButton>
              <StyledButton component={Link} to="/products">
                Products
              </StyledButton>
              <StyledButton component={Link} to="/services">
                Services
              </StyledButton>
            </NavContainer>

            <ButtonGroup>
              <AuthButton
                component={Link}
                to="/login"
              >
                Login
              </AuthButton>
              <SignUpButton component={Link} to="/signup">
                Sign Up
              </SignUpButton>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </HeaderWrapper>
  );
}

export default Navbar;
