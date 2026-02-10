import React from 'react'
import Todos from './Components/Todos'
import Add from './Components/Add'
import WrapperComponent, { ChildComponent, ChildComponent2 } from './Components/Wrapper'
import ActualWrapper, { ChotaWrapper } from './Components/ActualWrapper'

function App() {
  return (
    <React.Fragment>
      {/* <Todos/> */}
     {/* <Add/> */}
     {/* <Add/> */}

    {/* parent component m child component bhej diya...compo is a prop name..ab ye as a object ja rha hoga wrapper ke andar */}
    {/* child component ko yha lana hai toh wrapper.jsx m se export kar denge...and yha require kar liya upar... */}
    {/* ab ye childComponent as an object ja rha hoga...as a props ja rha hoga...wrapper ke andar... */}
     {/* <WrapperComponent compo={ <ChildComponent/> } hello={ <ChildComponent2/> }/> */}


      {/* better approach for wrapping */}
      {/* Actual wrapper ke andar chota wrapper..and chota wrapper ke andar kuch content */}
     <ActualWrapper>
      {/* actual wrapper ke andar chota wrapper */}
        <ChotaWrapper>
          {/* chote wrapper ke andar bhi content hai */}
            hello ji mai vadiya tussi dasso {/* chote wrapper ke liye ye children hai */}
            <h1>hello from h1</h1>
        </ChotaWrapper>
     </ActualWrapper>



    </React.Fragment>
  )
}

export default App