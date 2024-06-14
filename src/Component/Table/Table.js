
import React, { useState } from 'react';
import './table.css';

const initialData = [
  { fname: "Megha", lname: "Raj", age: 19, gender: "Female", phone: "1234567890", dob: "01/Sep/2000", status: "Active" },
  { fname: "Pooja", lname: "Hegdhe", age: 82, gender: "Female", phone: "1234567890", dob: "19/Jan/2001", status: "Archived"},
  { fname: "Janu", lname: "Prasadh", age: 29, gender: "Female", phone: "1234567890", dob: "23/Aug/2000", status: "Active" },
  { fname: "Anju", lname: "Gowda", age: 64, gender: "Female", phone: "1234567890", dob: '17/Aug/2000', status: "Active" },
  { fname: "Bharath", lname: "Raj", age: 33, gender: "Male", phone: "1234567890", dob: "31/Aug/2000", status: "Archived"},
  { fname: "Manoj", lname: "Kumar", age: 15, gender: "Male", phone: "1234567890", dob: "05/Sep/1999", status: "Active" },
  { fname: "Vinay", lname: "Kumar", age: 46, gender: "Male", phone: "1234567890", dob: "27/Sep/2001", status: "Active" },
];

function Table() {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    // console.log(direction)

    // Sort the data based on the selected column and make a copy of it
    const sortedData = [...data].sort((a, b) => {

      // console.log("a",a ,"b",b)
      let aValue;
      let bValue;

      if(key ==='dob'){
        aValue = convertDOBToSortableValue(a[key]);
        bValue = convertDOBToSortableValue(b[key]);
      }else{
          aValue = a[key];
          bValue = b[key];
      }
      if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    // console.log(sortedDa ta)
    setData(sortedData); // updating the data of useState
  };

  return (
    <div>
      <table className='Table'>
        <thead>
          <tr  style={{borderBottom:"1px solid #ddd"}}>
            <th onClick={() => handleSort('fname')}> FirstName {sortConfig.key === 'fname' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>} </th>
            <th onClick={() => handleSort('lname')}> LastName {sortConfig.key === 'lname' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>} </th>
            <th onClick={() => handleSort('age')}> Age {sortConfig.key === 'age' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>} </th>
            <th onClick={() => handleSort('gender')}> Gender {sortConfig.key === 'gender' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>} </th>
            <th onClick={() => handleSort('dob')}> DOB {sortConfig.key === 'dob' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>} </th>
            <th>Phone Number</th>
            <th onClick={() => handleSort('status')}>Status {sortConfig.key === 'status' && <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key} className={`${getStatusClass(val.status)} `} style={{borderBottom:"1px solid #ddd"} }>
                <td>{val.fname}</td>
                <td>{val.lname}</td>
                <td>
                  <div className={`${circular_backgroundr(val.age)}`}> {val.age} </div>
                </td>
                <td>{val.gender}</td>
                <td>{val.dob}</td>
                <td>{val.phone}</td>
                <td>{val.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

  // Helper function to convert DOB string to sortable value
  const convertDOBToSortableValue = (dob) => {
    const [day, month, year] = dob.split('/');
    return new Date(`${year}-${month}-${day}`).getTime();
  };

   // Define a CSS class for each status
   const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'active-status';
      case 'Archived':
        return 'archived-status';
      default:
        return ''; // Default class if status is not recognized
    }
  };

// Define a CSS class depending on the age 
  const circular_backgroundr = (age) =>{
    if(age<=25){
      return ('green')
    }
    if (age>25 && age <50) {
      return('red')
    } 
    else{
      return('yellow')
    }
  }



export default Table



