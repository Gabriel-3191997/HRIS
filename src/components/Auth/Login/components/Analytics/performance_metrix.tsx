import img1 from "../../../../../assets/images/534807897_2598810127178415_3359994755006233587_n.jpg"

function PerformanceMetrix() {

    return(

        <>
        
            
            <div className="flex flex-wrap justify-start items-start bg-white border border-gray-200 border-none rounded-none mt-10 h-96 gap-5 w-auto">
                
                <div className="w-120 py-8 shadow mx-5">
                     <table className="w-96 mx-8 h-20">
                    <tr>
                        <th className="font-medium py-8">
                            <h1 className="text-sm font-sans capitalize font-medium">
                performance overview matrix
            </h1>
                        </th>
                    </tr>
                    <tr>
                        {/* departments */}
                        <td className=" py-3 font-medium w-28">Procurement</td>
                        {/* employees */}
                        <td className="font-medium py-3 flex flex-wrap  justify-start items-start gap-0">
                            <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-28 bg-neutral-quaternary rounded-none">
    <div className="bg-danger text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '10%' }}> 10%</div>
  </div>

                        </td>
                        
                    </tr>
                    <tr>
                         <td className="font-medium py-3 w-44">Finance</td>
 <td className="font-medium py-3 flex flex-wrap justify-start items-start gap-0">
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-28 bg-neutral-quaternary rounded-none">
    <div className="bg-success text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '45%' }}> 45%</div>
  </div>

                        </td>
                       
                    </tr>
                     <tr>
                         <td className="font-medium py-3 w-50">Information Technology</td>
 <td className="font-medium py-3 flex flex-wrap justify-start items-start gap-0">
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-28 bg-neutral-quaternary rounded-none">
    <div className="bg-success text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '90%' }}> 90%</div>
  </div>

                        </td>
                    </tr>
                </table>
                </div>
                {/* employment categories */}
                {/* <div className="w-xl">
                    <h1 className="text-center font-sans capitalize text-sm py-5">
employment categories
                    </h1>
                </div> */}
            </div>
        </>
    )
}

export default PerformanceMetrix
