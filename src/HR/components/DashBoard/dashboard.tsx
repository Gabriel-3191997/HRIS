import { Link, useNavigate, Outlet } from "react-router-dom"; // Added Outlet
import "../../../App.css";

function DashBoard() {
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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

            {/* Application Shell Sidebar Navigation Element */}
            <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-950 border-none border-default">
                    <ul className="space-y-2 font-medium">
                        <li className="bg-black w-full fixed top-0 left-0 z-40 py-5">
                            {/* Point to root or clear dashboard layout handler */}
                            <Link to="/" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        
                        <li className="mt-14">
                            <button type="button" className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-none hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Recruitment</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
                            </button>
                            <ul id="dropdown-example" className="py-2 space-y-2">
                                <li>
                                    {/* Matches the relative route target /add_employee */}
                                    <Link to="/add_employee" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2  hover:text-fg-brand group">Add Employee</Link>
                                </li>
                                {/* boimetrics */}
                                <li>
                                    <Link to="/biometrics" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2  hover:text-fg-brand group">Biometrics</Link>
                                </li>
                                <li>
                                    <Link to="/employee_details" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2  hover:text-fg-brand group">Employee Details</Link>
                                </li>
                                <li>
                                    <Link to="/payroll" className="pl-10 flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2  hover:text-fg-brand group">Payroll enrollment</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            
                            <Link to="/analysis" className="flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group">
                                <span className="ms-3">Analysis</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/attendance" className="flex items-center px-2 py-1.5 text-body hover:bg-gray-900 py-2  rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/salary" className="flex items-center px-2 py-1.5 text-body hover:bg-gray-900 py-2  rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Salary</span>
                            </Link>
                        </li>
                         */}
<li>
                            <Link to="/emergency" className="flex items-center px-2 py-1.5 text-body hover:bg-gray-900 py-2  rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Employee Request</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/notification" className="flex items-center px-2 py-1.5 text-body hover:bg-gray-900 py-2  rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Notification</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pending" className="flex items-center px-2 py-1.5 text-body hover:bg-gray-900 py-2  rounded-none hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2 hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account" className="flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2 hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="flex items-center px-2 py-1.5 text-body rounded-none hover:bg-gray-900 py-2  hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="cursor-pointer w-full flex items-center px-2 py-1.5 text-body rounded-none hover:text-fg-brand group text-left">
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-2 bg-white sm:ml-64 mx-0">
                <Outlet />
            </div>
        </>
    );
}

export default DashBoard;
