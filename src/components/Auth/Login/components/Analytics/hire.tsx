import React from 'react';

function HireAnalytics() {
  const chartData = [
    { label: 'Remote', value: 10 },
    { label: 'Hybrid', value: 1 },
    { label: 'Onsite', value: 8 },
    { label: '', value: 3 },
  ];

  const maxValue = 10; // Maximum value on x-axis scale

  return (
      <>
         
      <div className="flex flex-wrap justify-start items-start h-auto md:justify-start md:items-start md:mx-0 bg-white md:mt-20">
        <div className="w-auto md:w-80 bg-white  h-auto">
           <h1 className="text-sm font-sans text-center capitalize md:my-5">
               over all hiring analytics
          </h1>
          {/* Chart Bars */}
          <div className="flex flex-col gap-5 py-2 border-l-none border-b-none border-gray-800">
            {chartData.map((item, index) => (
              <div key={item.label || index} className="flex items-center">
                <span className="w-16 text-xs font-sans text-gray-700 text-left pr-2 truncate">
                  {item.label}
                </span>
                <div className="flex-1 bg-transparent">
                  <div
                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                    className="bg-[#2108C3] h-8 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* X-Axis Ticks & Labels */}
          {/* <div className="ml-16 flex justify-between text-[10px] text-gray-700 pt-1 font-sans">
            <span>0</span>
            <span>2</span>
            <span>4</span>
            <span>6</span>
            <span>8</span>
            <span>10</span>
          </div> */}

              </div>
              <div className="w-xl bg-white h-80">
                  
              </div>
      </div>
    </>
  );
}

export default HireAnalytics;