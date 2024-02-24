import { ChartTypeEnum } from '../../../types/enums';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from 'chart.js';
import { Chart as LibChart } from 'react-chartjs-2';
import { useRef } from 'react';

export type TProps = {
  data: any;
  type: ChartTypeEnum;
  labels?: string[];
  options?: any;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
);

export const Chart = (props: TProps) => {
  const chartRef = useRef<ChartJS>(null);

  return (
    <LibChart
      type={props.type}
      ref={chartRef}
      data={props.data}
      options={props.options}
      width={300}
      height={300}
    />
  );
};
