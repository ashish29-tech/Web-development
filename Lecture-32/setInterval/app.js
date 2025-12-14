// setTimeout() --> it's a web API...delay provide karne ka kaam karti hai
// setInterval() --> repeat karne ke kaam ata hai after a particular interval of time


//setInterval()... returns an ID. setInterval ko rokne ke liye clear method ka use karenge..
//setInterval accepts a callback function
// let Id = setInterval(function(){
//   console.log("swag se karenfge sabka swagat")
// } , 2000)

setTimeout(function(){
  clearInterval(Id) //clear kar dega interval ko 10 second baad
}, 10000 )


















