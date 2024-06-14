import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
  const params=useParams().userid;  /*call the useparams method fallowed by the userid(passing from the url) ,userid must be same like as value property of the Route in the path segment.  */
  // const {userid} = useParams()
  return (
    <div>
      {/* Details of user {userid} */}
      Details of user {params}
    </div>
  )
}

export default UserDetails
    