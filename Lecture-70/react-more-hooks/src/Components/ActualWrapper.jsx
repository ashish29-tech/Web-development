import React from 'react'

//we want ki actual wrapper ke andar chota wrapper aa jaye...and chote wrapper ke andar bhi kuch content aa jaye...jo kisi component ka part nai hai
function ActualWrapper({children}) { //destructure kar liya with the fixed name... actual wrapper m use destructure kar liya with the value of children
  return (
    <div style={{border: "2px solid red", backgroundColor: "yellow" }}>
      {/* and yha dikhana hota toh dikha dete */}
      {children}
    </div>
  )
}

export function ChotaWrapper({children}){ //yha bhi destructure kar liya
  return (
    <div>
      <h1>hello h1</h1>
      <h2>hello h2</h2>
      {children}
    </div>
  )
}

export default ActualWrapper


