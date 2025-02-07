import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import { ChartData, ChartOptions } from 'chart.js/auto'
import { useTheme } from '@mui/material'
import { PieChartTypes } from './chartTypes'

const PieChart: React.FC<PieChartTypes> = ({
  dataSet,
  itemLabel,
  labels,
  title,
  bgColorList,
  borderColorList,
  hoverOffset,
}) => {
  const theme = useTheme()
  const data: ChartData<'pie', number[], string> = {
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

  const options: ChartOptions<'pie'> = {
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
  return <Pie data={data} options={options} />
}

export default PieChart
