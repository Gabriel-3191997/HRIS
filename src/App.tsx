import { useEffect } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/Auth/Login/components/form'
import DashBoard from "./components/Auth/Login/components/DashBoard/dashboard"
import Registration from './components/Auth/Registration/registration' // Update path to your actual registration file

function App() {
  // Check backend connection when the app mounts
  useEffect(() => {
    fetch("http://127.0.0.1:3000/home")
      .then((res) => {
        if (res.ok) {
          console.log("Successfully connected to Go Fiber backend");
        }
      })
      .catch((err) => console.error("Failed to connect to Go backend:", err));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </HashRouter>
  )
}

export default App