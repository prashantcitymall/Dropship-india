import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2); }
  100% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); }
`;

const slideAnimation = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const neonGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3), 0 0 15px rgba(82, 157, 255, 0.3); }
  50% { box-shadow: 0 0 10px rgba(82, 157, 255, 0.5), 0 0 20px rgba(82, 157, 255, 0.5), 0 0 25px rgba(82, 157, 255, 0.5); }
  100% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3), 0 0 15px rgba(82, 157, 255, 0.3); }
`;

const borderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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
    padding: 10px 24px;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }

    &:hover {
      color: black;
      transform: translateY(-2px);
      background: rgba(0, 0, 0, 0.05);
      animation: ${glowAnimation} 2s infinite;

      &::before {
        transform: scaleX(1);
        animation: ${slideAnimation} 0.3s ease forwards;
      }

      &::after {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

const AuthButton = styled(Button)`
  && {
    background: rgba(255, 255, 255, 0.1);
    color: #1a2b6d;
    padding: 10px 28px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-transform: capitalize;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-image: linear-gradient(white, white), 
                     linear-gradient(120deg, #1a2b6d, #529dff, #1a2b6d);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-size: 200% 200%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      transform: translateY(-3px);
      color: #1a2b6d;
      animation: ${borderAnimation} 3s ease infinite;

      &::before {
        transform: translateX(100%);
      }
    }

    &:active {
      transform: translateY(-1px);
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const SignUpButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #1a2b6d 0%, #529dff 100%);
    color: white;
    border: none;
    padding: 10px 28px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-transform: capitalize;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    box-shadow: 0 6px 15px rgba(82, 157, 255, 0.3);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      transform: translateY(-3px);
      animation: ${neonGlow} 2s infinite;
      background: linear-gradient(135deg, #529dff 0%, #1a2b6d 100%);

      &::before {
        transform: translateX(100%);
      }
    }

    &:active {
      transform: translateY(-1px);
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
