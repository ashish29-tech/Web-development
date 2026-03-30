
// let str = "Maverick Ashish";

// 1) length (property) --> no need to call
// let len = str.length;
// console.log(len);
        //or
// console.log(str.length);
// console.log(str.length()); //Wrong
      


// 2) .toUpperCase()..It's a method --> need to call it
// Strings in JavaScript are immutable (change nahi ho sakti). 
// toUpperCase() original string ko change nahi karta. Original string same hi rahegi.

// console.log(str);
//toUpperCase() → new string return karta hai
// let ans = str.toUpperCase();
// console.log(ans);
// console.log(str.toUpperCase());
// console.log(str);

//3) toLowerCase() method --> need to call it

// console.log(str);
// let ans = str.toLowerCase();
// console.log(ans);
// console.log(str);
 

//-----------------------------

// let str = "    Maverick Ashish    ";

//4)  trim() --> method
// trim() creates a new string. It does NOT change the original.
// console.log(str);
// console.log(str.length); //Spaces are counted here


// let trimmedStr = (str.trim()); //variable m daal diya
// console.log(trimmedStr); //Maverick Ashish
// console.log(str.length); //23 hi ayegi
// console.log(trimmedStr.length); //shuru and last ke spaced hta deta hai
// console.log(str.length); // Again original length

//--------------------------------------------
//5) includes() --> method......always return a boolean value
//  let str = "    Mverick Ashish    "; 


// let ans = str.includes("A") //True...cuz A hai
// let ans = str.includes("a") //false because case sensitive...A hai mgr small hai
// let ans = str.includes("Mverick")
// let ans = str.includes("Mver") 
// let ans = str.includes(" Mver") //True bcz Mverick m space hai na upar
// let ans = str.includes(" Mver ") //False bcz upar r ke baad i hai Mverick m
// let ans = str.includes("") //True bcoz empty to hamesha se thi na
// let ans = str.includes(" ") //True cuz spaces to har jgah hai na
// console.log(ans);


//---------------------------------------

//Chaining of methods and properties

// let str = "    Mverick Ashish    ";

// let ans = str.trim();
// let ans = str.trim().length; //Method ki chaining
// let and = str.trim().length;
// let ans = str.trim().toUpperCase();
// let ans = str.trim().toUpperCase().length;
// console.log(ans); 

