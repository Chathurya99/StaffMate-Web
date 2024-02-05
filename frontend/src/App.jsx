// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'
import Attendancee from './Attendance'
import Logout from './Logout'
import SalaryCalculation from './SalaryCalculation'
import Feedback from './Feedback'
import FeedbackComment from './FeedbackComment'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/profile/:id' element={<Profile />}></Route>
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/feedbackComment' element={<FeedbackComment />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
        <Route path='/attendance' element={<Attendancee />}></Route>
        <Route path='/SalaryCalculation' element={<SalaryCalculation />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App