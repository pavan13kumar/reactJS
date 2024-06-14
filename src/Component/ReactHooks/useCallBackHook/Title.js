import React from 'react'

function Title() {
    console.log("Rendering Title page ")
  return (
    <div>
      <h2>use callback Hook</h2>
    </div>
  )
}

export default  React.memo(Title)
