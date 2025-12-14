// // setTimeout() --> it's a web API...delay provide karne ka kaam karti hai
// // setInterval() --> repeat karne ke kaam ata hai after a particular interval of time



// //setInterval()... returns an ID. setInterval ko rokne ke liye clear method ka use karenge..
// //setInterval accepts a callback function
// // let Id = setInterval(function(){
// //   console.log("swag se karenge sabka swagat")
// // } , 2000)

// setTimeout(function(){
//   clearInterval(Id) //clear kar dega interval ko 10 second baad
// }, 10000 )


//------------------------------------------------------------
// Both setTimeout and setInterval accepts a cb function. 

//setInterval khud ko repeat karta rehta hai...infinite times. which is not a good thing.
//setInterval returns an id...and isko rokne ke liye method hota hai... clear interval. And ye id accept karta hai jo setInterval return karta hai.

// setInterval(function(){
//   // console.log("M ashish ranjan ishwar ki shapath leta hu...")
// }, 2000)


//id return karta hai
let id = setInterval(function(){
  console.log("M ashish ranjan ishwar ki shapath leta hu...")
}, 2000)

setTimeout(function(){ //ye setTimeout function clear kar dega...10 second ke delay ke baad
  clearInterval(id) //clearInterval chla diya id pe...
},10000)










