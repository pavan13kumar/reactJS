import React, { useState } from 'react'

function CheckBox() {
  const [selectedOption, setSelectedOption] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);
  const [scratchStates, setScratchStates] = useState({});

  const option1 = "option one";
  const option2 = "option two";
  const option3 = "option three";

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckboxes([...checkboxes, value]);
      setScratchStates({ ...scratchStates, [value]: false });
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  }

  const handleScratch = (property) => {
    setScratchStates({ ...scratchStates, [property]: !scratchStates[property]});  // setting the value of the specific property to true, so that it will be helpful for text scratch 
  }

  const handleDelete =(elementToDelete) => {
    console.log("handleDelete")
    setCheckboxes(checkboxes.filter(item => item !== elementToDelete)) // create a new array with an elements that are not equal to the element that need to be deleted And update the same to checkbox 
    
    // Uncheck the elementToDelete bY getting its ID
    var checkbox = document.getElementById(elementToDelete);
    // Check if the checkbox element exists
    if (checkbox) {
      checkbox.checked = false;
    } else {
      console.error("Checkbox element not found with ID: " + elementToDelete); 
    }
  }


  return (
    <div>
      <h2>Selected option → {selectedOption}</h2>
      <label>Choose an option: </label>
      <select onChange={handleSelectOption}>
        <option value={option1}>option 1</option>
        <option value={option2}>option 2</option>
        <option value={option3}>option 3</option>
      </select>

      <input id="One" type='checkbox' value={"One"} onChange={handleOnChange} />
      <span>{"One"}</span>
      <input id="Two" type='checkbox' value={"Two"} onChange={handleOnChange} />
      <span>{"Two"}</span>
      <input id="Three" type='checkbox' value={"Three"} onChange={handleOnChange} />
      <span>{"Three"}</span>
      <input id="Four" type='checkbox' value={"Four"} onChange={handleOnChange} />
      <span>{"Four"}</span>
      <input id="Five" type='checkbox' value={"Five"} onChange={handleOnChange} />
      <span>{"Five"}</span>

      <div >
        <p>
          The checked checkboxes are:
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap', alignContent: 'center' }}> 
          {checkboxes.map((checkbox, index) => (
             <div>
                <span key={index} style={{ textDecoration: scratchStates[checkbox] ? 'line-through' : 'none', marginRight: '10px',color: 'blue'}}> {checkbox}  </span>
                  <button onClick={() => handleScratch(checkbox)}>Scratch</button>  &nbsp;
                  <button onClick={()=> handleDelete(checkbox)}>Delete</button>  
              </div>
           
          ))}
            </div>
        </p>
      </div>
    </div>
  );
}

export default CheckBox;

