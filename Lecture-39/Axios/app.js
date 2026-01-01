
//Fetch ke baad important Axios hai
//Axios is a third party library/code...jise ham bs use karenge
//https://axios-http.com/ 


//Just like fetch..axios also returns a promise. And waits for the entire data at once....means ek hi baar .then lagana padega baar-baar jarurat nai padegi. 

axios.get('https://api.tvmaze.com/search/shows?q=girls') // axios likha and get karna hai to get likha
.then(function(response){ //promise return karta hai isliye... .then and .catch
  console.log(response);
}) 
.catch(function(error){
  console.log(error);
})


