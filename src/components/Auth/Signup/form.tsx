import { useNavigate } from "react-router-dom";

function SignupForm() {
    const navigate = useNavigate();

    // form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // route on submit
        navigate("/dashboard");
    };
    
    return (
        <>
            <section className="bg-white md:mt-16 lg:mt-16 mt-5">
                <div className="flex flex-col items-center justify-center md:px-6 lg:px-6 md:py-8 lg:py-8 mx-auto md:h-96 py-10">
          <div className="md:w-xl lg:w-xl w-100 bg-white rounded-none md:shadow lg:shadow shadow-none dark:border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-2 md:space-y-3 sm:p-3">
              {/* handleSubmit */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {/* company's name */}
                                <div>
                  <label htmlFor="email" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Company name</label>
                  <input type="text" name="text" id="text" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company name" required />
                                </div>
                                <div>
                  <label htmlFor="email" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Domain</label>
                  <input type="text" name="text" id="text" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="companyname.com" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Email address</label>
                  <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="w-32 text-white bg-blue-900 hover:cursor-pointer hover:bg-blue-950 hover:transition-all delay-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-none text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
              </form>

            </div>
          </div>
        </div>
       
        </section>
        </>
    )
}

export default SignupForm