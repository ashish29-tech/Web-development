import React from 'react'


//conditonal rendering...render means show...toh condition ke hisab se show...if, else jaisi conditions
function Person() {
//we have read...component ke 2 hisse hote hai...1 return ke upar 1 return ke neeche

  
  let rn = Math.floor(Math.random()*10);
  let luckyNum = 7;

  let el;
  if(rn === luckyNum){ //condition
    el = <h1>lucky 7!!</h1> //el m h1 dalo aur bolo lucky 7
  } else {
    el = <p>Better luck next time...</p>
  }
  
//
  return (
    <div>
      <h1>
      { //evaluate karna tha toh wrapped it inside curly braces
        //  {/* <h1>hello ash, {rn} -&gt; {el}</h1> */} {/* kya ye conditioanl rendering ko return ke andar likh sakte hai ? No */}
        // {/* ternary operator use karenge */}
        // agr luckyNum rn ke barabar ati hai toh...true statement pehle and false statement baad m likhte hai.... upar if else ki jarurat nai padegi ye terneray operator ki wjah se
        // rn === luckyNum ? <h1>lucky 7!!</h1>: <p>Better luck next time...</p>

      }

      </h1>
    </div>
  )
    
}

export default Person








