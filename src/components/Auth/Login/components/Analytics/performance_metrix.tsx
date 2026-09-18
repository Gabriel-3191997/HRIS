import img1 from "../../../../../assets/images/534807897_2598810127178415_3359994755006233587_n.jpg"

function PerformanceMetrix() {

    return(

        <>
        
            <div className="flex flex-wrap justify-start items-start bg-white border border-gray-200 border-none rounded-none h-96 w-auto">
                
                <table className="w-5xl mx-8 px-0">
                    
                    <tr>
                        {/* departments */}
                        <td className="font-medium py-3">Procurement</td>
                        {/* employees */}
                        <td className="font-medium py-3 flex flex-wrap justify-start items-start gap-0">
                            <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-44 bg-neutral-quaternary rounded-none">
    <div className="bg-red-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '10%' }}> 10%</div>
  </div>

                        </td>
                        
                    </tr>
                    <tr>
                         <td className="font-medium py-3">Finance</td>
 <td className="font-medium py-3 flex flex-wrap justify-start items-start gap-0">
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full border-none hover:opacity-50 cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-44 bg-neutral-quaternary rounded-none">
    <div className="bg-green-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '45%' }}> 45%</div>
  </div>

                        </td>
                       
                    </tr>
                     <tr>
                         <td className="font-medium py-3">Information Technology</td>
 <td className="font-medium py-3 flex flex-wrap justify-start items-start gap-0">
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                            <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none h-5 w-5 cursor-pointer object-cover bg-blend-overlay bg-gray-700" />
                             <img src={img1} alt="" className="rounded-full hover:opacity-50 border-none cursor-pointer h-5 w-5 object-cover bg-blend-overlay bg-gray-700" />
                        </td>
                        {/* progress bar */}
                        <td className="font-medium py-3">

  <div className="w-44 bg-neutral-quaternary rounded-none">
    <div className="bg-green-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-none h-4 flex items-center justify-center" style={{ width: '90%' }}> 90%</div>
  </div>

                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default PerformanceMetrix
