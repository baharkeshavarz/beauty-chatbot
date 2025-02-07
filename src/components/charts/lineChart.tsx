import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LogarithmicScale,
} from 'chart.js';
import { useTheme } from '@mui/material';
import { LineChartType, ScaleType } from './chartTypes';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
);

type DataSet = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
};

const LineChart: React.FC<LineChartType> = ({
  labels,
  Ylabel,
  Xlabel,
  dataSet,
  title,
  Yscale = ScaleType.linear,
}) => {
  const theme = useTheme();

  const fontSetting = {
    family: theme.direction === 'rtl' ? 'yekan-bakh' : undefined,
  };

  const lineData = {
    labels: labels,
    datasets: dataSet,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: theme.palette.text.primary,
          font: fontSetting,
        },
      },
      title: {
        display: true,
        color: theme.palette.text.primary,
        text: title,
        font: fontSetting,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: Xlabel,
          color: theme.palette.text.primary,
          font: fontSetting,
        },
        ticks: {
          color: theme.palette.text.primary,
          font: fontSetting,
        },
      },
      y: {
        type: Yscale,
        title: {
          display: true,
          text: Ylabel,
          color: theme.palette.text.primary,
        },
        ticks: {
          color: theme.palette.text.primary,
          font: fontSetting,
        },
      },
    },
  };

  return <Line data={lineData} options={options} />;
};

export default LineChart;
