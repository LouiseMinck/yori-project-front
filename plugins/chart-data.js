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
          'rgb(152,209,99)',
        ],
        borderColor: ['#888888'],
        borderWidth: 0.2
      },
      { // one line graph
        label: 'Température °C',
        data: [],
        backgroundColor: [
          'rgba(152,209,99,0.7)',
        ],
        borderColor: ['#888888'],
        borderWidth: 0.2
      },
      { // another line graph
        label: 'Humidité %',
        data: [],
        backgroundColor: [
          'rgba(152,209,99,0.4)',
        ],
        borderColor: ['#888888'],
        borderWidth: 0.2
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
