
//1. XML HTTP Request
//This is the older way. We don't use it nowadays. But jo bhi chize ho rahi hai unka BTS ye chal rha hota hai. So it's important to know.
//Ex: we need to send a request to some remote server..
//XMLhttprequest is a constructor function. And cfunc ke aage new keyword lagta hai. And function hai toh run karna padega.

// XML HTTP Request...it's a cf.

 let req =  new XMLHttpRequest() //It'll give us a new object. Now we have request naam ka object...

//  //Ab request open karni hai. API(kisi website) se data mangwana hai toh getMethod
// //  https://api.tvmaze.com/search/shows?q=girls

console.log(req); //we'll see massive object in browser console. Isme kai method dikhenge. Isme ek open method dikhega.
// // request open karni hai..means connection bnana

//Hover over open word and we'll see 1st method puch rha hai...and 2nd arg is url..ki kon si api se data chahiye
req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls') //request open kiya..get method ki help se is wale API ko call karenge... Abhi call nai kiya...abhi to connection open kiya
//ek method hota hai..req.send()
req.send(); // req ko actually m bhejna. Open live server and check wha response m data dikhega. And now when we check above console method in browser console..we'll see response mil rha hai pehle empty tha.

//error bhi aa sakta hai...
req.onerror = function(){ //onerror ho tab kya karna hai...tab function bana dena hai

}

req.onload = function(response){
  // console.log(response)
  console.log(this)
  console.log(this.response)
}
//onload ho tab bhi ek function bna denge. onload means jab sab successful ho gya..
// req.onload = function(response){ //error nai aya to koi na koi resonse ayega...us response ko dekhne ke liye
//   console.log(this); //dekhne ke liye this
//   // console.log(response);
//   console.log(this.response); //data dikhega...now we can manipulate it with the help of DOM...jha bhi karna hai manipulate.
// } 



