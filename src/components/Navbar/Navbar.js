import React from 'react';
import { AppBar, Toolbar, Button, Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: ${props => props.isScrolled ? 'rgba(25, 118, 210, 0.95)' : '#1976d2'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.isScrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${props => props.isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.15)' : '0 4px 30px rgba(0, 0, 0, 0.1)'};
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1440 20' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%231976d2' d='M0,0 L1440,0 L1440,20 C1440,20 1080,5 720,5 C360,5 0,20 0,20 L0,0 Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.85;
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
`;

const NavButton = styled(Button)`
  && {
    color: #000000;
    text-transform: none;
    font-size: 15px;
    padding: 6px 16px;
    opacity: 0.9;
    transition: all 0.3s ease;
    font-weight: 600;
    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.05);
      transform: translateY(-1px);
    }
  }
`;

const LogoContainer = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: #1976d2;
  padding: 8px;
  border-radius: 50%;
  margin-top: 5px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  }
`;

const Logo = styled.img`
  height: 72px;
  width: auto;
  display: block;
  transition: all 0.3s ease;
  background: #1976d2;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
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
  z-index: 1;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderWrapper isScrolled={isScrolled}>
        <StyledAppBar position="static">
          <Container maxWidth="xl">
            <Toolbar style={{ justifyContent: 'space-between', minHeight: '64px', padding: '8px 0' }}>
              <LeftNav>
                <NavButton component={Link} to="/">Home</NavButton>
                <NavButton component={Link} to="/products">Products</NavButton>
              </LeftNav>
              
              <LogoContainer>
                <Link to="/">
                  <Logo src="/dropship-logo.png" alt="Dropship India" />
                </Link>
              </LogoContainer>
              
              <RightNav>
                <NavButton>
                  Company ▾
                </NavButton>
                <NavButton component={Link} to="/contact">Contact Us</NavButton>
              </RightNav>
            </Toolbar>
          </Container>
        </StyledAppBar>
        <BorderLine />
      </HeaderWrapper>
    </>
  );
};

export default Navbar;
