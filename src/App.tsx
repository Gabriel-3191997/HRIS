import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/Auth/Login/components/form'
import DashBoard from "./components/Auth/Login/components/DashBoard/dashboard"
import Registration from './components/Auth/Registration/registration' // Update path to your actual registration file

function App() {
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