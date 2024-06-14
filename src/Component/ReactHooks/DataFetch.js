import React, {useState,useEffect } from 'react'
import axios from 'axios'

//CASE 1: fetching all the posts 
// function DataFetch(){

//     const [post,setPost]=useState([]);
//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         .then(res=>{
//             console.log(res);
//             setPost(res.data)
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     },[])

//   return (
//     <div>
        
//       <ul>
//         {post.map(item => (<li key={item.id}> {item.title}</li>))}
//       </ul>
//     </div>
//   )
// }


//CASE: 2
// function DataFetch(){

//   const [post,setPost]=useState([]);
//   const [id,setId]=useState(1);
//   useEffect(()=>{
//       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res=>{
//           console.log(res);
//           setPost(res.data)
//       })
//       .catch(err=>{
//           console.log(err);
//       })
//   }
//     // ,[id]
//     ,[]
//   )

// return (
//   <div> 
//       <label>Enter the Id</label>
//       <input type='text' value={id} onChange={(e)=> setId(e.target.value)}/> <br/>
   
//       {post.title}
//   </div>
// )
// }

// CASE 3:
function DataFetch(){

  const [post,setPost]=useState({});
  const [id, setId] = useState(1);
   
  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>{
          console.log(res);
          setPost(res.data)
      })
      .catch(err=>{
          console.log(err);
      })
  },[id])

return (
  <div>
      <label>Enter the Id</label>
      <input value={id} max={100} onChange={(e)=> setId(e.target.value)}/> 
      {post.title}
  </div>
)}

//CASE 4:fetching an user defined post  with an input field
// function DataFetch(){

//     const [post,setPost]=useState({});
//     const [id,setId]=useState(1);
//     const [idFromButton,setIdFromButton]=useState("");
//     const handleClick=()=>{
//         setIdFromButton(id)
//      }
     
//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
//         .then(res=>{
//             console.log(res);
//             setPost(res.data)
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     },[idFromButton])

//   return (
//     <div>
//         <label>Enter the Id</label>
//         <input value={id} max={100} onChange={(e)=> setId(e.target.value)}/> 
//         <button onClick={handleClick} >Fetch post</button><br/>
//         {post.title}
//     </div>
//   )}

export default DataFetch
