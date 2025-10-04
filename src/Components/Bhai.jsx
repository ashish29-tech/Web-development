import React from 'react'

function Bhai() {


  let arr = [10, 20, "ash" , 30, 40]; //array bna liya
  let obj = {a:10}; //object bna liya

  //what if array of objects de diya toh
  let arr2 = [{a:10}, {a:200, b:400}, {a:300}];

  return (
    <div>
      {/* <h1>{arr}</h1> */}
      {/* Objects are not valid as a React child (found: object with keys {a}). Means...directly object ko show nai kar sakte...karna hai toh object . property */}
      {/* <h1>{obj}</h1>   */}
      {/* <h1>{obj.a}</h1> */}

      {/* ye array of objects nai show hoga cuz objects are not react child */}
      {/* {arr2} */}

      {/* dikhana hi hai toh JSON.stringify */}
      {/* <h1>{JSON.stringify(obj)}</h1> */}

    {/* par mujhe value chahiye...pura array nai chahiye...toh loop lga denge...toh function ke neeche(lower part) m loop
    lga sakte hai ? No...bcoz niche expression ata hai...toh map lga sakte hai...map is a array method...array ka naam arr2 */}
    { //jis chiz ko ecaluate karna hota hai use swarg ke darwaze ke andar lana hota hai...
      arr2.map((item, index)=>{ //map mrthod accepts a call back function isme 1st args hota hai item and 2nd args index
        // return <h1>{item.a}</h1>;//map ka nature hota hai to return soemthing. Item pure object ko point kar rha hai...
        //Go to object.vlaues mdn.... ye sari values ko ikkhata kar ke uska array bna deta hai
        return Object.values(item).map((itm, indx)=>{ //object ka naam item hai..ye ek array ban gya ispe map lga sakte hai...map accepts a callback function...1st hota hai item and 2nd hota hai index
          return <h1>{itm}</h1>
        }); 

    })
    }
    


    </div>
    
  )
}

export default Bhai










