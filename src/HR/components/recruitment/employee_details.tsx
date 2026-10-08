

function EmployeeDetails(){

    return(

        <>
            {/* header */}
            <div className="flex w-full sticky top-0 z-50 my-0 py-8 flex-wrap md:justify-start md:h-auto bg-white shadow-none md:items-start gap-0">
                 <h1 className="font-sans text-3xl capitalize py-2 mx-10">
                employee's listing
            </h1>
            {/* filtering */}
            <div className="flex flex-wrap md:justify-between md:items-end md:mx-10">
                {/* departments*/}
                <div className="flex flex-wrap md:justify-start md:items-start md:gap-3">
                    <div className="w-auto py-">
                    <form action="" method="get">
                            <select name="filter" id="filter" className="font-sans capitalize text-sm border border-gray-300 py-2">
                                <option value="department">department</option>
                                <option value="information technology">technology</option>
                                <option value="finance">finance</option>
                                <option value="HR">HR</option>
                                <option value="procurement">procurement</option>
                            </select>
                    
                    </form>
                    </div>
                    {/* managers */}
                    <div className="w-auto py-">
                    <form action="" method="get">
                            <select name="filter" id="filter" className="font-sans capitalize text-sm border border-gray-300 py-2">
                                <option value="department">managers</option>
                                <option value="information technology">technology</option>
                                <option value="finance">finance</option>
                                <option value="HR">HR</option>
                                <option value="procurement">procurement</option>
                            </select>
                    
                    </form>
                </div>
                    </div>
                    {/* search employees */}
                <div className="w-auto py-3 md:mx-20">
                    <form action="" method="get">
                        <input type="text" name="" id="" className="border py-2 w-52 md:px-3 md:mx-5 text-gray-600" placeholder="search employee" />
                        <input type="submit" value="search" className="bg-blue-800 text-white font-sans text-sm py-3 w-20" />
                    </form>
                </div>
            </div>
            </div>
           {/* employees */}
            <div className="flex flex-wrap md:justify-start md:mx-10 md:mt-5 h-auto md:items-start md:gap-12 gap-5 bg-white">
                <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
            </div>
            {/* second batch of employees */}
            <div className="flex flex-wrap md:justify-start md:mx-10 md:my-12 md:items-start md:gap-12 gap-5 bg-white h-auto">
                <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                 <div className="w-44 h-44 bg-gray-300">
                    <img src="" alt="" className="h-32 w-full object-cover" />
                    <div className="bg-gray-200 h-14 w-auto"></div>
                </div>
                {/* pagination */}
                <div className="flex flex-wrap md:justify-end md:items-end md:mx-2 md:py-2">
                        <ul className="flex flex-wrap md:justify-evenly md:gap-5 font-sans lowercase text-blue-800">
                                <li>
                            <a href="#">previous</a>
                        </li>
                        <span className="text-gray-300">||</span>
<li>
                            <a href="#">next</a>
                            </li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails