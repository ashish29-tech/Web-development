//---------------------------------------
//2. Fethch()........it's a web API
//Most of the time we'll be using fetch()...and after this...axio() ka use hota hai.
// setTimeout, setInterval.....are webAPI...similarly fetch is also a webAPI...that is browser's superpower. 
//Fetch used to get the data. Fetch m by default get request hoti hai....agr kuch nai karte to mtlb data ko get karna hai. Fetch returns a promise...promise ya to resolve() hota hai ya reject() hota hai.

//Fetch. Most widely used technique for API calling.
//It's a web API. Which returns a promise.
//using fetch..Do we get the entire data? No. Fetch only returns meta(thora sa data) data.
//Data travels in the form of small packets...In short fetch ko thora sa data milta hai to ise lagta hai pura data mil gya...and ye de(resolve kar) deta hai jo bhi meta(thora) data hota hai. Rest of the data lost ho jata hai.
fetch('https://api.tvmaze.com/search/shows?q=girls') //promise return karti hai...uspe ham
.then(function(response){ // .then, .catch  ki chaining lgate hai. Ye response accept karega.
  // console.log(response , 'ash') //response ke aage 'ash' likh diya taki pta chal jaye response hai ya nai. Ye complete data nai deta.
  //Thsi json also returns a promise. Promise return kara rahe..toh .then ki chaining kar sakte
  return response.json() //complete data nai deta isliye json...json parses(mtlb jo bhi data hoga wo json format m convert ho jayega) the data and returns a promise(returns a promise means data ke sare packets ka intzaar)...ye resolve ya reject karega and usko return kar dega.
})
.then(function(data){ //.then ki chaining. Upar se jo bhi(data) return karega json use catch kar liya....Data aya
  console.log(data); //jo data aya use console
})

.catch(function(error){ //suppose error aya..so error accept karega
  console.log(error)
})


//json promise return karta hai(wait karta hai pura data ane ka) and parses the data.



