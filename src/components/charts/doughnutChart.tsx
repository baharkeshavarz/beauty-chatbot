import { useTheme } from '@mui/material'
import { ChartData, ChartOptions } from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { DoughnutChartTypes } from './chartTypes'

const DoughnutChart: React.FC<DoughnutChartTypes> = ({
  dataSet,
  itemLabel,
  labels,
  title,
  bgColorList,
  borderColorList,
  hoverOffset,
}) => {
  const theme = useTheme()
  const data: ChartData<'doughnut', number[], string> = {
    labels: labels,
    datasets: [
      {
        label: itemLabel,
        data: dataSet,
        backgroundColor: bgColorList,
        borderColor: borderColorList,
        borderWidth: 1,
        borderAlign: 'inner',
        hoverOffset: hoverOffset,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: true,
        color: theme.palette.text.primary,
        text: title,
      },
    },
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  }
  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
