import { useEffect } from 'react'
import './App.css'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'

import DashBoard from "./components/Auth/Login/components/DashBoard/dashboard"
import AddEmployee from "./components/employees/recruitment/add_employee";
import Analytic from './components/Auth/Login/components/Analytics/analytics'
import PerformanceMetrix from './components/Auth/Login/components/Analytics/performance_metrix'
import EmployeeDetails from './components/employees/recruitment/employee_details';
import Attendance from './components/employees/recruitment/attendance';
import PaymentEnrollment from './components/employees/recruitment/payment';

function App() {

  useEffect(() => {
    fetch('http://127.0.0')
      .then((res) => {
        if (res.ok) console.log('Successfully connected to Go Fiber backend')
      })
      .catch((err) => console.error('Failed to connect to Go backend:', err))
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<DashBoard />}>
          <Route index element={
            <>
              <Analytic />
              <PerformanceMetrix />
            </>
          } />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="employee_details" element={<EmployeeDetails/>} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<PaymentEnrollment/>} />
          <Route path="salary" element={<div>Salary Module</div>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
