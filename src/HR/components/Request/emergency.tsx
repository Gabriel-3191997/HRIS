function Emergency() {
    
    return(

        <>
            <div className="flex flex-col md:justify-start md:my-0 my-1 md:items-start md:gap-10 gap-5 bg-white h-auto">
                <form action="" method="post" className="w-auto md:mx-20">
                    <div className="w-auto md:my-3 bg-white h-auto">
                         <label htmlFor="employeeName" className="font-sans text-sm capitalize"><span className="text-red-500">* </span>
                     employee's name <br /><input type="text" name="employeeName" id="employeeName" className="md:w-lg w-auto md:py-3 text-sm capitalize py-3 border border-gray-900 bg-white" />
            
                    </label>
                   </div>
                    
                    {/* department */}
                   <div className="w-auto md:my-5 bg-white h-auto">
                     <label htmlFor="department" className="font-sans text-sm capitalize"><span className="text-red-500">* </span>
                        department <br /><input type="text" name="department" id="department" className="md:w-lg text-sm capitalize w-auto md:py-3 py-3 border border-gray-900 bg-white" />
            
                     </label>
                    </div>
{/* manager */}
<div className="w-auto md:my-5 bg-white h-auto">
                     <label htmlFor="manager" className="font-sans text-sm capitalize"><span className="text-red-500">* </span>
                        manager <br /><input type="text" name="manager" id="manager" className="md:w-lg w-auto md:py-3 text-sm capitalize py-3 border border-gray-900 bg-white" />
            
                     </label>
                    </div>   
                              {/* date */}
                              <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="actionDate"><span className="text-red-500">* </span>Today's Date <br />
                            <input type="date" name="actionDate" id="actionDate" className="px-2 py-3 border"/>
                        </label>
</div>             
{/* duration */}
                    <div className="flex flex-wrap md:justify-start md:items-start justify-center md:gap-10 items-center h-auto bg-white">
                    {/* start date */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="startDate" className="text-sm capitalize"><span className="text-red-500">* </span> Start Date: <br />
                            <input type="date" name="startDate" id="startDate" className="px-2 py-3 text-sm border"/>
                        </label>
                    </div>
                    {/* return date */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="returnDate" className="text-sm capitalize"><span className="text-red-500">* </span> Return Date: <br />
                            <input type="date" name="returnDate" id="returnDate" className="px-2 text-sm py-3 border"/>
                        </label>
                        </div>
                    </div>
                    {/* leave */}

                    <div className="flex flex-wrap md:justify-start md:items-start justify-center md:gap-18 items-center h-auto bg-white">
                    {/* leave types */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="startDate" className="text-sm capitalize"><span className="text-red-500">* </span> leave type: <br />
                            <select name="leave_type" id="leave_type" className="border text-sm capitalize py-3 px-2">
                                <option value="None">none</option>
                                <option value="Medical">
                                    medical
                                </option>
                                    <option value="Academics">
                                        academics
                                </option>
                            </select>
                        </label>
                    </div>
                    {/* duration of length */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="returnDate" className="text-sm capitalize"><span className="text-red-500">* </span>months | year: <br />
                            <input type="number" name="leave_duration" id="leave_duration " className="md:w-32 text-sm border py-3 px-2 text-center"/>
                        </label>
                        </div>
                    </div>
            
                    {/* actions */}
                    <div className="w-auto md:my-2 md:mt-2 bg-white h-auto">
                        <label htmlFor="resignation" className="font-sans capitalize text-sm">
                            <input type="checkbox" name="resignation" id="resignation"/> resignation
                        </label>
</div>             
{/* leave */}
<div className="w-auto md:my-2 bg-white h-auto">
                        <label htmlFor="leave" className="font-sans capitalize text-sm">
                            <input type="checkbox" name="leave" id="leave"/> leave
                        </label>
                    </div>     
                        
                    {/* termination */}
                    <div className="flex flex-wrap md:justify-between justify-center items-center h-auto bg">
                        <div className="md:w-lg w-auto md:my-0 bg-white h-auto">
                        <label htmlFor="terminate" className="font-sans capitalize text-sm">
                            <input type="checkbox" name="terminate" id="terminate"/> terminate
                        </label>
                        </div>   
                        <div className="md:w-auto w-auto">
                            <input type="submit" value="submit" className="bg-blue-800 text-sm lowercase text-white py-2 cursor-pointer px-5" />
                        </div>
                    </div>


                    
{/*duration */}
                </form>
            </div>
        </>
    )
}

export default Emergency