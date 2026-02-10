import React, { useEffect, useRef } from 'react'

 function Hookss() {

  let salary = 50000; //it's just a variable...not a state. Toh isko change nai kar sakte but dom ko kar sakte hai...

  //variable de diya spanEl 
  let spanEl = useRef(); //useRef ko initialise kar diya. useRef dom element ke refernce ko select karne ke kaam ata hai...toh useRef naam ka hook use kar rahe hai to wo select karega ya toh kisi div ko, span ko, ya agr koi tag de rakha hoga toh usko

  useEffect(()=>{ //accepts 2 things...1 is cb fn and dependency array
    setTimeout(()=>{ //set timeout chala diya

      //dom change. 2 tarike hai...
      // document.getElementById('sal').innerHTML = "33000" //niche id dedi..id se span mil gya toh uske andar ka text badal sakte hai. Way-1..isse better useRef

      //useRef ke liye useRef naam ke hook ko initiate karna padta hai...upar kar diya
      //referred value ko manipulate karna...
      spanEl.current.innerHTML = "33000" //current ka mtlb wo kisko point kar rha hai...spanEl.current means wo niche ke pure span element ki baat kar rha hai

    }, 3000);
  }, []) 

  return (
    <div>
      {/* Salary is : <span id="sal"> {salary} </span> */} {/* way-1..span ko id ke through select kar rahe the */}
      Salary is : <span ref={spanEl}> {salary} </span> {/* ref means span ka reference..ye span element ko point karega. spanEl element span ka reference hai. Ab refernce hai toh iski value ko change karna hai... */}
      
    </div>
  )
}



export default Hookss;


