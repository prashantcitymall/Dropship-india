import React from 'react';
import styled from 'styled-components';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsSection = styled.div`
  padding: 60px 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

const AnalyticsHeader = styled.div`
  margin-bottom: 40px;
  padding-left: 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding-left: 0;
    text-align: center;
  }
`;

const AnalyticsTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 15px rgba(139, 195, 74, 0.3);

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const AnalyticsSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    gap: 20px;
    max-width: 95%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.4fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 100%;
  }
`;

const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: ${props => props.isMainChart ? '400px' : '350px'};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    height: ${props => props.isMainChart ? '350px' : '300px'};
    padding: 20px;
  }

  @media (max-width: 768px) {
    height: ${props => props.isMainChart ? '300px' : '280px'};
    padding: 16px;
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const SmallChartContainer = styled(ChartContainer)`
  height: 350px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  
  canvas {
    height: 220px !important;
    width: 100% !important;
  }

  @media (max-width: 1200px) {
    height: 300px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    height: 280px;
    padding: 16px;

    canvas {
      height: 200px !important;
    }
  }
`;

const ChartTitle = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 16px;
  padding-left: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 12px;
  }
`;

const ChartWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
  
  canvas {
    max-height: 100% !important;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 90%;
  margin: 20px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const AboutAnalytics = () => {
  // Orders & GMV Data
  const lineData = {
    labels: ['26 Jan', '28 Jan', '30 Jan', '01 Feb', '03 Feb', '05 Feb', '07 Feb', '09 Feb'],
    datasets: [
      {
        label: 'Orders',
        data: [50, 120, 180, 220, 180, 150, 200, 280],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'GMV',
        data: [50000, 100000, 180000, 250000, 200000, 150000, 220000, 300000],
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.4,
        yAxisID: 'y1',
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)',
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)',
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        titleColor: 'rgba(255, 255, 255, 1)',
        bodyColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        bodySpacing: 5,
        bodyFont: {
          size: 12
        },
        titleFont: {
          size: 13,
          weight: 'bold'
        }
      }
    }
  };

  // Payment Mode Data
  const paymentData = {
    labels: ['COD', 'PREPAID'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          'rgb(0, 184, 148)',
          'rgb(54, 162, 235)'
        ],
        borderWidth: 0,
      },
    ],
  };

  // Order Status Data
  const orderStatusData = {
    labels: ['CANCELLED (RTR)', 'CANCELLED BY DB', 'CONFIRMED', 'PENDING'],
    datasets: [
      {
        data: [15, 25, 45, 15],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 0,
      },
    ],
  };

  // Confirmed Orders Status Data
  const confirmedOrdersData = {
    labels: ['CONFIRMED_BY_SELLER', 'DELIVERED', 'OUT_FOR_DELIVERY', 'PACKED', 'RTO', 'SHIPPED'],
    datasets: [
      {
        data: [20, 25, 15, 15, 10, 15],
        backgroundColor: [
          'rgb(0, 184, 148)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          boxWidth: 12,
          font: {
            size: 11
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label, index) => ({
              text: `${label} (${datasets[0].data[index]}%)`,
              fillStyle: datasets[0].backgroundColor[index],
              hidden: false,
              index: index,
              fontColor: 'rgba(255, 255, 255, 0.9)'
            }));
          }
        }
      },
      tooltip: {
        titleColor: 'rgba(255, 255, 255, 1)',
        bodyColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        bodySpacing: 5,
        bodyFont: {
          size: 12
        },
        titleFont: {
          size: 13,
          weight: 'bold'
        }
      }
    }
  };

  return (
    <AnalyticsSection className="about-analytics-section">
      <AnalyticsHeader>
        <AnalyticsTitle>Analytics</AnalyticsTitle>
        <AnalyticsSubtitle>Get detailed insights about your stores.</AnalyticsSubtitle>
      </AnalyticsHeader>
      <GridContainer>
        <ChartContainer isMainChart={true}>
          <ChartTitle>Orders & GMV</ChartTitle>
          <ChartWrapper>
            <Line data={lineData} options={lineOptions} />
          </ChartWrapper>
        </ChartContainer>
        <ChartContainer>
          <ChartTitle>Margin Applied %</ChartTitle>
          <Line 
            data={{
              labels: ['26 Jan', '28 Jan', '30 Jan', '01 Feb', '03 Feb', '05 Feb', '07 Feb', '09 Feb'],
              datasets: [{
                label: 'Margin %',
                data: [30, 45, 65, 80, 60, 40, 55, 75],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.4,
              }]
            }}
            options={{
              ...lineOptions,
              scales: {
                ...lineOptions.scales,
                y: {
                  ...lineOptions.scales.y,
                  min: 0,
                  max: 100,
                  ticks: {
                    stepSize: 20,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }
                }
              }
            }}
          />
        </ChartContainer>
      </GridContainer>
      <ChartsGrid>
        <SmallChartContainer>
          <ChartTitle>Orders by Payment Mode</ChartTitle>
          <ChartWrapper>
            <Doughnut data={paymentData} options={doughnutOptions} />
          </ChartWrapper>
        </SmallChartContainer>
        <SmallChartContainer>
          <ChartTitle>Orders by Confirmation Status</ChartTitle>
          <ChartWrapper>
            <Doughnut data={orderStatusData} options={doughnutOptions} />
          </ChartWrapper>
        </SmallChartContainer>
        <SmallChartContainer>
          <ChartTitle>Confirmed Orders by Order Status</ChartTitle>
          <ChartWrapper>
            <Doughnut data={confirmedOrdersData} options={doughnutOptions} />
          </ChartWrapper>
        </SmallChartContainer>
      </ChartsGrid>
    </AnalyticsSection>
  );
};

export default AboutAnalytics;
