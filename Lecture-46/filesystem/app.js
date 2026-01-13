
//FileSystem
//Used for storing data. Earlier DB were not used predominantly. We were dependent on filesystem. 
//But there were several issues with filesystem. Major problem was data redundancy. That's why we had to switch to DB in order to have CRUD FUNCTIONALITY.
//Filesystem kha milta hai ? It's a type of module/package(piece of code jo kisi ne likha hai). So ise intall karna padega.
//When we install node.js...sath m filesystem ata hai...no need to install filesystem.

//Module: 3rd party code written by some baba. Jab use...use karna hota hai to use require karna hota hai...kuch-kuch ko install bhi karna padta hai.
// const fs = require('fs'); //filesystem(fs) ko require kar liya apne nodejs ki help se and name de diya fs. Jitni bhi functionalities/power hame filesystem deta hai use fs name se use kar payenge. Ye hame ek object deta hai...toh ham .(dot) notation lga sakte hai. Not compulsory that we'll get an object...sometimes...functions, string..etc...it's dependent on require kis chiz ko kar rhe hai.


//API/End point: Ek URL hota hai...jo data la kar deta hai. It has nothing to do with filesystem. 
//API URL ko hit karne ke tarike ko AJAX kehte hai. AJAX is a technique.

//Above is from last class thing.
//----------------------------------------------------------------------------
//----------------FROM HERE NEW CLASS NOTES AND CODES--------------------------

//If we have stopped using file system then what are we using now a days ? DB

//With the help of file system we need to show CRUD functionality.
//file system use karne ke liye we need to require it...
let fs = require('fs'); //fs jo require kiya this is an object

let data = "my name is Ashish Ranjan thanks alot"; //This is the data which I need to insert in my file. But do I have the file ? so we'll create a txt file where we'll store our data.

//file bna li abc.txt 
//create --> Create karne ke liye we have method...writefile(). This method is already present inside file system. We just need to use it.

// fs.writeFile('abc.txt' , data, {}, ()=>{}) //fs is an object which is giving me some method...one of them is writeFile(). Hover over this method and see it's accepting 4 arguments. 1st is kon si file ?. 2nd is data naam ka vaiable. 3rd thing is optional..we'll denote it by {}. 4th is callback function.

// fs.writeFile('abc.txt' , data, 
//   {//this entire object is optional. You can write or ignore it.
//     encoding: 'utf-8', //we use UTF 8 when it comes to web dev. Here Encoding is a property which is having a value utf-8.
//     flag:'w' //Yha write kar rahe hai isliye w flag...for reading we have r flag
//  },
//  (err)=>{ //Catches an error which comes in the picture
//   if(err){throw err} //if error toh throw kar do error
//   console.log('file written successfully') //if no error then
//  }
// )

//-----------------------------------------------
//Optional part ko comment kar diya
// fs.writeFile('abc.txt' , data, 
// //   {//this entire object is optional. You can write or ignore it.
// //     encoding: 'utf-8', //we use UTF 8 when it comes to web dev. Here Encoding is a property which is having a value utf-8.
// //     flag:'w' //Yha write kar rahe hai isliye w flag...for reading we have r flag
// //  },
//  (err)=>{ //Catches an error which comes in the picture
//   if(err){throw err} //if error toh throw kar do error
//   console.log('file written successfully') //if no error then
//  }
// )

//read--> Read ke liye readFile() method. We have 3 arguments here...hover and see. New file bna lete hai.

// fs.readFile('def.txt', {}, ()=>{}) //Hover and see it accepts 3 arg. Since we are reading the data that's why 3 argument and not 4 like in create,
// fs.readFile('def.txt', 
//   // { //This is optional part so we commented.
//   //   encoding:"utf-8",
//   //   flag: 'r' //flag yha read(r) hai
//   // },
//   (err, data)=>{ //Call back error accept karega..... read file se data read kar rahe hai...
//     if(err){throw err} //agr error hua to throw kar do
//     console.log(data); //if not then throw data. 
//     //terminal m ise run karenge...cd filesystem...node app.js....toh buffer data ayega...we are not able to read it but our system can. Jo chize nazar aa rahi hai they are in buffer memory.
//   }
// )

//---------------------------------------------------------------------
//Step 1 to improve....

// fs.readFile('def.txt', 
// // { //This is optional part so we commented.
// //   encoding:"utf-8",
// //   flag: 'r' //flag yha read(r) hai
// // },
// (err, data)=>{ //Call back error accept karega..
//   if(err){throw err} //agr error hua to throw kar do..
//   console.log(data.toString()); //data hota hai uske liye we have toString method...isse buffer data string m convert ho jayega. Use terminal now we can see the data in terminal.
//   //terminal m ise run karenge...cd filesystem...node app.js....toh buffer data ayega...we are not able to read it but our system can. Jo chize nazar aa rahi hai they are in buffer memory.
// }
// )

//---------------------------------------
//Step 2 to improve
//Prefer anyone either step 1..toString method or step 2 optional part encoding
// fs.readFile('def.txt', 
//   { //This is optional part so we commented.
//     encoding:"utf-8", //kya buffer data encoding ki wjah se apne aap string m convert ho jayega ? Yess
//     flag: 'r' //flag yha read(r) hai
//   },
//   (err, data)=>{ //Call back error accept karega..
//     if(err){throw err} //agr error hua to throw kar do
//     console.log(data); 
    
//   }
// )

//-----------------------------------------------------------------
//We have to update an existing data..
//update--> Update krne ke liye we have appendFile() method
//we have 4 arguments...
// fs.appendFile('abc.txt', ' bhaukaali', {}, ()=>{} ) //data ko txt m convert, data jise change karna hai, optional part, callback function...

fs.appendFile('abc.txt', ' bhaukaali', //abc file m changes honge
  //  { //This is optional isliye leave it

  //  }, 
   (err)=>{
    if(err){throw err} //if error aya to err 
    console.log("file edited successfully") //else console. Run terminal...file edited successfully ayega...and abc file m last m bhaukaali add ho jayega 
   } 
  )
























