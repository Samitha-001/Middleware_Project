import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from "react";


function App() {

  // const billDetails = () => {
  //   console.log("hey I am the bill details")
  // }

const [bills, setBills] = useState("");

  
    const billDetails = async () => {
 
    console.log("bill Details clickerd");
   try {
    const response = await axios.get("http://localhost:9000/test");
    setBills(response.data);
    console.log(response.data);
      // window.location.href= res.data.url;
   } catch (error) {
    console.log("Error in catch in try catch" + error)
   }
}



  return (
   <>
      <button onClick={billDetails}>
          Click for the bill details
      </button>
      {bills.map((bill, index) => (
              <p>
                {bill.title}
                <>    </>
                {bill.price}
                <br></br>
              </p>
          ))}
   </>
  );
}

export default App;
