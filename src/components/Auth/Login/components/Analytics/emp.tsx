import React from 'react';
import Chart from 'react-apexcharts';

function EmpAnalytics() {
  const chartOptions = {
    // Adjusted series metrics representing data distribution among departments/categories
    series: [35.1, 23.5, 41.4],
    options: {
      chart: {
        type: 'donut',
        height: 320,
        fontFamily: 'Inter, sans-serif',
      },
      // Color tokens mapped to match the primary Blue, Yellow, and Green dashboard panels
      colors: ['#1E40AF', '#EAB308', '#16A34A'],
      labels: ['Blue Department', 'Yellow Department', 'Green Department'],
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
                // Central chart anchor changed to display Total Employees
                label: 'Total Employees',
                fontFamily: 'Inter, sans-serif',
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  // Renders total summed numeric string inside center ring area
                  return `${Math.round(sum)}`;
                },
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: -20,
                formatter: function (value) {
                  return value;
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
    <div className="w-80 py-2" id="donut-chart">
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
