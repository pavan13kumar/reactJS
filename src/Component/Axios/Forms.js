import { useState } from 'react'
import React from 'react'

//NOTE
      //  const [name,setname]=useState("");
      //   usestate will keep track on input fields , here (name) is like a variable  initially empty and (setname) is the one which updates the changes in the field to a (name) Variable.
      // To get more idea reffer Case1 console .


//CASE1:
// function Forms() {
//   const [name,setname]=useState("");// useState("hvb") try with this
//   console.log(name);
//   return (
//     <div>
//       <form>
//         <label>ENter your name:</label>
//         <input type='text' value={name} onChange={(e)=> setname(e.target.value)}></input>

//       </form>
//     </div>
//   )
// }

//CASE2: onClick 
// function Forms() {
//   const [name, setname]=useState("");

// const  SubmitHandler=(event)=>{
//     event.preventDefault();
//     alert(`The text you entered was :${name}`)
//   }

//   return (

//       <form>
//         <label>Enter your name:</label>
//         <input 
//           type='text'
//           value={name} 
//           onChange={(e)=> setname(e.target.value)} />

//        <button onClick={SubmitHandler}>submit</button> 
//       </form>
//   )
// }



//CASE3: onSubmit
  
// function Forms() {
//     const [name, setname]=useState("");
  
//   const  SubmitHandler=(event)=>{
//       event.preventDefault();
//       alert(`The text you entered was :${name}`)
//     }
//     return (
  
//         <form onSubmit={SubmitHandler}>
//           <label>Enter your name:</label>
//           <input 
//             type='text'
//             value={name} 
//             onChange={(e)=> setname(e.target.value)} />
  
//           <input type='submit' ></input>
//         </form>
//     )
//   }
  
  
//CASE4:
//  function Forms() {

//   const [inputs,setInputs]=useState({});

//   const ChangeHandler =(event)=>{
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs(values => ({...values, [name]: value}))
// }
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(inputs);
//   alert(JSON.stringify(inputs));
// }

//   return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name: </label>
//         <input
//            type='text' 
//            name='username'
//             value={inputs.username || ""} 
//             onChange={ChangeHandler} />
        
      

//         <label> Enter your age:  </label>
//         <input 
//           type='number' 
//           name='age' 
//           value={inputs.age || ""}
//           onChange={ChangeHandler}
//         />
//         <input type='submit'/>
//       </form>

//   )
// }





//CASE 5: textarea

//  function Forms() {
//   const [textarea,settextarea]=useState("The content of the text area");

//   const changehandler=(event)=>{
//     settextarea(event.target.value);
//   }
//   return (
//     <div>
//       <textarea value={textarea} onChange={changehandler}> </textarea>
//     </div>
//   )
// }


//CASE 6: select 

 function Forms() {
  const [myselect,setmyselect]=useState([]);
  const [comment,setComment]=useState();
  const changeHandler=(event)=>{
    // console.log(event);
    // setmyselect(event.target.value);
   var value =event.target.value
    setmyselect(values => ({...values, value}))
    console.log(myselect);
  }

  const HandleComments=event=>{
    setComment(event.target.value) 
  }

  const HandleSubmit =event=>{
    // event.preventDefault();
    alert(`${myselect} ${comment}`)
  }
  return (
    <form onSubmit={HandleSubmit}>
    <div>
      <select value={myselect} onChange={changeHandler}>
        <option value={"Ford"}>Ford</option>
        <option value={"Swift"}>Swift</option>
        <option value={"Fortuner"}>Fortuner</option>
        <option value={"BMW"}>BMW</option>

      </select>
      <label>comments</label>
      <input type='text' value={comment} onChange={HandleComments}></input>

      <input type='submit'></input>
    </div>
    </form>
    
  )
}






export default Forms
