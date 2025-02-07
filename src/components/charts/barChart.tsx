import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '@mui/material';
import { BarChartProps, IndexAxis } from './chartTypes';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import Fullscreen from '@mui/icons-material/Fullscreen'; // Import Fullscreen icon

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

const BarChart: React.FC<BarChartProps> = ({
  labels,
  datasets,
  title,
  indexAxis = IndexAxis.vertical,
  stacked = false,
  showFullscreen,
  isFullScreen,
}) => {
  const theme = useTheme();
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const fontSetting = {
    family: theme.direction === 'rtl' ? 'iransans' : undefined,
  };

  const options = {
    responsive: true,
    indexAxis: indexAxis,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.palette.text.primary,
          font: fontSetting,
        },
      },
      title: {
        display: true,
        text: title,
        font: fontSetting,
        color: theme.palette.text.primary,
      },
    },
    scales: {
      x: {
        stacked,
        ticks: {
          color: theme.palette.text.primary,
          font: fontSetting,
        },
      },
      y: {
        stacked,
        beginAtZero: true,
        min: 0, // Set minimum value
        max: datasets[0].maxValue ? datasets[0].maxValue + 2 : null, // Set maximum value (adjust as needed)
        ticks: {
          color: theme.palette.text.primary,
          font: fontSetting,
          stepSize: 1, // Adjust step size as needed
          callback: value => {
            return Number.isInteger(value) ? value : '';
          },
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      {!isFullScreen ? (
        <IconButton
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 1,
            color: theme.palette.text.primary,
          }}
          onClick={showFullscreen}
        >
          <Fullscreen />
        </IconButton>
      ) : null}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
