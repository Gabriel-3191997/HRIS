import { Link, useNavigate } from "react-router-dom";
import "../../../../../App.css";

function DashBoard() {
    const navigate = useNavigate();

    // Handles user logout and navigates back to the default home page
    const handleLogout = (e) => {
        e.preventDefault();
        // Clear authentication state, tokens, or session storage here if needed
        navigate("/");
    };

    return (
        <>
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                </svg>
            </button>

            <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 border-none border-default">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/dashboard" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-none hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Recruitment</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
                            </button>
                            <ul id="dropdown-example" className="py-2 space-y-2">
                                <li>
                                    <Link to="/recruitment/add-employee" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">Add Employee</Link>
                                </li>
                                <li>
                                    <Link to="/recruitment/employee-details" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">Employee Details</Link>
                                </li>
                                <li>
                                    <Link to="/recruitment/payroll-enrollment" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">Payroll enrollment</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/attendance" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/salary" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Salary</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/emergency" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Emergency</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="cursor-pointer w-full flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group text-left">
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </button>
                        </li>
                    </ul>
                    <div id="alert-additional-content-1" className="p-4 mb-4 text-sm text-fg-brand-strong rounded-none bg-gray-800 border-none border-brand-subtle mt-4" role="alert">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                
                            </div>
                        </div>
                        <div className="mt-20 mb-5 h-auto">
                            
                        </div>
                        <button type="button" className="inline-flex items-center text-white bg-brand hover:bg-brand-strong box-border border-none border-transparent shadow-none font-medium rounded-none text-xs px-3 py-1.5 focus:outline-none">
                            upgrade
                        </button>
                    </div>
                    <div className="py-3 mx-3 text-white font-sans text-sm">
                        version 0.1
                    </div>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-default border-none rounded-none">
                    
                </div>
            </div>
        </>
    );
}

export default DashBoard;