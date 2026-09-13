// login form
import "../../../../App.css";
import NavBar from "../components/nav";
import { useNavigate, Link } from "react-router-dom"; 

function LoginForm() {
  const navigate = useNavigate();

  // Handle form submission to redirect to registration page
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Programmatically push to the registration route on submit
    navigate("/dashboard");
  };

  return (
    <>
      <section className="bg-white">
        <NavBar />
        <div className="flex flex-col items-center justify-center md:px-6 lg:px-6 md:py-8 lg:py-8 mx-auto md:h-96 py-5">
          <div className="md:w-xl lg:w-xl w-100 bg-white rounded-none md:shadow lg:shadow shadow-none dark:border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-2 md:space-y-3 sm:p-3">
              
              {/* Form submission triggers handleSubmit */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Email address</label>
                  <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 md:text-sm lg:text-sm text-lg font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-800">Forgot password?</a>
                </div>
                <button type="submit" className="w-32 text-white bg-blue-900 hover:cursor-pointer hover:bg-blue-950 hover:transition-all delay-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-none text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <span className="font-medium text-gray-700">
                    <Link to="/registration">Sign up</Link>
                  </span>
                </p>
              </form>

            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <a href="#" className="capitalize font-sans text-blue-800 text-sm underline">having trouble?</a>
        </div>
      </section>
    </>
  );
}

export default LoginForm;