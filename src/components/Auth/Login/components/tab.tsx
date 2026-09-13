import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import Heading from "./"

function NavTabs (){

    return(
        <>

            <div className="my-3">
                 <div className="flex flex-wrap justify-between items-center">
                <div className="w-80 mx-10">
                    <FontAwesomeIcon icon={faHome} className='text-xl' size="lg" />
                </div>
                {/* heading */}
                <div className="w-auto">
                        <ul className="flex flex-wrap justify-center gap-5">
                            <li>
                                Date: 09/13/2026
                            </li>
                            <li>12:48</li>
                   </ul>
                </div>
                {/* search input field */}
                <div className="w-80">
                    <form action="#" method="get">
                        <input type="text" name="search" id="search" className=" border-2 border-gray-600 py-2 w-72" />
                    </form>
                </div>
        </div>
            </div>
<ul className="capitalize md:text-3xl text-white md:py-1 md:mx-8 bg-blue-950  font-medium text-center text-body sm:flex md:-space-x-px lg:-space-x-px">
    <li className="md:w-full lg:w-full w-auto focus-within:z-10">
        <a href="#" className="md:inline-block w-full text-body bg-neutral-primary-soft border-none border-default rounded-s-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5" aria-current="page">home</a>
    </li>
    <li className=" w-full focus-within:z-10">
        <a href="#" className="inline-block w-full text-body bg-neutral-primary-soft border-none border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 ">adminsion</a>
    </li>
    <li className="w-full focus-within:z-10">
        <a href="#" className="inline-block w-full text-body bg-neutral-primary-soft border-none border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5">registration</a>
    </li>
    <li className="w-full focus-within:z-10">
        <a href="#" className="inline-block w-full text-body bg-neutral-primary-soft border-none border-default rounded-e-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5">billing</a>
    </li>
</ul>

        </>
    )
}

export default NavTabs;