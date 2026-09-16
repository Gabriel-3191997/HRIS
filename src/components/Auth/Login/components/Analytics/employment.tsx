import React from 'react';
import Chart from 'react-apexcharts';

function EmployementAnalytics() {
  // Configured with five years of historical data up to 2026
  const hiredValues = Array.of(150, 210, 180, 290, 320);
  const resignationValues = Array.of(45, 60, 55, 70, 85);
  const pensionValues = Array.of(15, 20, 18, 25, 30);

  const chartConfig = {
    series: [
      {
        name: 'Hired',
        data: hiredValues, 
        color: '#1E40AF', 
      },
      {
        name: 'Resignation',
        data: resignationValues,  
        color: '#EAB308', 
      },
      {
        name: 'Pension',
        data: pensionValues,       
        color: '#16A34A', 
      }
    ],
    options: {
      chart: {
        type: 'bar',
        // Increased height configuration to grow the vertical line sizes taller
        height: 340,
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          // Increased column width percentage to make the vertical lines thicker/wider
          columnWidth: '85%',
          borderRadius: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['2022', '2023', '2024', '2025', '2026'],
        labels: {
          style: {
            fontFamily: 'Inter, sans-serif',
            colors: '#6B7280',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: 'Inter, sans-serif',
            colors: '#6B7280',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " employees";
          },
        },
      },
      legend: {
        show: true,
        position: 'top',
        fontFamily: 'Inter, sans-serif',
      },
    },
  };

  return (
    <>
      <div className=" w-md bg-white border-none border-default rounded-none shadow-none p-4 md:p-6">
        
        <div id="bar-chart" className="py-5">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="bar"
            // Applied matched target chart height extension here
            height={340}
          />
        </div>
          
        <div className="grid grid-cols-1 items-center border-light border-none border-t flex-nowrap justify-between">
          <div id="LastDays3dropdown" className="z-10 hidden bg-white border border-default-medium rounded-none shadow-lg w-44">
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLastDays3Button">
              <li>
                <a href="#" className="inline-flex items-center w-full p-3 hover:bg-neutral-tertiary-medium hover:text-heading rounded-none">This Year (2026)</a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center w-full p-3 hover:bg-neutral-tertiary-medium hover:text-heading rounded-none">Last Year</a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center w-full p-3 hover:bg-neutral-tertiary-medium hover:text-heading rounded-none">Last 3 years</a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center w-full p-3 hover:bg-neutral-tertiary-medium hover:text-heading rounded-none">Last 5 years</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployementAnalytics;
