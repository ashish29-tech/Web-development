//------SYNTAX----------
//function definition/declaration
// function sum () {

// }

// sum(); //functional calling

//------------------------------
    

// function sum() {
//    let num1 = 10;
//    let num2 = 30;
//    console.log(num1 + num2);
//    console.log(num1 + num2 + num3); //error bcoz num3 isn't defined in this finction
// }

// sum();


//-----------------

// function sum(num3) { //parameter...argument wala 50 yha point karega. 50 will be pointing to num3
//      let num1 = 10;
//      let num2 = 30;
//      console.log(num1 + num2 + num3); // 90
// }

// sum(50); //argument

//---------------
//Parameterised functions
// function sum(n1, n2, n3) { //parameter. 
//   let num1 = n1; //n1 ki value num1 m assign kara di
//   let num2 = n2;
//   console.log(num1 + num2 + n3); // 90
// }

// sum(10, 30, 50);

// ----------------------

//2 args diye hai but 3 parameter diye hai...
// function sum(n1, n2, n3) { //parameter. 
//   let num1 = n1;
//   let num2 = n2;
//   console.log(num1 + num2 + n3); //NaN bcoz something is there is n3 but we don't know...n3 could be num, string etc
// }

// sum(10, 30); //yyha se n3 nai bhej rahe.

//-----------------------
// Default parameterised functions...n3 ke andar default value dedi.
// function sum(n1, n2, n3=70) { //parameter. 
//   let num1 = n1;
//   let num2 = n2;
//   console.log(num1 + num2 + n3); //
// }

// sum(10, 30);

//-------------------------------------------------------------------------
//Argumented value will win rather than default parameter
// function sum(n1, n2, n3=70) { //parameter. 
//   let num1 = n1;
//   let num2 = n2;
//   console.log(num1 + num2 + n3); //
// }

// sum(10, 30, 60); //Argument value domainate karegi than default val(upar parameter jo diya hai)...

// -----------------------------------------------------------------------
//Function by default definition...fn are used to return something

// function sum(num2) { //sum ke andar ek variable le iya hai num2
//   let num1 = 30;
//   let ans= num1 + num2;
//   return ans;
// }

// let final = sum(75); //sbse pehle ye line chalegi..call hoga cuz funtion until called won't run. 
                        // Function return hoke yahi jayega jha se call hua hai.
                        //return yha hoga and store hoga final m
// console.log(final);
//          //or
// console.log(sum(75));

//------------------------------

// function sum(num2) { //sum ke andar ek variable le iya hai num2
//   let num1 = 30;
//   let ans= num1 + num2;
//   return ans;
//   return 2; //ignore karega...cuz already return use kar chuke hai
//   console.log("ashish"); //won't run cuz in above line return
  
// }

// let final = sum(75);
// console.log(final);



//----------------------------------------------------------------------------------

function sum(num2){
  let num1 = 10
  let ans = num1 + num2
  return ans
}

console.log(sum(50));