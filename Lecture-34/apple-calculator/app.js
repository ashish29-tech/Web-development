
// //pehle input and then button select kar liya
// let inputEl = document.querySelector("input");
// let btns = document.querySelectorAll("button");

// //now we want har button pe event lage...jise bhi click kiya jaye wo apna kaam kare..har button pe event
// //console m btns type karenge and click we'll see nodelist..which is array
// //toh for loop uspe
// for(let button of btns){
//   button.addEventListener("click", function(e){ //har button pe addEventListener
//     //now we want jis button pe click kare uska text mil jaye..ex: 7 press to 7
//     let btnText = e.target.innerText; //jo bhi button trigger/click ho rha hai uska target mil jaega...uska innerText nikal liya..store in a var
//     // console.log(btnText)
//     if(btnText === "AC"){ //AC pe click kare to khali hona chahiye
//       inputEl.value= ""; //input element ki value khali 
//     } 
//     else if(btnText === "="){
//       try{ //try m sara shi kaam
//         //visit mdn to learn "eval" function
//         inputEl.value = eval(inputEl.value) //eval kare input ki value ko...mtlb if i write 6*7 and then press = then it should get evaluated...aur dalna bhi input ki value ke andaar hi hai. 
//       }
//       catch(err){ //error wala kaam like 8-/ and = press kiya to error....error ko catch kar liya
//         inputEl.value = "invalid" //error aa rha hoga to input ki value invalid hai
//       }
      
      
//     }
//     else{ //agr koi aur value press kare to wo ajaye
//       inputEl.value = inputEl.value + btnText; //input element ki value should be equal to input element + jo bhi button pe I'm clicking
//     }
//   })
// }


//practice

/*
  <div class="container">

    <input type="text">  <!-- 1 input chahiye hoga aur baki buttons -->
    
    <div class="button-grid"> <!--1 chahiye hoga button ka grid-->

      <button class="grey-button">AC</button> <!--5 row chahiye-->
      <button class="grey-button">**</button> <!--power-->
      <button class="grey-button">%</button>
      <button class="yellow-button">/</button>

      <button>7</button>
      <button>8</button> 
      <button>9</button>
      <button class="yellow-button">*</button>

      <button>4</button>
      <button>5</button> 
      <button>6</button>
      <button class="yellow-button">-</button>

      <button>1</button>
      <button>2</button> 
      <button>3</button>
      <button class="yellow-button">+</button>

      <button class="zero">0</button>
         <!-- <button>0</button>  --> 
      <button>.</button>
      <button class="yellow-button">=</button>

      </div>
  </div>
*/


//css

// *{
//   margin: 0;
//   padding: 0;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
// }

// body{
//   width: 100vw; /* view width */
//   height: 100vh; /* view height */
//   background-color: rgb(32, 33, 36);

// }

// .container{
//   width: 360px;
//   height: 90vh;
//   margin: 20px auto;

//   display: flex;
//   flex-direction: column; 
//   border: 5px solid rgb(186, 183, 183);
//   border-radius: 15px;
//   padding: 10px;
// }

/* button ke grid ko class di hai button-grid */
// .button-grid{
//   flex-grow: 2;
//   display: grid;
//   grid-template-rows: 1fr 1fr 1fr 1fr;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   gap: 5px;
// }

// input{
//   flex-grow: 1;
//   background-color: rgb(32, 33, 36);
//   color: white;
//   text-align: right;
//   font-size: 60px;
//   outline: none;
//   border: 0;
//   padding: 0px 16px;
//   border-radius: 15px;
// }

// button{
//   border-radius: 50%;
//   width: 75%;
//   height: 90%;
//   border: 0;
//   font-size: 24px;
//   cursor: pointer;
//   background-color: #505050;
//   color: white;
//   place-self: center;
// }

// .grey-button{
//   background-color: rgb(183, 178, 178);
//   color: black;
// }

// .yellow-button{
//   background-color: rgb(255, 158, 0);

// }

// .zero{
//   width: 88%;
//   grid-column: span 2;
//   border-radius: 80px;
// }




