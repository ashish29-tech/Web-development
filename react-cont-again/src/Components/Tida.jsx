import React, {useState} from 'react';

function Tida() {
  return (
    <div>
    {/* head and badahead component ko call kar liya...in dono m args/props bhej sakte hai*/}
    <Head task="do roll"/>
    <Head task="do siff"/>
    <Head task="do bark"/>
    <BadaHead task="do jump" />
    </div>
  )
}

// function Mav({task}){ //yha catch kar liya...destructure kar liya

// }



// function Head({task}){ //yha catch kar liya...destructure kar liya
function Head(props){ //another way
  return <h1>Title: {props.task} </h1>
}

function BadaHead({task}){ //destructure kar liya task
  //jab bhi button ki value pe click hoga toh ham is task ki value badal de...value badlegi toh useState lagega
  let [t, setT] = useState(task); //useState ki wahi value hogi jo task ke andar hai...toh initial value "do jump" ho gayi...and useState returns an array.
  function handleClick(){ //ye handleClick evenet ka access bakio ke paas na ho isliye yha...ye onClick ka paas hona chahiye sirf...
    //t ko change kon karega ? setT..
    setT(Math.floor(Math.random()*10)); //random 
  }

  return ( //1 component apne andar dusre component ko call kar sakta hai ? yes
    <>
      <Head task={t} />  {/* head, which is a component ko call kiya. upar se task ka access toh hai hi..variable ka naam t se hai toh t bhej diya....*/}
      <button onClick={handleClick}>Click</button>
      
    </>
)

}

export default Tida



//ye isko karne ka tarika ek aur hai jise we call...memoization
//memoization is not use memo.
//memoization means...apne changes ko yaad rakhna
//memoization works by tracking the props...if the props have changed...toh rerendering hogi. 
//if props are not changed...then no rerendering
//