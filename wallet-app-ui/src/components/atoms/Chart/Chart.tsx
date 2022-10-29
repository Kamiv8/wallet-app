import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Chart as LibChart } from 'react-chartjs-2';
import { useRef } from 'react';

export type TProps = {
  data: any;
  type: ChartTypeEnum;
  labels: string[];
  options: any;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
);

const Chart = (props: TProps) => {
  const chartRef = useRef<ChartJS>(null);

  return (
    <LibChart
      type={props.type}
      options={props.options}
      ref={chartRef}
      data={props.data}
      width={300}
      height={300}
    />
  );
};

export default Chart;
