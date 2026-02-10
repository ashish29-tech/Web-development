
import React from 'react'

//har ek component ko style karne ki jarurat nai padi use wrap kar diya...wrna har child component pe style lagana padta
function WrapperComponent({ compo, hello }) { //yha wrapper ke andar jayega and we can destructure it
  return (
    //
    <div style={{border: "2px solid red", backgroundColor: "yellow"}}> {/* inline style kar rahe hai.... 2 object bnayenge cuz 1 toh evaluate karne ke liye ho jata hai 2nd style ke liye hai. Since object hai toh key:value pair */}
      {/* <h1>Hello parent</h1> */}
      {/* now hame basic styling ke andar child component ko wrap karna tha..child component name is compo...now see in browser console.. */}
      {compo}
      {hello}
    </div>
  )
}

//yha se expport kar denge so that App.jsx m use kar sake
export function ChildComponent(){ //export kar denge yha se child component...and require kar lenge App.jsx m
  return(
    <div>
      <h1>Child hu mai 1</h1>
    </div>
  )
}

export function ChildComponent2(){ 
  return(
    <div>
      <h1>Child hu mai 2</h1>
    </div>
  )
}

export default WrapperComponent


