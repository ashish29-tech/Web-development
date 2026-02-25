import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

//Propdrilling is a problem and contextAPI is a solution.
//Propdrilling...chahiye tha 3rd child ke paas...par hamne 1st and 2nd father sabke paas component bhej diya...isse hamare prop ko manage karna mushkil ho jata..ye state management ka kaam thora difficult 
// kar deta hai...har hierarchy se nai jaye isse bachne ke liye hamare paas hota hai context API

function Propdrilling() {
    let [count, setCount] = useState(0);
  return (
    <div>
       {/* ab parent ke paas..direct access hai. */}
        <CountContext.Provider value={count}> {/* wrap kar diya countcontext m provider ko. Provider ke andar initial value...count ko bhejna hai  */}
          {/* <Counting count={count} setCount={setCount}/> */}
          <Counting setCount={setCount}/>
        </CountContext.Provider>
    </div>
  );
}

// function Counting ({count, setCount}){ //count ko destructure
function Counting ({setCount}){
  return (
    <div>
      {/* <div>count - {count}</div> */}
      <CountComponent/>
      {/* 2 component bhej diye... */} 
      {/* <Buttons count={count} setCount={setCount}/>  */}
      <Buttons setCount={setCount}/>  {/* button m count bhejne ki jarurat nahi hai */}
      
    </div>
  )
}

function CountComponent(){
  let count = useContext(CountContext) //hamne useContext kiya countContext
  return <h1>Count - {count}</h1>;
}

function Buttons ({ setCount} ){ //count, setCount ko destructure
    let count = useContext(CountContext); //useContext...countContext  
  return (
    <>
      <button onClick={()=> setCount(count + 1)}>inc</button> {/* jab bhi onclick hoga...tab ek function run karenge....setCount ki value +1 */}
      <button onClick={()=> setCount(count - 1)}>dec</button> 
    </>
  );
}

export default Propdrilling;