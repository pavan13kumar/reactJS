import React from 'react'


//NOTE: The Stylings in React must be the JS objects({}) and also the styling properties must be in Camelcase 
function Inline() {
  const  heading={
    color:"red",
    fontSize:"77px"
    }
  return (
    <div>
      <h1 style={heading}>  Inline Styling</h1>
      <h1 style={{color:"red",fontSize:"66px", textAlign:"center"}}>  Inline Styling</h1>
    </div>
  )
}

export default Inline
