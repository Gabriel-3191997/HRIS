import { useEffect } from 'react'

import './App.css'

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'


// Authentication

import LoginForm from './components/Auth/Login/components/form'
import Registration from './components/Auth/Registration/registration'


// Dashboard Layout

import DashBoard from './components/Auth/Login/components/DashBoard/dashboard'


// Dashboard Pages

// import Analytic from './components/Auth/Login/components/DashBoard/Analytics/analytics'

import AddEmployee from './components/employees/recruiter/add_employee'

// import EmployeeDetails from './components/Auth/Login/components/DashBoard/Recruitment/EmployeeDetails'

// import PayrollEnrollment from './components/Auth/Login/components/DashBoard/Recruitment/PayrollEnrollment'

// import Attendance from './components/Auth/Login/components/DashBoard/Attendance/Attendance'

// import Salary from './components/Auth/Login/components/DashBoard/Salary/Salary'

// import Emergency from './components/Auth/Login/components/DashBoard/Emergency/Emergency'

// import Notification from './components/Auth/Login/components/DashBoard/Notification/Notification'

// import Settings from './components/Auth/Login/components/DashBoard/Settings/Settings'


function App() {


  useEffect(() => {

    fetch('http://127.0.0.1:3000/home')

      .then((res) => {

        if (res.ok) {

          console.log(
            'Successfully connected to Go Fiber backend'
          )

        } else {

          console.error(
            'Go Fiber backend returned:',
            res.status
          )

        }

      })

      .catch((err) => {

        console.error(
          'Failed to connect to Go backend:',
          err
        )

      })

  }, [])


  return (

    <HashRouter>

      <Routes>


        <Route
          path="/"
          element={<LoginForm />}
        />


        <Route
          path="/registration"
          element={<Registration />}
        />


        <Route
          path="/dashboard"
          element={<DashBoard />}
        >

{/*           
          <Route
            index
            element={<Analytic />}
          /> */}

          <Route
            path="recruitment/add_employee"
            element={<AddEmployee />}
          />

          {/* <Route
            path="recruitment/employee-details"
            element={<EmployeeDetails />}
          />

          <Route
            path="recruitment/payroll-enrollment"
            element={<PayrollEnrollment />}
          />

          <Route
            path="attendance"
            element={<Attendance />}
          />

          <Route
            path="salary"
            element={<Salary />}
          />

          <Route
            path="emergency"
            element={<Emergency />}
          />

          <Route
            path="notification"
            element={<Notification />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
          */} 

        </Route>


        <Route
          path="*"
          element={<LoginForm />}
        />


      </Routes>

    </HashRouter>

  )

}

export default App