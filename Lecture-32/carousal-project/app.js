
//Take images from unsplash

//Approach
//1. We have img naam ka element in HTML and we have to change source
//again and again...for that we should be having
//multiple source of link
//2. select img in app.js

let imgEl = document.querySelector("img") // element select kiya

//4-5 img/elements hone wale hai to array create kar lenge
 let arr = [ // array of kai sare strings. Alag-alag index
   "https://plus.unsplash.com/premium_photo-1754254828698-12c96f89d7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
   "https://plus.unsplash.com/premium_photo-1754337885588-02a3ee7d1e51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
   "https://images.unsplash.com/photo-1754318099560-9d89d608d331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
   "https://plus.unsplash.com/premium_photo-1754079457578-867ed85dad60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
   "https://plus.unsplash.com/premium_photo-1720132000141-a405eff592e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
 ]

 let num = 0; //Array ke alag-alag index pe kaam karna hai to initially 0

//3. baar-2 ek kaam karna hai...source change karna hai
//change the attribute src
let stopId = setInterval(function(){ //baar-2 karna hai. Ye id return karega isliye var m dal diya
  imgEl.setAttribute("src", arr[num]); //Array ke alag-alag index...ek var num. 
  // num++; //1 value badhani hai to ++. Isse 1-5 ke baad 6 ho jayega...but hame 5 ke baad 1 chahiye to hame modulus ka use karna hoga..modulus gives us the remainder
  num = (num + 1) % arr.length; //num ko 1 se bdha denge par array ki puri length se modulus kar denge..cuz length to kuch bhi ho sakti hai
} , 3000)

setTimeout(function(){
  clearInterval(stopId); //clearInterval stopId ko
} , 30000)










