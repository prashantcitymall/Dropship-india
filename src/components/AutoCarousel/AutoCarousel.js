import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #335da9, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #335da9, transparent);
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 100px;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    &::before {
      left: 100%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
    filter: brightness(0.9) contrast(1.1);
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1) contrast(1.2);
    }
  }
`;

const AutoCarousel = () => {
  const images = ['blue.png', 'del.png', 'ekart.png', 'express.png', 'shadow.png'];
  const duplicatedImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <CarouselContainer>
      <CarouselTrack>
        <CardContainer>
          {duplicatedImages.map((image, index) => (
            <Card key={index}>
              <img src={`/images/${image}`} alt={`Partner ${index + 1}`} />
            </Card>
          ))}
        </CardContainer>
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default AutoCarousel;
