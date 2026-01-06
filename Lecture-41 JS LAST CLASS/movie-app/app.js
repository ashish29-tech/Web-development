
//API from tvmaze.com 
// https://api.tvmaze.com/search/shows?q=girls ...........api ke last m qustion mark hai which is query...query girls hai...but kabhi to batman/superman/ironman chahiye hoga....so dyanamic bnana padega

//We'll be using axios..which is 3rd party api
// we have to visit... https://axios-http.com/

//jitni bhi movie hongi use id list ma store karenge...us div ka kaam ayega


//sbse pehle button and input ko select kar lete hai

// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let list = document.querySelector('#list');

// //input m likha and search pe click kiya to click event trigger hoga
// btn.addEventListener('click' , function(){ //button pe addEventListener...1st argument kya hua hai...2nd argument kya kaam karna hai hone pe
//   let searchText = input.value; //input ke andar se sara text chahiye..val se aa jayeaga and ise ek varible m hold kar liya
//   //is searchText ko API ki calling ke andar bhejna hai..isliye API call ke liye niche function bna diya
//   fetchData(searchText) //niche diye gaye function ko call kar liya...jo value miiegi use variable m store kar liya
//   input.value = ""; //last m button dabane ke baad sara input khali ho jaye..isliye empty string ke barabar kar diya
// })


// //API ko call karne ke liye ek function bna rahe hai fetchData
// function fetchData(searchText){ //yha upar ke searchText ko accept kar liya
//   //fetch. It returns a promise. Toh uspe ham .then kar sakte hai. .then accepts a callback function. Fetch hame pura data return nai karta...metadata return karta hai.
//   fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//   .then(function(res){ //res dena hai
//     // console.log(res);
//     return res.json(); //response ko json de diya...aur use return kara diya. so that ispe firse promise lga sake...
//   })
//   .then(function(data){ //firse promise lga diya. json method also returns a promise....jo return hua use data ka naam de diya.
//     // console.log(data);
//     manipulateDom(data); //sara array data naam se hai...now we can call with data argument
//   })


//   //axios
//   // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`) //girls nai search karna...searchText ke corresponding search ho...and is searchText ko chalane ke liye ``(backticks). And ye Axios returns a promise... .then() and .catch()
//   // .then(function(response){ //.then accepts a callback function....response/data milega
//   //   console.log(response.data) //iske andar bhi data hai...isliye .data lagana padega. Isse jo array aya uspe iterate karenge and DOM ko manipulate karenge
//   //   manipulateDom(response.data);//manipulate dom function call...manipulate karte hai dom ko...response.data ke sath array to hai hi
//   // })
//   // .catch() //catch ki jarurat nai hai cuz resolve to hoga hi
// }

// function manipulateDom(allthedata){ //manipulate dom function bna lete hai...jo array mil raha tha wo..allthedata variable m bhej diya

//   //ek movie search hone baad dusri kare toh purani wali hat jaye...to remove the already present movies
//   //ek method hota hai first child...jisse pta chal jata hai sbse pehla bachha
//   //agr ek bhi bachha hai to use delete karna hai
//   while(list.firstChild){
//     list.firstChild.remove();  // list ke andar first child hai to remove kartejaye
//   }


//   for(let data of allthedata){ //DOM m manipulate karna hai to...for loop
//     let figure = document.createElement('figure'); //figure create karni hai..isliye createElement..and store in variable
//     //figure 1 HTML element hai. figure ke andar HTML element cher/add kar sakte hai. img m src hota hai. and "god" movie search karenge type kar ke click kar ke..and console browser m...wha show m img...img m medium(medium se size shi rehta hai). Then name of the movie
//     figure.innerHTML = ` 
//       <img src=${data.show.image.medium} /> 
//       <h2> Name: ${data.show.name} </h2> 
//       <h5> Language: ${data.show.language} </h5>
//     ` 
//     list.appendChild(figure) //jab figure ban jaye to list item m dal denge...figure ko append child

//   }
// }


//--------------------------------------------------------------------------------------
//Practice

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list'); //id list di thi isliye

//input m type kar ke search button pe click kare toh event trigger hoga. Kon sa event ? click event
btn.addEventListener('click', function(){ //button pe addEventListener chala hai..1st is kya hua hai and 2nd is kya kaam karna hai
  //input ke andar se sara text chahiye
  let searchText = input.value  //input se jo value ayi use searchText m rakh diya
  //ab is searchtext ko apni api ke sath add karana hai...api ki calling ke andar bhejna hai
  //niche jo function bnaya hai...use yha call kr liya searchText ke sath
  let data = fetchData(searchText) //is searchText ko yha paas kiya and niche accept kar lenge and store kar lenge data variable m..
  //and jab search ho jaye toh inputbox khali ho jaye
  input.value = ""; //khali ke liye empty string ke barabar assign kar do.
})

//api ko call karne ke liye ek function bna rahe hai
function fetchData(searchText){ //is function ko upar call kar lenge..
  //fetch tarike se
  fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`) //api ka link dal diya
  //fetch ek promise return karta hai
  .then(function(res){ //.then ek cb function accept karta hai. Jo bhi dena hai wo res m..
    console.log(res); //par koi data nahi ayega..sirf meta data ayega...cuz single packet ata hai pura data mahi ata
    //isliye response ko json dena padta hai
    return res.json(); //return kara diya taki ispe fir se promise lga sake..cuz json method also returns a promise
  })
  .then(function(data){//jo return hoke aya use data naam de diya
    console.log(data); //jo array aya hai data name se hai

    manipulateDom(data); //toh yha niche jo function bnaya hai use call kar liya..data name se
  })

}


function manipulateDom(allthedata){ //response.data m jo bhi hai use allthedata m le liya
  //ek movie search karne baad dusri karte hai toh...uske niche hi aa jati hai dusri movie...
  //so pehle dom manipulate karne se pehle...we have to remove the already present movie
  //iske liye we have method callled first child..jise pta chal jata hai sabse pehla bachha 
  //agr 1 bhi child hai toh use delete karna hai
  while(list.firstChild){ //jab tak list ke andar firstChild hai tab tak
    list.firstChild.remove(); //list ke andar firstChild ko remove karte rehna hai...ek time baad sab remove ho jaynege..and while ki condition false ho jayegi..
  }

  //dom m kya karna hai basically..manipulate hi toh karna hai array ko
  for(let data of allthedata ){ //for loop se array pe iterate
    //image dikhana chah rahe hai...toh ek figure create kar lete hai...with the help of document.createElement
    let figure = document.createElement('figure'); //figure naam de diya. Fugure kya hai...ek html element
    //har element data naam ke iterator m hai...toh figure ke andar ye sab chize add kar sakte hai
    //figure ek html element hai toh usme image, h1, p...kuch bhi dal sakte hai
    //figure ke andar jake...uska innerHtml change kar sakte hai
    //img, h2 dal sakte hai...and img m src hota hai. Evaluate kar lenge...data ke andar show..show ke andar image..image medium m hai
    figure.innerHTML = `
      <img src= ${data.show.image.medium} />   
      <h2> Name: ${data.show.name} </h2>
      <h2> Language: ${data.show.language} </h2>
    `
    //once we get the entire figure toh ise kha dalna hai ? lisitem ke andar...list hai yha
    list.appendChild(figure); //figure ko append kar diya
  }
}

















