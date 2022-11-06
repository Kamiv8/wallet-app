export const data = {
  labels: [
    'Tokyo',
    'Mumbai',
    'Mexico City',
    'Shanghai',
    'Sao Paulo',
    'New York',
    'Karachi',
    'Buenos Aires',
    'Delhi',
    'Moscow',
  ],
  datasets: [
    {
      label: 'Series 1', // Name the series
      data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811], // Specify the data values array
      fill: true,
      borderColor: '#2196f3', // Add custom color border (Line)
      backgroundColor: 'rgba(33,150,243,0.2)', // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
    {
      label: 'Series 2', // Name the series
      data: [1288, 88942, 44545, 7588, 99, 242, 1417, 5504, 75, 457], // Specify the data values array
      fill: true,
      borderColor: '#4CAF50', // Add custom color border (Line)
      backgroundColor: 'rgba(76,175,80,0.2)', // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
  options: {
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
