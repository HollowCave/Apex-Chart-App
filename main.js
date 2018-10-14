// Chart Options
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#f4f4f4',
    foreColor: '#333'
  },
  series: [
    {
      name: 'population',
      data: [
        1000,
        11052,
        11359,
        21431,
        30645,
        33537,
        38244,
        52715,
        73897,
        74539
      ]
    }
  ],
  xaxis: {
    categories: [
      'Vatican City',
      'Tuvalu',
      'Nauru',
      'Palau',
      'Monaco',
      'San Marino',
      'Liechtenstein',
      'Saint Kitts and Nevis',
      'Dominica',
      'Marshall Islands'
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ['#4717F6']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Smallest Countries by Population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  }
};

// Init Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render Chart
chart.render();

// Event Method Example
document.querySelector('button').addEventListener('click', () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);
