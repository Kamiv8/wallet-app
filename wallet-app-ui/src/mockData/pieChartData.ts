export const oilData = {
  labels: ['Saudi Arabia', 'Russia', 'Iraq', 'United Arab Emirates', 'Canada'],
  datasets: [
    {
      data: [133.3, 86.2, 52.2, 51.2, 50.2],
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
