
//pehle input and then button select kar liya
let inputEl = document.querySelector("input");
let btns = document.querySelectorAll("button");

//now we want har button pe event lage...jise bhi click kiya jaye wo apna kaam kare..har button pe event
//console m btns type karenge and click we'll see nodelist..which is array
//toh for loop uspe
for(let button of btns){
  button.addEventListener("click", function(e){ //har button pe addEventListener
    //now we want jis button pe click kare uska text mil jaye..ex: 7 press to 7
    let btnText = e.target.innerText; //jo bhi button trigger/click ho rha hai uska target mil jaega...uska innerText nikal liya..store in a var
    // console.log(btnText)
    if(btnText === "AC"){ //AC pe click kare to khali hona chahiye
      inputEl.value= ""; //input element ki value khali 
    } 
    else if(btnText === "="){
      try{ //try m sara shi kaam
        //visit mdn to learn "eval" function
        inputEl.value = eval(inputEl.value) //eval kare input ki value ko...mtlb if i write 6*7 and then press = then it should get evaluated...aur dalna bhi input ki value ke andaar hi hai. 
      }
      catch(err){ //error wala kaam like 8-/ and = press kiya to error....error ko catch kar liya
        inputEl.value = "invalid" //error aa rha hoga to input ki value invalid hai
      }
      
      
    }
    else{ //agr koi aur value press kare to wo ajaye
      inputEl.value = inputEl.value + btnText; //input element ki value should be equal to input element + jo bhi button pe I'm clicking
    }
  })
}







