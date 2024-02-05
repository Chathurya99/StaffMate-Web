/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { firestore } from "./firebase"; 

function FeedbackComment() {
  const [leaveData, setLeaveData] = useState([]);
  const [feedbackData, setFeedbackData] = useState({
    date: '',
    performance: '',
    Rating: '',
  });
  const [searchIndex, setSearchIndex] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { date, performance, Rating } = feedbackData;

      // Use employeeIndex as part of the document ID
      const employeeDocRef = doc(firestore, searchIndex, "Feedback");

      // Store the feedback data in the profile field
      await setDoc(employeeDocRef, { date, performance, Rating }, { merge: true });
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
    fetchLeaveData();
  };

  return (
    <div className='container'>
      <div className='text-center mt-4'>
        <h3>Feedback Form</h3>
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
                  <th>Date</th>
                  <th>Performance</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.date}</td>
                    <td>{leave.performance}</td>
                    <td>{leave.Rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="inputDate" className="form-label">Date</label>
            <input
              type="text"
              className="form-control"
              id="inputDate"
              placeholder='Enter Date'
              autoComplete='off'
              onChange={e => setFeedbackData({ ...feedbackData, date: e.target.value })}
            />
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="inputPerformance" className="form-label">Performance</label>
            <input
              type="text"
              className="form-control"
              id="inputPerformance"
              placeholder='Enter Performance'
              autoComplete='off'
              onChange={e => setFeedbackData({ ...feedbackData, performance: e.target.value })}
            />
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="inputRating" className="form-label">Rating</label>
            <input
              type="text"
              className="form-control"
              id="inputRating"
              placeholder='Enter Rating'
              autoComplete='off'
              onChange={e => setFeedbackData({ ...feedbackData, Rating: e.target.value })}
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

export default FeedbackComment;

