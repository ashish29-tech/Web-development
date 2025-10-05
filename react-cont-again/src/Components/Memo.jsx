////ye isko karne ka tarika ek aur hai jise we call...memoization
//memoization is not use memo.
//memoization means...apne changes ko yaad rakhna
//memoization works by tracking the props...if the props have changed...toh rerendering hogi. 
//if props are not changed...then no rerendering

import React, { Fragment, memo, useState } from 'react'

function Memo() {

  let [t, setT]= useState("hello memo") //initial value "hello memo"
  function handleClick(){ //handleClick..hello memo ko change kar rha hai...directly change nai kar sakte toh useState
    setT(Math.floor(Math.random()*10));
  }

  return (
    //
    <div> {/* ye parent div hai...dena hi padega...empty ya fragment yha nai de sakte  */}
      {/* Memoization track karta hai props ko..title is a prop here..*/}
      {/* <Mymemo titl="hello memo"/> */}
      <Mymemo titl={t}/>
      <button onClick={handleClick}>Click</button>
      <Mymemo titl="bye memo"/>
      <Mymemo titl="goodbye memo"/>
      <Mymemo titl="bhag ja memo"/>
    </div>
  )
}

// function Mymemo(props){ //upar titl props ki trah ja raha hai to catch kar liya...ya fir destructure bhi kar sakte hai
//   function Mymemo({titl}){ 
//   return (
//     <div>
//       <h1>Title:{titl} </h1>
//     </div>
//   )
// }

//memoization
// React.memo...kar sakte hai
//but sirf memo karna hai toh destructure kar denge
//ye memo function ko memoize kar lega...ye dekhega jab Mymemo call hua hai..uske andar jab-jab prop change hue hai..tabhi wo rerender karega
const Mymemo = memo(function ({titl}){  //memo is a function. naam de diya..Mymemo..cuz isi function ko track karna chah rahe hai...Mymemo wala pura function isme paste kar diya...Mymemo naam hta diya
  return (
    <> {/* fragment se wrap kar diya..div ki jgah...to avoid extra div */}
      <h1>Title:{titl} </h1>
    </>
  )
}) 



export default Memo