export enum IndexAxis {
  horizontal = 'y',
  vertical = 'x',
}

export enum ScaleType {
  linear = 'linear',
  logarithmic = 'logarithmic',
}

type ShowFullscreen = (boolean) => void;
export interface RadarChartProps {
  labels: string[];
  showFullscreen?: ShowFullscreen;
  isFullScreen?: boolean;
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }>;
}

export type LineChartType = {
  labels: string[];
  Ylabel: string;
  Xlabel: string;
  title: string;
  Yscale?: ScaleType;
  showFullscreen?: ShowFullscreen;
  isFullScreen?: boolean;
  dataSet: Array<{
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }>;
};

export interface BarChartProps {
  labels: string[];
  title: string;
  stacked?: boolean;
  indexAxis?: IndexAxis;
  showFullscreen?: ShowFullscreen;
  isFullScreen?: boolean;
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    maxValue?: number;
  }>;
}

export type DoughnutChartTypes = {
  labels: string[];
  itemLabel: string;
  dataSet: number[];
  bgColorList?: string[];
  borderColorList?: string[];
  title: string;
  hoverOffset: number;
  showFullscreen?: ShowFullscreen;
  isFullScreen?: boolean;
};

export type PieChartTypes = {
  labels: string[];
  itemLabel: string;
  dataSet: number[];
  bgColorList?: string[];
  borderColorList?: string[];
  title: string;
  hoverOffset: number;
  showFullscreen?: ShowFullscreen;
  isFullScreen?: boolean;
};
