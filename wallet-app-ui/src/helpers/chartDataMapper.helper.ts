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

export const doughnutChartData = (labels: string[]) => {
  return {
    labels,
  };
};
