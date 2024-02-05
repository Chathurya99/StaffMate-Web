// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc,setDoc } from "@firebase/firestore";
import { firestore } from "./firebase"; // Adjust the path accordingly

function EditEmployee() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    basicSalary: '',
    bonus: '',
    deductions: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { employeeIndex, ...profileData } = data;

      // Use employeeIndex as part of the document ID
      const employeeDocRef = doc(firestore, employeeIndex,"Profile");

      // Store the other data in the profile field
      await setDoc(employeeDocRef, profileData);
      navigate('/Employee');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Update Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
            onChange={e => setData({...data, name: e.target.value})}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
            onChange={e => setData({...data, email: e.target.value})}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password'
            onChange={e => setData({...data, password: e.target.value})}/>
        </div>
		<div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
            onChange={e => setData({...data, address: e.target.value})}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputBasicSalary" className="form-label">Basic Salary</label>
          <input type="text" className="form-control" id="inputBasicSalary" placeholder="Enter Basic Salary" autoComplete='off'
            onChange={e => setData({...data, basicSalary: e.target.value})}/>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="inputBonus" className="form-label">Bonus</label>
          <input type="text" className="form-control" id="inputBonus" placeholder="Enter Bonus" autoComplete='off'
            onChange={e => setData({...data, bonus: e.target.value})}/>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="inputDeductions" className="form-label">Deductions</label>
          <input type="text" className="form-control" id="inputDeductions" placeholder="Enter Deductions" autoComplete='off'
            onChange={e => setData({...data, deductions: e.target.value})}/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
