//For task 3 we'll make new component Add.jsx

import React, { useState } from 'react'

function Add() { //ye main component jisme array and state hai

  let arr = [ //array of objects bna liya...har ek object ke paas 2 chize hoti hai...
      {titl: "go to place-1", desc: "place-1 is amazing"}, 
      {titl:"go to place-2", desc:"place-2 is amazing"}, 
      {titl:"go to place-3", desc:"place-3 is amazing"}
    ];
  //array ki vakue kam-jyada ho sakti hai koi input add/subtract...isliye useState()
   let [ arrays, setArrays] = useState(arr) //arr initial value
  
  return <div>
    {/* array..jisko change karna hai and setArray jiski help se change karna hai */}
    <AddTodo array={arrays} setArray={setArrays}/> {/* niche jo add to do component bnaya hai use  call kar liya...array ke sath..isliye arrays bhej diya. Ye array joki state hai ise direct change nai kar sakte..it's a state...setArray bhi chaiye hoga toh setArray. 1st jisko change karna hai..2nd jiski madad se change karna hai. Function paas kar diya*/}
    <Todo todos={arrays}/> {/*Todo ko call kar liya...array ke sath..isliye arrays bhej diya  */}
    <Todo todos={arrays}/>
  </div>;
}

//make new component waith a name..AddTodo
//'jabh bh
function AddTodo({array, setArray}){ //yha destructure kar denge....key ke basis pe

  //input ki value change bhi ho sakti hai toh useState
  let [inp1, setInp1] = useState(""); //input ki initial value empty string
  let [inp2, setInp2] = useState("")


  function handleAddTodo(){ //yha function ko deifne kar diya. Input ke upar kon sa event lagta hai..ham input ko control karna chah rahe hai...iske changes ko track nai kar sakte abhi isliye control karna hai
    //now we want jaise hi button dabe ye handleAddTodo function click ho..now ye function kya kare...array ko badal de..toh we have setArray naam ka function hai
    setArray([...array, {titl: inp1, desc: inp2 }]) //array setArray hai..ise call kar diya...setArray ka kaam hai...purana arrays bhi display karo and new input wala bhi lekar aao...toh isme spread operator use karege..isme purana array chahiye...and object chaiye..and isme title hoga joki input1 lega..dusri value hogi description woh inp2 lega..
  } 
  //change input 1 and change input 2 ke bare m likhna hai...toh function bna lenge
  //input ko yha e se le liya
    function changeInp1(e){ //niche onChange chalne se changeInp1 chal rha hai..
      // console.log(e.target.value);
      setInp1(e.target.value); //change karne ke liye...setInp1 chahiye..usse change karenge jo uske andar ki value hogi..usko e se le lenge...like hota hai na e.target
      
    } 
    //waise hi isme kar lenge...sey karna hai toh setInp2 
    function changeInp2(e){ //input ke andar value hogi use e se liye jaise e.target.value hota hai waise hi
      setInp2(e.target.value);
    }
  
  return(
    <div>
      {/* <h1>add todo</h1> */}
      {/* return karega 2 input..1 title wala and 1 description wala */}
      {/* input control ke liye...jo event trigger ho raha us event ko mention karte hai. Input ke andar value bhi dikhani hoti hai...2 input cuz 1 m title ayega and 1 m description...and ye input change bhi ho sakte hai...isliye useState karenge */}
      {/* hame input ke andar value bhi toh dikhani hoti hai...1 input m title and 1 m description ayega and ye input vary karega isliye useState */}
      {/* jab bhi kuch type kar rahe toh onChange chal rha hai...and onChange chalne se cahngeInp1 chal rha hai...yoh inp1 ko change karenge and change karne ke liye setInp1 chahiye */}
      <input onChange={changeInp1} type="text"  value={inp1}/> {/* ham is input ko control karna chahte hai..abhi ye kuch bhi kare ham iske changes ko track nai kar sakte*/}
      <input onChange={changeInp2} type="text"  value={inp2}/>

      <button onClick={handleAddTodo}>Add Todo</button> {/* jab bhi button pe click ho toh onClick event chalega...handleAddTodo */}
      
    </div>
  )
}

  //make one more component Todo
  function Todo({todos}){ //work of Todo is to display pura ka pura array..so destructre kar lenge..key ke naam se destructure karte hai
    return (
      <div>
        {/* <h1>todo</h1> */}
        {/* todo array hai so ispe map karenge */}
        {todos.map((item, index)=>{ //map accepts a call back function...and returns a new array...
            return(
              // every child should have a unique key prop
              <div key={index}>
                <h1>TItle: {item.titl}</h1>
                <h1>Desc: {item.desc}</h1>
              </div>
          );
        })}
      </div>
    );
  }

export default Add;



