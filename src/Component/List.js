import React from 'react'

// function List() {
//     const list=['Ford', 'BMW', 'Audi']
  
//   return (
//     <div>
//         <h1> List of Car Names</h1>
//         <ul> {list.map((car) => <Car brand={car} />)} </ul>
       
//     </div>
//   )
// }

// function Car(props) {
 
//   return <li>I am a { props.brand}</li>;

//  }
export default List



// CASE 1:  When you run the above code , it will work but you will receive a warning that there is no "key" provided for the list items.
// soo replace this 
// const list=[
//     { key:1,brand:"ford"},
//     {key :2,brand:"BMW"},
//     {key:3,brand:"audi"}
//   ]

//      <ol> {list.map((car) => <Car brand={car.brand} key={car.key} />)} </ol> 



    // CASE 2: Using the callBack function
    // function List() {
    //   const list=[
    //       { key:1,brand:"Ford"},
    //       {key :2,brand:"BMW"},
    //       {key:3,brand:"Audi"}
    //     ]
      
    //     const res=list.map(fun=>
    //       <li key={fun.key} > {fun.brand}</li>
    //     );
        
    //     return (
    //       <div>
    //           <h1> List of Car Names</h1>
    //           <ul> {res} </ul>
            
    //       </div>
    //     )
    //   }
      

      

      //CASE 3:  USING THE INDEX AS A KEY
      function List() {
        const list=[
            { key:1,brand:"Ford"},
            {key :2,brand:"BMW"},
            {key:3,brand:"Audi"}
          ]
        
          const res=list.map((fun,index)=> <li key={index} > {fun.brand}</li> );
          
          return (
            <div>
                <h1> List of Car Names</h1>
                <ul> {res} </ul>
              
            </div>
          )
        }
        