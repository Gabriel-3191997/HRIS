

function AddEmployee() {
  return (
   <>
   
    <div className="flex w-full sticky top-0 z-50 my-0 h-10 flex-wrap md:justify-start md:h-10 bg-white border-b border-none md:items-start gap-0"></div>
            
    <div className="max-w-4xl mx-auto md:mt-10 bg-white">
      <form action="post" className="space-y-6 md:mt-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {/* First Name */}
          <div>
            <label htmlFor="fn" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> First Name:
            </label>
            <input
              type="text"
              name="fn"
              id="fn"
              required
              className="w-full px-3 capitalize py-2 border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label htmlFor="mn" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Middle Name:
            </label>
            <input
              type="text"
              name="mn"
              id="mn"
              required
              className="w-full px-3 py-2 capitalize border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="ln" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Last Name:
            </label>
            <input
              type="text"
              name="ln"
              id="ln"
              required
              className="w-full px-3 capitalize py-2 border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Position */}
          <div>
            <label htmlFor="post" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Position:
            </label>
            <input
              type="text"
              name="post"
              id="post"
              required
              className="w-full px-3 py-2 capitalize text-sm border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Employment Status */}
          <div>
            <label htmlFor="emp" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Employment Status:
            </label>
            <select
              name="employment"
              id="emp"
              className="w-full px-3 py-2 border text-sm border-gray-400 bg-white capitalize focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="employee">Employee</option>
              <option value="contract">Contract</option>
              <option value="daily hired">Daily Hired</option>
              <option value="out source">Out Source</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Department:
            </label>
            <input
              type="text"
              name="department"
              id="department"
              required
              className="w-full px-3 py-2 capitalize text-sm border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Manager */}
          <div>
            <label htmlFor="manager" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Manager:
            </label>
            <input
              type="text"
              name="manager"
              id="manager"
              required
              className="w-full px-3 py-2 capitalize text-sm border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Date of Employment */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Date Of Employment:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="w-full px-3 py-2 text-sm border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="w-full px-3 py-2 text-sm border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Site */}
          <div>
            <label htmlFor="site" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Site:
            </label>
            <select
              name="site"
              id="site"
              className="w-full px-3 py-2 text-sm border border-gray-400 bg-white capitalize focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
              <option value="none">None</option>
            </select>
          </div>

          {/* Pay Type */}
          <div>
            <label htmlFor="pay" className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-red-600">*</span> Pay Type:
            </label>
            <select
              name="pay"
              id="pay"
              className="w-full px-3 py-2 text-sm border border-gray-400 bg-white capitalize focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="monthly">Monthly</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="none">None</option>
            </select>
          </div>

          {/* Upload Photo */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-800 mb-1">
              Upload Photo:
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-400 border-none file:text-sm file:bg-gray-50 hover:file:bg-gray-100 cursor-pointer"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <input
            type="submit"
            value="Save"
            className="px-8 py-2.5 text-sm text-white bg-blue-900 font-medium cursor-pointer hover:bg-blue-800 transition-colors"
          />
        </div>
      </form>
    </div>
   </>
  );
}

export default AddEmployee;