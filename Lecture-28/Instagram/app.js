//Jahaan time lagta hai → JS me function banana padta hai
// Taaki usko async bana sako, callback de sako, promise de sako.
// Jab bhi kaam steps me ho + time lagta ho + sequence me chalna ho → functions + callbacks zaroor banenge.


//setTimeout()
//isme chahe 0 second delay ho ya 3...ultimately wo browser ke andar chala jata hai.
//Uske baad timer ke sath register/store karta hai
//phir callback queue m jata hai
//uske baad event loop use check kar rha hota hai
//uske baad call stack m jata hai


//Callback hell


//Wrong or Right ?

//1st step karenge...and delay chahiye toh setTimeout
// function step1(){
//   setTimeout(function(){ //delay dene ke liye setTimeout webAPI. setTimeout m 2 parameter..pehle hota hai callback fn and 2nd is delay in milisecond
//      console.log('selecting the image from gallery');
//      return 'selected image'//step m image bhi to jayegi...so that us photo pe filter lga sake
//   }, 4000)
// }

// let image = step1(); //call kar liya step1. kuch returned value mil rahi hai..use store kar liya 
// console.log(image); //console m..pehle undefined ayega phir 4 second baad 'selecting the image from gallery'
// //undefined kyo ? function chala...settimeout chala to ye timer/browser m register kar leta hai...and function toh 0 second se time lena start hua and browser m store ho gya.
// //Toh is fn se kya return hua ? Nothing. And when nothing is returned from a function toh by default undefined

// function step1(){
//   setTimeout(function(){
//     console.log('Selecting the imnage from gallery');
//     return 'selected image'
//   },4000)
// }

// let image = step1()
// console.log(image)

//--------------------------------
//WRONG WAY
//setTimeout asynchronous hai → isliye return function ke bahar nahi jaata.
// Asynchronous results sirf callback / promises / async-await se hi milte hain.

function step1(){
  console.log('selecting the image from gallery');
  setTimeout(function(){ //delay dene ke liye setTimeout webAPI. setTimeout m 2 parameter..pehle hota hai callback fn and 2nd is delay in milisecond  
     return 'selected image'//step m image bhi to jayegi...so that us photo pe filter lga sake
  }, 4000)
}

// //step2 m image aa gyi hai
// function step2(image){ //yha image catch kar li
//   console.log(`applying filter to the ${image} plz wait`);
//   setTimeout(function(){ //setTimeout m 1st callback function and 2nd is delay
//     return 'filter applied'
//   }, 2000)
// }
// let image = step1();
// console.log(image);
// let filteredImage = step2(image); //step2 ke sath image ko call kar liya
// console.log(filteredImage);

// function step2(image){ //step2 m image yha catch kar li
//   console.log(`applying filter to the ${image} please wait`)
//   setTimeout(function(){
//     return 'filter applied'
//   }, 2000)
// }

// let image = step1()
// console.log(image)
// // step2(image)// step2 ko call kar liya image ke sath. And since step2 return kar rha hai toh we have stored in a var.
// let filterdImage = step2(image)
// console.log(filterdImage)

//----------------------------------------------------
//Right Way
//setTimeout delay chalta hai to step2 m hi step1 ko call kar dete hai taki step 1 chal jaye tabhi step2 chale.
//Aise hi step 2 m step 3 ko call kar denge and so on...

//step1 call ho jaye uske baad step2 call karna hai
// function step1(fn){ //
//   console.log('image is being selected from the gallery...');
//   setTimeout(function(){
//     // return 'image selected' //return karne ke bajay step2 ko call kar lete hai. But isko call karne ke liye 
//     console.log('Image is selected now');
//     fn('selected image'); //step2 ko call karna hai to...argument(upar) m call karna hoga...uska naam fn rakh diya. call karte waqt btayenge ki hamare paas selected image hai...means calling with an argument selected
//   } , 4000)
// }
// function step2(image, fn){ //maanlete hai step2 filter function...niche step2(image)..yhape jo image bhej rahe hai use catch kar rahe hai
//       console.log(`applying filter to the ${image}`);
//       setTimeout (function(){
//         console.log(`filter applied to the ${image}`);
//         fn('filtered image') //upar step2 ke fn m jo diya hai call kiya
//       } , 2000)
// }
// function step3(filter, fn){
//   console.log(`adding caption to the ${filter}`);
//   setTimeout (function(){
//     console.log('caption done');
//     fn('image with caption');//step4 ka fn
//   }, 3000)
// }
// function step4(caption){ //niche jo caption diya wo yha catch kar liya
//   console.log(`uploading your final ${caption}`);
//   setTimeout(function(){ //ab jarurrat nahi hai isliye argument m kuch catch nai kiya
//     console.log('Image uploaded successfully');
//   }, 5000)
// }

