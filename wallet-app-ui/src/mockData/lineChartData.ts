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
      data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811], // Specify the data values array
      fill: true,
      borderColor: '#2196f3', // Add custom color border (Line)
      backgroundColor: 'rgba(33,150,243,0.2)', // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
  options: {
    plugins: {
      legend: {
        position: 'right' as const,
      },
      filler: {
        propagate: true,
      },
    },
  },
};
