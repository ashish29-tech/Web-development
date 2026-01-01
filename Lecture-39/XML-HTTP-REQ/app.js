
//1. XML HTTP Request
//This is the older way. We don't use it nowadays. But jo bhi chize ho rahi hai unka BTS ye chal rha hota hai. So it's important to know.
//Ex: we need to send a request to some remote server..
// XML HTTP Request...it's a 

//  let req =  new XMLHttpRequest() //now we have request naam ka object

//  //Ab request open karni hai. API(kisi website) se data mangwana hai to getMethod
// //  https://api.tvmaze.com/search/shows?q=girls

// console.log(req);
// // request open karni hai..means connection bnana
// req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls') //get method ki help se ye wale API ko open kar do. Abhi call nai kiya...abhi to connection open kiya
// req.send(); // req ko actually m bhejna. Open live server and check wha response m data dikhega

// // req.onerror = function(){ //onerror ho tab kya karna hai...tab function bana dena hai

// // }

// req.onload = function(response){ //error nai aya to koi na koi resonse ayega...us response ko dekhne ke liye
//   console.log(this);
//   // console.log(response);
//   console.log(this.response);
// } 









