import React, { useEffect, useRef } from 'react'

 function Hookss() {

  //ham DOM ki help se change kar rahe hai...toh isko state bnaye ya variable...isko direct change toh kar nai rahe...toh na state se fark padega na variable se
  let salary = 50000; //Isko state nai banaya simply...it's just a variable...not a state. Toh isko change nai kar sakte but dom ko kar sakte hai...

  //variable de diya spanEl niche
  let spanEl = useRef(); //useRef ko initialise kar diya. useRef dom element ke refernce ko select karne ke kaam ata hai...toh useRef naam ka hook use kar rahe hai to wo select karega ya toh kisi div ko, span ko, ya agr koi tag de rakha hoga toh usko

  useEffect(()=>{ //accepts 2 things...1 is cb fn and dependency array
    //side effect chalana hai setTimeout
    setTimeout(()=>{ //set timeout chala diya

      //dom change. 2nd tarike hai...
      // document.getElementById('sal').innerHTML = "33000" //niche id dedi sal naam se..id se span mil gya toh uske andar ka text badal sakte hai...33000 karni hai...npm run dev se server chala ke dekhenge toh 3 second ke delay ke baad value 33000 ho jayegi... Way-1..isse better useRef

      //better approach
      //useRef ke liye useRef naam ke hook ko initiate karna padta hai...upar kar diya
      //referred value ko manipulate karna...
      spanEl.current.innerHTML = "33000" //spanEl ke current ka mtlb wo kisko point kar rha hai...spanEl.current means wo niche ke pure span element ki baat kar rha hai

    }, 3000);
  }, []) 

  return (
    <div>
    {/* sal naam se id dedi */}
      {/* Salary is : <span id="sal"> {salary} </span> */} {/* way-1..span ko id ke through select kar rahe the */}
      {/* id nai chahiye ab ref */}
      Salary is : <span ref={spanEl}> {salary} </span> {/* ref means span ka reference..ye span element ko point karega. spanEl element span ka reference hai. Ab refernce hai toh iski value ko change karna hai... */}
      
    </div>
  )
}



export default Hookss;


