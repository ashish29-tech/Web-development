<<<<<<< HEAD
//rfce
import React from 'react'

function App() {
  return (
    <div>Hello from app</div>
  )
}

export default App






=======

//app ek component hai toh functional component hoga

// import Hello from "./Components/Hello"; //niche hello pe click kiya toh yha import ho gya

// import Ash from "./Components/ash";  //import karte waqt caps m kar diya...export ke time small m tha

// function App(){ //function bna liya jiska naam hai app
  // return <div>hello from app bhai</div> //function ka nature hota hai to return something..function m se ek div return kar rahe
  //upper part-1
  //yha par statements likhte hai
  //like...let a = 10;
  //if-else
  //while
  //for
  //functions bhi likh sakte hai


  //lower part-2---yha statements valid nai hai...expression valid hai...yha for wgr nai likh sakte...toh for ki jgah ata hai...map....if-else ki jgah...ternary
  //return likhne baad jo bhi hota hai wo jsx hota hai and isse pehle js hota hai
//     return (
//     <div>
//       <h1>hello from app bhai</h1>
//     </div> 
//     );
// }

// export default App; //jab tak yha se export nai karenge tab tak main.jsx m import nai kar sakte. This is default export.

//named export bhi hota hai..wo karenge

//------------------------------------------------------------------------------

// import Hello from "./Components/Hello"; 
// import {ash} from "./Components/ash"; //ash.jsx m se ash naam ka function export ho raha hai toh yha import karne ke liye destructure


// function App(){
//   console.log(ash, "12");
//     let  a = 100;

//   return (
//     //div ke andar wrap kar diya...now elements have single parent
//     <div> 

//       {/* components ko kaise import karte hai jaise tags ko karte hai */}
//       {/* <Ash /> */}

//       <div></div>
      
//        {/* {<Hello/>}   */}

//       {/* <div>
//       <h1>hello from app bhai</h1>
//       </div> 
//       <h1> hello again</h1> */
//       /* kis chiz ko evaluate karna hai to curly braces{} m */
//       /* <h1> hello again {a}</h1>
//       <h1> hello again {a}</h1> */}
      
//     </div>
//     );
// }

// export default App;


//--------------------------------------------------------------------------------

// import Hello from "./Components/Hello"; 
// import Homie from "./Components/Homie"; //niche homie type kiya suggestion m aya to click and yha import ho gya..

// // import {ash} from "./Components/ash"; //ash.jsx m se ash naam ka function export ho raha hai toh yha import karne ke liye destructure


// function App(){
//     let  a = 100;
//     return (
//     //div ke andar wrap kar diya...now elements have single parent
//     <div> 

//       <Homie/>
//       {/* components ko kaise import karte hai jaise tags ko karte hai */}
//       {/* <Ash /> */}

//       <div></div>
      
//        {/* {<Hello/>}   */}

//       {/* <div>
//       <h1>hello from app bhai</h1>
//       </div> 
//       <h1> hello again</h1> */
//       /* kis chiz ko evaluate karna hai to curly braces{} m */
//       /* <h1> hello again {a}</h1>
//       <h1> hello again {a}</h1> */}
      
//     </div>
//     );
// }

// export default App;

//--------------------------------------------------------------------------------------------------------

import Bhai from "./Components/Bhai";
import Hello from "./Components/Hello"; 
import Homie from "./Components/Homie"; //niche homie type kiya suggestion m aya to click and yha import ho gya..

// import {ash} from "./Components/ash"; //ash.jsx m se ash naam ka function export ho raha hai toh yha import karne ke liye destructure


function App(){
    let  a = 100;
    return (
    //div ke andar wrap kar diya...now elements have single parent
    <div> 

      <Bhai/>
      {/* <Homie/> */}
      {/* components ko kaise import karte hai jaise tags ko karte hai */}
      {/* <Ash /> */}

      <div></div>
      
       {/* {<Hello/>}   */}

      {/* <div>
      <h1>hello from app bhai</h1>
      </div> 
      <h1> hello again</h1> */
      /* kis chiz ko evaluate karna hai to curly braces{} m */
      /* <h1> hello again {a}</h1>
      <h1> hello again {a}</h1> */}
      
    </div>
    );
}

export default App;
>>>>>>> 27e94a0c28c0bc50bb67a64cf7be73c2eb80feb2




