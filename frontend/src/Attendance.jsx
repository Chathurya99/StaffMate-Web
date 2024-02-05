

// eslint-disable-next-line no-unused-vars
import React, { useState, Component } from 'react';

import QRCode from "react-qr-code";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function Attendance() {

  const [currentDate] = useState(getDate());
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");



  

  return (<div style={{ height: "auto", margin: "0 auto", maxWidth: 500, width: "100%" }}>
  <QRCode
    size={2048} // Increase the size to your desired value, for example, 2048
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={time}
    viewBox={`0 0 256 256`}
  

  />
  <h1 style={{ color: '#011519' }}>Scan the code to mark the attendance</h1>
          <h1><p>Today's Date : {currentDate}</p></h1>
          <h1><p>Current Time : {time}</p></h1>
</div>);
          


   
  }
export default Attendance;


