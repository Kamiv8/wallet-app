import { ToPieChartDto } from '../models/dtos/toPieChartDto';
import theme from '../styles/theme';
import {
  GetCostByCategoryResponse,
  GetIncomeByCategoryResponse,
  GetTransactionsByCurrencyResponse,
} from '../models/apiTypes/transaction';
import { DateHelper } from './date.helper';

export const areaChartData = (
  labels: string[],
  label: string,
  data: any,
  borderColor: string,
  backgroundColor: string,
) => {
  return {
    labels,
    dataset: [
      {
        fill: true,
        label,
        data,
        borderColor,
        backgroundColor,
      },
    ],
  };
};

export const pieChartMapper = (data: ToPieChartDto[]) => {
  return {
    labels: data.map((x) => x.key),
    datasets: [
      {
        data: data.map((x) => x.value),
        backgroundColor: [
          'rgba(255,99,132,0.2)',
          'rgba(99,255,132,0.2)',
          'rgba(132,255,99,0.2)',
          'rgba(132,99,255,0.2)',
          'rgba(99,132,255,0.2)',
        ],
        borderColor: ['#FF6384', '#63FF84', '#84FF63', '#8463FF', '#6384FF'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          position: 'bottom',
        },
        filler: {
          propagate: true,
        },
      },
    },
  };
};
export const incomePieChartMapper = (
  data: Array<GetIncomeByCategoryResponse>,
) => {
  return {
    labels: data.map((x) => x.categoryName),
    datasets: [
      {
        data: data.map((x) => x.prices),
        backgroundColor: [
          'rgba(255,99,132,0.2)',
          'rgba(99,255,132,0.2)',
          'rgba(33,150,243,0.2)',
          'rgba(132,99,255,0.2)',
          'rgba(99,132,255,0.2)',
        ],
        borderColor: ['#FF6384', '#63FF84', '#2196f3', '#8463FF', '#6384FF'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          position: 'bottom',
        },
        filler: {
          propagate: true,
        },
      },
    },
  };
};
export const costPieChartMapper = (data: Array<GetCostByCategoryResponse>) => {
  return {
    labels: data.map((x) => x.categoryName),
    datasets: [
      {
        data: data.map((x) => x.prices),
        backgroundColor: [
          'rgba(255,99,132,0.2)',
          'rgba(99,255,132,0.2)',
          'rgba(33,150,243,0.2)',
          'rgba(132,99,255,0.2)',
          'rgba(99,132,255,0.2)',
        ],
        borderColor: ['#FF6384', '#63FF84', '#2196f3', '#8463FF', '#6384FF'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          position: 'bottom',
        },
        filler: {
          propagate: true,
        },
      },
    },
  };
};

export const detailsPieChartMapper = (data: {
  all: number;
  currentCategory: number;
}) => {
  return {
    labels: Object.keys(data).map((x) => x),
    datasets: [
      {
        data: Object.values(data).map((x) => x),
        backgroundColor: [
          'rgba(255,99,132,0.2)',
          'rgba(99,255,132,0.2)',
          'rgba(33,150,243,0.2)',
          'rgba(132,99,255,0.2)',
          'rgba(99,132,255,0.2)',
        ],
        borderColor: ['#FF6384', '#63FF84', '#2196f3', '#8463FF', '#6384FF'],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          position: 'bottom',
        },
        filler: {
          propagate: true,
        },
      },
    },
  };
};

export const lineChartMapper = (
  data: Array<Array<GetTransactionsByCurrencyResponse>>,
) => {
  const labelsSet = new Set<string>();

  data.forEach((x) => {
    x.forEach((y) => {
      labelsSet.add(DateHelper.GetMonthAndDay(new Date(y.dateTime)));
    });
  });

  const dataWithColor = data
    .filter((x) => x.length > 0)
    .map((x, index) => ({
      color: theme.colors.chartColors[index],
      backgroundColor: theme.colors.chartBackgroundColors[index],
      data: x,
    }));

  return {
    data: {
      labels: Array.from(labelsSet),
      datasets: dataWithColor.map((x) => {
        return {
          label: x.data[0].currencyCode,
          data: x.data.map((y) => y.sumPrice),
          fill: true,
          borderColor: x.color,
          backgroundColor: x.backgroundColor,
          borderWidth: 1,
        };
      }),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        filler: {
          propagate: true,
        },
      },
    },
  };
};