//-------------------------------------------------------------------
// Tum ek asynchronous flow bana rahe ho jisme:
// Step1 = image select
// Step2 = filter lagana
// Aur kyunki Step1 asynchronous hai (setTimeout),
// isliye tum callback function pass kar rahe ho Step1 ko.

// function step1(fn){ //HOF hai yha cuz accepting a function as an argument. step2 ka function hona chahiye step1 m wrna use kabhi call nahi kar payenge...
//   console.log("please wait image is being slelcted...")
//   setTimeout(function(){
//     // return 'image selected'
//     fn('image selected');  //fn which is step2 here...we called it here with argument
//   },4000)
// }

// function step2(image){ //niche ste2 ko call karte waqt argument bheja hai....toh yha catch kar liya
//   console.log(`applying filter to the ${image}`)
// }

// // console.log(step1()) //undefined cuz... return karne se pehle hi print ho rahi hai...toh let's remove console statement
// //Ye function step1 ke andar execute hota hai, but fir bhi apne surrounding variables (yaha image) ko remember karta hai. So yes — closure exist kar raha hai
// step1(function(image){ //upar argument m hai..jha function bnaya step1 ka... toh yha parameter m bhejna padega...
//   step2(image); //step2 m..step2 ko call kiya and step2 m image ka access toh hoga hi toh image ke sath call kar diya
// });



function steps1(fn){
  console.log("selecting images from the gallery")
  setTimeout(function(){ //setTImeout accepts 2 things... 1st is cb fn and 2nd is delay.
    console.log('image is selected now')
    fn('selected image') //step2 ka function...cuz we wanted jab tak step1 na khtm ho tab tak step2 call nahi hoga. But yha fn call ke liye is function m hona bhi toh chahiye...toh upar parameter m dal denge..
  }, 3000)
}

function step2(image, fn){ //
  console.log(`applying filter to the ${image}`)
  setTimeout(function(){
    console.log(`filter applied to the ${image}`)
    fn('filtered image') //step3 ka function
  }, 2000)
}

function step3(filter, fn){
  console.log(`ading caption to the image ${filter}`)
  setTimeout(function(){
    console.log('Caption done')
    fn('image with caption')
  },3000)
}

function step4(caption){
  console.log(`uploading your final ${caption}`)
  setTimeout(function(){
    console.log('image uploaded successfully')
  } , 5000)
}

steps1(function (image){ //yha as an argument bhi toh bhej sakte hai. Upar fn call karte waqt we are sending with argument...toh us argument ko yha catch kar liya with name as an image.
  // console.log(image)
  //step1 ke andar step2 ko call kiya
  step2(image, function(filter){
    // console.log(filter)
    step3(filter, function(caption){
      // console.log(caption)
      step4(caption)
    });
  }) //step2 ko bhi image naam ke variable ke sath call kar sakte hai..taki use 'image selected' mil jaye and then upar step2 function m paramater m chale jaye.
})


// //code horizontally grow kar rha hai -> pyramid of DOOM. Aka callback hell.
// //pros: orderwise chalenge...step1..step2. Won't skip any step. Ek dusre pe dependent hai.
// //cons: code grows horizpotally rather than vertical, errors ayenge becoz of dependency mtlb agr chala hi nai step1 to.
// //overcome kon karta hai cons ko ? PROMISE
// // console.log(step1()); //Undefined bhi aa rha hai mtlb return karne se pehle console ho rha hai isliye
// step1(function(image){ //fn function ko call kar rahe hai with argument...mtlb step1 ko call kar rahe hai with argument...isliye argument(image) ko catch kar liya parameter m
//   step2(image, function(filter){ //ye function step2 ke andar ka fn...and yha filter ke naam se catch kar liya
//     // console.log(filter);
//     step3(filter,function(caption){
//       // console.log(caption);
//       step4(caption)
      
//     } ); //step3 ko filter ke sath call kiya...aur sath m..function step3 ke parameter m jo fn hai uske equal hai ye function
//   }); //chahte hai isme hi step2 call ho....step2 call mtlb filter call ho...step2 ko bhi image naam ke var ke sath call kar sakte hai..taki use selected image mil jaye
//   // console.log(image);
  
// }); //console ka use nai kar sakte mtlb




