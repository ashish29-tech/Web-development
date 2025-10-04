import React, { useState } from 'react'; //niche useState type karte hi suggestion pe click karenge toh yha curly braces m useState aa jayega

function Counter() {

  //dynamic hai...means 0 hai and then 1 ho jana chahiye click karne pe...toh let se nai karenge...useState() aa jayega picture m
   let [count , setCount] = useState(0) //array return karta hai useState...2 element args...1st is variable name...2nd is function. 0 dikhana hai toh initial value will be zero...

  //function define kar diya
  function handleIncrement(){
    // count+=1; //ye aise direct nai kar sakte
    setCount(count + 1); //setCount ki help se karna hoga...setCount ko call kiya...and count ko 1 se badha diya
  }

  return ( //jo bhi chiz return karte hai that is basically a part of jsx...toh jsx return ho rha hai. We can return only 1 parent if more than 1 return karna hai toh wrap
    //age empty div nai dena chahte toh react provides...React Fragment syntax. Sirf fragment bhi likh sakte hai...but iske liye destructure karna zaruri hai.
    // <> {/* Aproach1: 1 se jyada element return karna tha toh div m dal diya... */}
      <React.Fragment> 
      <div>
        <button onClick={handleIncrement}>Increase - {count}</button> {/* evaluate karna hai isliye curly braces m. onClick se ek event handle karte hai...handleIncrement(kuch bhi naam de sakte hai) */}
      </div>
      <h1>hello</h1>
      </React.Fragment>
    // </>

  );
}

export default Counter;


