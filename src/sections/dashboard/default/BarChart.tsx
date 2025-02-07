import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';
import { color } from '@mui/system';

interface BarChartProps {
  labels: string[];
  dataset: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, dataset }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;
  const [series] = useState([
    {
      data: dataset || [],
    },
  ]);

  const fontSetting = {
    fontFamily: theme.direction === 'rtl' ? 'yekan-bakh' : undefined,
    fontSize: '0.7rem',
    color: mode === 'dark' ? 'common.white' : 'common.black',
  };

  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 365,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labels || [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
    grid: {
      show: true,
    },
  };

  const [options, setOptions] = useState<ChartProps>(barChartOptions);

  useEffect(() => {
    setOptions(prevState => ({
      ...prevState,
      colors: [info],
      xaxis: {
        labels: {
          style: {
            ...fontSetting,
          },
        },
      },
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light',
      },
    }));
  }, [mode, primary, info, secondary]);

  return (
    <ReactApexChart options={options} series={series} type="bar" height={365} />
  );
};

export default BarChart;
