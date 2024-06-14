import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, resolvePath } from 'react-router-dom'

// function Axios() {
//     const [data,setData]=useState();
//     useEffect(()=>{
//         axios.post("https://jsonplaceholder.typicode.com/todos",{
//             fname:"pavan",
//             lname:"kumar",
//             age:22,
//             Address:"Chikkaballapur"
//         })

//         .then((res) => console.log(res.data))
      
//         .catch((err)=> console.log(err))
//     },[])
// }


// // //CASE 2:
// function Axios() {
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//       axios.get("https://reqres.in/api/users?page=2")
//       // .then((res)=>console.log(res))
//       .then(res=> setData(res.data.data) )
//       .catch((err)=> console.log(err))
//   },[])

// return (
//   <div>
//       <h2> axios</h2>
//       {
//       data.map((val,key)=>{
//       return <p key={key}> {val.email}</p> 
//       })
//       }
//   </div>
// )
// }

//CASE 3:
// function Axios() {
//   const [state, setState] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((response) => response.json()) 
//       // .then((json) => console.log(json))
//       .then((json) =>  setState(json) )
//       .catch((err) => console.log(err))

//   },[] )
//   return (
//     <div>
//       {
//         console.log(state)
//         // state.map((val,index) => {
//         //   return(<p key={index}> {val} </p>)
//         // })
//       }
      
//     </div>
//   )
// }

export default Axios



// Filter() method:
// let arr =[1,21,32,11,44,32,32,543,221]
// const myfilter = (arr) => {
//   return arr >40;
// }
// let result = arr.filter(myfilter);
// console.log(result);

// Reduce method
// let arr = [175, 50, 25]
// let arr_reduce = (total, num, index, arr) => {
//   console.log("total", total);
//   console.log("num", num);
//   console.log("index", index);
//   console.log("arr", arr);
//   return(total - num);
// }
// const result = arr.reduce(arr_reduce);


// console.log(result);


 function Axios() {
  const [data,setData] = useState({
    userId: '',
    title: '',
    body: ''
  })

  const changeHandler = (e)=> {
    const { name, value } = e.target;
    setData((prevState) => ({...prevState,[name] : value}))
  }

  const {userId, title, body} = data;
  const submitHandler =(e) =>{
    e.preventDefault();
    console.log(data)
    axios.post('https://jsonplaceholder.typicode.com/posts',data)
    .then((response)=> console.log(response))
    .catch((error) => console.error(error.message));
  }
  return (

    <div>   
      <form onSubmit={submitHandler}>
        <div>
          <input type='text' name='userId' value={userId} onChange={changeHandler}/>
        </div>
        <div>
          <input type='text' name='title' value={title} onChange={changeHandler}/>
        </div>
        <div>
            <input type='text' name='body' value={body} onChange={changeHandler}/>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
