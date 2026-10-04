
function HireAnalytics() {
  const chartData = [
    { label: 'Remote', value: 10 },
    { label: 'Hybrid', value: 1 },
    { label: 'Onsite', value: 8 },
    // { label: '', value: 3 },
  ];

  const maxValue = 10; // Maximum value on x-axis scale

  return (
      <>
         
      <div className="flex flex-wrap justify-start items-start h-auto md:justify-start md:items-start md:mx-0 bg-white md:mt-0">
        <div className="w-auto md:w-80 bg-white  h-auto">
           <h1 className="text-sm font-sans text-center capitalize md:my-5">
               over all hiring analytics
          </h1>
          {/* Chart Bars */}
          <div className="flex flex-col gap-5 py-2 border-l-none border-b-none border-gray-800">
            {chartData.map((item, index) => (
              <div key={item.label || index} className="flex items-center">
                <span className="w-16 text-xs font-sans md:text-md text-gray-800 text-left pr-2 truncate">
                  {item.label}
                </span>
                <div className="flex-1 bg-transparent">
                  <div
                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                    className="bg-[#1E40AF] h-8 transition-all duration-300 hover:opacity-50 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* X-Axis Ticks & Labels */}
          <div className="ml-16 flex justify-between text-[10px] text-gray-700 pt-1 font-sans">
            {/* <span>2021</span> */}
            <span className="md:text-md font-sans">2022</span>
            <span className="md:text-md font-sans">2023</span>
            <span className="md:text-md font-sans">2024</span>
            <span className="md:text-md font-sans">2025</span>
            <span className="md:text-md font-sans">2026</span>
          </div>

              </div>
              <div className="w-xl bg-white h-80">
                  {/* finger print scanner animation */}
              </div>
      </div>
    </>
  );
}

export default HireAnalytics;