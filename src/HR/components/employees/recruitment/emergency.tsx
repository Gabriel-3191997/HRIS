function Emergency() {
    
    return(

        <>
            <div className="flex flex-col md:justify-start md:my-5 my-8 md:items-start md:gap-10 gap-5 bg-white h-auto">
                <form action="" method="post" className="w-auto md:mx-20">
                    <div className="w-auto md:my-3 bg-white h-auto">
                         <label htmlFor="employeeName" className="font-sans text-md capitalize">
                        employee's name <br /><input type="text" name="employeeName" id="employeeName" className="md:w-lg w-auto md:py-3 py-3 border border-gray-900 bg-white" />
            
                    </label>
                   </div>
                    
                    {/* department */}
                   <div className="w-auto md:my-5 bg-white h-auto">
                     <label htmlFor="department" className="font-sans text-md capitalize">
                        department <br /><input type="text" name="department" id="department" className="md:w-lg w-auto md:py-3 py-3 border border-gray-900 bg-white" />
            
                     </label>
                    </div>
{/* manager */}
<div className="w-auto md:my-5 bg-white h-auto">
                     <label htmlFor="manager" className="font-sans text-md capitalize">
                        manager <br /><input type="text" name="manager" id="manager" className="md:w-lg w-auto md:py-3 py-3 border border-gray-900 bg-white" />
            
                     </label>
                    </div>   
                              {/* date */}
                              <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="actionDate">Today's Date <br />
                            <input type="date" name="actionDate" id="actionDate"/>
                        </label>
</div>             
{/* duration */}
                    <div className="flex flex-wrap md:justify-start md:items-start justify-center md:gap-10 items-center h-auto bg-white">
                    {/* start date */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="startDate"> Start date: <br />
                            <input type="date" name="startDate" id="startDate"/>
                        </label>
                    </div>
                    {/* return date */}
                     <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="returnDate"> Return Date: <br />
                            <input type="date" name="returnDate" id="returnDate"/>
                        </label>
                        </div>
                    </div>
            
                    {/* actions */}
                    <div className="w-auto md:my-3 md:mt-10 bg-white h-auto">
                        <label htmlFor="resignation" className="font-sans capitalize text-md">
                            <input type="checkbox" name="resignation" id="resignation"/> resignation
                        </label>
</div>             
{/* leave */}
<div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="leave" className="font-sans capitalize text-md">
                            <input type="checkbox" name="leave" id="leave"/> leave
                        </label>
                    </div>     
                        
                    {/* termination */}
                    <div className="w-auto md:my-3 bg-white h-auto">
                        <label htmlFor="terminate" className="font-sans capitalize text-md">
                            <input type="checkbox" name="terminate" id="terminate"/> terminate
                        </label>
</div>   

                    
{/*duration */}
                </form>
            </div>
        </>
    )
}

export default Emergency