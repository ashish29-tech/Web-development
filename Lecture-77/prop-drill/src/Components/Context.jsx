// isme se kuch bhi nai chahiye hoga toh ye upar function hi hta denge.
import React, { createContext } from 'react'


//isme se kuch bhi nai chahiye hoga toh ye upar function hi hta denge.
// function Context() {
//   return (
//     <div>Context</div>
//   )
// }
// export default Context

//hame create karna hai toh createContest method...and click karege toh upar destrucutre ho jata hai.
export const CountContext = createContext(0); //value 0 kar di..and CountContext naam se use karna padega...use ke liye export karna padta hai.
//jab ye createContext method run karte hai toh...it returns us a Provider.
//Provider..hame jis bhi component ke andr istemal karna hai...for ex: propdrilling ke andar is createContext ko use karna hai...us component ko hame wrap karna padta hai






