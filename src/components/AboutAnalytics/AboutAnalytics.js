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
  padding: 10px 20px 30px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const AnalyticsHeader = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const AnalyticsTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 15px rgba(139, 195, 74, 0.3);
`;

const AnalyticsSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: ${props => props.isMainChart ? '309px' : 'auto'};
  display: flex;
  flex-direction: column;
`;

const SmallChartContainer = styled(ChartContainer)`
  height: 220px;
  padding: 10px;
  
  canvas {
    max-height: 176px !important;
  }
`;

const ChartTitle = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  margin: 0 0 8px;
  padding-left: 5px;
`;

const ChartWrapper = styled.div`
  flex: 1;
  min-height: 0;
  canvas {
    max-height: 100% !important;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 90%;
  margin: 0 auto;

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
      },
    ],
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
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
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
    <AnalyticsSection>
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
