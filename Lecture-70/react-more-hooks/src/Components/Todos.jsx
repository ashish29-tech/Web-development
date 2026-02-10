// //Task 1: create -> todo(title, desc)

// import React, { Fragment } from 'react'

// function Todos() {
//   return (
//     <div>
//       {/* singleTodo ko 3 baar call karenge */}
//       <SingleTodo titl="go to place-1" desc="place-1 is amazing" />
//       <SingleTodo titl="go to place-2" desc="place-2 is amazing" />
//       <SingleTodo titl="go to place-3" desc="place-3 is amazing" />
//     </div>
//   )
// }

// function SingleTodo({titl, desc}){ //upar paas kar diya props(titl, desc) ko...toh yha catch or destructure kar diya
//   return(
//     <Fragment>
//      yha bhi likh diya titl and desc
//       <h1>Title: {titl} </h1>
//       <h1>Desc: {desc} </h1>
//     </Fragment>
//   )
// }

// export default Todos

//------------------------------------------------------------------------------

//Task 2: input box bnayenge...+ Array bnayenge

import React, { Fragment, useState } from 'react'

function Todos() {

  let arr = [ //array of objects bna liya...har ek object ke paas 2 chize hoti hai...
    {titl: "go to place-1", desc: "place-1 is amazing"}, 
    {titl:"go to place-2", desc:"place-2 is amazing"}, 
    {titl:"go to place-3", desc:"place-3 is amazing"}
  ];
//array ki value kam-jyada ho sakti hai koi input add/subtract...isliye useState() karna padega and ye useState array return karta hai
 let [ arrays, setArrays] = useState(arr); //arr initial value

 //function needs to return something...
 return(
  <Fragment>
   
      <SingleTodo todos={arrays} /> {/* Todos naam ke component m state(arrays) send kar diya...and pura ka pura arrays bhej diya....*/}
  </Fragment>
 )


  //----------------------------------------------------
  // Way-1 of step-1
  // return (
  //   <div>
      /* singleTodo ko 3 baar call karenge */
      /* <SingleTodo titl="go to place-1" desc="place-1 is amazing" />
      <SingleTodo titl="go to place-2" desc="place-2 is amazing" />
      <SingleTodo titl="go to place-3" desc="place-3 is amazing" /> */

    // {/* </div> */}
  // )

  //----------------------------------------------------
  //----------------------------------------------------


  //way-1 
// }

// function SingleTodo({titl, desc}){ //upar paas kar diya props ko...toh yha catch or destructure kar diya
//   return(
//     <Fragment>
//       <h1>Title: {titl} </h1>
//       <h1>Desc: {desc} </h1>
//     </Fragment>
//   )
// }


//way-2
}

//ye SingleTodo sirf 1 hi chiz accept kar rha hai...
function SingleTodo({todos}){ //todos ko destructure kar liya
  // console.log(todos); //ye ek array hai toh we can diplay inside the fragment
  return(
    <Fragment>
       {/* display karenge array ko inside the fragment toh array hai toh map */}
       {
        //iterate kar diya map ki help se
       todos.map((item, index)=> { {/* //map kar sakte hai array pe. Map itself returns an array..map ka kaam hi hota hai jo chiz dal rahe hai..that is an object...in our case wo object hamare array ke andar ja rha hai */}
          return ( //map jo return kar rha hai wo har ek new child bna rha hai
            // single child hi hoga isliye Fragment
            <Fragment key={index}> {/* Unique key de diya index ko...jo ultimately har ek child ko uniquely identidy karne m kaam ayega */}
            
              <h1>{item.titl}</h1> {/* item..ye object hai... direct nai dikha sakte bcoz objects are not valid as a React child.. . lga ke dikha denge  */}
              <h1>{item.desc}</h1> {/*  */}
            </Fragment>       
          )
        })}    
    </Fragment>
  )
}

export default Todos

// For task 3 we'll make a new component Add.jsx