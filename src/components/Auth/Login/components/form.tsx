import "../../../../App.css";
import img from "../../../../assets/images/Gemini_Generated_Image_it4xgmit4xgmit4x.jpeg";
import { useNavigate } from "react-router-dom"; // 1. Uncomment the router hook

function LoginForm() {
  const navigate = useNavigate(); // 2. Initialize the navigation hook

  // 3. Handle submission and route to dashboard
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add auth validation here if needed
    
    navigate("/dashboard");
  };

  return (
    <>
      <section className="bg-white">
        <div className="flex flex-wrap justify-evenly mt-0 mb-0 mx-0 gap-0 items-center h-screen">
          <div className="w-lg h-screen">
            <h1 className="font-sans text-5xl text-gray-900 text-center mt-28 mb-10">
              create account
            </h1>
            
            {/* 4. Add the onSubmit handler to the form */}
            <form onSubmit={handleSubmit} className="w-auto h-auto">
              <div className="py-5">
                <label htmlFor="username" className="font-sans text-md py-5 text-gray-500">
                  username:
                  <br />
                  <input type="text" name="username" className="rounded-none border border-gray-500 w-lg py-3" required />
                </label>
              </div>
              
              {/* email */}
              <div className="py-5">
                <label htmlFor="email" className="capitalize font-sans text-md py-5 text-gray-500">
                  email:
                  <br />
                  <input type="email" name="email" className="rounded-none border border-gray-500 w-lg py-3" required />
                </label>
              </div>
              
              {/* password */}
              <div className="py-5">
                <label htmlFor="password" className="font-sans capitalize text-md py-5 text-gray-500">
                  password:
                  <br />
                  <input type="password" name="password" className="rounded-none border border-gray-500 w-lg py-3" required />
                </label>
              </div>
              
              <div className="py-5">
                <input type="submit" className="bg-blue-900 cursor-pointer hover:bg-blue-950 font-sans text-md md:w-lg py-3 lg:w-lg text-white lowercase text-center" value="SIGN UP"/>
              </div>
            </form>
          </div>
          
          <div className="w-lg bg-blend-overlay bg-gray-950 h-auto mx-0">
            <img src={img} alt="" className="w-lg h-170 object-cover"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
    