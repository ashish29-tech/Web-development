import React, { useRef, useState } from 'react'

function CaseTwo() {

  const [count, setCount] = useState(0); //ek variable liya count...function bnaya setCount...

  let countRef = useRef(0); //is countRef ko initial value deni padegi

  function handleIncrement(){
    setCount(count + 1); //count ek state hai. setCount ko kahenge count ki value 1 se badha do. 0 se 1 kar rha hai...but nai ho rahi cuz setCount is not a synchronous task...ye kya karta hai baki kaam ko pehle hone deta hai...uske baad ye apne aap ko update karta hai..and upadted value next render(2nd time) pe milti hai
    console.log("state: ", count); //0 ayega....ye render number 1 hai. 
  } //count ek state hai and setCount 1st and 2nd render ke beech m jo bhi state hogi toh use maintain karna chahiye...yha maintain nai ho rahi...1 hona chahiye tha par output 0 aa rha hai. Now let's see kya ye kaam useRef karta hai..

  function handleIncrement2(){
    // console.log(countRef.current) //countRef ki current value nikalte hai
    countRef.current += 1;
    console.log("refer: ", countRef.current); //refer ki value. count update nahi hoga cuz count rerendering ki help se hota hai. Render-1 ka otput nazar aa rha hai..
  }

  return (
    <div>
      Count-1: {count}
      <br />
      Count-2: {countRef.current}
      <br />
      <button onClick={handleIncrement}>CLICK-1</button>
      <br />
      <button onClick={handleIncrement2}>CLICK-2</button> {/* button ke andar change nai karana toh refernce dene ki jarurat nai padegi..ham chahte hai hamari functionality perform ho jaye */}
      
    </div>
  );
}

export default CaseTwo

