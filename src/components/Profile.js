import React, { useState, useEffect } from 'react';
import "./Profile.css";
import { useNavigate } from "react-router-dom"


function Profile() {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    handleButtonClick('Total Student');
  }, []);

  const handleButtonClick = (buttonName) => {
    let newData = [];
    switch (buttonName) {
      case 'Total Student':
        newData = [
          { id: 1, name: 'John',city : "chennai"}, 
          { id: 2, name: 'Naveen' ,city : "chennai"}, 
          { id: 4, name: 'Kumar',city : "valur"},
          { id: 5, name: 'muthu', city : "chennai"},
          { id: 6, name: 'Kanni', city : "chennai"}];
        break;
      case 'Visited Student':
        newData = [
          { id: 1, name: 'Angel' ,city :"Chennai"},
          { id: 2, name: 'Aennila',city : "valur"},
          { id: 3, name: 'Aija',city : "Dindigul"},
          { id: 4, name: 'Ajay',city : "madurai"},
          { id: 5, name: 'Mari',city : "tiruchy"},
          { id: 6, name: 'Ajith',city : "tiruchy"}];  
        break;
      case 'Join Student':
        newData = [
          { id: 1, name: 'Angel' ,city :"Chennai"},
          { id: 2, name: 'Naveen' ,city : "chennai"}, 
          { id: 4, name: 'Kumar',city : "valur"},
          { id: 5, name: 'muthu', city : "chennai"},
          { id: 6, name: 'Kanni', city : "chennai"},
          { id: 7, name: 'Aennila',city : "valur"},
          { id: 8, name: 'Aija',city : "Dindigul"},
          { id: 9, name: 'Vijay',city : "madurai"}];
          
        break;
      case '2023 Student':
        newData = [
          { id: 1, name: 'Kumar',city : "valur"},
          { id: 2, name: 'Naveen' ,city : "chennai"}, 
          { id: 3, name: 'Angel' ,city :"Chennai"},
          { id: 4, name: 'muthu', city : "chennai"},
          { id: 5, name: 'Kanni', city : "chennai"}];
         
          
        break;
      case '2024 Student':
        newData = [
          { id: 1, name: 'Kumar',city : "valur"},
          { id: 2, name: 'muthu', city : "chennai"},
          { id: 3, name: 'Kanni', city : "chennai"},
          { id: 4, name: 'Aennila',city : "valur"},
          { id: 5, name: 'Aija',city : "Dindigul"},
          { id: 6, name: 'Vijay',city : "madurai"}];
         
        break;
      default:
        newData = ["Total Student"];
    }
    setTableData(newData);
  };

  // React Router hook to navigate
  let navigate = useNavigate();

  return (
    <div className='Profile'>
      <div className='container'>
        <div className='navbar'>
          <div>
            <h3>Computer Science </h3>
          </div>
          <button onClick={() => navigate("/")}>Log Out</button>
        </div>
        <div className='sidebar'>
          <button onClick={() => handleButtonClick('Total Student')}>Total Student</button>
          <button onClick={() => handleButtonClick('Visited Student')}>Visited Student</button>
          <button onClick={() => handleButtonClick('Join Student')}>Join Student</button>
          <button onClick={() => handleButtonClick('2023 Student')}>2023 Student</button>
          <button onClick={() => handleButtonClick('2024 Student')}>2024 Student</button>
        </div>

        
        <div className='tables'>
          <table>
            <thead>
              <tr>
                <th>Rg.N</th>
                <th>Name</th>
                <th>City</th>

              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
