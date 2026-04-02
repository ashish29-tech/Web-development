//for loop
//while loop
//do-while
//


//By ChatGPT
// for(i=1; i<=10; i++){
//   console.log(i);
// }


// By Samarth sir
// for(let i =1; i<=10; i++){
//   console.log(i);
// }

//While loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//-------------FOR-OF LOOP-------------------

let arr = [10, 20, 30, 40, 50];
// for(let i =1; i<=10; i++){
//   console.log(i);
// }
//for of loop: Jitne bhi iterable items hote hai like..array, Linked List, Stack....unpe lagte hai for of loop.
// //for-of
// for(let systum of arr){ //systum => iterator name...i.e arr[i]...means element ko point kar rha na ki index ko. arr array ka name.
//      console.log(systum);   
// }

//-----------FOR-IN LOOP------------
// Objects pe use hona hai. Object ke case ma iterator key ko point karta hai.

let obj = { //obj: Object ka name hai
  english : 80,
  hindi : 99, 
  math : 30 
}
// //i ka naam subject rakh diya. 
// for(let subject in obj){
//   console.log(subject); 
// }

// for (let subject in obj){ //subject: variable name hai
//  console.log(subject); // subject, which is variable pointing to the key
  // console.log(obj[key]); //like arrays 
  // obj ke andar array ki trah.
  // console.log(obj[subject]); //value dega. Key ki jgah sybject ka use ho rha hai.
  // console.log(obj.subject); // undefined cuz subject naam ki key nai hai. .(Dot) operartor tab lagta hai jab andar ki chizo ko access karte hai.
  //  console.log(obj.first); //undefined Kyonki obj me first naam ki koi property hi nahi hai
  // console.log(obj.math); //30 cuz math naam ka object hai
  
// }

//------------------------------------------------------

//break-continue

// for(let item = 100; item>=90; item--){
//   if(item == 95){
//     break;
//   }
//   console.log(item)
// }

// for(let item = 10; item>=0; item--){
//   if(item == 5){
//     break;
//   }
//   console.log(item);
// }


// for(let item = 10; item>=0; item--){
//   if(item == 5){
//     continue; //5 nai ayega. Iteration ko aaage badha deta hai
//   }
//   console.log(item);
// }


// for(let items = 5; items>=0; items-- ){
//   if(items == 2){
//     continue;
//   }
//   console.log(items)
// }





