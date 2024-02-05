// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "./firebase"; // Adjust the path accordingly

function Employee() {
  const [data, setData] = useState([]);
  const [searchIndex, setSearchIndex] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // If searchIndex is provided, use it in the query
        if (searchIndex) {
          const querySnapshot = await getDocs(collection(firestore, searchIndex));
          const filteredData = querySnapshot.docs
            .map(doc => ({
              id: doc.id,
              ...doc.data(),
            }))
            //.filter(employee => employee.employeeIndex.includes(searchIndex));

          setData(filteredData);
        } else {
          // If no searchIndex, fetch all data
          // eslint-disable-next-line no-undef
          const querySnapshot = await getDocs(collection(firestore, index));
          const employeeData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(employeeData);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, [searchIndex]);

  const handleSearch = () => {
    // Trigger the fetch when the search button is clicked
    // eslint-disable-next-line no-undef
    fetchData();
  };

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <div className="mb-3">
          <label htmlFor="searchIndex" className="form-label">Search by Employee Index:</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="searchIndex"
              placeholder="Enter Employee Index"
              value={searchIndex}
              onChange={(e) => setSearchIndex(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={handleSearch}>
              Enter
            </button>
          </div>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Employee Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.index}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.basicSalary}</td>
                <td>
                  <Link to={`/employeeEdit/${employee.index}`} className='btn btn-primary btn-sm me-2'>edit</Link>
                  <Link to={`/profile/${employee.employeeIndex}`} className='btn btn-primary btn-sm me-2'>Profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
