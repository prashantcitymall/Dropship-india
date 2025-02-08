import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const TileCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    svg {
      transform: scale(1.05);
    }
  }
`;

const IllustrationContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }
`;

const TileContent = styled.div`
  text-align: center;
  color: #fff;
`;

const TileTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TileDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const tilesData = [
  {
    id: 1,
    title: "Automated Order Processing",
    description: "Streamline your business with our advanced automated order processing system",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          cx="12" cy="12" r="3"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: "Pan India Delivery",
    description: "Reach customers across India with our extensive delivery network",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        />
      </svg>
    )
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality checks before shipping",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M22 11.08V12a10 10 0 11-5.93-9.14"
        />
        <motion.polyline
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          points="22 4 12 14.01 9 11.01"
        />
      </svg>
    )
  },
  {
    id: 4,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated stock updates",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          x="2" y="3" width="20" height="14" rx="2" ry="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          d="M8 21h8M12 17v4"
        />
      </svg>
    )
  },
  {
    id: 5,
    title: "Seamless Integration",
    description: "Easy integration with major e-commerce platforms",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 3"
        />
      </svg>
    )
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries",
    illustration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          d="M12 6v6l4 2"
        />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tileVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const AboutTiles = () => {
  return (
    <TilesContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tilesData.map((tile) => (
        <TileCard
          key={tile.id}
          variants={tileVariants}
        >
          <IllustrationContainer>
            {tile.illustration}
          </IllustrationContainer>
          <TileContent>
            <TileTitle>{tile.title}</TileTitle>
            <TileDescription>{tile.description}</TileDescription>
          </TileContent>
        </TileCard>
      ))}
    </TilesContainer>
  );
};

export default AboutTiles;
