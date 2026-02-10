// import React from 'react'
// import Hookss from './Components/Hookss'
// import CaseTwo from './Components/CaseTwo'
// import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
// import Products from './Components/Products';
// import Home from './Components/Home';

// function App() {

//   // function handleClick1(){
//   //   // window.location.href="/" //kiss jgah ko change karna hai toh. Browser console m...window. window.location...ye url wgr ka access de deta hai
//   //   window.location.href="/" //agr kis url ko change karna chahe..toh window.location.href ya location.href. But isse page refresh ho rha hai...so it's not valid in react cuz not following spa.
//   // }
//   // function handleClick2(){
//   //   window.location.href="/product"
//   // }

//   //ye upar function wala toh nai ho sakta react m toh...useNavigate()..hook which is provided by react-router-dom ata hai picture m..ye hook routing karne kaam ata hai.

//   //pehle galat wala. Ye nai chalega cuz...useNavigate naam ka hook use kar rahe ho..ham ise kahi bhi use nai kar sakte..ham ise router component(in our case BrowserRouter) ke andar hi use kar sakte ho.
//   function handleClick1(){ 
//     let navigate = useNavigate(); //navigate naam ke variable ke andar is useNavigate naam ke hook ko run kar diya...now is navigate m sari power aa gyi.

//     navigate("/"); //function ko run kiya and path de diya. 
    
//   }
//   function handleClick2(){ 
    
//     navigate("/product");
//   }


//   return (
//     <div>
//       {/* <Hookss/> */}
//       {/* <CaseTwo/> */}

//       {/* ek navbar top pe rahe..toh browser router ke upar div bna sakte hai */}
//       <div style={{backgroundColor: "lightgray", color:"black"}}>
//         Navbar hu mai
//         {/* 2 button bna dete hai 1 jo home pe leke jayega and 1 products pe leke jayega */}
//         <button onClick={handleClick1}>Home</button>
//         <button onClick={handleClick2}>Products</button>
//       </div>


//       <BrowserRouter> {/* hamari jo app hai use we wrapped around something called..BrowserRouter. Hamare jitne bhi routes hote hai unka parent wrapper hai. */}
//         <Routes> {/*  ab m jitne bhi routes likhne wala hu use isme wrap kar do.. */}
//           {/* ye konsa route cherega and jo path wo bta dete hai and kon sa element/component dikhana hai wo bta de */}
//           <Route path="/" element={ <Home /> } />  {/* agr path / hai toh konsa element nazar aye. Is element ke andar component likhte hai. */}
//           <Route path="/product" element={ <Products /> } /> {/* path product hai toh kon sa element nazar aye..product nazar aye */}
//         </Routes>
//       </BrowserRouter>



//     </div>
//   )
// }

// export default App


//----------------------------------------------------------------------------
//Right way
//navbar copy kiya and component bna diya
import React from 'react'
import Hookss from './Components/Hookss'
import CaseTwo from './Components/CaseTwo'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import Products from './Components/Products';
import Home from './Components/Home';

function App() {

  // let navigate = useNavigate();
  // function handleClick1(){ 
  //   navigate("/"); 
  // }
  // function handleClick2(){ 
  //   navigate("/product");
  // }

  return (
    <div>
      <BrowserRouter> {/* hamari jo app hai use we wrapped around something called..BrowserRouter. Hamare jitne bhi routes hote hai unka parent wrapper hai. */}
        <Nav/> {/* nav ko likh diya yha..now rerendering hogi but refreshing nai */}
        <Routes> {/*  ab m jitne bhi routes likhne wala hu use isme wrap kar do.. */}
          {/* ye konsa route cherega and jo path wo bta dete hai and kon sa element/component dikhana hai wo bta de */}
          <Route path="/" element={ <Home /> } />  {/* agr path / hai toh konsa element nazar aye. Is element ke andar component likhte hai. */}
          <Route path="/product" element={ <Products /> } /> {/* path product hai toh kon sa element nazar aye..product nazar aye */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}



function Nav(){
  let navigate = useNavigate();
  function handleClick1(){ 
    navigate("/"); 
  }
  function handleClick2(){ 
    navigate("/product");
  }
  
  return(
    <div>
      <div style={{backgroundColor: "lightgray", color:"black"}}>
        Navbar hu mai
        <button onClick={handleClick1}>Home</button>
        <button onClick={handleClick2}>Products</button>
      </div>
    </div>
  )
}


export default App

