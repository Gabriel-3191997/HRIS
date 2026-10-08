import { useEffect } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import API from './api/axios' // Import configured Axios instance
import DashBoard from "./HR/components/DashBoard/dashboard"
import dashboard from "./HR/components/DashBoard/dashboard"
import AddEmployee from "./HR/components/recruitment/add_employee"
import Analysis from "./HR/components/Analysis/analytics"
import Analytic from "./HR/components/Analytics/analytics"
import EmployeeDetails from './HR/components/recruitment/employee_details'
import Attendance from './HR/components/Attendance/attendance'
import PaymentEnrollment from './HR/components/Salary/payment'
import Salaray from './HR/components/Salary/salaray'
import Emergency from './HR/components/Request/emergency'
import Settings from './HR/components/Settings/settings'
import Notification from './HR/components/Notifications/notification'
import PendingRequest from './HR/components/Request/pending_request'
// import Home from "./HR/components/layout"


function App() {

  useEffect(() => {
    // Axios automatically parses JSON responses and handles HTTP error statuses (4xx, 5xx)
    API.get('/home')
      .then((response) => {
        console.log('Successfully connected to Go Fiber backend:', response.data);
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status outside 2xx range
          console.error(`Backend Error (${error.response.status}):`, error.response.data);
        } else if (error.request) {
          // Request was made but no response was received (e.g., server offline or CORS issue)
          console.error('No response from Go Fiber server:', error.request);
        } else {
          console.error('Axios configuration error:', error.message);
        }
      });
  }, []);

  return (
    <HashRouter>
      <Routes>

        {/* <Route path='/*' element={<DashBoard />}></Route> */}
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="/*" element={<DashBoard />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route index element={<Analytic />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="employee_details" element={<EmployeeDetails/>} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<PaymentEnrollment/>} />
          <Route path="salary" element={<Salaray />} />
          <Route path="emergency" element={<Emergency/>} />
          <Route path="settings" element={<Settings />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path='notification' element={<Notification />} />
          <Route path="pending" element={ <PendingRequest/>}/>
        </Route>

      </Routes>
    </HashRouter>
  )
}

export default App