import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import useState from '../ReactHooks/UseState'

const User = () => {
  const [SearchParams,setSearchParams]=useSearchParams();
  console.log(SearchParams);
  const ShowActiveUsers=SearchParams.get('filter')==='active'; // getting the obj value from the Searchparams
  
  return (
    <div>
      <h2> user1 </h2>
      <h2> user2 </h2>
      <h2> user3 </h2>
      <Link to='/'> Go to Home</Link> 
      <Outlet/>    {/* if there is any nested Routers, then the parent Router must be contain Outlet tag.  */}

    <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>   {/* setting  a obj to SearchParams */}
    <button onClick={()=>{setSearchParams({})}}>Reset Filter</button> <br/><br/>

    
      {ShowActiveUsers? 'Showing Active Users' : 'Showing all users'}
      
    </div>
  )
}

export default User



//  function User() {
//   const [ item,setItem]=useState("");
//   const result= item.get(res)
//   return (
//     <div>
//       <h2> users component</h2>
//      <button onClick={setItem({res:'active'})}> Active Users</button>
//      <button onClick={setItem({res:''})}>Reset Users</button>
//     { result? "Showing the Specific users":"Showing all users"}
//     </div>
//   )
// }
