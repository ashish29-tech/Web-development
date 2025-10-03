import React from 'react';

function Homie() {
  // let a = 10;
  // let a = "ash";
  let a = true; //react m true ko direct nai likh sakte
  let b = false; //react m false ko direct nai likh sakte
  let c = null; 
  let d = undefined; //ye nazar nai ata...undefined is not defined...and something which is not defined...can't be transferred into a string.
  return (
    <div>
      {/* <h1>{a}</h1>
      <h1>{b}</h1> */}

      {/* JSON.stringify se kar liya...true and false */}
      <h1>{JSON.stringify(a)}</h1>
      <h1>{JSON.stringify(b)}</h1>
      <h1>{JSON.stringify(c)}</h1>
      <h1>{JSON.stringify(d)}</h1>
    </div>
  );
}

export default Homie