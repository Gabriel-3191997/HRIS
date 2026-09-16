import React from 'react';
import Chart from 'react-apexcharts';

function EmpAnalytics() {
  const chartOptions = {
    series: [35.1, 23.5, 41.4],
    options: {
      chart: {
        type: 'donut',
        height: 320,
        fontFamily: 'Inter, sans-serif',
      },
      colors: ['#0442BE', '#F1B716', '#159D1A'],
      labels: ['Desktop', 'Tablet', 'Mobile'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        colors: ['transparent'],
        lineCap: 'round',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: 20,
              },
              total: {
                show: true,
                label: 'Total Employees',
                fontFamily: 'Inter, sans-serif',
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return `${sum.toFixed(1)}k`;
                },
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: -20,
                formatter: function (value) {
                  return value + '%';
                },
              },
            },
            size: '80%',
          },
        },
      },
    },
  };

  return (
    <div className="max-w-sm w-full py-3" id="donut-chart">
      <Chart 
        options={chartOptions.options} 
        series={chartOptions.series} 
        type="donut" 
        height={320} 
      />
    </div>
  );
}

export default EmpAnalytics;
