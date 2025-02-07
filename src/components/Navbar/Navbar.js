import React from 'react';
import { AppBar, Toolbar, Button, Container, Box, Typography, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  min-height: 80px;
  background: rgba(24, 49, 130, 0.97);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(65, 105, 225, 0.6),
      rgba(0, 255, 136, 0.6),
      transparent
    );
    filter: blur(1px);
  }
`;

const BorderLine = styled.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 20%, 
    rgba(255, 255, 255, 0.3) 80%, 
    transparent 100%
  );
`;

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  position: relative;
  padding: 0.5rem 0;
`;

const navButtonGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.2); }
  50% { box-shadow: 0 0 15px rgba(65, 105, 225, 0.4); }
  100% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.2); }
`;

const NavButton = styled(Button)`
  && {
    color: rgba(255, 255, 255, 0.75);
    text-transform: none;
    font-size: 0.9rem;
    padding: 8px 23px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 500;
    letter-spacing: 0.8px;
    border-radius: 12px;
    background: rgba(65, 105, 225, 0.1);
    border: 1px solid rgba(65, 105, 225, 0.1);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(4px);
    margin: 0 14px;

    &::before {
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
      color: rgba(255, 255, 255, 1);
      background: rgba(65, 105, 225, 0.2);
      border-color: rgba(65, 105, 225, 0.4);
      transform: translateY(-2px);
      animation: ${navButtonGlow} 2s ease-in-out infinite;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

const LogoContainer = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 8px;
  margin-top: 0px;
  transition: all 0.3s ease;
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    filter: drop-shadow(0 0 0px rgba(65, 105, 225, 0));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(65, 105, 225, 0.3));
  }
  100% {
    filter: drop-shadow(0 0 0px rgba(65, 105, 225, 0));
  }
`;

const Logo = styled.img`
  height: 101px;
  width: auto;
  display: block;
  animation: ${float} 3s ease-in-out infinite, ${pulse} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  margin: 0 37px;
  
  &:hover {
    animation-play-state: paused;
    transform: scale(1.05) translateY(-5px);
    filter: drop-shadow(0 0 20px rgba(65, 105, 225, 0.4));
  }
`;

const LeftNav = styled(Box)`
  display: flex;
  align-items: center;
  z-index: 1;
`;

const RightNav = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
  z-index: 1;
`;

const buttonGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.3), 0 0 10px rgba(65, 105, 225, 0.2), 0 0 15px rgba(65, 105, 225, 0.1); }
  50% { box-shadow: 0 0 10px rgba(65, 105, 225, 0.4), 0 0 20px rgba(65, 105, 225, 0.3), 0 0 30px rgba(65, 105, 225, 0.2); }
  100% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.3), 0 0 10px rgba(65, 105, 225, 0.2), 0 0 15px rgba(65, 105, 225, 0.1); }
`;

const borderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AuthButton = styled(Button)`
  text-transform: none;
  font-size: 0.85rem;
  padding: 8px 23px;
  margin-left: 23px;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 0.6px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(4px);
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    border-radius: 13px;
    background: linear-gradient(
      270deg,
      #4169E1,
      #00ff88,
      #4169E1
    );
    background-size: 200% 200%;
    animation: ${borderAnimation} 4s ease infinite;
  }

  &.login {
    background: rgba(10, 10, 20, 0.3);
    color: #fff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    margin-right: 16px;
    
    &:hover {
      transform: translateY(-2px) scale(1.02);
      background: rgba(10, 10, 20, 0.5);
      animation: ${buttonGlow} 2s ease-in-out infinite;
    }

    &:active {
      transform: translateY(1px) scale(0.98);
    }
  }

  &.signup {
    background: linear-gradient(
      135deg,
      rgba(65, 105, 225, 0.9),
      rgba(0, 255, 136, 0.9)
    );
    color: #fff;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    &:hover {
      transform: translateY(-2px) scale(1.02);
      animation: ${buttonGlow} 2s ease-in-out infinite;
      background: linear-gradient(
        135deg,
        rgba(65, 105, 225, 1),
        rgba(0, 255, 136, 1)
      );
    }

    &:active {
      transform: translateY(1px) scale(0.98);
    }
  }

  .icon {
    margin-right: 6px;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  }

  &.outlined {
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .icon {
    margin-right: 4px;
    font-size: 16px;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrapper>
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                DROPSHIP INDIA
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <NavButton component={Link} to="/">Home</NavButton>
              <NavButton component={Link} to="/products">Products</NavButton>
              <NavButton component={Link} to="/services">Services</NavButton>
              <NavButton component={Link} to="/about">About</NavButton>
              <NavButton component={Link} to="/contact">Contact Us</NavButton>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AuthButton
                variant="outlined"
                startIcon={<PersonOutlineIcon />}
                className="login"
              >
                Sign In
              </AuthButton>
              <AuthButton
                variant="contained"
                className="signup"
              >
                Sign up
              </AuthButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <BorderLine />
    </HeaderWrapper>
  );
};

export default Navbar;
