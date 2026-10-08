

function Heading(){

    return(

        <>
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-80">
                    {/* fontawesome home icon */}
                </div>
                {/* heading */}
                <div className="w-auto">
                    <h1 className="font-sans text-4xl capitalize">student registration system</h1>
                </div>
                {/* search input field */}
                <div className="w-80">
                    <form action="#" method="get">
                        <input type="text" name="search" id="search" className=" border-2 border-gray-700" />
                    </form>
                </div>
        </div>
        </>
    )
}

export default Heading;