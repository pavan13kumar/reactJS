import React from 'react'
import useInput from './useInput'

function InputForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const[lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = (e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        // reset the input fields
        resetFirstName();
        resetLastName();
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>FirstName: </label>
        <input {...bindFirstName} type='text' ></input><br/>
        
       {/* equivalent to → <input value={bindFirstName.value} onChange={bindFirstName.onChange} type='text'/> */}

        <label>LastName: </label>
        <input {...bindLastName} type='text' ></input> <br/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputForm


//NOTE:Here, firstName corresponds to the current value of the input field, bindFirstName corresponds to the bind object with value and onChange, and resetFirstName corresponds to the reset function.