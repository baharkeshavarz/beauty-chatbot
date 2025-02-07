import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { useTheme } from '@mui/material'

// Register the components with ChartJS
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface Dataset {
  label: string
  data: number[]
  backgroundColor?: string
  borderColor?: string
}

interface RadarChartProps {
  labels: string[]
  datasets: Dataset[]
}

const RadarChart: React.FC<RadarChartProps> = ({ labels, datasets }) => {
  const theme = useTheme()
  const chartData = {
    labels,
    datasets: datasets.map(dataset => ({
      ...dataset,
      borderWidth: 2,
      pointBackgroundColor: dataset.borderColor,
    })),
  }

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          color: theme.palette.text.primary,
          backdropColor: theme.palette.background.default,
        },
        pointLabels: {
          color: theme.palette.text.primary, // Sets the color of the radar chart labels
          font: {
            size: 14, // Optional: adjust font size if needed
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: theme.palette.text.primary,
        },
      },
    },
  }

  return <Radar data={chartData} options={options} />
}

export default RadarChart
