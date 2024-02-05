import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { firestore } from "./firebase";
import { getDoc, doc } from '@firebase/firestore';

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeDoc = await getDoc(doc(firestore, ));
        if (employeeDoc.exists()) {
          setEmployee(employeeDoc.data());
        } else {
          console.log('Employee not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleLogout = () => {
    axios
      .get('http://localhost:8081/logout')
      .then(() => {
        navigate('/start');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <img src={`http://localhost:8081/images/` + employee.image} alt="" className='empImg' />
        <div className='d-flex align-items-center flex-column mt-5'>
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Salary: {employee.salary}</h3>
        </div>
        <div>
          <button className='btn btn-primary me-2'>Edit</button>
          <button className='btn btn-danger' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
