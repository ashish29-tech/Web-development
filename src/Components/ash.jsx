// import React from 'react'

// //small letter se component bnaya and yha function name bhi small rakha
// function ash() {
//   return (
//     <div>ash bhai kaisa hai</div>
//   )
// }

// export default ash //upar naam small rakha toh yha bhu small rakhna padega...and yha small toh import bhu small
//but import ke time App.jsx m...capital letter kar de toh....chal jayega...sara game hi import ke time letter ka hai...

//------------------------------------------------------------------

import React from 'react'

//named export kiya yha...toh App.jsx m destructure kar ke value ko uthana padta hai...kisi aur name whether capital or small letter ho nai utha sakte...
//so conclusion is..defualt export ko kisi bhi naam se utha lo....but named export ko usi ke naam se 
// export function ash() {

function ash() {
  return (
    <div>ash bhai kaisa hai</div>
  )
}

export default ash;
