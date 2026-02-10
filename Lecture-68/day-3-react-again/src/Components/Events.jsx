import React from 'react'

function Events() {

  //function react m return ke upar wale hisse m hote hai
  function handleClick(){
    // return karna kaam hota hai function ka but nai karte toh by default undefined
    console.log("hello from ashish sirji")
  }

  function deletee(id) { //niche 101 id bheja toh yha catch kar liya
    console.log(id, "deleted")
  }


  return (
    // div ke andar button bna liya
    <div>
      {/* handleClick ko js m likhte toh run karna padta... handleClick()...but react m run karne ki jarurat nai padti...sirf deine */}
      <button onClick={handleClick}>Click me!!</button> { /* jab kisi function ko call karna hai...and args nai bhejna hai..toh this way */}
      {/* suppose todo-list bnai hai...dekete button pe hit kar rahe hai */}
      {/* function ko call karte waqt koi args paas karna ho sakta hai...toh us time pe diirect function nai likhte..ham yha arrow function ko call karte hai.. */}
      { /* jab kisi function ko call karna hai...and args bhejna hai..toh arrow function way na ki normal function...suppo todo wale button pe click karna hai toh delete karna hai toh id toh deni padf=egi*/}
      <button onClick={()=> deletee(101) }>Delete</button> {/*arrow function ko call kiya...and uske andar us function ko call kiya....suppose id thi 101 */}
      
    </div>
  )
}

export default Events