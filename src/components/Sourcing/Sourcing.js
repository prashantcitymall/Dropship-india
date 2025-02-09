import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveFlow = keyframes`
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

const rippleEffect = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-240px * 10)); /* Number of cards * card width */
  }
`;

const SourcingSection = styled.section`
  position: relative;
  width: 100%;
  min-height: auto;
  padding: 0;
  margin: 0;
  background: linear-gradient(180deg, #1a237e 0%, #0d47a1 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SourcingTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 10px 0;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      #8BC34A,
      transparent
    );
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 10px 0;
  margin: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #1a237e, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(-90deg, #1a237e, transparent);
  }
`;

const CardsTrack = styled.div`
  display: flex;
  width: calc(240px * 10);
  animation: ${scroll} 60s linear infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation-play-state: paused;
    transform: scale(0.98);
  }
`;

const Card = styled.div`
  flex: 0 0 240px;
  height: 240px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 30px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(33, 150, 243, 0.1),
      rgba(33, 150, 243, 0.05),
      rgba(33, 150, 243, 0.1)
    );
    background-size: 200% 200%;
    animation: ${waveFlow} 8s ease infinite;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    animation: ${rippleEffect} 6s ease-in-out infinite;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 12px 36px rgba(0, 0, 0, 0.2),
      0 0 15px rgba(33, 150, 243, 0.2),
      0 0 30px rgba(33, 150, 243, 0.1);

    &::before {
      animation: ${waveFlow} 4s ease infinite;
      background: linear-gradient(
        45deg,
        rgba(33, 150, 243, 0.2),
        rgba(33, 150, 243, 0.1),
        rgba(33, 150, 243, 0.2)
      );
    }

    &::after {
      animation: ${rippleEffect} 3s ease-in-out infinite;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardText = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  font-weight: 400;
`;

const Highlight = styled.span`
  color: #a5c5ff;
  font-weight: 600;
`;

const Sourcing = () => {
  const cards = [
    {
      title: "48-Hours Quick Sourcing",
      text: "Fast sourcing service for\nnew products at\nunbeatable prices"
    },
    {
      title: "60K+ High Quality Products",
      text: "Access to\n60K+ high quality\ncurated products"
    },
    {
      title: "Top Manufacturers Network",
      text: "Sourced from\n8,500+ top manufacturers,\nimporters and sellers"
    },
    {
      title: "Better Pricing Guaranteed",
      text: "Minimum 30% better pricing\nfor products vs\nall other platforms"
    },
    {
      title: "Custom Packaging",
      text: "Flexible\ncustom packaging\noptions available"
    }
  ];

  // Double the cards array for seamless infinite scroll
  const allCards = [...cards, ...cards];

  return (
    <SourcingSection>
      <SourcingTitle>Amazon</SourcingTitle>
      <CarouselContainer>
        <CardsTrack>
          {allCards.map((card, index) => (
            <Card key={index}>
              <CardTitle>{card.title}</CardTitle>
              <CardText>
                {card.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line.includes('new products at') ||
                     line.includes('60K+ high quality') ||
                     line.includes('8,500+ top manufacturers') ||
                     line.includes('Minimum 30% better pricing') ||
                     line.includes('custom packaging') ? (
                      <Highlight>{line}</Highlight>
                    ) : line}
                  </React.Fragment>
                ))}
              </CardText>
            </Card>
          ))}
        </CardsTrack>
      </CarouselContainer>
    </SourcingSection>
  );
};

export default Sourcing;
