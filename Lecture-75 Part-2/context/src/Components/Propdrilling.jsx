import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

//Propdrilling is a problem and contextAPI is a solution.
//Propdrilling...chahiye tha 3rd child ke paas...par hamne 1st and 2nd father sabke paas component bhej diya...isse hamare prop ko manage karna mushkil ho jata..ye state management ka kaam thora difficult 
// kar deta hai...har hierarchy se nai jaye isse bachne ke liye hamare paas hota hai context API

//2 component bnaye count and button 
//then 2 functions bnaye

function Propdrilling() {
    let [count, setCount] = useState(0);
  return (
    <div>
       {/*Main parent component m chahiye tha..usko wrap kiya CountContext ke andar...and ye ek provider provide karta hai... Maximum level parent pe wrap kar diya. Ye ek provider deta hai.. Toh yha count teleported ho gya kisi bhi level pe istemal kar sakte hai.
        ab parent ke paas..direct access hai. */}
        <CountContext.Provider value={count}> {/* wrap kar diya countcontext m provider ko. Provider ke andar initial value...count ko bhejna hai  */}
          {/* teleported ho gya toh count={count} bhejne ki jarurat nahi hai */}
          {/* <Counting count={count} setCount={setCount}/> */}
          <Counting setCount={setCount}/>
        </CountContext.Provider>
    </div>
  );
}

//function bna liya
//upar se bhejne ki jarurat nahi padi toh yha catch bhi nahi karenge count ko
// function Counting ({count, setCount}){ //count ko destructure
function Counting ({setCount}){
  //function kuch return karta hai yha div return kar rha hai
  return (
    <div>
      {/* <div>count - {count}</div> */}
      {/* isko bhi ek component bna diya taki pta chal sake kitne bhi level tak istemal kiya ja sakta hai */}
      <CountComponent/>
      {/* 2 component bhej diye... */} 
      {/* <Buttons count={count} setCount={setCount}/>  */}
      <Buttons setCount={setCount}/>  {/* button m count bhejne ki jarurat nahi hai */}
      
    </div>
  )
}


function CountComponent(){
  //ek variable bna liya useContext ke sath..isme wo value ayegi jo hamne naam de rakha hai..CountContext
  let count = useContext(CountContext) //hamne yha useContext kiya countContext
  return <h1>Count - {count}</h1>;
}

//function bna liya Buttons jisme +/- karna hai
function Buttons ({ setCount} ){ //setCount ko destructure
    let count = useContext(CountContext); //useContext...countContext...count ka access mil jayeaga
  return (
    <>
    {/* 2 button bnaye 1 increment and 1 decrement. */}
      <button onClick={()=> setCount(count + 1)}>inc</button> {/* Dono button pe onClick event laga diya ki jab bhi onclick hoga...tab ek function run karenge....setCount ki value +1 */}
      <button onClick={()=> setCount(count - 1)}>dec</button> 
    </>
  );
}

export default Propdrilling;