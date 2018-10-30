export const ChartData = {
  type: 'line',
  data: {
    // Heures
    labels: [],
    datasets: [

      { // another line graph
        label: 'PH',
        data: [],
        backgroundColor: [
          'rgb(18,169,122)',
        ],
        borderColor: ['#555555'],
        borderWidth: 2
      },
      { // one line graph
        label: 'Température °C',
        data: [],
        backgroundColor: [
          'rgb(103,238,195)',
        ],
        borderColor: ['#666666'],
        borderWidth: 2
      },
      { // another line graph
        label: 'Humidité %',
        data: [],
        backgroundColor: [
          'rgb(195,248,231)',
        ],
        borderColor: ['#666666'],
        borderWidth: 2
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
};

export default ChartData;
