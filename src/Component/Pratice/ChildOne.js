import React from 'react'

function ChildOne({name, person}) {
    console.log("child component")
  return (
    <div>
      {name}-{person.fname}-{person.lname}
    </div>
  )
}

export default React.memo(ChildOne)
