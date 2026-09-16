import EmpAnalytics from "./emp";
import EmployementAnalytics from "./employment";

function Analytic() {

    return(

        <>
            <div className="flex flex-wrap justify-center items-start md:my-0 lg:my-0  items-center gap-4">
                <div className="w-80 h-28 bg-blue-800 shadow-xs shadow-gray-300 border-l rounded-none border-none  border-l-5 border-blue-500">
                    <div className="py-5">
                        <span className="font-sans text-3xl text-center mx-10 my-80 font-semibold">
                        0
                    </span>
                    <br />
                    {/* <h1 className="font-sans text-lg font-semibold capitalize  mx-10">
                        emp.
                    </h1> */}
                    <span className="text-sm font-sans capitalize mx-8">
                        Total Employees
                    </span>
                    </div>
                </div>

                <div className="w-80 h-28 bg-yellow-500 shadow-xs border-l rounded-none border-l-5 border-none rounded-none border-blue-500">
                    <div className="py-5">
                     <span className="font-sans text-3xl text-center mx-10 py-80 font-semibold">
                        0
                    </span>
                    <br />
                    {/* <h1 className="font-sans text-lg font-semibold capitalize  mx-10">
                        emp.
                    </h1> */}
                    <span className="text-sm font-sans capitalize mx-8">
                        pending requests
                    </span>

                    </div>
                </div>
                {/* leaves */}
                 <div className="w-80 h-28 bg-green-600 shadow-xs border-l rounded-none border-none border-l-5 border-blue-500">
                    <div className="py-5">
                    
                     <span className="font-sans text-3xl text-center mx-10 py-80 font-semibold">
                        0
                    </span>
                    <br />
                    {/* <h1 className="font-sans text-lg font-semibold capitalize  mx-10">
                        emp.
                    </h1> */}
                    <span className="text-sm font-sans capitalize mx-8">
                        total departments
                    </span>

                    </div>
                </div>

                {/* visualization */}

                <div className="flex flex-wrap justify-center items-center mt-10 items-start gap-8 h-80 bg-white">

                    <div className="w-xl border-none h-96 shadow-none flex flex-col justify-start shadow-gray-300 bg-white">
{/* <span className=" my-2 font-sans bg-white  text-lg capitalize text-left font-semibold">
                            total employees
                          
                        </span> */}
                          <EmpAnalytics/>
                    </div>
                    <div className="w-80 border border-gray-200 h-64">
                        <span className="mx-5 my-8 font-sans bg-white  text-lg capitalize text-left font-semibold">
   employment
</span>

                        <EmployementAnalytics/>
                    </div>
                </div>

                
        </div>
        </>
    )
}

export default Analytic;