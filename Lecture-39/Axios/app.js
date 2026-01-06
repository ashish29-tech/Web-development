
//Fetch ke baad important Axios hai
//Axios is a third party library/code...jise ham bs use karenge. 
//Axios is not built into JavaScript. It is not part of the browser or Node.js core. You must install it before using it. npm install axios

//https://axios-http.com/  yha pe get started and script tag copy kar lenge and index.html m paste kar denge

// What Axios is used for
// Axios is a Promise-based HTTP client used to:
// Send HTTP requests (GET, POST, PUT, DELETE, etc.)
// Communicate with APIs
// Handle responses and errors easily


//Just like fetch..axios also returns a promise. And waits for the entire data at once....means ek hi baar .then lagana padega baar-baar jarurat nai padegi. 
//just like a fetch...axios also returns a promise...
//axios waits for the entire data at once... sara data ke ek sath ane ka wait karti hai phir promise return karti hai...isliye sirf ek baar .then na ki baar-baar...

axios.get('https://api.tvmaze.com/search/shows?q=girls') // axios likha and data get karna hai to get likha and url copy-paste
//promise return karta hai toh .then.. .catch()
.then(function(response){ //promise return karta hai isliye... .then and .catch
  console.log(response);
}) 
.catch(function(error){
  console.log(error);
})


//Axios is a third party library..and we are using cdn..and it will take some nwtwork calls...and us third party ke code ko use karne ke liye thra time lagta hai..that's why fetch is widely used.
// axios m dependencies badh jati hai...


