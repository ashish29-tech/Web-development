// Creating object
let marks = {
  dsa : 55,
  web : 85,
  ml : 67,
  totalMarks : function (){
    return 55 + 85 + 67
  }
}

console.log(marks);
console.log(marks.totalMarks()); //run kiya totalMarks function ko

//---------------------------------------------

// let marks = {
//   dsa : 55,
//   web : 85,
//   ml : 67,
//   totaMarks : function (fine){ //argument ka naam fine rakh diya
//     return 55 + 85 + 67 - fine
//   }
// }

// // console.log(marks);
// console.log(marks.totaMarks(50)); //207 - 50 = 157. Argument bheja 50.


//----------------------------------

// let marks = {
//   dsa : 55,
//   web : 85,
//   ml : 67,
//   totaMarks : function (fine){
//       //  return this.dsa + 85 + 67 - fine
//     return this.dsa + this.web + this.ml - fine //jis method m use hua hai uske object ko point karta hai
//   }
// }

// console.log(marks);
// console.log(marks.totaMarks(50)); //207 - 50 = 157







