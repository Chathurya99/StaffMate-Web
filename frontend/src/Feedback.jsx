// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { firestore } from "./firebase"; 

function Feedback() {
  const [leaveData, setLeaveData] = useState([]);
  const [comment, setComment] = useState({ comment: '' });
  const [searchIndex, setSearchIndex] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { ...profileData } = comment;

     
      const employeeDocRef = doc(firestore, searchIndex, "Leave");

     
      await setDoc(employeeDocRef, profileData, { merge: true });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const leaveCollection = collection(firestore, searchIndex);
        const querySnapshot = await getDocs(leaveCollection);
        const leaveList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLeaveData(leaveList);
      } catch (error) {
        console.error("Error fetching leave data from Firebase:", error);
      }
    };

    fetchLeaveData();
  }, [searchIndex]);

  const handleSearch = () => {
    // Trigger the fetch when the search button is clicked
    // eslint-disable-next-line no-undef
    fetchLeaveData();
  };

  return (
    <div className='container'>
      <div className='text-center mt-4'>
        <h3>Leave Submission</h3>
      </div>
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
        <form className="row g-1 w-100" onSubmit={handleSubmit}>
          <div className='mt-5'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Period</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.employeeIndex}</td>
                    <td>{leave.period}</td>
                    <td>{leave.reason}</td>
                    <td>{leave.date}</td>
                    <td>{leave.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="inputComment" className="form-label">Comment</label>
            <input
              type="text"
              className="form-control"
              id="inputComment"
              placeholder='Enter Comment'
              autoComplete='off'
              onChange={e => setComment({ comment: e.target.value })}
            />
          </div>

          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
