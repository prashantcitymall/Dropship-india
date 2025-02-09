import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ContactWrapper = styled.section`
  min-height: 100vh;
  padding: 80px 20px;
  background: #335da9;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 40px;
  flex: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ContactTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #ffffff;
  white-space: nowrap;
  display: inline-block;
  font-family: inherit;
  line-height: 1.2;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #0066FF, #00C6FF);
    animation: ${gradientAnimation} 3s ease infinite;
    background-size: 200% 200%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoLabel = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const InfoText = styled(Typography)`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 18px;
  width: 100%;
  
  .MuiOutlinedInput-root {
    height: ${props => props.multiline ? 'auto' : '55px'};
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    &.Mui-focused {
      background: rgba(255, 255, 255, 0.07);
    }
    
    fieldset {
      border-color: rgba(255, 255, 255, 0.1);
    }
    
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    &.Mui-focused fieldset {
      border-color: #0066FF;
    }
  }
  
  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    
    &.Mui-focused {
      color: #0066FF;
    }
  }
  
  input, textarea {
    color: #ffffff;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SubmitButton = styled(Button)`
  && {
    background: linear-gradient(45deg, #0066FF, #00C6FF);
    color: white;
    padding: 12px 35px;
    font-size: 1rem;
    border-radius: 12px;
    text-transform: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: all 0.5s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 102, 255, 0.3);
      
      &:before {
        left: 100%;
      }
    }
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 26px;
  color: #ffffff;
  white-space: nowrap;
  display: inline-block;
  font-family: inherit;
  line-height: 1.2;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #0066FF, #00C6FF);
    animation: ${gradientAnimation} 3s ease infinite;
    background-size: 200% 200%;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <GlassCard>
          <Box mb={3}>
            <ContactTitle>Contact Us</ContactTitle>
          </Box>
          <ContactInfo>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>
              <a href="tel:+919643532726">+91 9643532726</a>,{' '}
              <a href="tel:+917428229339">+91 7428229339</a>
            </InfoText>
            
            <InfoLabel>Email</InfoLabel>
            <InfoText>
              <a href="mailto:support@dropshipindia.live">
                support@dropshipindia.live
              </a>
            </InfoText>
            
            <InfoLabel>Instagram</InfoLabel>
            <InfoText>
              <a href="https://instagram.com/dropshipindia.live" target="_blank" rel="noopener noreferrer">
                @dropshipindia.live
              </a>
            </InfoText>
          </ContactInfo>
        </GlassCard>

        <GlassCard>
          <Box mb={3}>
            <FormTitle>Send Us A Message</FormTitle>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <SubmitButton type="submit" variant="contained">
                  SEND MESSAGE
                </SubmitButton>
              </Grid>
            </Grid>
          </form>
        </GlassCard>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
