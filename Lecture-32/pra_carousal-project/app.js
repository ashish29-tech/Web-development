//Task:
//4-5 images from unsplash
//after every 3s image changes
//5th image ke baad 1st show karna
//After 30s baad close everything


// let id = setInterval(function(){
//   https://images.unsplash.com/photo-1764866915273-ea87cf57526d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8
// }, 3000)

// setTimeout(function(){
//  clearInterval(id)
// } ,30000)


//Approach
//html m we have image naam ka element...and hame uska src(source) baar-baar badalna hai
//so we need multiple source ke link
//first we'll select image


let imgEL = document.querySelector("img")

//multiple elements hone chahiye...so we'll create an array
let arr = [ //array ke andar kai sare strings
  "https://images.unsplash.com/photo-1764866915273-ea87cf57526d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1763489471289-175a87ce5b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763935322642-a58dc993f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763730732397-1e78f5abac13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763730732397-1e78f5abac13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
]

let num = 0; //num ko initial value dedi num

//kaam baar-baar karna hai...toh setInterval
//elelment ka src change karna hai..and src kya hota hai...attribute hi toh change karna hai. And attribute change karne ke liye..getAttribute and setAttribute
let stopId = setInterval(function(){ //id return karta hai toh var m store kar liya
  imgEL.setAttribute('src', arr[num]); //imgEl pe setAttribute...and it accepts 2 args...src ko set karna chahte hai...kisse ? array ke alag-alag index se...ek variable hai suppose num. Upar num ko 0 de diya..toh mtlb 1st pic(arr[0]) pe hai
  num = (num + 1) % arr.length; //ye badega toh 5 ke baad 6 ho jayega isliye...modulus kar denge array ki length se. modulus remainder dega
}, 3000)


setTimeout(function(){
  clearInterval(stopId);
}, 30000)






